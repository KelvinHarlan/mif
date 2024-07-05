"use client";
import { FaIdBadge, FaPlusCircle } from "react-icons/fa";

const CardsElderly = () => {
  //VARIABLES
  const styleCard = {
    minHeight: "50px",
    backgroundColor: "#f7f7f7",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    paddingLeft: "10px",
    marginBottom: "10px",
    boirderRadius: "5px",
  };
  return (
    <div style={{ color: "#6699ae" }}>
      <div style={styleCard}>
        <FaIdBadge />
        <span>Marinalva Gomes</span>
      </div>
      <div style={styleCard}>
        <FaPlusCircle />
        <span>Cadastrar Novo Idoso</span>
      </div>
    </div>
  );
};

export default CardsElderly;
