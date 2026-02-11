import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperServices.module.css";

import OrganizacaoPontual from "../../assets/closetFeminino4.avif";
import OrganizacaoMudanca from "../../assets/projetos4.avif";
import OrganizacaoEscritorio from "../../assets/closetMasculino3.avif";
import Presente from "../../assets/cozinha1.avif";

function SwiperServices() {
  const services = [
    {
      img: OrganizacaoPontual,
      title: "Organização Pontual",
      subtitles: ["Chega de bagunça! Tenha controle sobre sua casa."],
      type: [
        "Quartos",
        "Salas",
        "Cozinha",
        "Banheiro",
        "Documentos",
        "Biblioteca",
        "Fotografias",
        "Área de serviços",
      ],
      texts: ["Organização personalizada para uma rotina mais prática."],
    },
    {
      img: OrganizacaoMudanca,
      title: "Organização de Mudança",
      subtitles: ["Mudança sem estresse! Organização em todas as etapas."],
      texts: [
        "Pré-mudança: Planejamento e identificação dos itens.",
        "Gerenciamento: Supervisão da mudança e profissionais.",
        "Pós-mudança: Organização dos ambientes no novo lar.",
      ],
    },
    {
      img: OrganizacaoEscritorio,
      title: "Organização de Escritório",
      subtitles: ["Produtividade começa com um ambiente organizado!"],
      type: [
        "Estações de Trabalho",
        "Arquivos",
        "Sala de Reuniões",
        "Área de Descanso",
        "Materiais e Equipamentos",
      ],
      texts: ["Crie um espaço funcional, harmonioso e eficiente."],
    },
    {
      img: Presente,
      title: "Mais Que Um Presente",
      subtitles: [
        "Presenteie com organização! Ideal para casamentos, aniversários e novas casas.",
        "Um presente exclusivo que traz praticidade e bem-estar.",
      ],
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
            slidesPerView: 2, // A partir de 1024px, exibe 2 slides
          },
        }}
        loop={true}
        className={styles.swiper}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <img src={service.img} alt={service.title} />
            <div className={styles.swiper_text}>
              <h4>{service.title}</h4>
              <div className={styles.swiper_subtext}>
                {service.subtitles &&
                  service.subtitles.map((subtitle, subIndex) => (
                    <p key={subIndex}>{subtitle}</p>
                  ))}
                {service.type && (
                  <div className={styles.swiper_type}>
                    <p>Tipos de Organização:</p>
                    {service.type.map((type, typeIndex) => (
                      <p key={typeIndex}>- {type}</p>
                    ))}
                  </div>
                )}
                {service.texts &&
                  service.texts.map((text, textIndex) => (
                    <p key={textIndex}>{text}</p>
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperServices;
