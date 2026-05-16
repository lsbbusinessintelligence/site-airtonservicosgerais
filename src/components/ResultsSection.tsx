import { motion } from "framer-motion";

const photos = [
  {
    src: "/images/airton/AIRTON-FOTO01.jpeg",
    alt: "Airton Serviços Gerais realizando reparo hidráulico em apartamento em São Paulo",
  },
  {
    src: "/images/airton/AIRTON-FOTO02.jpeg",
    alt: "Serviço de pedreiro e marido de aluguel em residência na região de São Paulo",
  },
  {
    src: "/images/airton/AIRTON-FOTO03.jpeg",
    alt: "Profissional da Airton Serviços Gerais realizando instalação elétrica em São Paulo",
  },
  {
    src: "/images/airton/AIRTON-FOTO04.jpeg",
    alt: "Reforma e assentamento de piso porcelanato em apartamento em São Paulo - SP",
  },
  {
    src: "/images/airton/AIRTON-FOTO05.jpeg",
    alt: "Serviço de encanador e desentupimento executado pela Airton Serviços Gerais em São Paulo",
  },
  {
    src: "/images/airton/AIRTON-FOTO06.jpeg",
    alt: "Marido de aluguel realizando pequenos reparos domésticos em São Paulo",
  },
  {
    src: "/images/airton/AIRTON-FOTO07.jpeg",
    alt: "Airton Serviços Gerais — serviços gerais de qualidade em São Paulo e região metropolitana",
  },
];

const ResultsSection = () => (
  <section className="py-20 md:py-28 bg-background" aria-labelledby="resultados-heading">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 id="resultados-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Trabalhos <span className="text-gradient">Realizados em São Paulo</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Veja exemplos reais dos serviços de marido de aluguel, pedreiro, encanador e
          eletricista executados pela Airton Serviços Gerais
        </p>
      </motion.div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="break-inside-avoid overflow-hidden rounded-xl border border-border card-hover m-0"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
