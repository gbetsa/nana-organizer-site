import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Modal from "react-modal"; // Importa a biblioteca Modal
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperBaby.module.css";

import baby1 from "../../assets/baby1.avif";
import baby2 from "../../assets/baby2.avif";
import baby3 from "../../assets/baby3.avif";
import baby4 from "../../assets/baby4.avif";
import baby5 from "../../assets/baby5.avif";
import baby6 from "../../assets/baby6.avif";
import closet4 from "../../assets/closet4.avif";

// Definir o elemento raiz para acessibilidade
Modal.setAppElement("#root");

function SwiperBaby() {
  const imgsOrder = [closet4, baby6, baby1, baby2, baby3, baby4, baby5];
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
              alt={`Imagem do bebê ${index + 1}`}
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

export default SwiperBaby;
