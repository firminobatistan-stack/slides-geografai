import React from 'react';
import { Gift } from 'lucide-react';
import bonus50Mapas from '../assets/images/bonus_50_mapas_1788015201508.jpg';
import bonus30Projetos from '../assets/images/bonus_30_projetos_1788015216496.jpg';
import bonusApostilaGeo from '../assets/images/bonus_apostila_geo_1788015237877.jpg';
import bonusDownloadsGeo from '../assets/images/bonus_downloads_geo_1788015253552.jpg';
import bonusCuriosidades from '../assets/images/bonus_curiosidades_1788015268198.jpg';
import bonusKitAula from '../assets/images/bonus_kit_aula_1788015288561.jpg';

export const BonusSection: React.FC = () => {
  const bonuses = [
    {
      id: 'bonus-1',
      title: '50 Mapas Interativos',
      subtitle: 'Do mapa mudo à análise geopolítica',
      description: 'Material visual rico para projeção e atividades com foco em mapas temáticos e geopolítica.',
      image: bonus50Mapas,
      alt: 'Capa do Bônus 50 Mapas Interativos',
      originalPrice: 'De R$ 65,90',
    },
    {
      id: 'bonus-2',
      title: '30 Projetos Interdisciplinares',
      subtitle: 'Geografia com Ciências, História e Arte',
      description: 'Projetos prontos para aplicar e integrar a geografia com outras áreas do conhecimento escolar.',
      image: bonus30Projetos,
      alt: 'Capa do Bônus 30 Projetos Interdisciplinares',
      originalPrice: 'De R$ 65,90',
    },
    {
      id: 'bonus-3',
      title: 'Apostila Completa de Geografia',
      subtitle: 'Teoria e prática para consultar sempre',
      description: 'Guia ilustrado com conceitos essenciais, mapa-múndi político, demografia e apoio pedagógico.',
      image: bonusApostilaGeo,
      alt: 'Capa do Bônus Apostila Completa de Geografia',
      originalPrice: 'De R$ 65,90',
    },
    {
      id: 'bonus-4',
      title: 'Downloads Exclusivos',
      subtitle: 'Mapas mudos, atividades e esquemas prontos para imprimir',
      description: 'Folhas prontas para impressão em alta resolução para fixação de conteúdo em sala de aula.',
      image: bonusDownloadsGeo,
      alt: 'Capa do Bônus Downloads Exclusivos',
      originalPrice: 'De R$ 65,90',
    },
    {
      id: 'bonus-5',
      title: 'Apostila de Curiosidades Geográficas',
      subtitle: '50 temas com curiosidades para engajar a turma',
      description: 'Fatos curiosos, fenômenos naturais e mistérios globais para prender a atenção dos alunos.',
      image: bonusCuriosidades,
      alt: 'Capa do Bônus Apostila de Curiosidades Geográficas',
      originalPrice: 'De R$ 65,90',
    },
    {
      id: 'bonus-6',
      title: 'Kit de Fechamento de Aula',
      subtitle: 'Atividades e dinâmicas para encerrar cada aula',
      description: 'Dinâmicas rápidas e reflexões estruturadas para concluir as aulas com chave de ouro.',
      image: bonusKitAula,
      alt: 'Capa do Bônus Kit de Fechamento de Aula de Geografia',
      originalPrice: 'De R$ 65,90',
    },
  ];

  return (
    <section
      id="bonus-exclusivos"
      aria-label="Bônus exclusivos do pacote completo"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF8F2] relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-[#2F9E44]/10 text-[#2F9E44] rounded-full px-4 py-2 font-extrabold uppercase text-xs inline-flex items-center gap-2">
              <Gift className="size-3.5" />
              <span>Surpresa especial</span>
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1D1F] tracking-tight mb-4">
            🎁 Bônus Exclusivos
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#6B7280]">
            Incluídos gratuitamente no Pacote Completo (Economia de mais de R$ 390,00)
          </p>
        </div>

        {/* 6 Bonus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bonuses.map((bonus, index) => (
            <div
              key={bonus.id}
              id={bonus.id}
              className="group bg-[#0F3D2E] text-white rounded-3xl shadow-xl shadow-[#0F3D2E]/20 text-center relative overflow-hidden flex flex-col justify-between border border-[#D4A017]/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#D4A017]/60"
            >
              {/* Slanted Gold Ribbon Badge */}
              <div className="absolute top-0 right-0 z-10 bg-[#D4A017] text-[#1A1D1F] font-display font-black text-[10px] sm:text-xs uppercase px-3.5 py-1.5 rounded-bl-2xl shadow-md tracking-wider">
                Bônus #{index + 1}
              </div>

              {/* Upper Card with Real Image Cover */}
              <div className="p-5 sm:p-6 pb-2">
                {/* Image Container with Framing */}
                <div className="w-full aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-black/30 border border-white/10 shadow-lg relative flex items-center justify-center">
                  <img
                    src={bonus.image}
                    alt={bonus.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover sm:object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-1.5 leading-snug">
                  {bonus.title}
                </h3>

                <p className="font-display font-semibold text-[#D4A017] text-xs sm:text-sm mb-2">
                  {bonus.subtitle}
                </p>

                <p className="font-sans text-white/75 text-xs sm:text-sm leading-relaxed px-1">
                  {bonus.description}
                </p>
              </div>

              {/* Card Lower Pricing & Badge */}
              <div className="p-5 sm:p-6 pt-3 border-t border-white/10 flex flex-col items-center mt-2">
                <span className="line-through text-white/50 text-xs font-semibold">
                  {bonus.originalPrice}
                </span>

                <span className="font-display font-black text-2xl sm:text-3xl text-[#D4A017] my-1">
                  GRÁTIS
                </span>

                <div className="bg-[#2F9E44] text-white font-display font-bold text-xs uppercase px-4 py-2 rounded-full mt-2 shadow-sm w-full max-w-[220px] text-center tracking-wide">
                  Incluído no completo
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
