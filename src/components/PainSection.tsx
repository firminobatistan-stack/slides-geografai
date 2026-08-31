import React from 'react';
import { X, Sparkles } from 'lucide-react';

export const PainSection: React.FC = () => {
  const painPoints = [
    'Chega na segunda-feira sem saber que mapa ou conteúdo levar pra aula',
    'Repete sempre os mesmos slides porque não tem tempo de pesquisar e montar apresentação nova',
    'Sente os alunos dispersos e a aula perdendo o interesse toda semana',
    'Fica com aquela ansiedade de domingo à noite sem slide pronto',
  ];

  return (
    <section
      id="bloco-de-dor"
      aria-label="Identificação de desafios da professora"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#E7E3DA] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-[#DC2626]/10 text-[#DC2626] rounded-full px-4 py-2 font-extrabold uppercase text-xs inline-block">
              O problema não é você
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1D1F] tracking-tight leading-tight mb-4">
            Se você se identifica com isso, o problema <span className="text-[#DC2626]">NÃO É VOCÊ.</span>
          </h2>

          <p className="font-display font-extrabold text-lg sm:text-xl text-[#1A1D1F]">
            Se você:
          </p>
        </div>

        {/* 4 Pain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {painPoints.map((text, idx) => (
            <div
              key={idx}
              className="bg-[#DC2626]/5 border border-[#DC2626]/20 rounded-2xl p-4 sm:p-5 flex items-start gap-4 shadow-xs transition-transform duration-200 hover:scale-[1.01]"
            >
              <div className="size-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <X className="size-4 stroke-[3]" />
              </div>
              <p className="font-sans font-medium text-sm sm:text-base text-[#1A1D1F] leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Emotional Turn Section */}
        <div className="bg-[#FBF8F2] border border-[#E7E3DA] rounded-3xl p-6 sm:p-10 text-center shadow-lg relative">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1D1F] mb-4 flex items-center justify-center gap-2">
            <span>Respira. 🌎</span>
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#1A1D1F] max-w-2xl mx-auto leading-relaxed mb-8">
            O problema nunca foi a sua criatividade ou a sua dedicação. Foi a falta de um{' '}
            <strong className="text-[#2F9E44] font-bold">
              material pronto, organizado e pensado especificamente para professoras de geografia
            </strong>
            . É exatamente isso que os 300 Slides resolvem.
          </p>

          <a
            id="pain-cta-btn"
            href="#planos"
            className="border-2 border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white font-display font-black uppercase text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 inline-flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
          >
            <Sparkles className="size-4" />
            <span>Somente hoje no pacote completo</span>
          </a>
        </div>
      </div>
    </section>
  );
};
