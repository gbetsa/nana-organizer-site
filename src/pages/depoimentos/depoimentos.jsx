import styles from "./depoimentos.module.css";
import SwiperDepoimentos from "../../components/swiperDepoimentos/swiperDepoimentos";
import QuadradosBackground from "../../components/quadradosBackground/quadradosBackground";

import FadeIn from "../../components/fadeIn/fadeIn";

import { Helmet } from "react-helmet-async";

function Depoimentos() {
  return (
    <div className={styles.depoimentos_container}>
      <Helmet>
        <title>Depoimentos | Nana Bernardo - Personal Organizer</title>
        <meta
          name="description"
          content="Confira os depoimentos de clientes satisfeitos com os serviços de organização de ambientes de Nana Bernardo, especialista em personal organizing."
        />
        <meta
          name="keywords"
          content="depoimentos, personal organizer, organização de ambientes, clientes satisfeitos, organização residencial, organização empresarial"
        />
        <meta name="author" content="Nana Bernardo" />

        {/* Open Graph (Facebook) */}
        <meta
          property="og:title"
          content="Depoimentos | Nana Bernardo - Personal Organizer"
        />
        <meta
          property="og:description"
          content="Confira os depoimentos de clientes satisfeitos com os serviços de organização de ambientes de Nana Bernardo."
        />
        <meta
          property="og:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />
        <meta
          property="og:url"
          content="https://www.nanaorganizer.com.br/depoimentos"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="Depoimentos | Nana Bernardo - Personal Organizer"
        />
        <meta
          name="twitter:description"
          content="Confira os depoimentos de clientes satisfeitos com os serviços de organização de ambientes de Nana Bernardo."
        />
        <meta
          name="twitter:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />

        {/* URL canônica */}
        <link
          rel="canonical"
          href="https://www.nanaorganizer.com.br/depoimentos"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ReviewPage",
            name: "Depoimentos | Nana Bernardo",
            description:
              "Confira os depoimentos de clientes satisfeitos com os serviços de personal organizer oferecidos por Nana Bernardo.",
            url: "https://www.nanaorganizer.com.br/depoimentos",
            sameAs: [
              "https://www.instagram.com/nanabernardoorganizer",
              "https://www.facebook.com/nanabernardoorganizer",
            ],
          })}
        </script>
      </Helmet>

      <QuadradosBackground />
      <FadeIn>
        <div className={styles.swiper_content}>
          <div className={styles.swiper_container}>
            <div className={styles.line}></div>
            <SwiperDepoimentos />
          </div>
          <button
            onClick={() => {
              window.open(
                "https://www.google.com/maps/place/Personal+Organizer+S%C3%A3o+Paulo+Zona+Sul+Nana+Bernardo/@-23.6814345,-46.9249719,85725m/data=!3m1!1e3!4m8!3m7!1s0xa88d99bec8cabe07:0x3d2142fdb3a8a43c!8m2!3d-23.6824124!4d-46.5952992!9m1!1b1!16s%2Fg%2F11p0s0ydfc?hl=pt&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D",
                "_blank"
              );
            }}
          >
            Deixe seu depoimento
          </button>
        </div>
      </FadeIn>
    </div>
  );
}

export default Depoimentos;
