import styles from "./quemSou.module.css";
import QuemSouC from "../../components/quemSouC/quemSouC";

import QuadradosBackground from "../../components/quadradosBackground/quadradosBackground";

import FadeIn from "../../components/fadeIn/fadeIn";

import { Helmet } from "react-helmet-async";

function QuemSou() {
  return (
    <div className={styles.quemSou_container}>
      <Helmet>
        <title>Quem Sou | Nana Bernardo - Personal Organizer</title>
        <meta
          name="description"
          content="Conheça Nana Bernardo, especialista em organização de ambientes. Transforme seu espaço com a experiência e dedicação de uma personal organizer."
        />
        <meta
          name="keywords"
          content="quem sou, personal organizer, organização de ambientes, Nana Bernardo, especialista em organização"
        />
        <meta name="author" content="Nana Bernardo" />

        {/* Open Graph (Facebook) */}
        <meta
          property="og:title"
          content="Quem Sou | Nana Bernardo - Personal Organizer"
        />
        <meta
          property="og:description"
          content="Conheça Nana Bernardo, especialista em organização de ambientes."
        />
        <meta
          property="og:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />
        <meta
          property="og:url"
          content="https://www.nanaorganizer.com.br/quemsou"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="Quem Sou | Nana Bernardo - Personal Organizer"
        />
        <meta
          name="twitter:description"
          content="Conheça Nana Bernardo, especialista em organização de ambientes."
        />
        <meta
          name="twitter:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />

        {/* URL canônica */}
        <link rel="canonical" href="https://www.nanaorganizer.com.br/quemsou" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nana Bernardo",
            description:
              "Especialista em organização de ambientes, personal organizer.",
            url: "https://www.nanaorganizer.com.br/quemsou",
            sameAs: [
              "https://www.instagram.com/nanabernardoorganizer",
              "https://www.facebook.com/nanabernardoorganizer",
            ],
          })}
        </script>
      </Helmet>

      <QuadradosBackground />

      <FadeIn>
        <QuemSouC />
      </FadeIn>
    </div>
  );
}

export default QuemSou;
