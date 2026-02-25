import { Router } from 'express';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// In-memory store (replace with DB in production)
const advertisers = new Map();
const campaigns = new Map();

// Advertiser schema
const advertiserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  company: z.string().optional()
});

// Campaign schema
const campaignSchema = z.object({
  advertiserId: z.string(),
  name: z.string().min(1).max(100),
  vertical: z.enum(['dating', 'productivity', 'gaming', 'education']),
  keywords: z.array(z.string()),
  dailyBudget: z.number().positive(),
  totalBudget: z.number().positive(),
  cta: z.string().max(50),
  headline: z.string().max(60),
  body: z.string().max(120),
  landingUrl: z.string().url()
});

// POST /api/v1/advertisers/register - Register advertiser
router.post('/register', async (req, res) => {
  try {
    const body = advertiserSchema.parse(req.body);
    
    const id = uuidv4();
    
    const advertiser = {
      id,
      ...body,
      status: 'active',
      createdAt: new Date().toISOString()
    };
    
    advertisers.set(id, advertiser);
    
    res.status(201).json({
      id,
      name: body.name,
      status: 'active'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid request', details: error.errors });
    }
    throw error;
  }
});

// POST /api/v1/advertisers/campaigns - Create campaign
router.post('/campaigns', async (req, res) => {
  try {
    const body = campaignSchema.parse(req.body);
    
    // Verify advertiser exists
    const advertiser = advertisers.get(body.advertiserId);
    if (!advertiser) {
      return res.status(404).json({ error: 'Advertiser not found' });
    }
    
    const id = uuidv4();
    const campaign = {
      id,
      ...body,
      status: 'active',
      dailySpent: 0,
      totalSpent: 0,
      impressions: 0,
      clicks: 0,
      createdAt: new Date().toISOString()
    };
    
    campaigns.set(id, campaign);
    
    res.status(201).json(campaign);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid request', details: error.errors });
    }
    throw error;
  }
});

// GET /api/v1/advertisers/:id/campaigns - List campaigns
router.get('/:id/campaigns', async (req, res) => {
  const { id } = req.params;
  
  const advertiserCampaigns = Array.from(campaigns.values())
    .filter(c => c.advertiserId === id);
  
  res.json(advertiserCampaigns);
});

// GET /api/v1/advertisers/campaigns/:id - Get campaign details
router.get('/campaigns/:id', async (req, res) => {
  const { id } = req.params;
  const campaign = campaigns.get(id);
  
  if (!campaign) {
    return res.status(404).json({ error: 'Campaign not found' });
  }
  
  res.json(campaign);
});

// PUT /api/v1/advertisers/campaigns/:id/pause - Pause campaign
router.put('/campaigns/:id/pause', async (req, res) => {
  const { id } = req.params;
  const campaign = campaigns.get(id);
  
  if (!campaign) {
    return res.status(404).json({ error: 'Campaign not found' });
  }
  
  campaign.status = 'paused';
  campaigns.set(id, campaign);
  
  res.json({ success: true, status: 'paused' });
});

export { router as advertiserRouter };