import { Helmet } from "react-helmet-async";
import styles from "./servicos.module.css";

import SwiperServices from "../../components/swiperServices/swiperServices";
import QuadradosBackground from "../../components/quadradosBackground/quadradosBackground";

import Plano4hrs from "../../assets/plano4hrs.svg";
import PlanoSemanal from "../../assets/planoSemanal.svg";
import PlanoQuinzenal from "../../assets/planoQuinzenal.svg";
import PlanoMensal from "../../assets/planoMensal.svg";

import FadeIn from "../../components/fadeIn/fadeIn";

function Servicos() {
  const cards = [
    {
      title: "Plano Flexível",
      text: "Ideal para organizar áreas específicas e manter tudo sob controle.",
      img: Plano4hrs,
    },
    {
      title: "Plano Semanal",
      text: "Organização constante para quem gosta da casa sempre impecável.",
      img: PlanoSemanal,
    },
    {
      title: "Plano Quinzenal",
      text: "Revisão e harmonia a cada 15 dias.",
      img: PlanoQuinzenal,
    },
    {
      title: "Plano Mensal",
      text: "Organização completa e leveza no seu lar todo mês.",
      img: PlanoMensal,
    },
  ];
  return (
    <div className={styles.services_container}>
      <Helmet>
        <title>Serviços | Nana Bernardo - Personal Organizer</title>
        <meta
          name="description"
          content="Conheça os serviços de organização oferecidos por Nana Bernardo, especialista em organização residencial e empresarial. Transforme seu espaço com praticidade e eficiência."
        />
        <meta
          name="keywords"
          content="serviços de organização, personal organizer, organização residencial, organização empresarial, otimização de espaços, consultoria em organização, Nana Bernardo"
        />
        <meta name="author" content="Nana Bernardo" />

        {/* Open Graph (Facebook) */}
        <meta
          property="og:title"
          content="Serviços | Nana Bernardo - Personal Organizer"
        />
        <meta
          property="og:description"
          content="Conheça os serviços de organização oferecidos por Nana Bernardo. Transforme seu espaço com praticidade e eficiência."
        />
        <meta
          property="og:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />
        <meta
          property="og:url"
          content="https://www.nanaorganizer.com.br/servicos"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="Serviços | Nana Bernardo - Personal Organizer"
        />
        <meta
          name="twitter:description"
          content="Conheça os serviços de organização oferecidos por Nana Bernardo. Transforme seu espaço com praticidade e eficiência."
        />
        <meta
          name="twitter:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />

        {/* URL canônica */}
        <link
          rel="canonical"
          href="https://www.nanaorganizer.com.br/servicos"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Serviços de Organização | Nana Bernardo",
            provider: {
              "@type": "Person",
              name: "Nana Bernardo",
            },
            description:
              "Serviços de personal organizer para organização de residências, escritórios e espaços comerciais.",
            url: "https://www.nanaorganizer.com.br/servicos",
            sameAs: [
              "https://www.instagram.com/nanabernardoorganizer",
              "https://www.facebook.com/nanabernardoorganizer",
            ],
          })}
        </script>
      </Helmet>

      <QuadradosBackground />
      <FadeIn>
        <div className={styles.swiper_container}>
          <div className={styles.line}></div>
          <SwiperServices />
        </div>
      </FadeIn>
      <FadeIn>
        <div className={styles.plans_container}>
          <h3>
            <span>PLANOS</span> DE MANUTENÇÃO PERIÓDICA
          </h3>
          <div className={styles.plans_text}>
            <h4>Organização contínua para manter sua casa em ordem sempre</h4>
            <p>
              Escolha o formato que mais combina com a sua rotina e deixe o
              resto com a gente.
            </p>
          </div>
          <div className={styles.plans_cards}>
            {cards.map((card, index) => (
              <div className={styles.plan_card} key={index}>
                <div className={styles.plan_card_text}>
                  <img src={card.img} alt={card.title} />
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/5511982641514?text=Olá, tenho interesse no ${encodeURIComponent(
                        card.title
                      )}. Pode me enviar mais detalhes?`,
                      "_blank"
                    )
                  }
                >
                  SOLICITAR ORÇAMENTO
                </button>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Servicos;
