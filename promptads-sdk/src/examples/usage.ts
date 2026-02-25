/**
 * Example: Integrating PromptAds into an LLM Application
 * 
 * This example shows how to integrate ads into a simple chat application.
 */

import { PromptAds } from '../web';

// ============================================
// Example 1: Simple Integration
// ============================================

async function simpleExample() {
  // Initialize the SDK
  const ads = PromptAds.init({
    appId: 'my-dating-app-001',
    apiKey: 'pk_live_abc123',
    vertical: 'dating',
    maxAdsPerDay: 3,
    position: 'inline'
  });

  // Simulated LLM call
  const userPrompt = 'How do I start a conversation on a first date?';
  const llmResponse = 'Start with open-ended questions about their interests...';

  // Check if we should show an ad
  const result = await ads.shouldShowAd({
    prompt: userPrompt,
    response: llmResponse,
    userId: 'user-123'
  });

  if (result.shouldShow && result.ad) {
    // Inject ad into response
    const finalResponse = `
${llmResponse}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 ${result.ad.headline}
${result.ad.body}

👉 ${result.ad.cta}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;
    
    console.log(finalResponse);
    
    // Track click if user clicks
    // (attach click handler to your CTA button)
    document.querySelector('.ad-cta')?.addEventListener('click', () => {
      ads.recordClick(result.ad!.id);
      window.open(result.ad!.landingUrl, '_blank');
    });
  }
}

// ============================================
// Example 2: Full Chat Application
// ============================================

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  hasAd?: boolean;
}

class ChatApp {
  private ads: PromptAds;
  private messages: Message[] = [];
  
  constructor() {
    this.ads = PromptAds.init({
      appId: 'my-app-id',
      apiKey: 'pk_live_xxx',
      vertical: 'productivity',
      maxAdsPerDay: 5,
      onAdClick: (ad) => {
        console.log('Ad clicked:', ad.headline);
      }
    });
  }
  
  async sendMessage(prompt: string): Promise<string> {
    // Add user message
    this.messages.push({
      id: this.generateId(),
      role: 'user',
      content: prompt
    });
    
    // Call your LLM
    const llmResponse = await this.callLLM(prompt);
    
    // Check for ads
    const adResult = await this.ads.shouldShowAd({
      prompt,
      response: llmResponse,
      userId: 'current-user'
    });
    
    let finalContent = llmResponse;
    
    if (adResult.shouldShow && adResult.ad) {
      // Format ad nicely
      finalContent += `
      
---
💡 **${adResult.ad.headline}**
${adResult.ad.body}
[${adResult.ad.cta}](${adResult.ad.landingUrl})`;
    }
    
    // Add assistant message
    this.messages.push({
      id: this.generateId(),
      role: 'assistant',
      content: finalContent,
      hasAd: adResult.shouldShow
    });
    
    return finalContent;
  }
  
  private async callLLM(prompt: string): Promise<string> {
    // Replace with your actual LLM call
    return `Here's my response to: "${prompt}"`;
  }
  
  private generateId(): string {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

// ============================================
// Example 3: React Component
// ============================================

/*
import React, { useState } from 'react';
import { PromptAds } from '@promptads/sdk-web';

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  const ads = PromptAds.init({
    appId: 'react-chat-app',
    apiKey: 'pk_live_xxx',
    vertical: 'dating'
  });
  
  const handleSend = async () => {
    const response = await sendToLLM(input);
    
    const adResult = await ads.shouldShowAd({
      prompt: input,
      response
    });
    
    if (adResult.shouldShow && adResult.ad) {
      response += `\n\n💡 ${adResult.ad.headline}\n${adResult.ad.body}`;
    }
    
    setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: response }]);
  };
  
  return (
    <div>
      {messages.map(m => (
        <div className={m.role}>{m.content}</div>
      ))}
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
*/

// Run examples
simpleExample();