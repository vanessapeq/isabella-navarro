"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BioPage() {
  const timeline = [
    { year: "2024", text: "Residência artística em Lisboa, Portugal." },
    { year: "2023", text: "Série de azulejaria contemporânea apresentada em exposições no Brasil e em Portugal." },
    { year: "2021", text: "Início da série 'Cidades Imaginadas', entre desenho, foto e objeto." },
    { year: "2018", text: "Primeiras intervenções urbanas em spray e murais." }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section className="section-padding min-h-screen bg-slate-50/30">
      <div className="container-base">
        {/* Header Section */}
        <header className="mb-16 space-y-4">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeIn}
            className="text-[11px] font-grotesk tracking-[0.3em] uppercase text-slate-500"
          >
            Trajetória
          </motion.p>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
            className="font-display text-4xl sm:text-5xl text-slate-900 leading-tight"
          >
            BIOGRAFIA
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] bg-slate-300"
          />
        </header>

        {/* First Section: Intro & Portrait */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeIn}
            className="space-y-6 text-base text-slate-700 leading-relaxed font-light"
          >
            <p className="text-xl text-slate-900 font-medium leading-snug">
              Isabella Navarro é artista visual brasileira que vive em Lisboa.
              Sua produção demonstra questões do desenvolvimento cultural e da relação com suas raízes brasileiras e portuguesas.
            </p>
            <p>
              Explora identidade, imigração, memória e fé por meio de pinturas, objetos e instalações interativas,
              com especial dedicação à azulejaria portuguesa. Formada pela UFRJ e doutoranda na Universidade de Lisboa,
              integra à sua prática reflexões sobre arte e tecnologia.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeIn}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700"
          >
            <Image
              src="/images/IsabellaNavarro_PremioBrasileiraChiado-46.jpg"
              alt="Isabela Navarro - Processo Criativo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Process Section */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start mb-24">
          <div className="order-2 lg:order-1 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeIn}
              className="relative aspect-square overflow-hidden rounded-3xl shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-700"
            >
              <Image
                src="/images/public-bio-isabela.jpg"
                alt="Isabela Navarro"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              variants={fadeIn}
              className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-xl translate-x-12 translate-y-[-20%] z-10 hidden lg:block"
            >
              <Image
                src="/images/pintura-isabella-navarro-2.jpeg"
                alt="Processo de Pintura"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            variants={fadeIn}
            className="order-1 lg:order-2 space-y-8 text-sm text-slate-600 leading-relaxed"
          >
            <div className="space-y-6">
              <p>
                Investigando como os universos da arte e tecnologia dialogam com tradição, contemporaneidade
                e processos culturais em transformação, Isabella estabelece conexões poéticas que articulam
                crítica, experiência sensorial e experimentação artística.
              </p>
              <p>
                Pioneira na criação de aplicações artísticas para dispositivos móveis, participou de um coletivo
                de arte digital e expôs no Museu da Imagem e do Som de São Paulo e no MobileFest com o projeto Invisível,
                primeiro app de arte em realidade aumentada publicado na Apple Store no Brasil.
              </p>
              <p>
                Em Portugal, firmou parceria com a tradicional Fábrica Viúva Lamego, criando painéis que aliam técnica
                tradicional a realidade aumentada. Uma de suas obras "Retratos da fé" (2022) integra o acervo permanente
                do Santuário de Fátima e foi exibida na exposição Os Rostos de Fátima.
              </p>
            </div>

            <div className="lg:hidden relative aspect-[3/2] overflow-hidden rounded-3xl shadow-xl mt-8">
              <Image
                src="/images/pintura-isabella-navarro-2.jpeg"
                alt="Processo de Pintura"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Final Text Block */}
        <div className="max-w-3xl mx-auto mb-24 space-y-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={7}
            variants={fadeIn}
            className="space-y-6 text-sm text-slate-600"
          >
            <p>
              Participou também da Bienal de Arte Cristã de Lisboa (2023), da exposição no Museu de Lisboa
              e do Convento da Graça, com obras que exploram a relação entre fé, herança visual e contemporaneidade.
            </p>
            <p className="text-slate-900 font-medium italic border-y border-slate-100 py-8">
              "Em 2024 expôs a obra 'A Brasileira', Café e Galeria 'A Brasileira', Lisboa, Portugal,
              da série 'Espaços', trabalho que estabelece uma reflexão da artista sobre as relações entre os dois países."
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={8}
          variants={fadeIn}
          className="max-w-4xl mx-auto bg-white p-12 rounded-[3rem] shadow-soft border border-slate-100"
        >
          <header className="mb-12 flex items-center gap-4">
            <h2 className="font-display text-2xl text-slate-900">
              LINHA DO TEMPO
            </h2>
            <div className="h-[1px] flex-1 bg-slate-100" />
          </header>

          <ul className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[1px] before:bg-slate-100">
            {timeline.map((item, idx) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex gap-8 group"
              >
                <div className="relative z-10 mt-1 h-6 w-6 rounded-full border border-slate-200 bg-white flex items-center justify-center transition-colors group-hover:border-navy-azulejo">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-navy-azulejo" />
                </div>
                <div className="flex-1 pb-8 border-b border-slate-50 last:border-0">
                  <p className="text-xs font-grotesk uppercase tracking-[0.2em] text-navy-azulejo font-semibold mb-2">
                    {item.year}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </div>
    </section>
  );
}



