import React, { useState } from 'react';
import { MessageCircle, ZoomIn, X, CheckCircle2, Heart } from 'lucide-react';
import whatsappTalita from '../assets/images/whatsapp_talita_1788187909312.jpg';
import whatsappBruna from '../assets/images/whatsapp_bruna_1788187926911.jpg';
import whatsappNeide from '../assets/images/whatsapp_neide_1788187941207.jpg';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  highlight: string;
  imageSrc: string;
  alt: string;
}

export const WhatsAppSocialProof: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string } | null>(null);

  const testimonials: TestimonialItem[] = [
    {
      id: 'testimonial-talita',
      name: 'Profª. Talita',
      role: 'Cliente Verificada · Ensino Fundamental',
      highlight: '“Sério, me ajudou bastante... agora tenho atividade pra muito tempo!”',
      imageSrc: whatsappTalita,
      alt: 'Conversa no WhatsApp com Profª Talita elogiando o material pedagógico e a participação dos alunos',
    },
    {
      id: 'testimonial-bruna',
      name: 'Profª. Bruna',
      role: 'Cliente Verificada · Ensino Fundamental',
      highlight: '“Até os alunos que normalmente não querem participar entraram na atividade!”',
      imageSrc: whatsappBruna,
      alt: 'Conversa no WhatsApp com Profª Bruna relatando engajamento total da turma na aula',
    },
    {
      id: 'testimonial-neide',
      name: 'Profª. Neide',
      role: 'Cliente Verificada · Planejamento Escolar',
      highlight: '“Facilitou demais minha rotina, consigo planejar várias aulas de uma vez!”',
      imageSrc: whatsappNeide,
      alt: 'Conversa no WhatsApp com Profª Neide explicando o ganho de tempo no planejamento',
    },
  ];

  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de professoras"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF8F2] relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-[#2563EB]/10 text-[#2563EB] rounded-full px-4 py-2 font-extrabold uppercase text-xs inline-flex items-center gap-2">
              <MessageCircle className="size-3.5" />
              <span>💬 Conversas reais de clientes</span>
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1D1F] tracking-tight mb-4">
            O que dizem as <span className="text-[#2F9E44]">Professoras</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#6B7280]">
            Prints reais de conversas no WhatsApp com professoras que já usam o material nas suas aulas.
          </p>
        </div>

        {/* 3 WhatsApp Screenshot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {testimonials.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-white border border-[#E7E3DA] rounded-3xl p-4 sm:p-5 shadow-xl shadow-[#2F9E44]/5 flex flex-col transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-[#2F9E44]/10 group"
            >
              {/* Teacher Header */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#E7E3DA]/80">
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center font-display font-bold text-sm">
                    <CheckCircle2 className="size-5 stroke-[2.4]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#1A1D1F] leading-tight flex items-center gap-1.5">
                      {item.name}
                      <span className="text-[11px] bg-[#2F9E44]/10 text-[#2F9E44] font-bold px-1.5 py-0.5 rounded-md">
                        Verificada
                      </span>
                    </h3>
                    <p className="text-xs text-[#6B7280]">
                      {item.role}
                    </p>
                  </div>
                </div>

                <Heart className="size-4 text-rose-500 fill-rose-500/20" />
              </div>

              {/* Quote Highlight Badge */}
              <div className="bg-[#F6F4EE] rounded-xl p-3 mb-4 text-xs sm:text-[13px] font-medium text-[#1A1D1F] leading-relaxed border border-[#E7E3DA]/60 italic text-center">
                {item.highlight}
              </div>

              {/* Real WhatsApp Screenshot Container */}
              <div
                role="button"
                tabIndex={0}
                aria-label={`Ampliar print da conversa com ${item.name}`}
                onClick={() => setSelectedImage({ src: item.imageSrc, name: item.name })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImage({ src: item.imageSrc, name: item.name });
                  }
                }}
                className="relative rounded-2xl overflow-hidden border border-[#E7E3DA] bg-[#EFEAE2] cursor-pointer shadow-inner group/img aspect-[9/16] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2F9E44]"
              >
                <img
                  src={item.imageSrc}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain sm:object-cover group-hover/img:scale-[1.02] transition-transform duration-300"
                />

                {/* Hover overlay indicator to zoom */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="bg-white/95 text-[#1A1D1F] text-xs font-display font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                    <ZoomIn className="size-3.5 text-[#2563EB]" />
                    <span>Clique para ampliar</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedImage && (
        <div
          id="testimonial-lightbox-modal"
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[130] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Print ampliado de ${selectedImage.name}`}
        >
          <div
            className="relative max-w-sm sm:max-w-md w-full max-h-[92vh] flex flex-col items-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar visualização do print"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-white/80 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
            >
              <X className="size-6" />
            </button>

            <div className="w-full bg-[#1A1D1F] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src={selectedImage.src}
                alt={`Print da conversa com ${selectedImage.name}`}
                referrerPolicy="no-referrer"
                className="w-full max-h-[85vh] object-contain mx-auto"
              />
            </div>

            <p className="text-white/80 text-xs font-medium mt-3 text-center">
              Print original de WhatsApp · {selectedImage.name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

