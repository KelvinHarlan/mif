"use client";

const ModalClear = ({ isModalClosed, setIsModalClosed, clear, seteEnviado }) => {
  //Component

  const handleNot = ()=>{
    seteEnviado(true)
    setIsModalClosed(false)
  }


  return (
    <div className="modalClear">
      {isModalClosed && (
        <div
          className="modal d-flex align-items-center justify-content-center"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", background: "#00000045" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {/*End Basic Data*/}
              <div className="modal-body">
                <div className="d-flex flex-column align-items-center gap-2">
                  <h6>Deseja realmente apagar?</h6>
                  <div className="d-flex gap-2">
                    <button onClick={clear} className="btn  btn-light border">
                      Sim
                    </button>
                    <button
                      onClick={handleNot}
                      className="btn   btn-light border"
                    >
                      Não
                    </button>
                  </div>
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

export default ModalClear;
