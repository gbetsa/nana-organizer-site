import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Modal from "react-modal"; // Importa a biblioteca Modal
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperRouparia.module.css";

import rouparia1 from "../../assets/rouparia1.avif";
import rouparia2 from "../../assets/rouparia2.webp";
import rouparia3 from "../../assets/rouparia3.webp";
import rouparia4 from "../../assets/rouparia4.webp";

// Definir o elemento raiz para acessibilidade
Modal.setAppElement("#root");

function SwiperRouparia() {
  const imgsOrder = [rouparia1, rouparia2, rouparia3, rouparia4];

  const imgs = imgsOrder.sort(() => Math.random() - 0.5);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
          1024: { slidesPerView: 2 }, // Exibe 2 slides acima de 1024px
        }}
        loop={true}
        className={styles.swiper}
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <img
              src={img}
              alt={`Imagem da rouparia ${index + 1}`}
              className={styles.image}
              onClick={() => openModal(img)} // Abre o modal ao clicar na imagem
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal_content}
        overlayClassName={styles.modal_overlay}
      >
        <button className={styles.close_button} onClick={closeModal}>
          <span></span>
          <span></span>
        </button>
        {selectedImg && (
          <img
            src={selectedImg}
            alt="Imagem ampliada"
            className={styles.modal_img}
          />
        )}
      </Modal>
    </div>
  );
}

export default SwiperRouparia;
