"use client";
import { useRouter } from "next/navigation";
import BoxMenus from "./BoxMenus";
import { FaAngleLeft } from "react-icons/fa";

const userConfig = () => {
  //VARIABLES
  const router = useRouter();

  //HANDLE RETURN
  const handleReturn = () => {
    router.push("/home");
  };
  return (
    <>
      {/* START AJUST */}
      <div
        style={{ backgroundColor: "#6699ae" }}
        className="text-center p-3 bold text-white"
      >
        <span className="h5">Ajustes</span>
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
        <div>
          {/* START USER LOGO */}
          <div className="mt-5 d-flex gap-1 align-items-center">
            <img
              className="rounded-circle border "
              src="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg"
              alt="logo"
              width={50}
              height={50}
            />
            <span style={{ color: "#6699ae" }} className="h5 mt-2">
              Renata Gomes
            </span>
          </div>
          {/* END USER LOGO */}

          {/* START BOX MENU */}
          <BoxMenus />
        </div>
      </div>
    </>
  );
};

export default userConfig;
