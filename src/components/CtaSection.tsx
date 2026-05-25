import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511974743793?text=Ol%C3%A1!%20Encontrei%20o%20site%20no%20Google.%20Preciso%20de%20ajuda%20com%20um%20reparo%2Fservi%C3%A7o.";

const CtaSection = () => (
  <section className="hero-gradient py-20 md:py-28" aria-labelledby="cta-heading">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
          Sua casa precisa de reparos?{" "}
          <span className="text-gradient">Não adie mais o conserto!</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Para serviços de <strong className="text-white/90">desentupidora, caça vazamento, pedreiro, encanador e eletricista</strong>{" "}
          em São Paulo, fale com a
          Airton Serviços agora. Orçamento gratuito e serviço garantido.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all duration-200 glow-border"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "click_whatsapp", {
                  event_category: "lead",
                  event_label: "botao_whatsapp_cta",
                });
              }
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento no WhatsApp
          </a>
          <a
            href="tel:+5511974743793"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg border border-white/25 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            (11) 97474-3793
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
