"use client";

import ResultPdf from "./resultPdf";

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
