"use client";
import Input from "@/components/common/form/Input/Input";
import Select from "@/components/common/form/select/Select";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaCopy, FaPaperPlane, FaPrint, FaRegTrashAlt } from "react-icons/fa";
import imagem from "../../../public/imagens/logo.png";
// import ModalResultMobile from "./components/ModalResultMobile";
import { toast } from "react-toastify";
import "../../app/home/components/homeStyle.css";
import ResultPdf from "./components/ResultPdf";
import ModalResultMobile from "./components/ModalResultMobile/ModaResultMobile";
import ModalClear from "../home/components/ModalClear/ModalClear";

// import ModalClear from "./components/ModalClear/ModalClear";

const index = () => {
  //Variables

  //Sex Options
  const sexoptions = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
  ];

  // Wheelchair Options
  const wheelchairOptions = [
    { value: "Enfermagem", label: "Enfermagem" },
    { value: "Fisioterapia", label: "Fisioterapia" },
    { value: "Fonoaudiologia", label: "Fonoaudiologia" },
    { value: "Nutrição", label: "Nutrição" },
    { value: "Medicina", label: "Medicina" },
    { value: "Odontologia", label: "Odontologia" },
    { value: "Psicologia", label: "Psicologia" },
    { value: "Terapia Ocupacional", label: "Terapia Ocupacional" },
  ];

  //Options
  const options = [
    { value: 1, label: "Sim" },
    { value: 0, label: "Não" },
  ];

  //Basic Data
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [areaAtuacao, setAreaAtuacao] = useState("");
  const [local, setLocal] = useState("");
  const [cadeirante, setCadeirante] = useState(false);
  const [acompanhante, setAcompanhante] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false);

  //Selects
  const [placa, setplaca] = useState("");
  const [gengivite, setGengivite] = useState("");
  const [saburra, setSaburra] = useState("");
  const [halitose, setHalitose] = useState("");
  const [secrecao, setSecrecao] = useState("");
  const [sangue, setSangue] = useState("");
  const [restos, setRestos] = useState("");

  //Send
  const [enviado, seteEnviado] = useState(false);
  const [messageResult, setMessageResult] = useState(null);

  const handleBucalResult = (score) => {
    if (score >= 0 && score <= 1) {
      return {
        area: "Higiene oral:",
        value: "Higiene oral satisfatória",
        score: score,
      };
    } else if (score >= 2 && score <= 3) {
      return {
        area: "Higiene oral:",
        value: "Higiene oral deficiente",
        score: score,
      };
    } else if (score >= 4 && score <= 7) {
      return {
        area: "Higiene oral:",
        value: "Higiene oral precária",
        score: score,
      };
    }
  };

  //Handle Result
  const handleResult = () => {
    const score =
      Number(saburra) +
      Number(placa) +
      Number(gengivite) +
      Number(halitose) +
      Number(secrecao) +
      Number(sangue) +
      Number(restos);
    setMessageResult(handleBucalResult(score));
    seteEnviado(true);
    toast.success("Resultado calculado com sucesso!", { autoClose: 1000 });
  };

  //Handle Cadeirante
  const handleCheckCadeirante = () => {
    setCadeirante(!cadeirante);
  };
  //Handle acompanhante
  const handleCheckAcompanhante = () => {
    setAcompanhante(!acompanhante);
  };

  //handle Print
  const handlePrint = () => {
    window.print();
  };

  //Handle Clear
  const clear = () => {
    setNome("");
    setIdade("");
    setSexo("");
    setAreaAtuacao("");
    setLocal("");
    setplaca("");
    setGengivite("");
    setSaburra("");
    setHalitose("");
    setSecrecao("");
    setSangue("");
    setRestos("");
    setIsModalClosed(false);
    seteEnviado(false);
    toast.success("Apagado com sucesso!", {
      autoClose: 1000,
    });
  };

  //handle closed Modal clear
  const handleClosedModal = () => {
    setIsModalClosed(true);
    seteEnviado(false);
  };

  const componenteRef = useRef(null);

  const copyTextResult = () => {
    if (componenteRef.current) {
      const textoDoComponente = componenteRef.current.innerText;
      navigator.clipboard
        .writeText(textoDoComponente)
        .then(() => {
          toast.success("Texto copiado com sucesso!", { autoClose: 1000 });
        })
        .catch((error) => {
          console.error("Erro ao copiar o texto do componente:", error);
        });
    } else {
      toast.error("Não há texto para copiar");
    }
  };

  //Component ##########################################################
  return (
    <div className="w-100">
      <ModalClear
        isModalClosed={isModalClosed}
        setIsModalClosed={setIsModalClosed}
        clear={clear}
        seteEnviado={seteEnviado}
      />
      <ModalResultMobile
        messageResult={messageResult}
        enviado={enviado}
        nome={nome}
        areaAtuacao={areaAtuacao}
        idade={idade}
        local={local}
        acompanhante={acompanhante}
        placa={placa}
        gengivite={gengivite}
        saburra={saburra}
        halitose={halitose}
        secrecao={secrecao}
        sangue={sangue}
        restos={restos}
        sexo={sexo}
        seteEnviado={seteEnviado}
      />
      <div className="container p-1">
        <div className="titulo">
          <Image
            src={imagem}
            width={150}
            height={54}
            alt="Logo"
            priority={true}
          />
        </div>
        {/* <button className="mudarDeCor" onClick={console.log("mudar de cor")}>
          <i className="text-dark fa-solid fa-moon"></i>
        </button> */}
        <div className="dadosPessoais">
          <div className="caixa-nome-idade">
            <div className="col-lg-4">
              <Input
                value={nome}
                className="col-lg-12"
                label="Nome:"
                type="text"
                placeholder="Digite o nome"
                onChange={({ target }) => setNome(target.value)}
              />
            </div>
            <div className="col-lg-2">
              <Input
                value={idade}
                label="Idade:"
                type="number"
                placeholder="Digite a idade"
                onChange={({ target }) => setIdade(target.value)}
              />
            </div>
            <div className="col-lg-2">
              <Select
                value={sexo}
                label="Sexo:"
                className="text-secondary p-1"
                name="sexo"
                id="sexo"
                placeholder="Selecione"
                options={sexoptions}
                onChange={({ target }) => setSexo(target.value)}
              />
            </div>
            <div className="col-lg-2">
              <Select
                value={areaAtuacao}
                label="Área de atuação:"
                className="text-secondary p-1"
                name="sexo"
                id="sexo"
                placeholder="Selecione"
                options={wheelchairOptions}
                onChange={({ target }) => setAreaAtuacao(target.value)}
              />
            </div>
            <div className="col-lg-2">
              <Input
                value={local}
                label="Local:"
                type="text"
                placeholder="Digite o local"
                onChange={({ target }) => setLocal(target.value)}
              />
            </div>
          </div>
          {/* CheckBox ####################################################*/}
          <div className="check-cadeirante d-flex gap-4">
            <div className="select-cadeirante d-flex gap-1 align-items-center">
              <h6 className="m-0">Cadeirante:</h6>{" "}
              <input
                type="checkbox"
                checked={cadeirante}
                onChange={handleCheckCadeirante}
              />
            </div>
            <div className="select-cadeirante d-flex gap-1 align-items-center">
              <h6 className="m-0">Acompanhante:</h6>{" "}
              <input
                type="checkbox"
                checked={acompanhante}
                onChange={handleCheckAcompanhante}
              />
            </div>
          </div>
        </div>

        <div className="form-grupo">
          <form className="caixa-formulario">
            <div className="caixa-form-conhecimento-social">
              <div className="test-name">
                INDICADOR DE HIGIENE ORAL DO PACIENTE CRÍTICO
              </div>
              <Select
                value={placa}
                label="Presença de placa dental/Biofilme:"
                options={options}
                onChange={({ target }) => setplaca(target.value)}
              />
              <Select
                value={gengivite}
                label="Gengivite:"
                options={options}
                onChange={({ target }) => setGengivite(target.value)}
              />
              <Select
                value={saburra}
                label="Saburra:"
                options={options}
                onChange={({ target }) => setSaburra(target.value)}
              />
              <Select
                value={halitose}
                label="Halitose:"
                options={options}
                onChange={({ target }) => setHalitose(target.value)}
              />
              <Select
                value={secrecao}
                label="Presença de secreção/ Crosta:"
                options={options}
                onChange={({ target }) => setSecrecao(target.value)}
              />
              <Select
                value={sangue}
                label="Presença de sangue:"
                options={options}
                onChange={({ target }) => setSangue(target.value)}
              />

              <Select
                value={restos}
                label="Presença de restos alimentares (dieta):"
                options={options}
                onChange={({ target }) => setRestos(target.value)}
              />
            </div>
          </form>

          <div ref={componenteRef} className="caixa-resultados">
            <div className="texto-resultado">
              {
                <ResultPdf
                  messageResult={messageResult}
                  enviado={enviado}
                  nome={nome}
                  areaAtuacao={areaAtuacao}
                  idade={idade}
                  local={local}
                  acompanhante={acompanhante}
                  placa={placa}
                  gengivite={gengivite}
                  saburra={saburra}
                  halitose={halitose}
                  secrecao={secrecao}
                  sangue={sangue}
                  restos={restos}
                  sexo={sexo}
                />
              }
            </div>
          </div>
        </div>
        <div className="botao-enviar m-4 d-flex gap-2">
          <button
            onClick={handleResult}
            className="btn blueBgDefaut text-white"
          >
            Enviar
            <i className="text-white">
              <FaPaperPlane />
            </i>
          </button>

          <button
            onClick={handleClosedModal}
            style={{ backgroundColor: "#271d77" }}
            className="btn border bg-white"
          >
            <FaRegTrashAlt />
          </button>
          <button
            style={{ backgroundColor: "#271d77" }}
            className="btn bg-white border"
          >
            <FaPrint />
          </button>
          <button
            onClick={copyTextResult}
            style={{ backgroundColor: "#271d77" }}
            className="btn bg-white border"
          >
            <FaCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
