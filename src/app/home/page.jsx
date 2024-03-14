"use client";
import Input from "@/components/common/form/Input/Input";
import Select from "@/components/common/form/select/Select";
import Image from "next/image";
import { useState } from "react";
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
import {
  alimentacaoResult,
  banhoResult,
  higienePessoalResult,
} from "./components/data";
import "./components/homeStyle.css";
import ResultPdf from "./components/resultPdf";
import ModalResultMobile from "./components/ModalResultMobile";

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
    { value: 5.0, label: "5 - Supervisão" },
    { value: 5, label: "5 - Deambulação Doméstica" },
    { value: 6, label: "6 - Independência Modificada" },
    { value: 7, label: "7 - Independência Completa" },
  ];

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [areaAtuacao, setAreaAtuacao] = useState("");
  const [local, setLocal] = useState("");
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
  const [resultadoFinal, setResultadoFinal] = useState(null);
  const [enviado, seteEnviado] = useState(false);

  const handleResult = () => {
    seteEnviado(true);
    setAlimentacao(alimentacaoResult(alimentacao));
    setHigienePessoal(higienePessoalResult(higienePessoal));
    setBanho(banhoResult(banho));
  };

  return (
    <div className="w-100">
      <ModalResultMobile
        enviado={enviado}
        alimentacao={alimentacao}
        higienePessoal={higienePessoal}
        nome={nome}
        idade={idade}
        sexo={sexo}
        areaAtuacao={areaAtuacao}
        local={local}
        banho={banho}
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
                className="col-lg-12"
                label="Nome:"
                type="text"
                placeholder="Digite o nome"
                onChange={({ target }) => setNome(target.value)}
              />
            </div>
            <div className="col-lg-2">
              <Input
                label="Idade:"
                type="number"
                placeholder="Digite a idade"
                onChange={({ target }) => setIdade(target.value)}
              />
            </div>

            <div className="col-lg-2">
              <Select
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
                label="Local:"
                type="text"
                placeholder="Digite o local"
                onChange={({ target }) => setLocal(target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form-grupo">
          <form className="caixa-formulario">
            <div className="caixa-form-autoCuidado">
              <h5 className="autocuidado ">
                <span className="titulos-cards">
                  Autocuidado <FaUtensils />
                </span>
              </h5>

              <Select
                label="Alimentação:"
                options={commonOptions}
                onChange={({ target }) => setAlimentacao(target.value)}
              />
              <Select
                label="Higiene pessoal:"
                label2="Apresentação e aparência"
                options={commonOptions}
                onChange={({ target }) => setHigienePessoal(target.value)}
              />
              <Select
                label="Banho:"
                label2="Lavar o corpo"
                options={commonOptions}
                onChange={({ target }) => setBanho(target.value)}
              />
              <Select
                label="Vestir:"
                label2="Metade superior do corpo"
                options={commonOptions}
                onChange={({ target }) => setVestirSuperior(target.value)}
              />
              <Select
                label="Vestir:"
                label2="Metade inferior do corpo"
                options={commonOptions}
                onChange={({ target }) => setVestirInferior(target.value)}
              />

              <Select
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
                label="Controle de urina:"
                label2="frequência de incontinência"
                options={commonOptions}
                onChange={({ target }) => setUrina(target.value)}
              />
              <Select
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
                label="Transferências:"
                label2="leito, cadeira, cadeira de rodas"
                options={commonOptions}
                onChange={({ target }) => setTransferenciaCadeira(target.value)}
              />

              <Select
                label="Transferências:"
                label2="Vaso sanitário"
                options={commonOptions}
                onChange={({ target }) => setTransferenciaVaso(target.value)}
              />

              <Select
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
                label="Marcha/ Cadeira de rodas:"
                options={locomocaoOptions}
                onChange={({ target }) => setMarchaCr(target.value)}
              />

              <Select
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

              <label>
                <b>Compreensão:</b>
              </label>
              <select
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

              <label>
                <b>Expressão:</b>
              </label>
              <select
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
              <label>
                <b>Interação social:</b>
              </label>
              <select
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

              <label>
                <b>Resolução de problemas:</b>
              </label>
              <select
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

              <label>
                <b>Memória:</b>
              </label>
              <select
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

          <div className="caixa-resultados">
            <div className="texto-resultado">
              {
                <ResultPdf
                  alimentacao={alimentacao}
                  higienePessoal={higienePessoal}
                  enviado={enviado}
                  nome={nome}
                  idade={idade}
                  sexo={sexo}
                  areaAtuacao={areaAtuacao}
                  local={local}
                  banho={banho}
                />
              }
            </div>
          </div>
        </div>

        <div className="botao-enviar m-4 d-flex gap-2">
          <button onClick={handleResult} className="btn bg-success text-white">
            Enviar
            <i className="text-white">
              <FaPaperPlane />
            </i>
          </button>
          <button className="btn bg-white border">
            <FaRegTrashAlt />
          </button>
          <button className="btn bg-white border">
            <FaPrint />
          </button>
          <button className="btn bg-white border">
            <FaCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
