/**
 * Ad Creative Generator
 * 
 * Generates native-style ad copy based on vertical config
 */

import { VerticalConfig } from '../config/verticals';

export interface CreativeTemplate {
  headline: string;
  body: string;
  cta: string;
}

/**
 * Generate ad creative based on vertical and user prompt
 */
export function generateAdCreative(
  vertical: VerticalConfig,
  prompt: string,
  brandName: string = '[Brand]'
): CreativeTemplate {
  const promptLower = prompt.toLowerCase();
  
  // Detect intent from prompt
  const intent = detectIntent(promptLower, vertical);
  
  // Select appropriate CTA
  const cta = vertical.creatives.cta[Math.floor(Math.random() * vertical.creatives.creatives.cta.length)];
  
  // Generate headline based on intent
  const headline = generateHeadline(intent, brandName, vertical);
  
  // Generate body based on intent
  const body = generateBody(intent, brandName, vertical);
  
  return {
    headline: truncate(headline, 40),
    body: truncate(body, vertical.creatives.maxLength),
    cta
  };
}

/**
 * Detect user intent from prompt
 */
function detectIntent(prompt: string, vertical: VerticalConfig): string {
  const intents = {
    problem: ['how to', 'tips', 'help', 'advice', 'improve', 'better'],
    comparison: ['better', 'alternative', 'vs', 'compare', 'versus'],
    discovery: ['best', 'top', 'recommend', 'suggest', 'find'],
    learning: ['what is', 'explain', 'learn', 'understand', 'know'],
    action: ['try', 'start', 'use', 'get', 'download']
  };
  
  for (const [intentName, keywords] of Object.entries(intents)) {
    if (keywords.some(kw => prompt.includes(kw))) {
      return intentName;
    }
  }
  
  return 'general';
}

/**
 * Generate headline based on intent
 */
function generateHeadline(intent: string, brand: string, vertical: VerticalConfig): string {
  const templates: Record<string, string[]> = {
    problem: [
      `解決 your ${vertical.slug} struggles with ${brand}`,
      `${brand}: Your ${vertical.slug} problems, solved`,
      `Stop struggling with ${vertical.slug}. Try ${brand}`
    ],
    comparison: [
      `Better than alternatives: ${brand}`,
      `Why users choose ${brand} over competitors`,
      `The ${vertical.slug} solution that actually works`
    ],
    discovery: [
      `The best ${vertical.slug} tool: ${brand}`,
      `Top-rated ${vertical.slug} app - ${brand}`,
      `Discover ${brand}: Rated 4.9★`
    ],
    learning: [
      `Learn about ${vertical.slug} with ${brand}`,
      `${brand}: Your ${vertical.slug} guide`,
      `Everything you need to know about ${vertical.slug}`
    ],
    action: [
      `Start with ${brand} today`,
      `Try ${brand} - free`,
      `Get started with ${brand}`
    ],
    general: [
      `${brand}: The smarter way`,
      `Try ${brand} risk-free`,
      `Discover ${brand} now`
    ]
  };
  
  const options = templates[intent] || templates.general;
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Generate body based on intent
 */
function generateBody(intent: string, brand: string, vertical: VerticalConfig): string {
  const templates: Record<string, string[]> = {
    problem: [
      `Having trouble with ${vertical.slug}? ${brand} helps you overcome challenges with AI-powered solutions.`,
      `Don't let ${vertical.slug} issues hold you back. ${brand} provides personalized guidance.`
    ],
    comparison: [
      `Join 10,000+ users who switched to ${brand}. See why we're rated 4.9★.`,
      `${brand} vs others - See the difference AI makes. First 7 days free.`
    ],
    discovery: [
      `Rated 4.9★ by 10,000+ users. ${brand} is the #1 ${vertical.slug} solution.`,
      `Discover why ${brand} is the most popular ${vertical.slug} app.`
    ],
    learning: [
      `Learn ${vertical.slug} the smart way with ${brand}'s AI tutor. Personalized to you.`,
      `${brand} makes understanding ${vertical.slug} easy. Try free today.`
    ],
    action: [
      `Start your journey with ${brand}. 7-day free trial, no credit card.`,
      `Get ${brand} now and transform your ${vertical.slug} experience.`
    ],
    general: [
      `Join thousands happy users. ${brand} - the smart ${vertical.slug} companion.`,
      `${brand} helps you achieve more. Start free trial today.`
    ]
  };
  
  const options = templates[intent] || templates.general;
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Truncate text to max length
 */
function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

export default generateAdCreative;