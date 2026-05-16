import { motion } from "framer-motion";
import { UserCheck, Clock, BadgeCheck, Banknote } from "lucide-react";

const diferenciais = [
  {
    icon: UserCheck,
    title: "Profissionalismo Multidisciplinar",
    desc: "Um único profissional qualificado para resolver todos os problemas da sua casa — elétrica, hidráulica, alvenaria e mais. Sem a burocracia de contratar vários especialistas.",
  },
  {
    icon: Clock,
    title: "Atendimento Ágil em São Paulo",
    desc: "Chegamos rápido para solucionar emergências na capital e região metropolitana. Seu problema não pode esperar e nós entendemos isso.",
  },
  {
    icon: Banknote,
    title: "Transparência e Preço Justo",
    desc: "Orçamento claro, honesto e sem surpresas antes do início de qualquer trabalho. Você sabe exatamente o que vai pagar.",
  },
  {
    icon: BadgeCheck,
    title: "Garantia de Serviço",
    desc: "Trabalho limpo, feito para durar e sem retrabalho. Todos os serviços são executados com materiais de qualidade e responsabilidade técnica.",
  },
];

const DiferenciaisSection = () => (
  <section className="py-20 md:py-28 bg-secondary/50" aria-labelledby="diferenciais-heading">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 id="diferenciais-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Por que escolher a{" "}
          <span className="text-gradient">Airton Serviços Gerais?</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Compromisso com qualidade e confiança em cada serviço realizado em São Paulo
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {diferenciais.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 mx-auto border border-accent/20">
              <item.icon className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DiferenciaisSection;
