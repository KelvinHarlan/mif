"use client";
import imagemLogo from "@/../public/imagens/logo.png";
import ModalCommon from "@/components/utils/ModalCommon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaInfoCircle, FaUserCircle } from "react-icons/fa";
const Assessment = () => {
  const router = useRouter();
  const handleMif = () => {
    router.push("/home");
  };
  const [showModal, setshowModal] = useState(false);

  const handleClosed = () => {
    setshowModal(false);
  };

  const showMore = () => {
    setshowModal(true);
  };

  const message = ``;

  return (
    <div className="container-assessment">
      <ModalCommon
        message={message}
        showModal={showModal}
        handleClosed={handleClosed}
      />
      <div className="container-logo-user">
        <div className="avaliation-logo">
          <Image
            src={imagemLogo}
            width={250}
            height={90}
            alt="Logo"
            priority={true}
          />
        </div>
        <div className="avaliation-user">
          <div className="box-user-label">
            <FaUserCircle className="img-user" />
            <h4>Olá, Renata</h4>
          </div>
        </div>
      </div>

      <div className="container-cards">
        <h2>ESCOLHA A AVALIAÇÃO QUE DESEJA APLICAR</h2>
      </div>

      <div className="box-cards">
        <div className="box-more">
          <span className="more">
            <FaInfoCircle className="icon-card" />
          </span>
          <div className="card">
            <span className="content-card">
              AVALIAÇÃO PRÉ-ANESTÉSICA DA SAÚDE BUCAL
            </span>
          </div>
        </div>

        <div className="box-more">
          <span className="more">
            <FaInfoCircle className="icon-card" />
          </span>
          <div className="card">
            <span className="content-card">
              ESCALA DE DEPRESSÃO GERIÁTRICA ABREVIADA
            </span>
          </div>
        </div>

        <div className="box-more">
          <span onClick={showMore} className="more">
            <FaInfoCircle className="icon-card" />
          </span>
          <div onClick={handleMif} className="card">
            <span className="content-card">
              MEDIDA DE INDEPENDÊNCIA FUNCIONAL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
