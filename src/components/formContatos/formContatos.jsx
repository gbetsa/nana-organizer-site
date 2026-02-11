import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./formContatos.module.css";
import { toast } from "react-toastify";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

function FormContatos() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    ambiente: "",
    mudanca: [],
    qtdAmbientes: "",
    qtdPessoas: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleTelefoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

    // Limita o número a no máximo 11 dígitos (DDD + número)
    if (input.length > 11) input = input.slice(0, 11);

    // Aplica a máscara (XX) X XXXX-XXXX
    if (input.length === 11) {
      input = input.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, "($1) $2 $3-$4");
    } else if (input.length === 10) {
      input = input.replace(/^(\d{2})(\d{1})(\d{4})(\d{3})$/, "($1) $2 $3-$4");
    } else if (input.length === 9) {
      input = input.replace(/^(\d{2})(\d{1})(\d{4})(\d{2})$/, "($1) $2 $3-$4");
    } else if (input.length === 8) {
      input = input.replace(/^(\d{2})(\d{1})(\d{4})(\d{1})$/, "($1) $2 $3-$4");
    } else if (input.length === 7) {
      input = input.replace(/^(\d{2})(\d{1})(\d{4})$/, "($1) $2 $3");
    } else if (input.length === 6) {
      input = input.replace(/^(\d{2})(\d{1})(\d{3})$/, "($1) $2 $3");
    } else if (input.length === 5) {
      input = input.replace(/^(\d{2})(\d{1})(\d{2})$/, "($1) $2 $3");
    } else if (input.length === 4) {
      input = input.replace(/^(\d{2})(\d{1})(\d{1})$/, "($1) $2 $3");
    } else {
      input = input.replace(/^(\d{2})(\d{1})$/, "($1) $2");
    }

    console.log(input);

    setFormData({ ...formData, telefone: input });
  };

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      mudanca: checked
        ? [...prev.mudanca, value] // Adiciona ao array
        : prev.mudanca.filter((item) => item !== value), // Remove do array
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const templateParams = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      assunto: formData.assunto,
      mensagem: formData.mensagem,
      option_ambiente: formData.ambiente,
      option_prepos: formData.mudanca.join(", "), // Transforma array em string separada por vírgula
      qtd_ambiente: formData.qtdAmbientes,
      media_ambiente: formData.qtdPessoas,
    };

    emailjs
      .send(
        serviceId, // Service ID
        templateId, // Template ID
        templateParams,
        publicKey // Public Key (NÃO use a Private Key)
      )
      .then(
        () => {
          toast.success("Mensagem enviada com sucesso!", {
            position: "top-right",
            autoClose: 3000, // Fecha em 3 segundos
          });

          // Chama a conversão do Google Ads
          if (window.gtag_report_conversion) {
            window.gtag_report_conversion(); // Você pode passar uma URL opcional ou deixar vazio
          }
          
          setFormData({
            nome: "",
            email: "",
            telefone: "",
            assunto: "",
            mensagem: "",
            ambiente: "",
            mudanca: [],
            qtdAmbientes: "",
            qtdPessoas: "",
          });
        },
        (error) => {
          console.error("Erro ao enviar o e-mail:", error);
          toast.error("Erro ao enviar a mensagem. Tente novamente!", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome *</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          placeholder="Digite seu nome completo"
          required
        />

        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Digite seu email"
          required
        />

        <label htmlFor="telefone">Telefone *</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleTelefoneChange}
          placeholder="(DDD) 99999-9999"
          required
        />

        <label htmlFor="assunto">Assunto *</label>
        <input
          type="text"
          id="assunto"
          name="assunto"
          onChange={(e) =>
            setFormData({ ...formData, assunto: e.target.value })
          }
          placeholder="Digite o assunto"
          value={formData.assunto}
          required
        />

        <label htmlFor="mensagem">Mensagem *</label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="Digite sua mensagem"
          value={formData.mensagem}
          onChange={(e) =>
            setFormData({ ...formData, mensagem: e.target.value })
          }
          rows="4"
          required
        ></textarea>

        <label htmlFor="ambiente">
          A organização será feita em um ambiente residencial ou comercial? *
        </label>
        <select
          id="ambiente"
          name="ambiente"
          onChange={(e) =>
            setFormData({ ...formData, ambiente: e.target.value })
          }
          value={formData.ambiente}
          required
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="Residencial">Residencial</option>
          <option value="Comercial">Comercial</option>
        </select>

        <label>Se trata de uma pré ou pós mudança? *</label>
        <div className={styles.checkboxs}>
          <label>
            <input
              type="checkbox"
              name="mudanca"
              value="Pre Mudança"
              checked={formData.mudanca.includes("Pre Mudança")}
              onChange={handleCheckboxChange}
            />
            Sim - Pré Mudança
          </label>
        </div>
        <div className={styles.checkboxs}>
          <label>
            <input
              type="checkbox"
              name="mudanca"
              value="Pos Mudança"
              checked={formData.mudanca.includes("Pos Mudança")}
              onChange={handleCheckboxChange}
            />
            Sim - Pós Mudança
          </label>
        </div>
        <div className={styles.checkboxs}>
          <label>
            <input
              type="checkbox"
              name="mudanca"
              value="Não"
              checked={formData.mudanca.includes("Não")}
              onChange={handleCheckboxChange}
            />
            Não
          </label>
        </div>

        <label htmlFor="qtdAmbientes">
          Quantos ambientes precisam ser organizados? *
        </label>
        <select
          id="qtdAmbientes"
          name="qtdAmbientes"
          value={formData.qtdAmbientes}
          required
          onChange={(e) =>
            setFormData({ ...formData, qtdAmbientes: e.target.value })
          }
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="1 a 2">1 a 2</option>
          <option value="2 a 3">2 a 3</option>
          <option value="3 ou mais">3 ou mais</option>
        </select>

        <label htmlFor="qtdPessoas">
          Em média quantas pessoas frequentam o ambiente? *
        </label>
        <input
          type="number"
          id="qtdPessoas"
          name="qtdPessoas"
          value={formData.qtdPessoas}
          placeholder="Digite a quantidade de pessoas"
          min="1"
          onChange={(e) =>
            setFormData({ ...formData, qtdPessoas: e.target.value })
          }
          required
        />

        <button type="submit">{isLoading ? "Enviando..." : "Enviar"}</button>
      </form>
    </div>
  );
}

export default FormContatos;
