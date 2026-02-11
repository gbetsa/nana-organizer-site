import { useState } from "react"; // Adicione essa linha para importar o useState
import styles from "./faqs.module.css";
import QuadradosBackground from "../../components/quadradosBackground/quadradosBackground";

import FadeIn from "../../components/fadeIn/fadeIn";

import { Helmet } from "react-helmet-async";

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "O que é um organizador profissional?",
      answer: [
        "Um organizador profissional é um especialista que ajuda indivíduos e empresas a organizar seus espaços físicos, como casas, escritórios e outros ambientes, de forma eficiente e funcional.",
        "Eles fornecem soluções personalizadas para melhorar a organização, aumentar a produtividade e reduzir o estresse.",
      ],
    },
    {
      question: "O que acontece com os itens que eu não quero mais?",
      answer: [
        "Podemos ajudar a doar, reciclar ou descartar itens que você não deseja manter.",
        "Trabalhamos com diversas instituições de caridade e serviços de reciclagem para garantir que seus itens sejam tratados de forma responsável.",
      ],
    },
    {
      question: "Quais serviços vocês oferecem?",
      answer: [
        "Organização residencial (closets, cozinhas, garagens, etc.).",
        "Organização de escritórios e espaços de trabalho.",
        "Declutter (descarte de itens desnecessários).",
        "Planejamento e organização de mudanças.",
        "Consultoria e treinamento em técnicas de organização.",
      ],
    },
    {
      question: "Como funciona o processo de organização?",
      answer: [
        "O processo começa com uma consulta inicial, onde avaliamos suas necessidades e objetivos.",
        "Em seguida, desenvolvemos um plano de ação personalizado e começamos a implementar as soluções de organização.",
        "Trabalhamos em estreita colaboração com você em cada etapa para garantir que o resultado final atenda às suas expectativas.",
      ],
    },
    {
      question: "Quanto tempo leva para organizar minha casa/escritório?",
      answer: [
        "O tempo necessário para organizar um espaço depende do tamanho do ambiente e do nível de desorganização.",
        "Durante a consulta inicial, forneceremos uma estimativa de tempo com base na avaliação das suas necessidades específicas.",
      ],
    },
    {
      question: "Preciso estar presente durante o processo de organização?",
      answer: [
        "A sua presença é importante durante as etapas iniciais para tomar decisões sobre o que manter ou descartar.",
        "No entanto, após essa fase, podemos continuar o trabalho sem a sua presença, se preferir.",
      ],
    },
    {
      question: "Como vocês cobram pelos serviços?",
      answer: [
        "Nossos serviços podem ser cobrados por hora ou por projeto, dependendo do trabalho necessário.",
        "Durante a consulta inicial, forneceremos uma estimativa detalhada dos custos.",
      ],
    },
    {
      question: "Como agendar uma consulta?",
      answer: [
        "Você pode agendar uma consulta entrando em contato conosco através do nosso site, telefone ou e-mail.",
        "Estamos disponíveis para discutir suas necessidades e marcar uma data conveniente para a avaliação inicial.",
      ],
    },
    {
      question: "Preciso comprar materiais de organização?",
      answer: [
        "Não necessariamente. Durante a consulta inicial, avaliamos o que você já tem e sugerimos materiais adicionais apenas se forem realmente necessários.",
        "Podemos ajudar a selecionar produtos que melhor atendam às suas necessidades e orçamento.",
        "Temos parceiros que nos possibilita pegar produtos organizadores em consignados e pagamos somente o que usarmos.",
      ],
    },
    {
      question: "Quanto custa o serviço de organização profissional?",
      answer: [
        "Os custos variam dependendo do tamanho do projeto e do tempo necessário.",
        "Após a consulta inicial, forneceremos um orçamento detalhado.",
        "Oferecemos pacotes de serviços que podem ser adaptados às suas necessidades e orçamento.",
      ],
    },
    {
      question:
        "Vocês garantem a confidencialidade das informações e itens pessoais?",
      answer: [
        "Sim, a confidencialidade é uma prioridade para nós.",
        "Respeitamos a privacidade de nossos clientes e garantimos que todas as informações e itens pessoais sejam tratados com a máxima discrição e segurança.",
      ],
    },
    {
      question: "Vocês oferecem serviços de manutenção de organização?",
      answer: [
        "Sim, oferecemos pacotes de manutenção para ajudar a manter seu espaço organizado ao longo do tempo.",
        "Podemos agendar visitas regulares para garantir que tudo permaneça em ordem e fazer ajustes conforme necessário.",
      ],
    },
    {
      question:
        "Meu espaço é extremamente desorganizado. Você ainda pode me ajudar?",
      answer: [
        "Absolutamente! Estamos aqui para ajudar, independentemente do nível de desorganização.",
        "Nossa experiência nos permite lidar com situações de todas as complexidades, e trabalharemos junto com você para transformar seu espaço de maneira eficaz.",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faq_container}>
      <Helmet>
        <title>FAQs | Nana Bernardo - Personal Organizer</title>
        <meta
          name="description"
          content="Tire suas dúvidas sobre organização de ambientes com as perguntas frequentes (FAQs) de Nana Bernardo, especialista em personal organizing."
        />
        <meta
          name="keywords"
          content="faqs, perguntas frequentes, personal organizer, organização de ambientes, dúvidas, organização residencial, organização empresarial"
        />
        <meta name="author" content="Nana Bernardo" />

        {/* Open Graph (Facebook) */}
        <meta
          property="og:title"
          content="FAQs | Nana Bernardo - Personal Organizer"
        />
        <meta
          property="og:description"
          content="Tire suas dúvidas sobre organização de ambientes com as perguntas frequentes (FAQs) de Nana Bernardo."
        />
        <meta
          property="og:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />
        <meta
          property="og:url"
          content="https://www.nanaorganizer.com.br/faqs"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="FAQs | Nana Bernardo - Personal Organizer"
        />
        <meta
          name="twitter:description"
          content="Tire suas dúvidas sobre organização de ambientes com as perguntas frequentes (FAQs) de Nana Bernardo."
        />
        <meta
          name="twitter:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />

        {/* URL canônica */}
        <link rel="canonical" href="https://www.nanaorganizer.com.br/faqs" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: "FAQs | Nana Bernardo",
            description:
              "Encontre respostas para as perguntas mais frequentes sobre organização de ambientes com Nana Bernardo.",
            url: "https://www.nanaorganizer.com.br/faqs",
            mainEntity: [
              {
                "@type": "Question",
                name: "O que é personal organizer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Personal Organizer é um profissional especializado em organizar ambientes, tornando-os mais funcionais, esteticamente agradáveis e livres de desordem.",
                },
              },
              {
                "@type": "Question",
                name: "Quais são os serviços oferecidos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nana Bernardo oferece serviços de organização para residências, empresas, closets, cozinhas, banheiros e muito mais. Cada projeto é personalizado conforme as necessidades do cliente.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <QuadradosBackground />
      <FadeIn>
        <div className={styles.faq_content}>
          <h3>PERGUNTAS FREQUENTES</h3>
          <div className={styles.faq_list}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faq_item}>
                <div
                  className={styles.faq_question}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </div>
                <div
                  className={`${styles.faq_answer} ${
                    activeIndex === index ? styles.open : ""
                  }`}
                >
                  {faq.answer.map((ans, i) => (
                    <p key={i}>{ans}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Faqs;
