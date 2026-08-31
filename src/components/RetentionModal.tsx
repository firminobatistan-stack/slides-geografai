import React from 'react';
import { X, AlertTriangle, Gift } from 'lucide-react';
import bonus50Mapas from '../assets/images/bonus_50_mapas_1788015201508.jpg';
import bonus30Projetos from '../assets/images/bonus_30_projetos_1788015216496.jpg';
import bonusApostilaGeo from '../assets/images/bonus_apostila_geo_1788015237877.jpg';
import bonusDownloadsGeo from '../assets/images/bonus_downloads_geo_1788015253552.jpg';
import bonusCuriosidades from '../assets/images/bonus_curiosidades_1788015268198.jpg';
import bonusKitAula from '../assets/images/bonus_kit_aula_1788015288561.jpg';

interface RetentionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectComplete: () => void;
  onSelectBasic: () => void;
}

export const RetentionModal: React.FC<RetentionModalProps> = ({
  isOpen,
  onClose,
  onSelectComplete,
  onSelectBasic,
}) => {
  if (!isOpen) return null;

  const bonusImages = [
    { src: bonus50Mapas, alt: '50 Mapas Interativos' },
    { src: bonus30Projetos, alt: '30 Projetos Interdisciplinares' },
    { src: bonusApostilaGeo, alt: 'Apostila Completa' },
    { src: bonusDownloadsGeo, alt: 'Downloads Exclusivos' },
    { src: bonusCuriosidades, alt: 'Curiosidades Geográficas' },
    { src: bonusKitAula, alt: 'Kit de Fechamento' },
  ];

  return (
    <div
      id="retention-modal-overlay"
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="retention-modal-card"
        className="bg-[#0F3D2E] text-white border border-[#D4A017]/50 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl shadow-black/60 z-[101] relative text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (X) */}
        <button
          type="button"
          aria-label="Fechar modal"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {/* Upgrade Tag */}
        <div className="inline-flex items-center justify-center mb-4">
          <span className="bg-[#D4A017]/20 border border-[#D4A017]/50 text-[#D4A017] rounded-full px-3.5 py-1 text-[11px] sm:text-xs font-display font-black uppercase inline-flex items-center gap-1.5 shadow-xs">
            <AlertTriangle className="size-3.5 flex-shrink-0" />
            <span>⚠️ ESPERE! OFERTA ÚNICA DE UPGRADE</span>
          </span>
        </div>

        {/* Modal Title */}
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight mb-3">
          Tem certeza que vai ficar sem os 6 bônus exclusivos?
        </h3>

        {/* Modal Subtitle / Offer */}
        <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed mb-4">
          Por apenas mais <strong className="text-[#D4A017] font-bold">R$ 19,90</strong> (R$ 29,90 no total), você desbloqueia todos os 6 livros e kits complementares:
        </p>

        {/* Mini Preview Strip of all 6 covers */}
        <div className="grid grid-cols-6 gap-2 mb-4 bg-black/30 p-2.5 rounded-2xl border border-white/10">
          {bonusImages.map((b, i) => (
            <div key={i} className="aspect-[3/4] rounded-lg overflow-hidden bg-black/40 border border-white/15 shadow-sm">
              <img
                src={b.src}
                alt={b.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Quick Bonus Grid Reminder */}
        <div className="bg-black/25 border border-white/10 rounded-2xl p-2.5 mb-5 text-xs text-white/80 flex items-center justify-center gap-2">
          <Gift className="size-4 text-[#D4A017]" />
          <span className="font-medium">Mais de R$ 390,00 em materiais liberados de graça!</span>
        </div>

        {/* Button 1: Gold highlighted upgrade CTA */}
        <div className="space-y-3">
          <button
            type="button"
            id="modal-btn-upgrade"
            onClick={onSelectComplete}
            className="w-full bg-[#D4A017] text-[#1A1D1F] font-display font-black text-base sm:text-lg uppercase py-4 px-6 rounded-full shadow-xl animate-glow-gold hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer block"
          >
            👉 SIM! QUERO O PACOTE COMPLETO POR R$ 29,90
          </button>

          {/* Button 2: Discreet link to continue with basic */}
          <button
            type="button"
            id="modal-btn-basic-declined"
            onClick={onSelectBasic}
            className="w-full text-xs sm:text-sm text-white/60 hover:text-white/90 underline pt-1.5 pb-1 transition-colors cursor-pointer block text-center"
          >
            Não, prefiro abrir mão dos bônus e levar só o básico por R$ 10,00
          </button>
        </div>
      </div>
    </div>
  );
};
