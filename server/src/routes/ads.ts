import { Router } from 'express';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { shouldShowAd, registerAd, recordImpression, recordClick, getAdAnalytics, getAdsByVertical } from '../services/ad-server.js';

const router = Router();

// Validation schemas
const adRequestSchema = z.object({
  prompt: z.string().min(1).max(2000),
  response: z.string().optional(),
  userId: z.string().optional(),
  sessionId: z.string(),
  appId: z.string(),
  vertical: z.enum(['dating', 'productivity', 'gaming', 'education']),
  country: z.string().optional(),
  userAgent: z.string().optional()
});

// GET /api/v1/ads/should-show - Main ad matching endpoint
router.post('/should-show', async (req, res) => {
  try {
    const body = adRequestSchema.parse(req.body);
    
    const result = await shouldShowAd({
      ...body,
      userId: body.userId || undefined
    });

    // Record impression if ad shown
    if (result.shouldShow && result.ad) {
      recordImpression({
        adId: result.ad.id,
        appId: body.appId,
        userId: body.userId,
        sessionId: body.sessionId,
        timestamp: new Date()
      });
    }

    res.json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid request', details: error.errors });
    }
    throw error;
  }
});

// POST /api/v1/ads/:id/click - Record ad click
router.post('/:id/click', async (req, res) => {
  try {
    const { id } = req.params;
    const { sessionId, userId, appId } = req.body;

    if (!sessionId || !appId) {
      return res.status(400).json({ error: 'sessionId and appId required' });
    }

    recordClick({
      adId: id,
      appId,
      userId,
      sessionId,
      timestamp: new Date()
    });

    // Return the ad's landing URL for redirect
    res.json({ success: true });
  } catch (error) {
    throw error;
  }
});

// GET /api/v1/ads/:id/analytics - Get ad performance
router.get('/:id/analytics', async (req, res) => {
  try {
    const { id } = req.params;
    const analytics = getAdAnalytics(id);
    res.json(analytics);
  } catch (error) {
    throw error;
  }
});

// GET /api/v1/ads/verticals - List available verticals
router.get('/verticals', (req, res) => {
  res.json([
    { slug: 'dating', name: 'Dating & Relationships', cpc: 0.50 },
    { slug: 'productivity', name: 'Productivity & Work', cpc: 0.25 },
    { slug: 'gaming', name: 'Gaming & Entertainment', cpc: 0.15 },
    { slug: 'education', name: 'Education & Learning', cpc: 0.30 }
  ]);
});

export { router as adsRouter };