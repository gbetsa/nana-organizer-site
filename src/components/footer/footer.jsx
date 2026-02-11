import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./footer.module.css";

import Logo from "../../assets/logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import FormContatos from "../formContatos/formContatos";

function Footer() {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const currentYear = new Date().getFullYear(); // Obtém o ano atual

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 1024);
    }
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.footer_container}>
      <div className={styles.content_container}>
        <div className={styles.logo_container}>
          <img src={Logo} alt="logo"></img>
          <div className={styles.footer_line}></div>
          <h3>CONTATOS</h3>
          <a href="mailto:nanabernardoorganizer@gmail.com">nanabernardoorganizer@gmail.com</a>
          <a href="tel:+5511982641514">+55 (11) 98264-1514</a>

          {isDesktop && (
            <div className={styles.redes_sociais}>
              <a href="https://www.instagram.com/nanabernardoorganizer" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icone} />
              </a>
              <a href="https://www.facebook.com/nanabernardoorganizer" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className={styles.icone} />
              </a>
              <a href="http://wa.me/5511982641514" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className={styles.icone} />
              </a>
              <a href="mailto:nanabernardoorganizer@gmail.com">
                <FaEnvelope className={styles.icone} />
              </a>
            </div>
          )}
        </div>

        {location.pathname !== "/contatos" && <FormContatos />}
      </div>

      <div className={styles.links_container}>
        <Link to="/servicos">Serviços</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/quem-sou">Quem Sou</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to="/depoimentos">Depoimentos</Link>
        <Link to="/faqs">FAQs</Link>
      </div>

      <div className={styles.footer_line}></div>

      <div className={styles.copyright_container}>
        <p>© {currentYear} Nana Bernardo Personal Organizer.</p>
        <p>Todos os direitos reservados</p>
      </div>

      <p className={styles.credits}>
        Desenvolvido por <a href="https://www.gnconnectionsystem.com.br/" target="_blank" rel="noopener noreferrer">GNConnection System</a>
      </p>
    </div>
  );
}

export default Footer;
