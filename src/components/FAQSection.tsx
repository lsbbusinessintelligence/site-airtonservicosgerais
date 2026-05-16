import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O que faz um marido de aluguel em São Paulo?",
    a: "O marido de aluguel realiza pequenos reparos e serviços domésticos como instalação de prateleiras, suportes de TV, montagem de móveis, pequenos consertos hidráulicos e elétricos, troca de fechaduras e outros serviços do dia a dia que dispensam obra. A Airton Serviços Gerais atende em toda São Paulo e região metropolitana.",
  },
  {
    q: "Como identificar vazamentos na minha casa?",
    a: "Sinais de vazamento incluem: manchas de umidade em paredes ou teto, som de água correndo com torneiras fechadas, aumento inexplicável na conta de água, mofo em locais secos e pressão baixa em torneiras. Ao identificar qualquer sinal, chame um encanador profissional imediatamente. A Airton Serviços Gerais atende emergências de encanamento em São Paulo.",
  },
  {
    q: "Quem faz serviço de desentupidor em São Paulo?",
    a: "A Airton Serviços Gerais realiza desentupimento de pias, ralos, vasos sanitários e caixas de gordura em São Paulo e região metropolitana. O serviço é feito com agilidade e, sempre que possível, sem quebra-quebra.",
  },
  {
    q: "Qual o preço de um pedreiro em São Paulo?",
    a: "O valor do serviço de pedreiro em São Paulo varia conforme o tipo e o tamanho do serviço (assentamento de piso, reboco, reforma de banheiro, etc.). A Airton Serviços Gerais oferece orçamento gratuito e transparente pelo WhatsApp antes de iniciar qualquer trabalho.",
  },
  {
    q: "A Airton Serviços Gerais atende emergências elétricas?",
    a: "Sim. A Airton Serviços Gerais atende reparos elétricos urgentes em São Paulo e região, incluindo curtos-circuitos, disjuntores desarmados, instalação de chuveiros e problemas em quadros elétricos. Entre em contato pelo WhatsApp para atendimento.",
  },
  {
    q: "Quais bairros de São Paulo a Airton Serviços Gerais atende?",
    a: "Atendemos toda a cidade de São Paulo e a região metropolitana, incluindo Zona Sul, Zona Norte, Zona Leste, Zona Oeste, Centro e municípios da Grande São Paulo. Para confirmar a disponibilidade na sua localização, entre em contato pelo WhatsApp.",
  },
  {
    q: "O Airton faz reformas completas de banheiro e cozinha?",
    a: "Sim. A Airton Serviços Gerais realiza reformas completas de banheiros e cozinhas em São Paulo, incluindo demolição, reboco, assentamento de porcelanato, instalações hidráulicas e elétricas. Solicite um orçamento pelo WhatsApp.",
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
          <span className="text-gradient">Serviços Gerais em São Paulo</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Tire suas dúvidas sobre marido de aluguel, pedreiro, encanador,
          eletricista e desentupimento em São Paulo
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
