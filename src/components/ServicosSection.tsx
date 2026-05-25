import { motion } from "framer-motion";
import { HardHat, Droplets, Zap, Wind, Wrench, CheckCircle2, PaintBucket, Search } from "lucide-react";

// ─── Serviços Principais (destaque máximo) ───────────────────────────────────
const featuredServices = [
  {
    icon: Wind,
    title: "Desentupidora Profissional",
    keyword: "Carro-chefe",
    badge: "bg-accent text-accent-foreground",
    desc: "Desentupimento industrial com máquinas motorizadas de grande porte para pias, ralos, vasos sanitários, caixas de gordura e tubulações de grande diâmetro. Tecnologia profissional para resolver o que equipamentos convencionais não conseguem.",
    items: [
      "Máquinas desentupidoras motorizadas industriais",
      "Desentupimento de vasos sanitários e ralos",
      "Limpeza de caixa de gordura e esgoto",
      "Desobstrução de tubulações de grande porte",
    ],
  },
  {
    icon: Search,
    title: "Caça Vazamento",
    keyword: "Tecnologia digital",
    badge: "bg-primary text-primary-foreground",
    desc: "Localização precisa e não-invasiva de vazamentos ocultos em paredes, lajes e pisos utilizando geofone e equipamentos de detecção digital. Evite quebras desnecessárias — encontramos o ponto exato do vazamento antes de qualquer intervenção.",
    items: [
      "Geofone e detecção digital de vazamentos",
      "Localização precisa sem quebra-quebra",
      "Vazamentos em paredes, lajes e pisos",
      "Laudos técnicos para seguro e condomínio",
    ],
  },
];

// ─── Serviços Complementares ─────────────────────────────────────────────────
const secondaryServices = [
  {
    icon: Zap,
    title: "Elétrica",
    desc: "Instalação de tomadas, chuveiros, disjuntores, iluminação LED e reparos em curtos-circuitos.",
  },
  {
    icon: Droplets,
    title: "Encanamento",
    desc: "Troca de reparos, instalação de torneiras e pias, e manutenção de tubulações residenciais.",
  },
  {
    icon: HardHat,
    title: "Pedreiro",
    desc: "Assentamento de pisos, porcelanatos, revestimentos e pequenas reformas estruturais.",
  },
  {
    icon: PaintBucket,
    title: "Pintura Residencial e Predial",
    desc: "Especialista em pintura de prédios e fachadas com uso de cadeirinha suspensa / NR-35. Acabamento profissional em ambientes internos e externos.",
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
          Serviços Técnicos em{" "}
          <span className="text-gradient">São Paulo - SP</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Equipamentos profissionais e técnica especializada para resolver o que
          outros não conseguem
        </p>
      </motion.div>

      {/* ── Serviços Principais ──────────────────────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {featuredServices.map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="p-7 rounded-2xl bg-card border-2 border-accent/30 card-hover service-accent relative group flex flex-col shadow-sm"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center relative">
                <service.icon className="w-7 h-7 text-accent relative z-10" />
                <div className="absolute inset-0 bg-accent/25 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${service.badge}`}>
                {service.keyword}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm mb-5 flex-1 leading-relaxed">{service.desc}</p>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      {/* ── Serviços Complementares ──────────────────────────────────────── */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4 text-center">
          Serviços Complementares
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryServices.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-xl bg-secondary/60 border border-border card-hover group flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <service.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-sm font-bold">{service.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ── CTA card ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-6 rounded-xl bg-primary text-primary-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
      >
        <div>
          <h3 className="text-lg font-bold mb-1">Precisa de um diagnóstico técnico?</h3>
          <p className="text-primary-foreground/75 text-sm leading-relaxed">
            Descreva o problema pelo WhatsApp. A Airton Serviços avalia qualquer situação em São Paulo.
          </p>
        </div>
        <a
          href="https://wa.me/5511974743793?text=Ol%C3%A1!%20Encontrei%20o%20site%20no%20Google.%20Preciso%20de%20ajuda%20com%20um%20reparo%2Fservi%C3%A7o."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all"
        >
          <Wrench className="w-4 h-4" />
          Consultar pelo WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default ServicosSection;
