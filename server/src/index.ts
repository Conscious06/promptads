import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import { adsRouter } from './routes/ads.js';
import { publisherRouter } from './routes/publishers.js';
import { advertiserRouter } from './routes/advertisers.js';
import { analyticsRouter } from './routes/analytics.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/v1/ads', adsRouter);
app.use('/api/v1/publishers', publisherRouter);
app.use('/api/v1/advertisers', advertiserRouter);
app.use('/api/v1/analytics', analyticsRouter);

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 PromptAds API running on port ${PORT}`);
});

export default app;