"use client";

import { FaCopy } from "react-icons/fa";
import ResultPdf from "./resultPdf";
import { useRef } from "react";
import { toast } from "react-toastify";

const ModalResultMobile = ({
  enviado,
  alimentacao,
  higienePessoal,
  nome,
  idade,
  sexo,
  areaAtuacao,
  local,
  banho,
  vestirSuperior,
  vestirInferior,
  vaso,
  urina,
  fezes,
  transferenciaCadeira,
  transferenciaVaso,
  transferenciaChuveiro,
  marchaCr,
  escadas,
  compreensao,
  expressao,
  interacao,
  resolucao,
  memoria,
  seteEnviado,
  acompanhante,
}) => {
  const handleClosed = () => {
    seteEnviado(false);
  };

  const componentRefMobile = useRef(null);

  const copyTextResult = () => {
    if (componentRefMobile.current) {
      const textoDoComponente = componentRefMobile.current.innerText;
      navigator.clipboard
        .writeText(textoDoComponente)
        .then(() => {
          toast.success("Copiado com sucesso!");
        })
        .catch((error) => {
          console.error("Erro ao copiar o texto do componente:", error);
        });
    } else {
      toast.error("Não há texto para copiar.");
    }
  };

  //Component
  return (
    <div className="modal-result-mobile">
      {enviado && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", background: "#00000045" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <h5 className="modal-title">
                  <span className="la la-bell p-2"></span>Resultado
                </h5>
                <button
                  className="btn btn-sm bg-danger text-white"
                  onClick={handleClosed}
                  type="button"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                {/*End Btn Close*/}
              </div>

              {/*End Basic Data*/}
              <div ref={componentRefMobile} className="modal-body">
                <div>
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
                    vestirSuperior={vestirSuperior}
                    vestirInferior={vestirInferior}
                    vaso={vaso}
                    urina={urina}
                    fezes={fezes}
                    transferenciaCadeira={transferenciaCadeira}
                    transferenciaVaso={transferenciaVaso}
                    transferenciaChuveiro={transferenciaChuveiro}
                    marchaCr={marchaCr}
                    escadas={escadas}
                    compreensao={compreensao}
                    expressao={expressao}
                    interacao={interacao}
                    resolucao={resolucao}
                    memoria={memoria}
                    acompanhante={acompanhante}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={copyTextResult}
                    style={{ backgroundColor: "#271d77" }}
                    className="btn bg-white border"
                  >
                    <span>Copiar </span>
                    <FaCopy />
                  </button>
                </div>
                {/*End Form*/}
              </div>
              {/*End Modal Body*/}
            </div>
            {/*End Modal Content*/}
          </div>
          {/*End Modal*/}
        </div>
      )}
    </div>
  );
};

export default ModalResultMobile;
