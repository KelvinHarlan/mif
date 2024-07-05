"use client";
import { useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa";
import imagem from "@/../public/imagens/logo.png";
import Image from "next/image";
import CardsElderly from "./CardsElderly";

const MyElderly = () => {
  //VARIABLES
  const router = useRouter();

  //HANDLE RETURN
  const handleReturn = () => {
    router.push("/home");
  };
  return (
    <>
      {/* START AJUST */}
      <div style={{ marginLeft: "20px" }}>
        <Image
          src={imagem}
          width={100}
          height={100}
          alt="Logo"
          priority={true}
        />
      </div>
      {/* END AJUST */}

      <div className="w-100 p-4">
        <div className="d-flex">
          <span
            onClick={handleReturn}
            style={{
              backgroundColor: "#6699ae",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
            className="btn btn-sm"
          >
            <FaAngleLeft />
          </span>
        </div>
        {/* START TITLE */}
        <div style={{ color: "#6699ae" }} className="text-center mb-4">
          <span className="h6">Ao seu cuidado</span>
        </div>
        {/* END TITLE */}
        <div>
          {/* START CARDS */}
          <div>
            <CardsElderly />
          </div>

          {/* START BOX MENU */}
        </div>
      </div>
    </>
  );
};

export default MyElderly;
