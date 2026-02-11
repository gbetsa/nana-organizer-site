import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Modal from "react-modal"; // Importa a biblioteca do modal
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperClosetFeminino.module.css";

import closetFeminino1 from "../../assets/closetFeminino1.avif";
import closetFeminino2 from "../../assets/closetFeminino2.avif";
import closetFeminino3 from "../../assets/closetFeminino3.avif";
import closetFeminino4 from "../../assets/closetFeminino4.avif";
import closetFeminino5 from "../../assets/closetFeminino5.avif";
import closetFeminino6 from "../../assets/closetFeminino6.avif";
import closetFeminino7 from "../../assets/closetFeminino7.avif";

// Definir o elemento raiz para acessibilidade
Modal.setAppElement("#root");

function SwiperClosetFeminino() {
  const imgsOrder = [
    closetFeminino1,
    closetFeminino2,
    closetFeminino3,
    closetFeminino4,
    closetFeminino5,
    closetFeminino6,
    closetFeminino7,
  ];

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
              alt={`closet feminino ${index + 1}`}
              className={styles.image}
              onClick={() => openModal(img)}
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
            alt="Closet Feminino Ampliado"
            className={styles.modal_img}
          />
        )}
      </Modal>
    </div>
  );
}

export default SwiperClosetFeminino;
