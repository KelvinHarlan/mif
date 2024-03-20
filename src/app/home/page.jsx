"use client";
import Input from "@/components/common/form/Input/Input";
import Select from "@/components/common/form/select/Select";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  FaCommentDots,
  FaCopy,
  FaPaperPlane,
  FaPrint,
  FaPuzzlePiece,
  FaRegTrashAlt,
  FaRunning,
  FaToilet,
  FaUtensils,
  FaWheelchair,
} from "react-icons/fa";
import imagem from "../../../public/imagens/logo.png";
import ModalResultMobile from "./components/ModalResultMobile";
import {
  alimentacaoResult,
  banhoResult,
  compreensaoResult,
  controleFezesResult,
  controleUrinaResult,
  escadasResult,
  expressaoResult,
  higienePessoalResult,
  interacaoResult,
  marchaCadeiraResult,
  memoriaResult,
  resolucaoResult,
  transferenciaBanheiraResult,
  transferenciaLeitoResult,
  transferenciaVasoResult,
  vasoSanitarioResult,
  vestirInferiorResult,
  vestirSuperiorResult,
} from "./components/data";
import "./components/homeStyle.css";
import ResultPdf from "./components/resultPdf";
import { toast } from "react-toastify";
import ModalClear from "./components/ModalClear/ModalClear";

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

  //Alimentacao options
  const commonOptions = [
    { value: 1, label: "1- Assistência Total" },
    { value: 2, label: "2- Assistência Máxima" },
    { value: 3, label: "3- Assistência Moderada" },
    { value: 4, label: "4- Assistência com Contato Mínimo" },
    { value: 5, label: "5- Supervisão ou Preparação" },
    { value: 6, label: "6- Independência Modificada" },
    { value: 7, label: "7- Independência Completa" },
  ];

  //locomocao Options
  const locomocaoOptions = [
    { value: 1, label: "1 - Assistência Total" },
    { value: 2, label: "2 - Assistência Máxima" },
    { value: 3, label: "3 - Assistência Moderada" },
    { value: 4, label: "4 - Assistência com Contato Mínimo" },
    { value: "5.0", label: "5 - Supervisão" },
    { value: 5, label: "5 - Deambulação Doméstica" },
    { value: 6, label: "6 - Independência Modificada" },
    { value: 7, label: "7 - Independência Completa" },
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
  const [alimentacao, setAlimentacao] = useState("");
  const [higienePessoal, setHigienePessoal] = useState("");
  const [banho, setBanho] = useState("");
  const [vestirSuperior, setVestirSuperior] = useState("");
  const [vestirInferior, setVestirInferior] = useState("");
  const [vaso, setVaso] = useState("");
  const [urina, setUrina] = useState("");
  const [fezes, setFezes] = useState("");
  const [transferenciaCadeira, setTransferenciaCadeira] = useState("");
  const [transferenciaVaso, setTransferenciaVaso] = useState("");
  const [transferenciaChuveiro, setTransferenciaChuveiro] = useState("");
  const [marchaCr, setMarchaCr] = useState("");
  const [escadas, setEscadas] = useState("");
  const [compreensao, setCompreensao] = useState("");
  const [expressao, setExpressao] = useState("");
  const [interacao, setInteracao] = useState("");
  const [resolucao, setResolucao] = useState("");
  const [memoria, setMemoria] = useState("");

  //Selects B
  const [alimentacaoB, setAlimentacaoB] = useState("");
  const [higienePessoalB, setHigienePessoalB] = useState("");
  const [banhoB, setBanhoB] = useState("");
  const [vestirSuperiorB, setVestirSuperiorB] = useState("");
  const [vestirInferiorB, setVestirInferiorB] = useState("");
  const [vasoB, setVasoB] = useState("");
  const [urinaB, setUrinaB] = useState("");
  const [fezesB, setFezesB] = useState("");
  const [transferenciaCadeiraB, setTransferenciaCadeiraB] = useState("");
  const [transferenciaVasoB, setTransferenciaVasoB] = useState("");
  const [transferenciaChuveiroB, setTransferenciaChuveiroB] = useState("");
  const [marchaCrB, setMarchaCrB] = useState("");
  const [escadasB, setEscadasB] = useState("");
  const [compreensaoB, setCompreensaoB] = useState("");
  const [expressaoB, setExpressaoB] = useState("");
  const [interacaoB, setInteracaoB] = useState("");
  const [resolucaoB, setResolucaoB] = useState("");
  const [memoriaB, setMemoriaB] = useState("");

  //Send
  const [enviado, seteEnviado] = useState(false);

  //Handle Result
  const handleResult = () => {
    seteEnviado(true);
    setAlimentacaoB(alimentacaoResult(alimentacao));
    setHigienePessoalB(higienePessoalResult(higienePessoal));
    setBanhoB(banhoResult(banho));
    setVestirSuperiorB(vestirSuperiorResult(vestirSuperior));
    setVestirInferiorB(vestirInferiorResult(vestirInferior));
    setVasoB(vasoSanitarioResult(vaso));
    setUrinaB(controleUrinaResult(urina));
    setFezesB(controleFezesResult(fezes));
    setTransferenciaCadeiraB(
      transferenciaLeitoResult(transferenciaCadeira, cadeirante)
    );
    setTransferenciaVasoB(
      transferenciaVasoResult(transferenciaVaso, cadeirante)
    );
    setTransferenciaChuveiroB(
      transferenciaBanheiraResult(transferenciaChuveiro, cadeirante)
    );
    setMarchaCrB(marchaCadeiraResult(marchaCr, cadeirante));
    setEscadasB(escadasResult(escadas));
    setCompreensaoB(compreensaoResult(compreensao));
    setExpressaoB(expressaoResult(expressao));
    setInteracaoB(interacaoResult(interacao));
    setResolucaoB(resolucaoResult(resolucao));
    setMemoriaB(memoriaResult(memoria));
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
    setCadeirante(false);
    setAcompanhante(false);
    setAlimentacao("");
    setHigienePessoal("");
    setBanho("");
    setVestirSuperior("");
    setVestirInferior("");
    setVaso("");
    setUrina("");
    setFezes("");
    setTransferenciaCadeira("");
    setTransferenciaVaso("");
    setTransferenciaChuveiro("");
    setMarchaCr("");
    setEscadas("");
    setCompreensao("");
    setExpressao("");
    setInteracao("");
    setResolucao("");
    setMemoria("");

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
        enviado={enviado}
        alimentacao={alimentacaoB}
        higienePessoal={higienePessoalB}
        nome={nome}
        idade={idade}
        sexo={sexo}
        areaAtuacao={areaAtuacao}
        local={local}
        banho={banhoB}
        vestirSuperior={vestirSuperiorB}
        vestirInferior={vestirInferiorB}
        vaso={vasoB}
        urina={urinaB}
        fezes={fezesB}
        transferenciaCadeira={transferenciaCadeiraB}
        transferenciaVaso={transferenciaVasoB}
        transferenciaChuveiro={transferenciaChuveiroB}
        marchaCr={marchaCrB}
        escadas={escadasB}
        compreensao={compreensaoB}
        expressao={expressaoB}
        interacao={interacaoB}
        resolucao={resolucaoB}
        memoria={memoriaB}
        acompanhante={acompanhante}
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
            <div className="caixa-form-autoCuidado">
              <h5 className="autocuidado ">
                <div className="test-name">
                  MEDIDA DE INDEPENDÊNCIA FUNCIONAL
                </div>
                <span className="titulos-cards">
                  Autocuidado <FaUtensils />
                </span>
              </h5>
              <Select
                value={alimentacao}
                label="Alimentação:"
                options={commonOptions}
                onChange={({ target }) => setAlimentacao(target.value)}
              />
              <Select
                value={higienePessoal}
                label="Higiene pessoal:"
                label2="Apresentação e aparência"
                options={commonOptions}
                onChange={({ target }) => setHigienePessoal(target.value)}
              />
              <Select
                value={banho}
                label="Banho:"
                label2="Lavar o corpo"
                options={commonOptions}
                onChange={({ target }) => setBanho(target.value)}
              />
              <Select
                value={vestirSuperior}
                label="Vestir:"
                label2="Metade superior do corpo"
                options={commonOptions}
                onChange={({ target }) => setVestirSuperior(target.value)}
              />
              <Select
                value={vestirInferior}
                label="Vestir:"
                label2="Metade inferior do corpo"
                options={commonOptions}
                onChange={({ target }) => setVestirInferior(target.value)}
              />
              <Select
                value={vaso}
                label="Utilização do vaso sanitário:"
                options={commonOptions}
                onChange={({ target }) => setVaso(target.value)}
              />
            </div>

            <div className="caixa-form-controleEsfincteres">
              <h5 className="controleDeEsfincter:">
                <span className="titulos-cards">
                  Controle de esfíncteres <FaToilet />
                </span>
              </h5>

              <Select
                value={urina}
                label="Controle de urina:"
                label2="frequência de incontinência"
                options={commonOptions}
                onChange={({ target }) => setUrina(target.value)}
              />
              <Select
                value={fezes}
                label="Controle das fezes:"
                options={commonOptions}
                onChange={({ target }) => setFezes(target.value)}
              />
            </div>

            <div className="caixa-form-mobilidade">
              <h5 className="mobilidade">
                <span className="titulos-cards">
                  Mobilidade <FaRunning />
                </span>
              </h5>

              <Select
                value={transferenciaCadeira}
                label="Transferências:"
                label2="leito, cadeira, cadeira de rodas"
                options={commonOptions}
                onChange={({ target }) => setTransferenciaCadeira(target.value)}
              />

              <Select
                value={transferenciaVaso}
                label="Transferências:"
                label2="Vaso sanitário"
                options={commonOptions}
                onChange={({ target }) => setTransferenciaVaso(target.value)}
              />

              <Select
                value={transferenciaChuveiro}
                label="Transferências:"
                label2="Banheira ou chuveiro"
                options={commonOptions}
                onChange={({ target }) =>
                  setTransferenciaChuveiro(target.value)
                }
              />
            </div>

            <div className="caixa-form-locomocao">
              <h5 className="locomocao:">
                <span className="titulos-cards">
                  Locomoção <FaWheelchair />
                </span>
              </h5>

              <Select
                value={marchaCr}
                label="Marcha/ Cadeira de rodas:"
                options={locomocaoOptions}
                onChange={({ target }) => setMarchaCr(target.value)}
              />

              <Select
                value={escadas}
                label="Escadas:"
                options={locomocaoOptions}
                onChange={({ target }) => setEscadas(target.value)}
              />
            </div>

            <div className="caixa-form-comunicacao">
              <h5 className="comunicacao">
                <span className="titulos-cards">
                  Comunicação <FaCommentDots />
                </span>
              </h5>

              <label className="blueColorDefaut">
                <b>Compreensão:</b>
              </label>
              <select
                value={compreensao}
                onChange={({ target }) => setCompreensao(target.value)}
                name="compreensao"
                id="compreensao"
              >
                <option value="0"></option>
                <option value="1">1 - Assistência Total</option>
                <option value="2">2 - Assistência Máxima</option>
                <option value="3">3 - Facilitação Moderada</option>
                <option value="4">4 - Facilitação Mínima</option>
                <option value="5">5 - Facilitação Potencial</option>
                <option value="6">6 - Independência Modificada</option>
                <option value="7">7 - Independência Completa</option>
              </select>

              <label className="blueColorDefaut">
                <b>Expressão:</b>
              </label>
              <select
                value={expressao}
                onChange={({ target }) => setExpressao(target.value)}
                name="expressao"
                id="expressao"
              >
                <option value="0"></option>
                <option value="1">1 - Assistência Total</option>
                <option value="2">2 - Facilitação Máxima</option>
                <option value="3">3 - Facilitação Moderada</option>
                <option value="4">4 - Facilitação Mínima</option>
                <option value="5">5 - Facilitação Potencial </option>
                <option value="6">6 - Independência Modificada</option>
                <option value="7">7 - Independência Completa</option>
              </select>
            </div>

            <div className="caixa-form-conhecimento-social">
              <h5 className="conhecimento-social">
                <span className="titulos-cards">
                  Conhecimento Social
                  <FaPuzzlePiece />
                </span>
              </h5>
              <label className="blueColorDefaut">
                <b>Interação social:</b>
              </label>
              <select
                value={interacao}
                onChange={({ target }) => setInteracao(target.value)}
                name="interacao-social"
                id="interacao-social"
              >
                <option value="0"></option>
                <option value="1">1 - Assistência Total</option>
                <option value="2">2 - Orientação Máxima</option>
                <option value="3">3 - Orientação Moderada</option>
                <option value="4">4 - Orientação Mínima</option>
                <option value="5">5 - Supervisão</option>
                <option value="6">6 - Independência Modificada</option>
                <option value="7">7 - Independência Completa</option>
              </select>

              <label className="blueColorDefaut">
                <b>Resolução de problemas:</b>
              </label>
              <select
                value={resolucao}
                onChange={({ target }) => setResolucao(target.value)}
                name="resolucao-de-problemas"
                id="resolucao-de-problemas"
              >
                <option value="0"></option>
                <option value="1">1 - Orientação Total</option>
                <option value="2">2 - Orientação Máxima</option>
                <option value="3">3 - Orientação Moderada</option>
                <option value="4">4 - Orientação Mínima</option>
                <option value="5">5 - Supervisão</option>
                <option value="6">6 - Independência Modificada</option>
                <option value="7">7 - Independência Completa</option>
              </select>

              <label className="blueColorDefaut">
                <b>Memória:</b>
              </label>
              <select
                value={memoria}
                onChange={({ target }) => setMemoria(target.value)}
                name="memoria"
                id="memoria"
              >
                <option value="0"></option>
                <option value="1">1 - Assistência Total</option>
                <option value="2">2 - Facilitação Máxima</option>
                <option value="3">3 - Facilitação Moderada</option>
                <option value="4">4 - Facilitação Mínima</option>
                <option value="5">5 - Supervisão</option>
                <option value="6">6 - Independência Modificada</option>
                <option value="7">7 - Independência Completa</option>
              </select>
            </div>
          </form>

          <div ref={componenteRef} className="caixa-resultados">
            <div className="texto-resultado">
              {
                <ResultPdf
                  alimentacao={alimentacaoB}
                  higienePessoal={higienePessoalB}
                  enviado={enviado}
                  nome={nome}
                  idade={idade}
                  sexo={sexo}
                  areaAtuacao={areaAtuacao}
                  local={local}
                  banho={banhoB}
                  vestirSuperior={vestirSuperiorB}
                  vestirInferior={vestirInferiorB}
                  vaso={vasoB}
                  urina={urinaB}
                  fezes={fezesB}
                  transferenciaCadeira={transferenciaCadeiraB}
                  transferenciaVaso={transferenciaVasoB}
                  transferenciaChuveiro={transferenciaChuveiroB}
                  marchaCr={marchaCrB}
                  escadas={escadasB}
                  compreensao={compreensaoB}
                  expressao={expressaoB}
                  interacao={interacaoB}
                  resolucao={resolucaoB}
                  memoria={memoriaB}
                  acompanhante={acompanhante}
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
