'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Sparkles, ArrowRight } from 'lucide-react';

interface StickyTrialBannerProps {
  moduleName: string;
  productUrl: string;
  trialDuration?: string;
}

const StickyTrialBanner = ({ 
  moduleName, 
  productUrl, 
  trialDuration = '14 days'
}: StickyTrialBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-[#60a5fa] via-[#10b981] to-[#22d3ee] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Left side - Message */}
            <div className="flex items-center gap-3 flex-1 min-w-[200px]">
              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">
                  Try {moduleName} free for {trialDuration}
                </p>
                <p className="text-white/90 text-xs sm:text-sm">
                  No credit card required • Cancel anytime
                </p>
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="flex items-center gap-3">
              <a href={productUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm"
                  className="bg-white text-[#0f172a] hover:bg-white/95 font-semibold shadow-lg group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <button
                onClick={handleDismiss}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyTrialBanner;
