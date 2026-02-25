/**
 * Vertical Configuration System
 * 
 * Each vertical is defined as a configuration object.
 * To add a new vertical, simply add a new config or extend this object.
 */

export interface VerticalConfig {
  name: string;
  slug: string;
  
  // Pricing
  cpc: number;      // Cost per click
  cpm: number;      // Cost per 1000 impressions
  cpa: number;      // Cost per action
  
  // Keywords for targeting
  keywords: {
    positive: string[];
    negative: string[];
  };
  
  // Creative settings
  creatives: {
    tone: 'supportive' | 'professional' | 'fun' | 'educational';
    cta: string[];
    maxLength: number;
  };
  
  // Targeting rules
  targeting: {
    minAge?: number;
    allowedCountries: string[];
    blockedCountries: string[];
  };
  
  // Compliance
  compliance: {
    disclosure: boolean;
    scamProtection: 'strict' | 'moderate' | 'basic';
  };
}

export const verticals: Record<string, VerticalConfig> = {
  dating: {
    name: 'Dating & Relationships',
    slug: 'dating',
    cpc: 0.50,
    cpm: 2.00,
    cpa: 1.50,
    keywords: {
      positive: ['dating', 'relationship', 'romance', 'match', 'partner', 'love', 'crush', 'first date', 'online dating'],
      negative: ['divorce', 'breakup', 'sad', 'lonely']
    },
    creatives: {
      tone: 'supportive',
      cta: ['Try Free', 'Download Now', 'Start Dating', 'Find Your Match'],
      maxLength: 120
    },
    targeting: {
      minAge: 18,
      allowedCountries: ['US', 'UK', 'CA', 'AU', 'DE', 'FR', 'ES', 'IT'],
      blockedCountries: []
    },
    compliance: {
      disclosure: true,
      scamProtection: 'strict'
    }
  },
  
  productivity: {
    name: 'Productivity & Work',
    slug: 'productivity',
    cpc: 0.25,
    cpm: 0.75,
    cpa: 0.50,
    keywords: {
      positive: ['productivity', 'work', 'task', 'organize', 'efficiency', 'time management', 'focus', 'remote work'],
      negative: ['procrastination', 'lazy', 'unmotivated']
    },
    creatives: {
      tone: 'professional',
      cta: ['Try Free', 'Start Free Trial', 'Get Organized', 'Boost Productivity'],
      maxLength: 100
    },
    targeting: {
      allowedCountries: ['US', 'UK', 'CA', 'AU', 'DE', 'FR', 'JP', 'IN'],
      blockedCountries: []
    },
    compliance: {
      disclosure: true,
      scamProtection: 'moderate'
    }
  },
  
  gaming: {
    name: 'Gaming & Entertainment',
    slug: 'gaming',
    cpc: 0.15,
    cpm: 0.50,
    cpa: 0.25,
    keywords: {
      positive: ['game', 'gaming', 'play', 'level', 'win', 'tips', 'strategy'],
      negative: ['boring', 'lag', 'crash', 'bug']
    },
    creatives: {
      tone: 'fun',
      cta: ['Play Now', 'Download Free', 'Get Premium', 'Unlock Features'],
      maxLength: 80
    },
    targeting: {
      minAge: 13,
      allowedCountries: ['US', 'UK', 'KR', 'JP', 'BR', 'RU', 'IN'],
      blockedCountries: []
    },
    compliance: {
      disclosure: true,
      scamProtection: 'basic'
    }
  },
  
  education: {
    name: 'Education & Learning',
    slug: 'education',
    cpc: 0.30,
    cpm: 1.00,
    cpa: 0.75,
    keywords: {
      positive: ['learn', 'study', 'education', 'course', 'tutorial', 'homework', 'exam', 'university', 'language'],
      negative: ['cheat', 'exam cheat']
    },
    creatives: {
      tone: 'educational',
      cta: ['Start Learning', 'Try Free', 'Enroll Now', 'Get Certified'],
      maxLength: 100
    },
    targeting: {
      minAge: 13,
      allowedCountries: ['US', 'UK', 'CA', 'AU', 'IN', 'DE', 'FR'],
      blockedCountries: []
    },
    compliance: {
      disclosure: true,
      scamProtection: 'strict'
    }
  }
};

/**
 * Get vertical configuration by slug
 */
export function getVertical(slug: string): VerticalConfig | undefined {
  return verticals[slug.toLowerCase()];
}

/**
 * Get all vertical slugs
 */
export function getAllVerticals(): string[] {
  return Object.keys(verticals);
}

export default verticals;