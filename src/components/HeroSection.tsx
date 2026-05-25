import { motion } from "framer-motion";
import { MessageCircle, Phone, Check, HardHat, Droplets, Wind, Wrench } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511974743793?text=Ol%C3%A1!%20Encontrei%20o%20site%20no%20Google.%20Preciso%20de%20ajuda%20com%20um%20reparo%2Fservi%C3%A7o.";
const PHONE_URL = "tel:+5511974743793";

const fireGA = (label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click_whatsapp", {
      event_category: "lead",
      event_label: label,
    });
  }
};

const HeroSection = () => (
  <header className="hero-gradient relative overflow-hidden min-h-[92vh] flex items-center">
    {/* Background orbs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-accent/4 blur-3xl animate-pulse" style={{ animationDuration: "7s" }} />
    </div>

    {/* Diagonal accent strip — desktop */}
    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[42%] pointer-events-none overflow-hidden">
      <div
        className="absolute top-0 -right-8 bottom-0 opacity-30"
        style={{
          background: "linear-gradient(160deg, hsl(215 70% 12%) 0%, hsl(215 60% 20%) 100%)",
          clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: "17.5%",
          width: "2px",
          background:
            "linear-gradient(180deg, transparent 0%, hsl(28 95% 52% / 0.5) 35%, hsl(28 95% 52% / 0.3) 70%, transparent 100%)",
        }}
      />
    </div>

    <div className="container relative z-10 py-24 md:py-32">
      <div className="lg:max-w-[58%]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="flex items-center gap-3 mb-7">
            <div className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, hsl(28 95% 42%) 0%, hsl(28 95% 52%) 100%)",
                border: "1px solid hsl(28 95% 60% / 0.4)",
                color: "hsl(215 75% 10%)",
              }}
            >
              <Wrench className="w-4 h-4 flex-shrink-0" />
              <span>SERVIÇOS GERAIS EM SÃO PAULO</span>
            </div>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-5">
            Especialista em{" "}
            <span className="text-gradient">serviços gerais</span>{" "}
            residenciais e comerciais em São Paulo
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
            Desentupidora profissional, caça vazamento, eletricista, encanador,
            pedreiro e pintura em <strong className="text-white/90">São Paulo - SP</strong> e
            região metropolitana.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all duration-200 glow-border"
              onClick={() => fireGA("botao_whatsapp_hero")}
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento Rápido
            </a>
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg border border-white/25 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              (11) 97474-3793
            </a>
          </div>

          {/* Trust bullets */}
          <ul className="flex flex-col gap-3">
            {[
              "Atendimento em toda São Paulo e região metropolitana",
              "Orçamento gratuito e transparente pelo WhatsApp",
              "Equipamentos industriais de desentupimento e geofone para caça vazamento",
              "Serviço garantido e trabalho limpo, sem retrabalho",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/75 text-sm md:text-base">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Logo / right side image — desktop */}
      <motion.div
        className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[42%] items-center justify-center pointer-events-none"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative mt-8 mr-12 flex flex-col items-center gap-6">
          {/* Mascot placeholder — trocar pelo avatar do personagem quando disponível */}
          <div className="w-56 h-56 rounded-full border-4 border-accent/40 shadow-2xl overflow-hidden bg-primary/60 flex items-center justify-center relative">
            <img
              src="/images/airton/AIRTON-LOGO.jpeg"
              alt="Airton Serviços — Desentupidora profissional e caça vazamento em São Paulo"
              className="w-full h-full object-contain"
            />
            {/* Anel decorativo */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/20 pointer-events-none" />
          </div>
          <div className="flex gap-8 text-center">
            {[
              { icon: Wind, label: "Desentupidora" },
              { icon: Droplets, label: "Caça Vazamento" },
              { icon: HardHat, label: "Elétrica e Pintura" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white/65 text-xs font-medium max-w-[80px] leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </header>
);

export default HeroSection;
