import { FaPen, FaLock, FaBell, FaFileAlt, FaInfo } from "react-icons/fa";

const BoxMenus = () => {
  const stylesCard = {
    minHeight: "100px",
    borderBottom: "1px solid #f3f3f3",
    display: "flex",
    gap: "5px",
    alignItems: "center",
    fontSize: "1.2rem",
  };

  return (
    <div className="mt-4">
      <div>
        <div style={stylesCard} className="d-flex gap-3">
          <FaPen style={{ color: "#6699ae" }} />
          <span>Dados Pessoais</span>
        </div>
        <div style={stylesCard} className="d-flex gap-3">
          <FaLock style={{ color: "#6699ae" }} />
          <span>Alterar Senha</span>
        </div>
        <div style={stylesCard} className="d-flex gap-3">
          <FaBell style={{ color: "#6699ae" }} />
          <span>Avisos</span>
        </div>
        <div style={stylesCard} className="d-flex gap-3">
          <FaFileAlt style={{ color: "#6699ae" }} />
          <span>Termos de Serviços</span>
        </div>
        <div style={stylesCard} className="d-flex gap-3">
          <FaInfo  style={{ color: "#6699ae" }} />
          <span>Sobre o OrienTO</span>
        </div>
      </div>
    </div>
  );
};

export default BoxMenus;
