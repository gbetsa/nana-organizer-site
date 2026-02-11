import styles from "./quemSouC.module.css";
import { useState, useEffect } from "react";

import Nana from "../../assets/Nana.webp";
import { Typewriter } from "react-simple-typewriter";

import { Helmet } from "react-helmet-async";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function QuemSouC() {
  const [verMais, setVerMais] = useState(false);
  const [isQuemSouPage, setIsQuemSouPage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/quem-sou") {
      setIsQuemSouPage(true);
      setVerMais(true);
    }
  }, []);

  function textVerMais() {
    setVerMais((prevState) => !prevState);
  }

  return (
    <div className={styles.section_one}>
      <Helmet>
        <link
          rel="preload"
          href={Nana}
          as="image"
          type="image/webp"
          crossorigin="anonymous"
        />
      </Helmet>
      <div className={styles.title}>
        <h1>
          Eu Sou{" "}
          <span className={styles.span_h1}>
            <Typewriter
              words={[
                "Organização",
                "Conforto",
                "Transformação",
                "Personal Organizer",
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <h2 className={styles}>Nana Bernardo</h2>
        <p>
          <span className={styles.span_p}>Personal Organizer</span> com
          Especialização em Luxo Premium, Beach, Mudanças, Treinamento e
          Governança.
        </p>

        <div
          className={`${styles.text_ver_mais} ${verMais ? styles.ativo : ""}`}
        >
          <p>
            Nana Bernardo, sou Personal Organizer com Especialização em Luxo
            Premium, Beach, Mudança, Treinamento e Governança. Tenho formação
            acadêmica em Ciências Econômicas. Minha experiência profissional
            está galgada em atuação por mais de 20 anos em empresas de pequeno
            porte e, até em multinacional, na área administrativa e financeira
            onde adquiri vasto conhecimento organizacional.
          </p>
          <p>
            Estes quesitos fizeram com que eu ficasse cada vez mais apaixonada
            pela área corporativa e, desta forma, quero transmitir tanto os meus
            conhecimentos técnicos quanto minhas habilidades interpessoais.
          </p>
          <p>
            Desta forma resolvi me aperfeiçoar e me certifiquei pelo Método
            Reorganize.
          </p>
          <p>
            Além de transformar vidas, hoje, quero levar praticidade e economia
            para pessoas próximas. Quero também compartilhar todo conhecimento
            no intuito de ajudar pessoas que estão ansiosas para viver em um lar
            sem desordem, sem desentendimento com a família e amigos, em
            harmonia em todos os sentidos.
          </p>
        </div>

        {/* O botão some apenas na página /quem-sou quando verMais já está ativado */}
        {!isQuemSouPage && (
          <button onClick={textVerMais}>
            {verMais ? "VER MENOS" : "VER MAIS"}
          </button>
        )}
      </div>
      <div className={styles.imagem}>
        <img src={Nana} alt="nana" />
        <div className={styles.redes_sociais}>
          <a
            href="https://www.instagram.com/nanabernardoorganizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icone} />
          </a>
          <a
            href="https://www.facebook.com/nanabernardoorganizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className={styles.icone} />
          </a>
          <a
            href="http://wa.me/5511982641514"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className={styles.icone} />
          </a>
          <a href="mailto:nanabernardoorganizer@gmail.com">
            <FaEnvelope className={styles.icone} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuemSouC;
