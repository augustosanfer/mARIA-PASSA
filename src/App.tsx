/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Lock } from "lucide-react";

export default function App() {
  const handleContinue = () => {
    window.open("https://devocionalmaria.codigosdaautocura.online/", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f9f7f2] font-sans text-[#2c2c2c] flex flex-col items-center selection:bg-[#1a365d]/30">
      {/* Progress Bar Section */}
      <div className="w-full bg-white py-8 border-b border-gray-100 shadow-sm">
        <div className="max-w-md mx-auto px-6 space-y-4 text-center">
          <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-[#1a365d]"
            />
          </div>
          <p className="text-[#1a365d] font-serif text-xl md:text-2xl font-semibold">
            Tudo certo até aqui.
          </p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-10 flex flex-col items-center text-center space-y-8">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#1a365d] font-serif text-3xl md:text-4xl font-bold leading-tight"
        >
          Coloque seus dias nas mãos de Maria.
        </motion.h1>

        {/* CTA Section */}
        <div className="w-full space-y-6 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium text-sm md:text-base"
          >
            Clique no botão para continuar!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContinue}
            className="w-full max-w-md py-5 bg-[#1a365d] text-white font-bold text-lg md:text-xl rounded-2xl shadow-lg hover:bg-[#1e4a8a] transition-all flex items-center justify-center gap-3"
          >
            👉 Sim, quero viver essa caminhada
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#b8860b] font-semibold uppercase tracking-[0.15em] text-xs md:text-sm"
          >
            Dê esse passo de fé agora.
          </motion.p>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base md:text-lg text-gray-600 leading-relaxed font-light italic max-w-2xl"
        >
          Um devocional diário para rezar, confiar e sentir-se espiritualmente acompanhado(a) pela Mãe que intercede por você.
        </motion.p>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-8 px-6 text-center border-t border-gray-100 bg-white/50">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
          <Lock className="w-3 h-3" />
          Ambiente Seguro e Protegido
        </p>
      </footer>
    </div>
  );
}
