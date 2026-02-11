import styles from "./contatos.module.css";
import FormContatos from "../../components/formContatos/formContatos";
import QuadradosBackground from "../../components/quadradosBackground/quadradosBackground";

import FadeIn from "../../components/fadeIn/fadeIn";

import { Helmet } from "react-helmet-async";

function Contatos() {
  return (
    <div className={styles.contatos_container}>
      <Helmet>
        <title>Contatos | Nana Bernardo - Personal Organizer</title>
        <meta
          name="description"
          content="Entre em contato com Nana Bernardo, especialista em organização de ambientes. Preencha o formulário para agendar uma consultoria ou tirar dúvidas sobre nossos serviços."
        />
        <meta
          name="keywords"
          content="contato, personal organizer, organização de ambientes, agendamento, consultoria em organização"
        />
        <meta name="author" content="Nana Bernardo" />

        {/* Open Graph (Facebook) */}
        <meta
          property="og:title"
          content="Contatos | Nana Bernardo - Personal Organizer"
        />
        <meta
          property="og:description"
          content="Entre em contato com Nana Bernardo, especialista em organização de ambientes."
        />
        <meta
          property="og:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />
        <meta
          property="og:url"
          content="https://www.nanaorganizer.com.br/contatos"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="Contatos | Nana Bernardo - Personal Organizer"
        />
        <meta
          name="twitter:description"
          content="Entre em contato com Nana Bernardo, especialista em organização de ambientes."
        />
        <meta
          name="twitter:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />

        {/* URL canônica */}
        <link
          rel="canonical"
          href="https://www.nanaorganizer.com.br/contatos"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contatos | Nana Bernardo",
            description:
              "Página de contato para agendamento de consultorias e dúvidas sobre serviços de personal organizer.",
            url: "https://www.nanaorganizer.com.br/contatos",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+55 11 9 8264-1514",
              contactType: "customer service",
              areaServed: "BR",
              availableLanguage: "Portuguese",
            },
            sameAs: [
              "https://www.instagram.com/nanabernardoorganizer",
              "https://www.facebook.com/nanabernardoorganizer",
            ],
          })}
        </script>
      </Helmet>

      <QuadradosBackground />
      <FadeIn>
        <div className={styles.form_container}>
          <h3>CONTATOS</h3>
          <FormContatos />
        </div>
      </FadeIn>
    </div>
  );
}

export default Contatos;
