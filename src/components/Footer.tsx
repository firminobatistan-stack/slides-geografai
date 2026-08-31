import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const handleOpenLegal = (title: string, content: string) => {
    setModalContent({ title, content });
  };

  return (
    <footer
      id="footer-section"
      aria-label="Rodapé do site"
      className="bg-white border-t border-[#E7E3DA] py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#6B7280]"
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Brand */}
        <div className="font-display font-black text-base sm:text-lg text-[#1A1D1F] flex items-center justify-center gap-2">
          <span>🌎 Slides de Geografia</span>
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs text-[#6B7280]">
          © 2026 Slides de Geografia. Todos os direitos reservados.
        </p>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#6B7280]">
          <button
            type="button"
            onClick={() =>
              handleOpenLegal(
                'Termos de Uso',
                'Ao adquirir o pacote +300 Slides de Geografia, você adquire uma licença individual para utilização em suas aulas, planejamentos escolares e atividades pedagógicas. É proibida a revenda não autorizada ou redistribuição pública.'
              )
            }
            className="hover:text-[#1A1D1F] underline transition-colors cursor-pointer"
          >
            Termos de Uso
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() =>
              handleOpenLegal(
                'Políticas de Privacidade',
                'Seus dados de pagamento e e-mail estão 100% protegidos com criptografia SSL de ponta a ponta. Não compartilhamos suas informações com terceiros.'
              )
            }
            className="hover:text-[#1A1D1F] underline transition-colors cursor-pointer"
          >
            Privacidade
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() =>
              handleOpenLegal(
                'Suporte ao Professor',
                'Nosso time de suporte atende de segunda a sexta-feira via e-mail e WhatsApp para tirar dúvidas sobre acesso, download e utilização dos slides de geografia.'
              )
            }
            className="hover:text-[#1A1D1F] underline transition-colors cursor-pointer"
          >
            Suporte
          </button>
        </div>
      </div>

      {/* Simple Legal Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[110] flex items-center justify-center p-4 text-left"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-white text-[#1A1D1F] p-6 sm:p-8 rounded-2xl max-w-md w-full shadow-2xl border border-[#E7E3DA]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display font-bold text-lg text-[#1A1D1F] mb-3">
              {modalContent.title}
            </h3>
            <p className="font-sans text-sm text-[#6B7280] leading-relaxed mb-6">
              {modalContent.content}
            </p>
            <button
              type="button"
              onClick={() => setModalContent(null)}
              className="w-full bg-[#2F9E44] text-white font-display font-bold text-sm py-2.5 rounded-full hover:bg-[#258238] transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
