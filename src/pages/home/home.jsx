import { Link, useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import avaliacao from "../../assets/avaliacao.svg";
import analise from "../../assets/analise.svg";
import aprovacao from "../../assets/aprovacao.svg";
import execucao from "../../assets/execucao.svg";
import SwiperHome from "../../components/swiperHome/swiperHome";
import SwiperCozinha from "../../components/swiperCozinha/swiperCozinha";
import SwiperCloset from "../../components/swiperCloset/swiperCloset";
import SwiperValores from "../../components/swiperValores/swiperValores";
import SwiperProjetos from "../../components/swiperProjetos/swiperProjetos";
import SwiperDepoimentos from "../../components/swiperDepoimentos/swiperDepoimentos";
import QuadradosBackground from "../../components/quadradosBackground/quadradosBackground";
import QuemSouC from "../../components/quemSouC/quemSouC";

import FadeIn from "../../components/fadeIn/fadeIn";

import { Helmet } from "react-helmet-async";

function Home() {
  const navigate = useNavigate();

  const processos = [
    {
      img: avaliacao,
      title: "Avaliação",
      text: "Envio de Fotos/Vídeos ou Vídeo Call para avaliar os ambientes, móveis e objetos. Iremos nos conhecer melhor e alinharemos as expectativas.",
    },
    {
      img: analise,
      title: "Análise",
      text: "Análise do material enviado e posteriormente será enviado a proposta detalhada e personalizada.",
    },
    {
      img: aprovacao,
      title: "Aprovação",
      text: "Após a aprovação da proposta, definir (emos) a (s) data (s) para execução da organização.",
    },
    {
      img: execucao,
      title: "Execução",
      text: "A equipe irá executar a organização de acordo com as expectativas.",
    },
  ];

  return (
    <div className={styles.home_container}>
      <Helmet>
        <title>Personal Organizer | Nana Bernardo</title>
        <meta
          name="description"
          content="Deixe sua casa ou escritório mais organizados e funcionais com Nana Bernardo, especialista em organização de ambientes. Transforme seu espaço com praticidade e eficiência!"
        />
        <meta
          name="keywords"
          content="personal organizer, organização residencial, organização empresarial, organização de ambientes, Nana Bernardo, consultoria em organização, otimização de espaços"
        />
        <meta name="author" content="Nana Bernardo" />

        {/* Open Graph (Facebook) */}
        <meta
          property="og:title"
          content="Personal Organizer | Nana Bernardo"
        />
        <meta
          property="og:description"
          content="Transforme seu espaço com a expertise de Nana Bernardo, personal organizer especializada em organização residencial e empresarial."
        />
        <meta
          property="og:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />
        <meta property="og:url" content="https://www.nanaorganizer.com.br/" />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="Personal Organizer | Nana Bernardo"
        />
        <meta
          name="twitter:description"
          content="Transforme seu espaço com a expertise de Nana Bernardo, personal organizer especializada em organização residencial e empresarial."
        />
        <meta
          name="twitter:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />

        {/* URL canônica */}
        <link rel="canonical" href="https://www.nanaorganizer.com.br/" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Personal Organizer | Nana Bernardo",
            alternateName: [
              "Organização de Ambientes",
              "Consultoria em Organização",
            ],
            url: "https://www.nanaorganizer.com.br/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.nanaorganizer.com.br/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            sameAs: [
              "https://www.instagram.com/nanabernardoorganizer",
              "https://www.facebook.com/nanabernardoorganizer",
            ],
          })}
        </script>
      </Helmet>

      <QuadradosBackground />
      {/* <FadeIn> */}
      <QuemSouC />
      {/* </FadeIn> */}
      <FadeIn>
        <div className={styles.section_two}>
          <h3 className={`${styles.section_two_title}`}>
            COMO FUNCIONA O PROCESSO DE AVALIAÇÃO ATÉ A EXECUÇÃO?
          </h3>

          {/* <div className={styles.line}></div> */}
          <div className={styles.cards}>
            {processos.map((processo, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.card_image}>
                  <img src={processo.img} alt={processo.title} />
                </div>
                <div className={styles.card_text}>
                  <h4>{processo.title}</h4>
                  <p>{processo.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className={styles.section_three}>
          <div className={styles.section_three_swiper}>
            <div className={styles.line}></div>
            <SwiperHome />
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className={styles.section_four}>
          <h3>
            <span>ORGANIZAÇÃO</span> DE ESPAÇO
          </h3>
          <div className={styles.section_four_swiper_container}>
            <div className={styles.section_four_swiper}>
              <SwiperCozinha />
              <p>Cozinha</p>
            </div>
            <div className={styles.section_four_swiper}>
              <SwiperCloset />
              <p>Closet</p>
            </div>
          </div>
          <div className={styles.section_four_ver_mais}>
            <p onClick={() => navigate("/projetos")}>
              VER MAIS <span>+</span>
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className={styles.section_five}>
          <div className={styles.section_five_title}>
            <h3>VALORES E COMPROMISSOS</h3>
          </div>
          {/* <div className={styles.line}></div> */}
          <div className={styles.section_five_swiper}>
            <div className={styles.line}></div>
            <SwiperValores />
          </div>
          <div className={styles.section_five_ver_mais}>
            <p onClick={() => navigate("/sobre")}>
              LEIA MAIS <span>+</span>
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className={styles.group_section}>
          <div className={styles.section_six}>
            <h3>
              <span>PROJETOS</span> REALIZADOS
            </h3>
            <p>
              Em cada projeto, <span>transformamos a vida</span> de nossos
              clientes ao criar ambientes funcionais, práticos e acolhedores.
              Cada espaço que organizamos reflete nosso compromisso com{" "}
              <span>soluções personalizadas</span>, projetadas para melhorar a
              rotina e o bem-estar de cada pessoa. Atendemos desde residências
              familiares até escritórios, sempre com foco em entregar resultados
              de alta qualidade, acessíveis e que geram um impacto positivo.
              Nossa dedicação e experiência nos guiam para desenvolver espaços
              organizados que promovem conforto e praticidade, tornando o dia a
              dia mais leve e harmonioso.
            </p>
            <p
              className={styles.section_six_saiba_mais}
              onClick={() => navigate("/projetos")}
            >
              SAIBA MAIS <span>+</span>
            </p>
          </div>

          <div className={styles.section_seven}>
            <SwiperProjetos />
            <Link to="/contatos">SOLICITAR PROPOSTA</Link>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className={styles.section_eight}>
          <div className={styles.section_eight_swiper}>
            <div className={styles.section_eight_line}></div>
            <SwiperDepoimentos />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Home;
