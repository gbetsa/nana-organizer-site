import styles from "./sobre.module.css";

import SwiperValores from "../../components/swiperValores/swiperValores";
import QuadradosBackground from "../../components/quadradosBackground/quadradosBackground";

import FadeIn from "../../components/fadeIn/fadeIn";

import { Helmet } from "react-helmet-async";

function Sobre() {
  return (
    <div className={styles.sobre_container}>
      <Helmet>
        <title>Sobre | Nana Bernardo - Personal Organizer</title>
        <meta
          name="description"
          content="Conheça a missão, visão e valores da Nana Bernardo, especialista em organização de ambientes. Transforme seu espaço com a nossa expertise em organização e bem-estar."
        />
        <meta
          name="keywords"
          content="sobre, missão, visão, valores, personal organizer, organização de ambientes, Nana Bernardo"
        />
        <meta name="author" content="Nana Bernardo" />

        {/* Open Graph (Facebook) */}
        <meta
          property="og:title"
          content="Sobre | Nana Bernardo - Personal Organizer"
        />
        <meta
          property="og:description"
          content="Conheça a missão, visão e valores da Nana Bernardo, especialista em organização de ambientes."
        />
        <meta
          property="og:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />
        <meta
          property="og:url"
          content="https://www.nanaorganizer.com.br/sobre"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="Sobre | Nana Bernardo - Personal Organizer"
        />
        <meta
          name="twitter:description"
          content="Conheça a missão, visão e valores da Nana Bernardo, especialista em organização de ambientes."
        />
        <meta
          name="twitter:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />

        {/* URL canônica */}
        <link rel="canonical" href="https://www.nanaorganizer.com.br/sobre" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sobre | Nana Bernardo",
            description:
              "Conheça a missão, visão e valores da Nana Bernardo, especialista em organização de ambientes.",
            url: "https://www.nanaorganizer.com.br/sobre",
            sameAs: [
              "https://www.instagram.com/nanabernardoorganizer",
              "https://www.facebook.com/nanabernardoorganizer",
            ],
          })}
        </script>
      </Helmet>

      <QuadradosBackground />
      <FadeIn>
        <div className={styles.sectionOne}>
          <div className={styles.card}>
            <div className={styles.line}></div>
            <div className={styles.card_content}>
              <h4>Missão</h4>
              <p>
                Nossa <span>missão</span> é transformar lares em espaços
                acolhedores e organizados. Nosso compromisso é proporcionar
                soluções acessíveis e de alta qualidade para ajudar as pessoas a
                viverem com mais conforto e tranquilidade. Acreditamos que a{" "}
                <span>organização</span> é a chave para a harmonia e facilidade
                em casa, e desejamos ser seu parceiro nessa jornada.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.line}></div>
            <div className={styles.card_content}>
              <h4>Visão</h4>
              <p>
                Nossa <span>visão</span> é ser a referência em serviços de
                organização de ambientes no Brasil. Queremos ser reconhecidos
                pelo compromisso com a excelência, acessibilidade e pelo impacto
                positivo que trazemos às famílias. Ao criar espaços que promovem
                o bem-estar e a harmonia, aspiramos a contribuir para um lar
                mais organizado e feliz.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.sectionTwo}>
          <div className={styles.title}>
            <h3>VALORES E COMPROMISSOS</h3>
          </div>
          <div className={styles.swiper_container}>
            <div className={styles.line}></div>
            <SwiperValores />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Sobre;
