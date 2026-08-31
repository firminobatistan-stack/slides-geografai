import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      question: 'Como eu recebo o acesso?',
      answer:
        'Assim que o pagamento é confirmado, você recebe um e-mail com seu login e senha. O acesso é imediato e funciona no celular, tablet e computador.',
    },
    {
      question: 'Para quais séries os slides funcionam?',
      answer:
        'Do Ensino Fundamental I ao Fundamental II. Você filtra por tema, série e duração e encontra o slide perfeito em segundos.',
    },
    {
      question: 'Preciso de algum programa específico para abrir os slides?',
      answer:
        'Não! Os slides funcionam direto na plataforma, sem precisar instalar nada, e também podem ser baixados em formato compatível com PowerPoint e Google Slides.',
    },
    {
      question: 'O acesso é realmente vitalício?',
      answer:
        'Sim. No Plano Completo você paga uma única vez e acessa para sempre, incluindo todas as atualizações mensais.',
    },
    {
      question: 'E se eu não gostar do material?',
      answer:
        'Você tem 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos 100% do valor, sem perguntas.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      aria-label="Perguntas Frequentes"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#E7E3DA] relative"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-[#2F9E44]/10 text-[#2F9E44] rounded-full px-4 py-2 font-extrabold uppercase text-xs inline-flex items-center gap-2">
              <HelpCircle className="size-3.5" />
              <span>Dúvidas comuns</span>
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1D1F] tracking-tight">
            Perguntas <span className="text-[#2F9E44]">Frequentes</span>
          </h2>
        </div>

        {/* 5 Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FBF8F2] border-[#2F9E44]/40 shadow-md shadow-[#2F9E44]/5'
                    : 'bg-white border-[#E7E3DA] hover:border-[#2F9E44]/30'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#1A1D1F] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`size-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#2F9E44] text-white'
                        : 'bg-black/5 text-[#6B7280]'
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#6B7280] font-sans leading-relaxed border-t border-[#E7E3DA]/60 mt-1 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
