import React from 'react';
import { Check, X, ShieldCheck, Laptop, Tablet, Smartphone, Sparkles, AlertTriangle } from 'lucide-react';

interface PricingSectionProps {
  onOpenRetentionModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenRetentionModal }) => {
  return (
    <section
      id="planos"
      aria-label="Tabela de planos e preços"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#E7E3DA] relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1D1F] tracking-tight mb-6">
            Escolha Seu <span className="text-[#2F9E44]">Plano</span>
          </h2>

          {/* Scarcity Banner */}
          <div className="inline-flex items-center justify-center">
            <span className="bg-[#D4A017]/15 border border-[#D4A017]/60 text-[#1A1D1F] rounded-full px-5 py-3 text-xs sm:text-sm font-black uppercase inline-flex items-center justify-center gap-2 shadow-xs">
              <AlertTriangle className="size-4 text-[#D4A017] flex-shrink-0" />
              <span>⚠️ Últimas unidades por esse valor promocional</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid (Mobile: Complete is order-1, Basic is order-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
          {/* Card 1 - PLANO BÁSICO (Mobile order-2, Desktop order-1) */}
          <div
            id="plano-basico"
            className="order-2 md:order-1 bg-white border border-[#E7E3DA] rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="border-b border-[#E7E3DA] pb-6 mb-6">
                <h3 className="font-display font-black text-2xl text-[#1A1D1F] mb-1">
                  PLANO BÁSICO
                </h3>
                <p className="font-sans text-sm text-[#6B7280]">
                  Para começar a transformar suas aulas hoje
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="line-through text-sm sm:text-base text-[#6B7280]">
                    De R$47,00
                  </span>
                  <span className="font-sans text-sm font-medium text-[#1A1D1F]">por</span>
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#1A1D1F]">
                    R$10,00
                  </span>
                </div>
                <p className="text-xs text-[#6B7280] font-medium mt-1">
                  Pagamento único · Acesso vitalício
                </p>
              </div>

              {/* Basic Features Checklist */}
              <ul className="space-y-3.5 mb-8 text-sm">
                <li className="flex items-center gap-3 text-[#1A1D1F] font-semibold">
                  <div className="size-5 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center flex-shrink-0">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <span>300 Slides de Geografia</span>
                </li>

                <li className="flex items-center gap-3 text-[#1A1D1F] font-semibold">
                  <div className="size-5 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center flex-shrink-0">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <span>Filtro por tema, série e duração</span>
                </li>

                <li className="flex items-center gap-3 text-[#1A1D1F] font-semibold">
                  <div className="size-5 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center flex-shrink-0">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <span>Acesso imediato no celular e computador</span>
                </li>

                <li className="flex items-center gap-3 text-[#1A1D1F] font-semibold">
                  <div className="size-5 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center flex-shrink-0">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <span>Acesso vitalício</span>
                </li>

                {/* Excluded items (crossed out) */}
                <li className="flex items-center gap-3 text-[#6B7280]/60 line-through">
                  <div className="size-5 rounded-full bg-black/5 text-[#6B7280]/60 flex items-center justify-center flex-shrink-0">
                    <X className="size-3 stroke-[2.5]" />
                  </div>
                  <span>50 Mapas Interativos</span>
                </li>

                <li className="flex items-center gap-3 text-[#6B7280]/60 line-through">
                  <div className="size-5 rounded-full bg-black/5 text-[#6B7280]/60 flex items-center justify-center flex-shrink-0">
                    <X className="size-3 stroke-[2.5]" />
                  </div>
                  <span>30 Projetos Interdisciplinares</span>
                </li>

                <li className="flex items-center gap-3 text-[#6B7280]/60 line-through">
                  <div className="size-5 rounded-full bg-black/5 text-[#6B7280]/60 flex items-center justify-center flex-shrink-0">
                    <X className="size-3 stroke-[2.5]" />
                  </div>
                  <span>Apostila Completa de Geografia</span>
                </li>

                <li className="flex items-center gap-3 text-[#6B7280]/60 line-through">
                  <div className="size-5 rounded-full bg-black/5 text-[#6B7280]/60 flex items-center justify-center flex-shrink-0">
                    <X className="size-3 stroke-[2.5]" />
                  </div>
                  <span>Downloads Exclusivos</span>
                </li>

                <li className="flex items-center gap-3 text-[#6B7280]/60 line-through">
                  <div className="size-5 rounded-full bg-black/5 text-[#6B7280]/60 flex items-center justify-center flex-shrink-0">
                    <X className="size-3 stroke-[2.5]" />
                  </div>
                  <span>Apostila de Curiosidades Geográficas</span>
                </li>

                <li className="flex items-center gap-3 text-[#6B7280]/60 line-through">
                  <div className="size-5 rounded-full bg-black/5 text-[#6B7280]/60 flex items-center justify-center flex-shrink-0">
                    <X className="size-3 stroke-[2.5]" />
                  </div>
                  <span>Kit de Fechamento de Aula de Geografia</span>
                </li>

                <li className="flex items-center gap-3 text-[#6B7280]/60 line-through">
                  <div className="size-5 rounded-full bg-black/5 text-[#6B7280]/60 flex items-center justify-center flex-shrink-0">
                    <X className="size-3 stroke-[2.5]" />
                  </div>
                  <span>Atualizações mensais</span>
                </li>
              </ul>
            </div>

            {/* Basic CTA Button triggering retention modal */}
            <div>
              <button
                id="btn-plano-basico"
                type="button"
                onClick={onOpenRetentionModal}
                className="border-2 border-[#2F9E44] text-[#2F9E44] rounded-full py-3.5 w-full font-display font-black uppercase text-sm hover:bg-[#2F9E44] hover:text-white transition-colors cursor-pointer shadow-xs active:scale-95"
              >
                Quero começar com o básico
              </button>
            </div>
          </div>

          {/* Card 2 - PLANO COMPLETO (Mobile order-1, Desktop order-2) ⭐ Mais Escolhido */}
          <div
            id="plano-completo"
            className="order-1 md:order-2 relative bg-white border-2 border-[#2F9E44] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#2F9E44]/20 flex flex-col justify-between ring-4 ring-[#2F9E44]/10"
          >
            {/* Top Floating Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0F3D2E] text-white rounded-full px-5 py-1.5 text-xs font-display font-black uppercase tracking-widest shadow-lg whitespace-nowrap border border-[#D4A017]/60 flex items-center gap-1.5">
              <span>⭐ Mais escolhido</span>
            </div>

            <div>
              <div className="border-b border-[#E7E3DA] pb-6 mb-6 pt-2">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#2F9E44] mb-1">
                  PLANO COMPLETO
                </h3>
                <p className="font-sans text-sm text-[#1A1D1F] font-medium">
                  A biblioteca completa de geografia que você sempre precisou
                </p>

                {/* Device Mockup Illustration */}
                <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-[#0F3D2E] to-[#164e3b] text-white flex items-center justify-around text-center shadow-inner">
                  <div className="flex flex-col items-center">
                    <Laptop className="size-6 text-[#D4A017] mb-1" />
                    <span className="text-[10px] font-bold text-white/90">Computador</span>
                  </div>
                  <div className="text-white/30 text-xs">+</div>
                  <div className="flex flex-col items-center">
                    <Tablet className="size-6 text-[#D4A017] mb-1" />
                    <span className="text-[10px] font-bold text-white/90">Tablet</span>
                  </div>
                  <div className="text-white/30 text-xs">+</div>
                  <div className="flex flex-col items-center">
                    <Smartphone className="size-6 text-[#D4A017] mb-1" />
                    <span className="text-[10px] font-bold text-white/90">Celular</span>
                  </div>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="line-through text-sm sm:text-base text-[#6B7280]">
                    De R$97,00
                  </span>
                  <span className="font-sans text-sm font-medium text-[#1A1D1F]">por</span>
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#2F9E44]">
                    R$29,90
                  </span>
                </div>
                <p className="text-xs text-[#2F9E44] font-extrabold mt-1">
                  Pagamento único · Sem mensalidades
                </p>
              </div>

              {/* Complete Plan CTA Button (Gold with Glow) */}
              <div className="mb-6">
                <a
                  id="btn-plano-completo"
                  href="#planos"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: document.getElementById('planos')?.offsetTop || 0, behavior: 'smooth' });
                  }}
                  className="bg-[#D4A017] text-[#1A1D1F] font-display font-black text-lg uppercase py-4 px-6 rounded-full block text-center shadow-lg animate-glow-gold hover:scale-[1.02] active:scale-95 transition-transform w-full cursor-pointer"
                >
                  ✨ Acesso vitalício
                </a>
              </div>

              {/* Detailed Checklist with Subtitles */}
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-start gap-3 text-[#1A1D1F]">
                  <div className="size-5 rounded-full bg-[#2F9E44] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-[#1A1D1F] block text-sm">
                      Plataforma interativa com 300 slides organizados
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium block">
                      Filtro por tema, série e duração
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-[#1A1D1F]">
                  <div className="size-5 rounded-full bg-[#2F9E44] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-[#1A1D1F] block text-sm">
                      50 Mapas interativos com aplicação em aula
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium block">
                      Do mapa mudo à análise geopolítica
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-[#1A1D1F]">
                  <div className="size-5 rounded-full bg-[#2F9E44] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-[#1A1D1F] block text-sm">
                      30 Projetos interdisciplinares prontos
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium block">
                      Geografia integrada com outras matérias
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-[#1A1D1F]">
                  <div className="size-5 rounded-full bg-[#2F9E44] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-[#1A1D1F] block text-sm">
                      Apostila Completa de Geografia
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium block">
                      Teoria e prática para consultar sempre
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-[#1A1D1F]">
                  <div className="size-5 rounded-full bg-[#2F9E44] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-[#1A1D1F] block text-sm">
                      Downloads exclusivos prontos para imprimir
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium block">
                      Mapas, atividades e jogos prontos para aplicar
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-[#1A1D1F]">
                  <div className="size-5 rounded-full bg-[#2F9E44] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-[#1A1D1F] block text-sm">
                      Apostila de Curiosidades Geográficas
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium block">
                      50 temas com curiosidades para engajar a turma
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-[#1A1D1F]">
                  <div className="size-5 rounded-full bg-[#2F9E44] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-[#1A1D1F] block text-sm">
                      Kit de Fechamento de Aula de Geografia
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium block">
                      Atividades prontas para encerrar cada aula
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-[#1A1D1F]">
                  <div className="size-5 rounded-full bg-[#2F9E44] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-[#1A1D1F] block text-sm">
                      Atualizações mensais sem custo extra
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium block">
                      Novos slides todo mês
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-[#1A1D1F]">
                  <div className="size-5 rounded-full bg-[#2F9E44] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-[#1A1D1F] block text-sm">
                      Acesso vitalício + suporte prioritário
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium block">
                      Pague uma vez, use para sempre
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Footer Assurance */}
            <div className="pt-4 border-t border-[#E7E3DA] text-center">
              <p className="text-xs font-bold text-[#1A1D1F] flex items-center justify-center gap-1.5">
                <ShieldCheck className="size-4 text-[#2F9E44]" />
                <span>🔒 Compra 100% segura · Acesso imediato após o pagamento</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
