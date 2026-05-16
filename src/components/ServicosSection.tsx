import { motion } from "framer-motion";
import { Wrench, HardHat, Droplets, Zap, Wind, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Marido de Aluguel",
    keyword: "Serviço mais procurado",
    desc: "Pequenos reparos domésticos, instalação de suportes, prateleiras, montagem de móveis e manutenções do dia a dia na sua casa ou apartamento.",
    items: ["Instalação de suportes e prateleiras", "Montagem e desmontagem de móveis", "Troca de fechaduras e dobradiças", "Reparos em geral sob demanda"],
  },
  {
    icon: HardHat,
    title: "Pedreiro e Reformas",
    keyword: "Reformas residenciais",
    desc: "Reparos em alvenaria, assentamento de pisos e porcelanatos, revestimentos e pequenas reformas estruturais em residências e comércios.",
    items: ["Assentamento de piso e porcelanato", "Rejuntamento e calafetar", "Reboco e massa corrida", "Reformas de banheiro e cozinha"],
  },
  {
    icon: Droplets,
    title: "Encanador e Hidráulica",
    keyword: "Conserto de vazamentos",
    desc: "Conserto de vazamentos, troca de reparos, instalação de torneiras e pias, e manutenção de tubulações residenciais e comerciais.",
    items: ["Conserto de vazamentos urgentes", "Troca de torneiras e sifões", "Instalação de caixas d'água", "Desentupimento de ralos e pias"],
  },
  {
    icon: Zap,
    title: "Eletricista Residencial",
    keyword: "Instalações elétricas",
    desc: "Instalação de tomadas, chuveiros, disjuntores, iluminação LED e reparos em curtos-circuitos com segurança e conformidade com as normas.",
    items: ["Instalação de tomadas e interruptores", "Troca de chuveiro elétrico", "Troca de disjuntores", "Reparo em curtos-circuitos"],
  },
  {
    icon: Wind,
    title: "Desentupidora",
    keyword: "Desentupimento em SP",
    desc: "Desentupimento ágil e sem quebra-quebra de pias, ralos, vasos sanitários e caixas de gordura em São Paulo e região metropolitana.",
    items: ["Desentupimento de vasos sanitários", "Desentupimento de pias e ralos", "Limpeza de caixa de gordura", "Desobstrução de tubulações"],
  },
];

const ServicosSection = () => (
  <section className="py-20 md:py-28 bg-background" aria-labelledby="servicos-heading">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 id="servicos-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Serviços Gerais em{" "}
          <span className="text-gradient">São Paulo - SP</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Um único profissional multidisciplinar para resolver todos os reparos da
          sua casa ou comércio em São Paulo e região
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover service-accent relative group flex flex-col"
          >
            {/* Icon & badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center relative">
                <service.icon className="w-6 h-6 text-accent relative z-10" />
                <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full border border-accent/20">
                {service.keyword}
              </span>
            </div>

            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">{service.desc}</p>

            <ul className="space-y-1.5">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-6 rounded-xl bg-primary text-primary-foreground flex flex-col items-start justify-between"
        >
          <div>
            <h3 className="text-lg font-bold mb-3">Não encontrou o serviço?</h3>
            <p className="text-primary-foreground/75 text-sm leading-relaxed">
              Entre em contato pelo WhatsApp e descreva o problema. A Airton Serviços
              Gerais avalia qualquer reparo em São Paulo.
            </p>
          </div>
          <a
            href="https://wa.me/5511974743793?text=Ol%C3%A1!%20Encontrei%20o%20site%20no%20Google.%20Preciso%20de%20ajuda%20com%20um%20reparo%2Fservi%C3%A7o."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all"
          >
            <Wrench className="w-4 h-4" />
            Consultar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServicosSection;
