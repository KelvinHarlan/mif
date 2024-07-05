"use client";

import CardsMenu from "./CadMenu";

const index = () => {
  //VARIABLES

  //COMPONENT
  return (
    <div className="w-100 p-4">
      {/*  START BOX LOGO AND NAME */}
      <div className="mt-5 d-flex gap-1 align-items-center">
        <img
          className="rounded-circle border "
          src="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg"
          alt="logo"
          width={50}
          height={50}
        />
        <span style={{ color: "#6699ae" }} className="h5 mt-2">
          Olá, Renata Gomes
        </span>
      </div>
      {/*  END BOX LOGO AND NAME */}

      {/* START BOX MENU */}
      <div style={{ marginTop: "8vh" }}>
        <CardsMenu />
      </div>
      {/* END BOX MENU */}
    </div>
    // END CONTAINER
  );
};

export default index;
