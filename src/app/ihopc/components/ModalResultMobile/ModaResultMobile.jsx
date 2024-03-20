"use client";

import { useRef } from "react";
import { toast } from "react-toastify";
import ResultPdf from "../ResultPdf";

const ModalResultMobile = ({
  messageResult,
  enviado,
  nome,
  areaAtuacao,
  idade,
  local,
  acompanhante,
  placa,
  gengivite,
  saburra,
  halitose,
  secrecao,
  sangue,
  restos,
  sexo,
  seteEnviado,
}) => {
  const handleClosed = () => {
    seteEnviado(false);
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
              <div className="modal-body">
                <div>
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
                </div>
                <div className="d-flex justify-content-center">
                  {/* <button
                    onClick={copyTextResult}
                    style={{ backgroundColor: "#271d77" }}
                    className="btn bg-white border"
                  >
                    <span>Copiar </span>
                    <FaCopy />
                  </button> */}
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
