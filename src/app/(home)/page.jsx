"use client";

import Input from "@/components/common/form/Input/Input";
import Select from "@/components/common/form/select/Select";
import Image from "next/image";
import {
  FaCommentDots,
  FaFileDownload,
  FaPaperPlane,
  FaPuzzlePiece,
  FaRegTrashAlt,
  FaRunning,
  FaToilet,
  FaUtensils,
  FaWheelchair,
} from "react-icons/fa";
import imagem from "../../../public/imagens/logo.png";
import "./components/homeStyle.css";

const index = () => {
  //Variables

  //Sex Options
  const sexoptions = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
  ];

  // Wheelchair Options
  const wheelchairOptions = [
    { value: "Sim", label: "Sim" },
    { value: "Não", label: "Não" },
  ];

  //Alimentacao options
  const commonOptions = [
    { value: 1, label: "Assistência Total" },
    { value: 2, label: "Assistência Máxima" },
    { value: 3, label: "Assistência Moderada" },
    { value: 4, label: "Assistência com Contato Mínimo" },
    { value: 5, label: "Supervisão ou Preparação" },
    { value: 6, label: "Independência Modificada" },
    { value: 7, label: "Independência Completa" },
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

  return (
    <div className="w-100">
      <div className="container p-1">
        <h1 className="textoSemCss">+ Função</h1>
        <h1 className="titulo">
          <Image
            src={imagem}
            width={250}
            height={90}
            alt="Logo"
            priority={true}
          />
        </h1>
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
              />
            </div>
            <div className="col-lg-2">
              <Input
                label="Idade:"
                type="number"
                placeholder="Digite a idade"
              />
            </div>
            <div className="col-lg-2">
              <Input label="Local:" type="text" placeholder="Digite o local" />
            </div>
            <div className="col-lg-2">
              <Select
                label="Sexo:"
                className="text-secondary p-1"
                name="sexo"
                id="sexo"
                placeholder="Selecione"
                options={sexoptions}
              />
            </div>
            <div className="col-lg-2">
              <Select
                label="Cadeira de rodas:"
                className="text-secondary p-1"
                name="sexo"
                id="sexo"
                placeholder="Selecione"
                options={wheelchairOptions}
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

              <Select label="Alimentação:" options={commonOptions} />
              <Select
                label="Higiene pessoal:"
                label2="Apresentação e aparência"
                options={commonOptions}
              />
              <Select
                label="Banho"
                label2="Lavar o corpo"
                options={commonOptions}
              />
              <Select
                label="Vestir"
                label2="Metade superior do corpo"
                options={commonOptions}
              />
              <Select
                label="Vestir"
                label2="Metade inferior do corpo"
                options={commonOptions}
              />

              <Select
                label="Utilização do vaso sanitário"
                options={commonOptions}
              />
            </div>

            <div className="caixa-form-controleEsfincteres">
              <h5 className="controleDeEsfincter">
                <span className="titulos-cards">
                  Controle de esfíncteres <FaToilet />
                </span>
              </h5>

              <Select
                label="Controle de urina"
                label2="frequência de incontinência"
                options={commonOptions}
              />
              <Select label="Controle das fezes" options={commonOptions} />
            </div>

            <div className="caixa-form-mobilidade">
              <h5 className="mobilidade ">
                <span className="titulos-cards">
                  Mobilidade <FaRunning />
                </span>
              </h5>

              <Select
                label="Transferências:"
                label2="leito, cadeira, cadeira de rodas"
                options={commonOptions}
              />
              <Select
                label="Transferências:"
                label2="leito, cadeira, cadeira de rodas"
                options={commonOptions}
              />

              <Select
                label="Transferências:"
                label2="Vaso sanitário"
                options={commonOptions}
              />

              <Select
                label="Transferências:"
                label2="Banheira ou chuveiro"
                options={commonOptions}
              />
            </div>

            <div className="caixa-form-locomocao">
              <h5 className="locomocao ">
                <span className="titulos-cards">
                  Locomoção <FaWheelchair />
                </span>
              </h5>

              <Select
                label="Marcha/ Cadeira de rodas:"
                options={locomocaoOptions}
              />

              <Select label="Escadas:" options={locomocaoOptions} />
            </div>

            <div className="caixa-form-comunicacao">
              <h5 className="comunicacao">
                <span className="titulos-cards">
                  Comunicação <FaCommentDots />
                </span>
              </h5>

              <label>
                <b>Compreensão</b>
              </label>
              <select name="compreensao" id="compreensao">
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
                <b>Expressão</b>
              </label>
              <select name="expressao" id="expressao">
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
                  Conhecimento Social <FaPuzzlePiece />
                </span>
              </h5>
              <label>
                <b>Interação social</b>
              </label>
              <select name="interacao-social" id="interacao-social">
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
                <b>Resolução de problemas</b>
              </label>
              <select name="resolucao-de-problemas" id="resolucao-de-problemas">
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
                <b>Memória</b>
              </label>
              <select name="memoria" id="memoria">
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
            <div className="texto-resultado">Nenhum resultado.</div>
          </div>
        </div>

        <div className="botao-enviar m-4 d-flex gap-2">
          <button className="btn bg-success text-white">
            Enviar{" "}
            <i className="text-white">
              <FaPaperPlane />
            </i>
          </button>
          <button className="btn bg-white border">
            <FaRegTrashAlt />
          </button>
          <button className="btn bg-white border">
            <FaFileDownload />
          </button>
          <button className="btn bg-white border">Copiar</button>
        </div>
      </div>
    </div>
  );
};

export default index;
