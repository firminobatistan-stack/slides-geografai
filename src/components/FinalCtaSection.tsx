import React from 'react';
import { Sparkles, ShieldCheck, Zap, Lock } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="chamada-final"
      aria-label="Chamada final para compra"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF8F2] relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#0F3D2E] text-white text-center py-12 sm:py-16 px-6 sm:px-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-[#0F3D2E]/30 border border-[#D4A017]/30">
          {/* Radial Light Orbs */}
          <div
            className="absolute -top-24 -left-24 w-72 h-72 bg-[#2F9E44]/25 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#D4A017]/25 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Headline */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              Suas próximas aulas de geografia <span className="text-[#D4A017]">já estão prontas.</span>
            </h2>

            {/* Paragraph */}
            <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed mb-10">
              Junte-se a mais de 1.980 professoras que nunca mais chegaram na aula sem saber o que ensinar.
            </p>

            {/* Big Gold Button with Glow */}
            <div className="mb-8">
              <a
                id="final-cta-btn"
                href="#planos"
                className="bg-[#D4A017] text-[#1A1D1F] font-display font-black uppercase text-base sm:text-lg py-4 px-10 rounded-full inline-flex items-center gap-2 shadow-2xl animate-glow-gold hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                <Sparkles className="size-5" />
                <span>Quero acesso vitalício</span>
              </a>
            </div>

            {/* Seal / Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-white/80">
              <span className="flex items-center gap-1.5">
                <Lock className="size-3.5 text-[#D4A017]" />
                <span>🔒 Compra segura</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="size-3.5 text-[#D4A017]" />
                <span>⚡ Acesso imediato</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-[#D4A017]" />
                <span>🛡️ Garantia de 7 dias</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
