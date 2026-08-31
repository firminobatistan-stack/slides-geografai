import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, ShoppingBag } from 'lucide-react';

export const SocialProofToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const notifications = [
    {
      name: 'Patrícia M. · Recife · PE',
      action: 'garantiu o Plano Completo 🌎',
      time: 'há 3 min',
    },
    {
      name: 'Rodrigo A. · Curitiba · PR',
      action: 'garantiu o Plano Completo 🌎',
      time: 'há 5 min',
    },
    {
      name: 'Fernanda S. · Salvador · BA',
      action: 'garantiu o Plano Completo 🌎',
      time: 'há 2 min',
    },
    {
      name: 'Juliana C. · Porto Alegre · RS',
      action: 'garantiu o Plano Completo 🌎',
      time: 'há 4 min',
    },
  ];

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // Switch item and fade in after a brief pause
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 9000); // 9 seconds cycle

    return () => clearInterval(interval);
  }, [isDismissed, notifications.length]);

  if (isDismissed) return null;

  const current = notifications[currentIndex];

  return (
    <aside
      id="social-proof-toast"
      aria-label="Notificação de compra recente"
      className={`fixed bottom-4 left-4 z-[90] w-[calc(100%-2rem)] max-w-xs sm:max-w-sm transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-[#2F9E44]/30 rounded-2xl p-3.5 shadow-2xl shadow-black/15 flex items-start gap-3 relative overflow-hidden">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#2F9E44]" />

        {/* Icon */}
        <div className="size-9 rounded-full bg-[#2F9E44]/15 text-[#2F9E44] flex items-center justify-center flex-shrink-0 mt-0.5">
          <ShoppingBag className="size-4.5" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-4">
          <p className="font-display font-black text-xs text-[#1A1D1F] truncate">
            {current.name}
          </p>
          <p className="text-[11px] font-bold text-[#2F9E44] leading-tight my-0.5">
            {current.action}
          </p>
          <p className="text-[10px] text-[#6B7280] font-medium flex items-center gap-1">
            <ShieldCheck className="size-3 text-[#2563EB]" />
            <span>🛡️ Compra verificada · {current.time}</span>
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          aria-label="Fechar notificação"
          onClick={() => setIsDismissed(true)}
          className="text-[#6B7280] hover:text-[#1A1D1F] p-1 rounded-md transition-colors cursor-pointer"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </aside>
  );
};
