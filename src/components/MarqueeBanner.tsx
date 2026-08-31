import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'Continentes e Oceanos',
    'Relevo e Clima',
    'Cartografia e Mapas',
    'Regiões do Brasil',
    'Globalização',
    'Urbanização',
    'Recursos Naturais',
    'Biomas Brasileiros',
    'Geopolítica Mundial',
    'Sustentabilidade',
  ];

  return (
    <section
      id="marquee-temas"
      aria-label="Faixa de temas de geografia"
      className="border-y border-[#E7E3DA] bg-white py-4 overflow-hidden shadow-xs select-none"
    >
      <div className="flex w-max animate-marquee">
        {/* Sequence 1 */}
        <div className="flex items-center gap-6 whitespace-nowrap px-3">
          {items.map((item, idx) => (
            <span
              key={`item-1-${idx}`}
              className="inline-flex items-center gap-6 font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#6B7280]"
            >
              <span>{item}</span>
              <span className="text-[#D4A017] text-base select-none">✦</span>
            </span>
          ))}
        </div>

        {/* Sequence 2 for continuous smooth loop */}
        <div className="flex items-center gap-6 whitespace-nowrap px-3">
          {items.map((item, idx) => (
            <span
              key={`item-2-${idx}`}
              className="inline-flex items-center gap-6 font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#6B7280]"
            >
              <span>{item}</span>
              <span className="text-[#D4A017] text-base select-none">✦</span>
            </span>
          ))}
        </div>

        {/* Sequence 3 for ultra-wide screens */}
        <div className="flex items-center gap-6 whitespace-nowrap px-3">
          {items.map((item, idx) => (
            <span
              key={`item-3-${idx}`}
              className="inline-flex items-center gap-6 font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#6B7280]"
            >
              <span>{item}</span>
              <span className="text-[#D4A017] text-base select-none">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
