import { Router } from 'express';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// In-memory store (replace with DB in production)
const publishers = new Map();

// Publisher schema
const publisherSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  website: z.string().url().optional(),
  vertical: z.enum(['dating', 'productivity', 'gaming', 'education'])
});

// POST /api/v1/publishers/register - Register a new publisher
router.post('/register', async (req, res) => {
  try {
    const body = publisherSchema.parse(req.body);
    
    const id = uuidv4();
    const apiKey = `pk_${uuidv4().replace(/-/g, '')}`;
    
    const publisher = {
      id,
      ...body,
      apiKey,
      status: 'active',
      createdAt: new Date().toISOString()
    };
    
    publishers.set(id, publisher);
    
    res.status(201).json({
      id,
      apiKey,
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

// GET /api/v1/publishers/:id - Get publisher details
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const publisher = publishers.get(id);
  
  if (!publisher) {
    return res.status(404).json({ error: 'Publisher not found' });
  }
  
  res.json(publisher);
});

// GET /api/v1/publishers/:id/stats - Get publisher stats
router.get('/:id/stats', async (req, res) => {
  const { id } = req.params;
  const publisher = publishers.get(id);
  
  if (!publisher) {
    return res.status(404).json({ error: 'Publisher not found' });
  }
  
  // Return mock stats (replace with DB queries)
  res.json({
    publisherId: id,
    totalImpressions: 0,
    totalClicks: 0,
    revenue: 0,
    ctr: 0
  });
});

// PUT /api/v1/publishers/:id/pause - Pause publisher
router.put('/:id/pause', async (req, res) => {
  const { id } = req.params;
  const publisher = publishers.get(id);
  
  if (!publisher) {
    return res.status(404).json({ error: 'Publisher not found' });
  }
  
  publisher.status = 'paused';
  publishers.set(id, publisher);
  
  res.json({ success: true, status: 'paused' });
});

export { router as publisherRouter };