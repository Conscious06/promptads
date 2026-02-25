# Publisher SDK Integration Guide

This guide shows how to integrate PromptAds into your LLM application.

## Quick Start

### 1. Install the SDK

```bash
npm install @promptads/sdk-web
# or
yarn add @promptads/sdk-web
```

### 2. Initialize the SDK

```javascript
import { PromptAds } from '@promptads/sdk-web';

const ads = PromptAds.init({
  appId: 'your-app-id',
  apiKey: 'pk_live_xxx',
  vertical: 'dating' // or: productivity, gaming, education
});
```

### 3. Check for Ads

Before showing the LLM response to the user, check if an ad should be displayed:

```javascript
const result = await ads.shouldShowAd({
  prompt: userMessage,
  response: llmResponse,
  userId: user.id
});

if (result.shouldShow && result.ad) {
  // Inject ad into response
  finalResponse = llmResponse + '\n\n' + formatAd(result.ad);
}
```

### 4. Track Clicks

When users click on ads:

```javascript
document.querySelector('.ad-cta').addEventListener('click', () => {
  ads.recordClick(ad.id);
  window.open(ad.landingUrl, '_blank');
});
```

## Configuration Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `appId` | string | ✅ | Your app ID from dashboard |
| `apiKey` | string | ✅ | Your API key |
| `vertical` | string | ✅ | Ad vertical: dating, productivity, gaming, education |
| `apiUrl` | string | ❌ | Custom API URL (for enterprise) |
| `maxAdsPerDay` | number | ❌ | Max ads per user per day (default: 5) |
| `position` | string | ❌ | inline, post-prompt, recommendation |
| `onAdDisplay` | function | ❌ | Callback when ad is displayed |
| `onAdClick` | function | ❌ | Callback when ad is clicked |
| `onError` | function | ❌ | Callback on error |

## Supported Verticals

| Vertical | Best For | CPC |
|----------|----------|-----|
| `dating` | Dating apps, relationship advice | $0.50 |
| `productivity` | Task apps, AI assistants | $0.25 |
| `gaming` | Game guides, strategy apps | $0.15 |
| `education` | Learning apps, tutors | $0.30 |

## React Integration

```jsx
import { PromptAds } from '@promptads/sdk-web';
import { useState, useEffect } from 'react';

function Chat() {
  const [ads] = useState(() => PromptAds.init({
    appId: 'your-app-id',
    apiKey: 'pk_live_xxx',
    vertical: 'productivity'
  }));

  const sendMessage = async (prompt) => {
    const response = await callLLM(prompt);
    
    const adResult = await ads.shouldShowAd({ prompt, response });
    
    if (adResult.shouldShow && adResult.ad) {
      return response + '\n\n' + adResult.ad.body;
    }
    
    return response;
  };
  
  // ... rest of component
}
```

## Next.js Integration

```jsx
// app/api/chat/route.ts
import { PromptAds } from '@promptads/sdk-web';

const ads = PromptAds.init({
  appId: process.env.PROMPTADS_APP_ID,
  apiKey: process.env.PROMPTADS_API_KEY,
  vertical: 'dating'
});

export async function POST(req) {
  const { prompt } = await req.json();
  
  const llmResponse = await callOpenAI(prompt);
  
  const adResult = await ads.shouldShowAd({ prompt, response: llmResponse });
  
  let finalResponse = llmResponse;
  if (adResult.shouldShow && adResult.ad) {
    finalResponse += `\n\n---\n💡 ${adResult.ad.headline}\n${adResult.ad.body}`;
  }
  
  return Response.json({ response: finalResponse });
}
```

## Troubleshooting

### No ads showing

1. Check your app is approved in the dashboard
2. Verify API key is correct
3. Check vertical is supported
4. Ensure daily limit hasn't been reached

### Getting errors

Pass an `onError` callback to see error details:

```javascript
const ads = PromptAds.init({
  // ... config
  onError: (error) => console.error('PromptAds Error:', error)
});
```

## Revenue Share

Publishers receive **70%** of ad revenue. Payments are made monthly via Stripe or Wire transfer.

Minimum payout: $50