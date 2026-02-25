# PromptAds Server

Backend API for the PromptAds advertising network.

## Quick Start

### Using Docker

```bash
# Build and run
docker-compose up --build

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f api

# Stop
docker-compose down
```

### Local Development

```bash
cd server
npm install
npm run dev
```

The API will be available at http://localhost:3000

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 3000 |
| NODE_ENV | Environment | development |
| CORS_ORIGIN | Allowed CORS origins | * |

## API Endpoints

### Ads
- `POST /api/v1/ads/should-show` - Get ad for prompt
- `POST /api/v1/ads/:id/click` - Record click
- `GET /api/v1/ads/:id/analytics` - Get ad stats
- `GET /api/v1/ads/verticals` - List verticals

### Publishers
- `POST /api/v1/publishers/register` - Register publisher
- `GET /api/v1/publishers/:id` - Get publisher
- `GET /api/v1/publishers/:id/stats` - Get stats
- `PUT /api/v1/publishers/:id/pause` - Pause publisher

### Advertisers
- `POST /api/v1/advertisers/register` - Register advertiser
- `POST /api/v1/advertisers/campaigns` - Create campaign
- `GET /api/v1/advertisers/:id/campaigns` - List campaigns
- `PUT /api/v1/advertisers/campaigns/:id/pause` - Pause campaign

### Analytics
- `GET /api/v1/analytics/overview` - Dashboard overview
- `GET /api/v1/analytics/publishers/:id` - Publisher analytics
- `GET /api/v1/analytics/advertisers/:id` - Advertiser analytics
- `GET /api/v1/analytics/campaigns/:id` - Campaign analytics

## Example Request

```bash
# Get ad for a dating question
curl -X POST http://localhost:3000/api/v1/ads/should-show \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "How do I start a conversation on a first date?",
    "sessionId": "sess_123",
    "appId": "my-app-001",
    "vertical": "dating"
  }'
```

## Production Deployment

For production, use the included docker-compose.yml with:
- PostgreSQL for data persistence
- Redis for caching and rate limiting
- Environment variables for secrets