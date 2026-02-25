# PromptAds 💰

**AI-native advertising network for LLM applications.**

PromptAds enables independent LLM apps to monetize through native, context-aware advertisements. Publishers integrate our SDK, and advertisers reach users at the perfect moment within AI conversations.

![PromptAds](https://img.shields.io/badge/Version-0.1.0-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## Why PromptAds?

| Feature | Benefit |
|---------|---------|
| **Native Integration** | Ads appear naturally within LLM responses |
| **High CTR** | 3-10% CTR (10-50x traditional banner) |
| **Vertical-Agnostic** | Easy to add new verticals via config |
| **Publisher-First** | 70% revenue share |
| **Real-time Targeting** | Context-aware ad matching |

## Supported Verticals

- 💕 **Dating** - Dating apps, relationship advice
- 💼 **Productivity** - Task apps, AI assistants, work tools
- 🎮 **Gaming** - Game guides, strategy, entertainment
- 🎓 **Education** - Learning apps, tutors, courses

## Quick Start

### For Publishers

```javascript
import { PromptAds } from '@promptads/sdk-web';

const ads = PromptAds.init({
  appId: 'your-app-id',
  apiKey: 'pk_live_xxx',
  vertical: 'dating'
});

// Before showing LLM response
const result = await ads.shouldShowAd({
  prompt: userMessage,
  response: llmResponse,
  userId: user.id
});

if (result.shouldShow) {
  // Inject ad into response
  finalResponse = llmResponse + '\n\n' + result.ad.body;
}
```

### For Advertisers

1. Sign up at [promptads.com](https://promptads.com)
2. Create campaign with your ad creative
3. Set budget and targeting
4. Monitor performance in dashboard

## Architecture

```
┌─────────────────────────────────────────────────────┐
│               PromptAds Platform                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │         Core Engine (Vertical-Agnostic)     │   │
│  │  • Ad Server    • Bidding Engine            │   │
│  │  • Analytics    • Fraud Detection           │   │
│  └─────────────────────────────────────────────┘   │
│                        │                            │
│  ┌─────────────────────────────────────────────┐   │
│  │         Vertical Configs (JSON/TS)          │   │
│  │  Dating | Productivity | Gaming | Education │   │
│  └─────────────────────────────────────────────┘   │
│                        │                            │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    │
│  │   SDK    │    │ Dashboard│    │  Ad      │    │
│  │  (Web)   │    │(Advertiser│    │ Server   │    │
│  │RN/Swift │    │ )        │    │          │    │
│  └──────────┘    └──────────┘    └──────────┘    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Project Structure

```
promptads/
├── promptads-core/         # Core ad server engine
│   ├── src/
│   │   ├── config/        # Vertical configurations
│   │   ├── core/          # Ad matching, serving
│   │   ├── services/      # Fraud detection
│   │   └── utils/         # Creative generator
│   └── package.json
│
├── promptads-sdk/          # Publisher SDK
│   ├── src/
│   │   ├── web/           # Web SDK
│   │   ├── react-native/  # React Native SDK (planned)
│   │   └── examples/      # Usage examples
│   └── package.json
│
├── promptads-dashboard/    # Advertiser dashboard (planned)
│
└── docs/                   # Documentation
```

## Documentation

- [Publisher SDK Guide](docs/publisher-sdk.md)
- [Advertiser Guide](docs/advertiser-guide.md) *(coming soon)*
- [API Reference](docs/api-reference.md) *(coming soon)*
- [Vertical Configuration](docs/verticals.md)

## Revenue Model

| Model | Publisher Share | Network Share |
|-------|-----------------|---------------|
| Revenue Share | **70%** | 30% |
| CPM | $0.50-2.00 | - |
| CPA | $0.25-1.50 | - |

## Tech Stack

- **Core**: Node.js, TypeScript
- **Database**: PostgreSQL, Redis
- **SDK**: TypeScript, React Native (planned)
- **Infrastructure**: Kubernetes, Docker

## Roadmap

- [x] Core ad server
- [x] Web SDK
- [x] 4 verticals (Dating, Productivity, Gaming, Education)
- [ ] React Native SDK
- [ ] Advertiser dashboard
- [ ] iOS/Android SDK
- [ ] More verticals (Finance, Health)
- [ ] Real-time bidding

## Contributing

Contributions welcome! Please read our [Contributing Guide](CONTRIBUTING.md).

## License

MIT © PromptAds

## Contact

- Website: [promptads.com](https://promptads.com)
- Email: hello@promptads.com