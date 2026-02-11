import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import styles from "./whatsAppButton.module.css";

const WhatsAppButton = () => {
  const phoneNumber = "5511982641514"; // Substitua pelo número desejado
  const message = "Olá, gostaria de mais informações!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleClick = (e) => {
    e.preventDefault(); // impede o redirecionamento padrão
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(whatsappUrl);
    } else {
      // fallback caso o gtag não esteja carregado
      console.log("gtag not loaded");
    }
  };

  return (
    <a
      href={whatsappUrl}
      onClick={handleClick}
      className={styles.whatsapp_button}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
