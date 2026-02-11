import styles from "./projetos.module.css";
import QuadradosBackground from "../../components/quadradosBackground/quadradosBackground";
import SwiperClosetFeminino from "../../components/swiperClosetFeminino/swiperClosetFeminino";
import SwiperClosetMasculino from "../../components/swiperClosetMasculino/swiperClosetMasculino";
import SwiperSapateira from "../../components/swiperSapateira/swiperSapateira";
import SwiperBaby from "../../components/swiperBaby/swiperBaby";
import SwiperBanheiro from "../../components/swiperBanheiro/swiperBanheiro";
import SwiperRouparia from "../../components/swiperRouparia/swiperRouparia";

import FadeIn from "../../components/fadeIn/fadeIn";

import { Helmet } from "react-helmet-async";

function Projetos() {
  return (
    <div className={styles.projetos_container}>
      <Helmet>
        <title>Projetos | Nana Bernardo - Personal Organizer</title>
        <meta
          name="description"
          content="Confira os projetos realizados por Nana Bernardo, especialista em organização de ambientes como closets, sapateiras, banheiros e muito mais. Transforme seu espaço com eficiência."
        />
        <meta
          name="keywords"
          content="projetos realizados, personal organizer, organização de closets, organização de sapateira, organização de banheiro, organização de rouparia, Nana Bernardo"
        />
        <meta name="author" content="Nana Bernardo" />

        {/* Open Graph (Facebook) */}
        <meta
          property="og:title"
          content="Projetos Realizados | Nana Bernardo - Personal Organizer"
        />
        <meta
          property="og:description"
          content="Confira os projetos realizados por Nana Bernardo. Transforme seu espaço com eficiência."
        />
        <meta
          property="og:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />
        <meta
          property="og:url"
          content="https://www.nanaorganizer.com.br/projetos"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="Projetos Realizados | Nana Bernardo - Personal Organizer"
        />
        <meta
          name="twitter:description"
          content="Confira os projetos realizados por Nana Bernardo. Transforme seu espaço com eficiência."
        />
        <meta
          name="twitter:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />

        {/* URL canônica */}
        <link
          rel="canonical"
          href="https://www.nanaorganizer.com.br/projetos"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Projetos Realizados | Nana Bernardo",
            description:
              "Confira os projetos realizados por Nana Bernardo, especialista em organização de ambientes.",
            url: "https://www.nanaorganizer.com.br/projetos",
            sameAs: [
              "https://www.instagram.com/nanabernardoorganizer",
              "https://www.facebook.com/nanabernardoorganizer",
            ],
          })}
        </script>
      </Helmet>

      <QuadradosBackground />
      <FadeIn>
        <div className={styles.title}>
          <h3>PROJETOS REALIZADOS</h3>
        </div>
        <div className={styles.sectionOne}>
          <div className={styles.swiper_container}>
            <div className={styles.swiper_slide}>
              <SwiperClosetFeminino />
            </div>
            <p>Closet Feminino</p>
            <span>Participação no Projeto Regina Pontes</span>
          </div>

          <div className={styles.swiper_container}>
            <div className={styles.swiper_slide}>
              <SwiperClosetMasculino />
            </div>
            <p>Closet Masculino</p>
            <span>Participação no Projeto Regina Pontes</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className={styles.sectionTwo}>
          <div className={styles.swiper_container}>
            <div className={styles.swiper_slide}>
              <SwiperSapateira />
            </div>
            <p className={styles.sapateira}>Sapateira</p>
            <span>Participação no Projeto Regina Pontes</span>
          </div>

          <div className={styles.swiper_container}>
            <div className={styles.swiper_slide}>
              <SwiperBaby />
            </div>
            <p className={styles.baby}>Organização Baby</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className={styles.sectionThree}>
          <div className={styles.swiper_container}>
            <div className={styles.swiper_slide}>
              <SwiperBanheiro />
            </div>
            <p className={styles.banheiro}>Organização de Banheiro</p>
            <span>Participação no Projeto Regina Pontes</span>
          </div>

          <div className={styles.swiper_container}>
            <div className={styles.swiper_slide}>
              <SwiperRouparia />
            </div>
            <p className={styles.rouparia}>Rouparia</p>
            <span>Participação no Projeto Regina Pontes</span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Projetos;
