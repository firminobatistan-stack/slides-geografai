import React, { useState } from 'react';
import { ArrowDown, Check, Play, Globe, Sparkles, Layers, ShieldCheck, Zap, Lock, Compass, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const sampleSlides = [
    {
      title: 'Cartografia & Fusos Horários',
      tag: '6º ao 8º Ano',
      subtitle: 'Compreendendo as Coordenadas Geográficas e Projeções',
      theme: 'from-emerald-800 to-teal-950',
      mapType: 'Globo Terrestre 3D e Paralelos',
      content: 'Dinâmica visual com projeções de Mercator vs. Peters e exercícios práticos.',
    },
    {
      title: 'Biomas Brasileiros & Biodiversidade',
      tag: '7º e 9º Ano',
      subtitle: 'Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa',
      theme: 'from-green-800 to-emerald-950',
      mapType: 'Mapa Interativo de Vegetação',
      content: 'Infográficos de clima, fauna, flora e impactos ambientais em tempo real.',
    },
    {
      title: 'Relevo, Placas Tectônicas & Vulcanismo',
      tag: 'Fundamental I e II',
      subtitle: 'Estrutura Interna da Terra e Formas de Relevo',
      theme: 'from-amber-800 to-stone-950',
      mapType: 'Cortes Geológicos & Animação',
      content: 'Modelos visuais de agentes internos e externos com questões gamificadas.',
    },
  ];

  return (
    <section
      id="hero-section"
      className="relative bg-[#FBF8F2] pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative Radial Light Orbs */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-4 sm:left-16 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#D4A017]/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-4 sm:right-16 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-[#2F9E44]/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <span
            id="hero-badge"
            className="bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 rounded-full px-4 py-2 text-[11px] sm:text-xs font-black uppercase inline-flex items-center gap-2 shadow-xs"
          >
            <span>🌎 Material exclusivo para professoras de Geografia</span>
          </span>
        </div>

        {/* H1 Headline */}
        <h1
          id="hero-headline"
          className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1D1F] tracking-tight leading-[1.15] mb-8"
        >
          <span className="text-[#2563EB]">+300 Slides de Geografia</span> para você{' '}
          <span className="text-[#2F9E44]">nunca mais chegar na aula sem saber o que ensinar.</span>
        </h1>

        {/* VSL Video Block */}
        <div id="hero-vsl-container" className="my-8 sm:my-10 flex flex-col items-center">
          <div className="flex flex-col items-center mb-2">
            <span className="text-[#DC2626] font-display font-black text-lg uppercase tracking-wide">
              Dá o play e assista
            </span>
            <ArrowDown className="animate-bounce text-[#DC2626] size-8 mb-2 mt-1" />
          </div>

          {/* 9:16 Vertical Video / Interactive Preview Frame */}
          <div
            id="vsl-video-frame"
            onClick={() => setIsPlayingDemo(!isPlayingDemo)}
            className="max-w-[320px] w-full aspect-[9/16] rounded-3xl border-4 border-white bg-gradient-to-b from-[#0F3D2E] via-[#134e3a] to-[#0A261E] shadow-2xl shadow-[#2563EB]/20 overflow-hidden mx-auto relative cursor-pointer group select-none transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Top Video Status Bar */}
            <div className="absolute top-0 inset-x-0 p-3 flex items-center justify-between z-20 bg-gradient-to-b from-black/60 to-transparent text-white text-xs">
              <span className="flex items-center gap-1.5 font-bold text-[11px] tracking-wide">
                <span className="size-2 rounded-full bg-red-500 animate-ping" />
                <span>DEMONSTRAÇÃO VITALÍCIA</span>
              </span>
              <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-extrabold text-[#D4A017]">
                +300 SLIDES
              </span>
            </div>

            {/* Simulated Geography Slide Screen */}
            <div className="h-full w-full flex flex-col justify-between p-5 text-white relative z-10 pt-12 pb-6">
              {/* Slide Mockup Content */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-[#D4A017] text-[#1A1D1F] px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                  <Sparkles className="size-3" />
                  <span>{sampleSlides[activeSlideIndex].tag}</span>
                </div>

                <h3 className="font-display font-black text-xl leading-tight text-white drop-shadow-md">
                  {sampleSlides[activeSlideIndex].title}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed font-sans">
                  {sampleSlides[activeSlideIndex].subtitle}
                </p>
              </div>

              {/* Graphic in the Center */}
              <div className="relative py-4 my-auto flex flex-col items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-[#2F9E44]/20 border-2 border-dashed border-[#D4A017]/60 flex items-center justify-center relative p-3 backdrop-blur-xs">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#2563EB] to-[#2F9E44] flex items-center justify-center shadow-lg animate-pulse">
                    <Globe className="size-14 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-[#D4A017] text-[#1A1D1F] rounded-full p-1 shadow-sm">
                    <Compass className="size-4" />
                  </div>
                  <div className="absolute -bottom-1 -left-1 bg-[#2F9E44] text-white rounded-full p-1 shadow-sm">
                    <MapPin className="size-4" />
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] font-bold text-amber-200 tracking-wide block">
                    {sampleSlides[activeSlideIndex].mapType}
                  </span>
                  <span className="text-[10px] text-white/70">
                    {sampleSlides[activeSlideIndex].content}
                  </span>
                </div>
              </div>

              {/* Bottom Video Controls / Call To Action within Player */}
              <div className="space-y-3 pt-2">
                {/* Slide pagination dots */}
                <div className="flex items-center justify-center gap-1.5">
                  {sampleSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Slide de exemplo ${idx + 1}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlideIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeSlideIndex === idx ? 'w-6 bg-[#D4A017]' : 'w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Central Play Button Overlay */}
                <div className="flex items-center justify-center">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute -inset-2 rounded-full bg-[#2563EB]/40 animate-ping" />
                    <div className="relative size-14 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-xl shadow-[#2563EB]/50 border-2 border-white">
                      <Play className="size-6 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-center text-white/80 font-bold uppercase tracking-wider">
                  Clique para ver mais exemplos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subheadline */}
        <p
          id="hero-subheadline"
          className="font-sans text-base sm:text-lg lg:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Para professoras de Geografia do Ensino Fundamental I e II que chegam na segunda-feira sem aula pronta e sem mapas preparados.
        </p>

        {/* Main CTA Button (Blue with Glow) */}
        <div className="mb-6">
          <a
            id="hero-main-cta"
            href="#planos"
            className="bg-[#2563EB] text-white font-display text-lg sm:text-xl font-black uppercase px-8 py-4 rounded-full shadow-xl shadow-[#2563EB]/30 hover:scale-[1.03] active:scale-95 transition-transform w-full max-w-md mx-auto block text-center animate-glow-blue cursor-pointer"
          >
            👉 Quero acessar agora 👈
          </a>
        </div>

        {/* Trust Badges below CTA */}
        <div
          id="hero-trust-badges"
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-[#1A1D1F] mb-10"
        >
          <span className="inline-flex items-center gap-1.5">
            <Zap className="size-4 text-[#D4A017]" />
            <span>⚡ Acesso imediato</span>
          </span>
          <span className="text-[#E7E3DA] hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <Lock className="size-4 text-[#2F9E44]" />
            <span>🔒 Pagamento seguro</span>
          </span>
          <span className="text-[#E7E3DA] hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-[#2563EB]" />
            <span>🛡️ Garantia de 7 dias</span>
          </span>
        </div>

        {/* 2x2 Quick Differential Pills Grid (2 columns on mobile ALWAYS) */}
        <div
          id="hero-differentials-grid"
          className="grid grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto mb-10"
        >
          <div className="bg-white border border-[#E7E3DA] rounded-2xl p-3 sm:p-4 shadow-sm flex items-center gap-2.5 text-left">
            <div className="size-6 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center flex-shrink-0">
              <Check className="size-3.5 stroke-[3]" />
            </div>
            <span className="font-display font-extrabold text-xs sm:text-sm text-[#1A1D1F] leading-tight">
              Funciona em qualquer série
            </span>
          </div>

          <div className="bg-white border border-[#E7E3DA] rounded-2xl p-3 sm:p-4 shadow-sm flex items-center gap-2.5 text-left">
            <div className="size-6 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center flex-shrink-0">
              <Check className="size-3.5 stroke-[3]" />
            </div>
            <span className="font-display font-extrabold text-xs sm:text-sm text-[#1A1D1F] leading-tight">
              Dentro ou fora da escola
            </span>
          </div>

          <div className="bg-white border border-[#E7E3DA] rounded-2xl p-3 sm:p-4 shadow-sm flex items-center gap-2.5 text-left">
            <div className="size-6 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center flex-shrink-0">
              <Check className="size-3.5 stroke-[3]" />
            </div>
            <span className="font-display font-extrabold text-xs sm:text-sm text-[#1A1D1F] leading-tight">
              Do Fundamental I ao II
            </span>
          </div>

          <div className="bg-white border border-[#E7E3DA] rounded-2xl p-3 sm:p-4 shadow-sm flex items-center gap-2.5 text-left">
            <div className="size-6 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center flex-shrink-0">
              <Check className="size-3.5 stroke-[3]" />
            </div>
            <span className="font-display font-extrabold text-xs sm:text-sm text-[#1A1D1F] leading-tight">
              Filtro por tema e duração
            </span>
          </div>
        </div>

        {/* Social Proof Paragraph + Secondary CTA */}
        <div className="max-w-2xl mx-auto pt-4 border-t border-[#E7E3DA]/80">
          <p className="font-sans text-sm sm:text-base text-[#1A1D1F] leading-relaxed">
            Mais de 1.980 professoras de geografia já usam os slides e chegam na sala com aulas prontas. Mapas, relevo, clima, geopolítica, atividades interativas e colaborativas — tudo organizado e pronto pra aplicar.
          </p>

          <a
            id="hero-secondary-cta"
            href="#planos"
            className="bg-[#2F9E44] text-white font-display font-black uppercase text-base sm:text-lg px-8 py-4 rounded-full shadow-lg shadow-[#2F9E44]/30 hover:scale-[1.03] active:scale-95 transition-transform w-full max-w-md mx-auto block text-center mt-6 cursor-pointer"
          >
            Quero meus slides de geografia
          </a>
        </div>
      </div>
    </section>
  );
};
