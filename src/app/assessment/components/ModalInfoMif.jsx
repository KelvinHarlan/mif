const ModalInfoMif = ({ handleClosed, showModal }) => {
  return (
    <div>
      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", background: "#00000045" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <h5 className="modal-title"></h5>
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
                  <h5 className="blueColorDefaut m-4 text-center">
                    MEDIDA DE INDEPENDÊNCIA FUNCIONAL
                  </h5>
                  <p className="text-justify">
                    <span className="blueColorDefaut">Descrição:</span> Mensura
                    a capacidade funcional e independência, estimando o grau de
                    dificuldade ou limitações atribuídas a cada pessoa. São
                    avaliadas atividades de autocuidado, controle esfincteriano,
                    comunicação, mobilidade, locomoção e conhecimento social.
                  </p>
                  <p className="p-1">
                    <span className="blueColorDefaut">Público Alvo:</span>{" "}
                    Adultos e idosos.
                  </p>
                  <p className="p-1">
                    <span className="blueColorDefaut">Validação:</span> Versão
                    Brasileira validada em 2004.
                  </p>
                  <p className="p-1">
                    <span className="blueColorDefaut">Resultado:</span> O
                    resultado pode variar entre 18 a 126 pontos
                  </p>
                  Manual:
                  <a
                    href="https://toneurologiaufpr.files.wordpress.com/2013/03/manual-mif.pdf"
                    target="_blank"
                  >
                    {" "}
                    Clique para acessar o manual
                  </a>
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

export default ModalInfoMif;
