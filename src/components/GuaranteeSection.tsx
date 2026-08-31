import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section
      id="garantia"
      aria-label="Garantia incondicional de 7 dias"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF8F2] relative"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Shield Icon Container */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="size-20 sm:size-24 rounded-full bg-[#2F9E44]/15 border-2 border-[#2F9E44]/30 flex items-center justify-center text-[#2F9E44] shadow-lg shadow-[#2F9E44]/10">
            <ShieldCheck className="size-10 sm:size-12 stroke-[2.2]" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1D1F] tracking-tight mb-6">
          Garantia incondicional de <span className="text-[#2F9E44]">7 dias</span>
        </h2>

        {/* Text */}
        <p className="font-sans text-base sm:text-lg lg:text-xl text-[#1A1D1F] leading-relaxed max-w-2xl mx-auto mb-8">
          Teste os slides com suas turmas por 7 dias. Se você não sentir que suas aulas ganharam outra energia, devolvemos <strong className="font-bold text-[#1A1D1F]">cada centavo</strong>. Sem perguntas, sem burocracia, sem letra miúda.
        </p>

        {/* Trust Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white border border-[#E7E3DA] rounded-full px-6 py-3 shadow-sm text-xs sm:text-sm font-bold text-[#1A1D1F]">
          <span className="flex items-center gap-1.5 text-[#2F9E44]">
            <Check className="size-4 stroke-[3]" />
            <span>Risco Zero</span>
          </span>
          <span className="text-[#E7E3DA]">•</span>
          <span className="flex items-center gap-1.5 text-[#2F9E44]">
            <Check className="size-4 stroke-[3]" />
            <span>Reembolso Integral</span>
          </span>
          <span className="text-[#E7E3DA]">•</span>
          <span className="flex items-center gap-1.5 text-[#2F9E44]">
            <Check className="size-4 stroke-[3]" />
            <span>Suporte Humanizado</span>
          </span>
        </div>
      </div>
    </section>
  );
};
