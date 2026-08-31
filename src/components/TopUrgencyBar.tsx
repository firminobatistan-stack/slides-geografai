import React, { useState, useEffect } from 'react';
import { AlarmClock } from 'lucide-react';

export const TopUrgencyBar: React.FC = () => {
  // Start from 23:59:47 = 23*3600 + 59*60 + 47 = 86387 seconds
  const [timeLeft, setTimeLeft] = useState<number>(86387);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 86387; // loop back if reaches 0
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const format2 = (num: number) => String(num).padStart(2, '0');

  return (
    <aside
      id="top-urgency-bar"
      aria-label="Barra de oferta com tempo limitado"
      className="sticky top-0 z-50 bg-[#DC2626] text-white shadow-md py-2 px-3 sm:px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <div className="flex items-center gap-2 font-display font-black text-xs sm:text-sm tracking-wide uppercase">
          <AlarmClock className="size-4 sm:size-5 animate-pulse text-white flex-shrink-0" />
          <span>OFERTA ESPECIAL · EXPIRA EM</span>
        </div>

        {/* Tabular countdown blocks */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="bg-white text-[#DC2626] font-display font-black text-xs sm:text-sm px-2 py-0.5 rounded shadow-sm min-w-[28px] tabular-nums text-center">
              {format2(hours)}
            </span>
            <span className="text-[9px] uppercase tracking-wider font-semibold opacity-90 mt-0.5">horas</span>
          </div>

          <span className="font-bold text-xs -mt-3">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="bg-white text-[#DC2626] font-display font-black text-xs sm:text-sm px-2 py-0.5 rounded shadow-sm min-w-[28px] tabular-nums text-center">
              {format2(minutes)}
            </span>
            <span className="text-[9px] uppercase tracking-wider font-semibold opacity-90 mt-0.5">min</span>
          </div>

          <span className="font-bold text-xs -mt-3">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="bg-white text-[#DC2626] font-display font-black text-xs sm:text-sm px-2 py-0.5 rounded shadow-sm min-w-[28px] tabular-nums text-center">
              {format2(seconds)}
            </span>
            <span className="text-[9px] uppercase tracking-wider font-semibold opacity-90 mt-0.5">seg</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
