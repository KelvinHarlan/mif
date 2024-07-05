import { useRouter } from "next/navigation";
import { FaCalendarAlt, FaRegUser, FaRegSun, FaEdit } from "react-icons/fa";

const CardsMenu = () => {
  //VARIABLES
  const router = useRouter();

  //HANDLE MENU CONFIG
  const handleMenuConfig = () => {
    router.push("/user-config");
  };
  //HANDLE MY ELDERLY
  const handleMyElderly = () => {
    router.push("/my-elderly");
  };

  const styleCard = {
    backgroundColor: "#6699ae",
    color: "#fff",
    minHeight: "130px",
    minWidth: "130px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
    borderRadius: "5px",
  };

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      <div style={styleCard} className="col-5 m-1">
        <span className="mb-2">AGENDA</span>
        <FaCalendarAlt style={{ fontSize: "3rem" }} />
      </div>
      <div onClick={handleMyElderly} style={styleCard} className="col-5 m-1">
        <span className="mb-2">AO SEU CUIDADO</span>
        <FaRegUser style={{ fontSize: "3rem" }} />
      </div>
      <div onClick={handleMenuConfig} style={styleCard} className="col-5 m-1">
        <span className="mb-2">CONFIGURAÇÕES</span>
        <FaRegSun style={{ fontSize: "3rem" }} />
      </div>
      <div style={styleCard} className="col-5 m-1">
        <span className="mb-2">NOTAS</span>
        <FaEdit style={{ fontSize: "3rem" }} />
      </div>
    </div>
  );
};

export default CardsMenu;
