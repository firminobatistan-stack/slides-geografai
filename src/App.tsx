import React, { useState, useEffect } from 'react';
import { TopUrgencyBar } from './components/TopUrgencyBar';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { WhatsAppSocialProof } from './components/WhatsAppSocialProof';
import { PainSection } from './components/PainSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { RetentionModal } from './components/RetentionModal';
import { SocialProofToast } from './components/SocialProofToast';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [isRetentionModalOpen, setIsRetentionModalOpen] = useState(false);
  const [checkoutNotice, setCheckoutNotice] = useState<{ plan: string; price: string } | null>(null);

  // Smooth scroll handler for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const handleSelectComplete = () => {
    setIsRetentionModalOpen(false);
    setCheckoutNotice({
      plan: 'Plano Completo (+300 Slides + 6 Bônus Exclusivos)',
      price: 'R$ 29,90',
    });
  };

  const handleSelectBasic = () => {
    setIsRetentionModalOpen(false);
    setCheckoutNotice({
      plan: 'Plano Básico (+300 Slides de Geografia)',
      price: 'R$ 10,00',
    });
  };

  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#1A1D1F] font-sans antialiased overflow-x-hidden flex flex-col justify-between">
      {/* 1. Sticky Urgency Top Bar */}
      <TopUrgencyBar />

      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Infinite Marquee Banner */}
        <MarqueeBanner />

        {/* 4. WhatsApp Social Proof Section */}
        <WhatsAppSocialProof />

        {/* 5. Pain Block Section */}
        <PainSection />

        {/* 6. Exclusive Bonuses Section */}
        <BonusSection />

        {/* 7. Pricing Table Section */}
        <PricingSection onOpenRetentionModal={() => setIsRetentionModalOpen(true)} />

        {/* 8. Unconditional Guarantee Section */}
        <GuaranteeSection />

        {/* 9. FAQ Section */}
        <FaqSection />

        {/* 10. Final Call to Action Section */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating Social Proof Toast */}
      <SocialProofToast />

      {/* Retention Modal on clicking Basic Plan */}
      <RetentionModal
        isOpen={isRetentionModalOpen}
        onClose={() => setIsRetentionModalOpen(false)}
        onSelectComplete={handleSelectComplete}
        onSelectBasic={handleSelectBasic}
      />

      {/* Simulated Checkout Success / Redirect Notice */}
      {checkoutNotice && (
        <div
          id="checkout-notice-modal"
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[120] flex items-center justify-center p-4"
          onClick={() => setCheckoutNotice(null)}
        >
          <div
            className="bg-white text-[#1A1D1F] p-6 sm:p-8 rounded-3xl max-w-md w-full shadow-2xl border border-[#2F9E44]/40 text-center relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar confirmação"
              onClick={() => setCheckoutNotice(null)}
              className="absolute top-4 right-4 text-[#6B7280] hover:text-[#1A1D1F] p-1.5 rounded-full hover:bg-black/5"
            >
              <X className="size-5" />
            </button>

            <div className="size-16 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="size-10 stroke-[2.2]" />
            </div>

            <h3 className="font-display font-black text-2xl text-[#1A1D1F] mb-2">
              Excelente escolha!
            </h3>

            <p className="text-sm text-[#6B7280] mb-4">
              Você selecionou:
            </p>

            <div className="bg-[#FBF8F2] border border-[#E7E3DA] p-4 rounded-2xl mb-6 text-left">
              <p className="font-display font-bold text-sm text-[#1A1D1F]">
                {checkoutNotice.plan}
              </p>
              <p className="font-display font-black text-2xl text-[#2F9E44] mt-1">
                {checkoutNotice.price}
              </p>
              <p className="text-xs text-[#6B7280] mt-1">
                Acesso imediato no seu e-mail · Pagamento Seguro
              </p>
            </div>

            <button
              type="button"
              onClick={() => setCheckoutNotice(null)}
              className="w-full bg-[#2F9E44] text-white font-display font-black text-base py-3.5 rounded-full shadow-lg hover:bg-[#258238] transition-colors cursor-pointer"
            >
              Ir para Pagamento Seguro 🔒
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
