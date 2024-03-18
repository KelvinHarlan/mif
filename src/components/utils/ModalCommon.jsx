const ModalCommon = ({ header, message, handleClosed, showModal }) => {
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
                <h5 className="modal-title">
                  <span className="la la-bell p-2"></span>
                  {header}
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
                {message}
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

export default ModalCommon;
