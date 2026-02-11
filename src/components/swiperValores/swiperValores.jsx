import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperValores.module.css";

import sustentabilidade from "../../assets/sustentabilidade.svg";
import compromisso from "../../assets/compromisso.svg";
import qualidade from "../../assets/qualidade.svg";
import empatia from "../../assets/empatia.svg";
import acessibilidade from "../../assets/acessibilidade.svg";
import inovacao from "../../assets/inovacao.svg";

function SwiperValores() {
  const valores = [
    {
      title: "Sustentabilidade",
      text: "A sustentabilidade é um princípio essencial em nossa atuação, incentivando a reutilização de materiais e a redução do desperdício, contribuindo para um planeta mais saudável e equilibrado.​​",
      img: sustentabilidade,
    },
    {
      title: "Compromisso com Cliente",
      text: "Nosso compromisso com o cliente é nossa prioridade máxima, buscando compreender profundamente suas necessidades e superar suas expectativas na organização de lares.",
      img: compromisso,
    },
    {
      title: "Serviço de Qualidade",
      text: "Qualidade e excelência são fundamentais em nosso trabalho, refletidas na paixão e dedicação de nossa equipe, que entrega serviços de alta qualidade com precisão.",
      img: qualidade,
    },
    {
      title: "Empatia",
      text: "Demonstramos empatia e compaixão em nosso trabalho, especialmente em tempos desafiadores, criando espaços que promovem o bem-estar mental e emocional. Valorizamos a importância de ambientes acolhedores e confortáveis.",
      img: empatia,
    },
    {
      title: "Acessibilidade",
      text: "A acessibilidade é um princípio fundamental. Acreditamos que a organização deve ser acessível a todos, independentemente do orçamento, garantindo que famílias de todas as realidades financeiras possam desfrutar de ambientes organizados",
      img: acessibilidade,
    },
    {
      title: "Inovação",
      text: "Mantemos um foco constante na inovação, buscando abordagens e soluções inovadoras para a organização de ambientes, mantendo-nos atualizados com as tendências do setor.",
      img: inovacao,
    },
  ];
  return (
    <div className={styles.swiper_container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          1024: {
            slidesPerView: 3, // A partir de 1024px, exibe 3 slides
          },
        }}
        loop={true}
        className={styles.swiper}
      >
        {valores.map((valor, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <div className={styles.swiper_text}>
              <img src={valor.img} alt="valores" />
              <h4>{valor.title}</h4>
              <p>{valor.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperValores;
