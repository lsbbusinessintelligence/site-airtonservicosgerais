import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona o serviço de caça vazamento da Airton Serviços?",
    a: "Utilizamos geofone e equipamentos de detecção digital para localizar vazamentos ocultos em paredes, lajes e pisos sem quebra-quebra desnecessária. O equipamento capta o som da água escapando e indica o ponto exato do vazamento, garantindo uma intervenção cirúrgica e econômica.",
  },
  {
    q: "Como identificar vazamentos ocultos na minha casa?",
    a: "Sinais de vazamento oculto incluem: manchas de umidade em paredes ou teto, som de água correndo com torneiras fechadas, aumento inexplicável na conta de água, mofo em locais secos e pressão baixa em torneiras. Ao identificar qualquer sinal, chame a Airton Serviços para um diagnóstico com geofone.",
  },
  {
    q: "Quem faz serviço de desentupimento profissional em São Paulo?",
    a: "A Airton Serviços realiza desentupimento com máquinas motorizadas de grande porte em São Paulo e região metropolitana. Atendemos pias, ralos, vasos sanitários, caixas de gordura e tubulações de grande diâmetro com tecnologia industrial.",
  },
  {
    q: "O serviço de pintura de fachada com cadeirinha (NR-35) é seguro?",
    a: "Sim. A Airton Serviços é especialista em pintura de prédios e fachadas com uso de cadeirinha suspensa seguindo as normas NR-35 (trabalho em altura). Todos os equipamentos de proteção são utilizados conforme a regulamentação vigente.",
  },
  {
    q: "A Airton Serviços atende emergências elétricas em São Paulo?",
    a: "Sim. A Airton Serviços atende reparos elétricos urgentes em São Paulo e região, incluindo curtos-circuitos, disjuntores desarmados, instalação de chuveiros e problemas em quadros elétricos. Entre em contato pelo WhatsApp para atendimento.",
  },
  {
    q: "Quais regiões de São Paulo a Airton Serviços atende?",
    a: "Atendemos toda a cidade de São Paulo e a região metropolitana, incluindo Zona Sul, Zona Norte, Zona Leste, Zona Oeste, Centro e municípios da Grande São Paulo. Para confirmar a disponibilidade na sua localização, entre em contato pelo WhatsApp.",
  },
  {
    q: "O Airton emite laudo técnico para seguro e condomínio?",
    a: "Sim. Para serviços de caça vazamento, a Airton Serviços pode fornecer relatório técnico com a descrição do problema e solução aplicada, documentação útil para acionar seguro residencial ou prestar contas ao condomínio.",
  },
];

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-border rounded-xl overflow-hidden bg-card"
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-foreground hover:bg-secondary/60 transition-colors gap-4"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="flex-1 text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/50">
          <p className="mt-4">{a}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-secondary/40" aria-labelledby="faq-heading">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Perguntas Frequentes sobre{" "}
          <span className="text-gradient">Desentupidora e Caça Vazamento em São Paulo</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Tire suas dúvidas sobre desentupidora industrial, caça vazamento com geofone,
          eletricista, encanamento e pintura em São Paulo
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((item, i) => (
          <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
