"use client";
import imagemLogo from "@/../public/imagens/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInfoCircle, FaUserCircle } from "react-icons/fa";
const Assessment = () => {
  const router = useRouter();
  const handleMif = () => {
    router.push("/home");
  };
  return (
    <div className="container-assessment">
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

      <div className="container-cards">
        <h2>ESCOLHA A AVALIAÇÃO QUE DESEJA APLICAR</h2>
      </div>

      <div className="box-cards">
        <div className="card">
          <span className="content-card">INVENTÁRIO DE DEPRESSÃO DE BECK</span>
          <FaInfoCircle className="icon-card" />
        </div>
        <div className="card">
          <span className="content-card">
            AVALIAÇÃO PRÉ-ANESTÉSICA DA SAÚDE BUCAL
          </span>
          <FaInfoCircle className="icon-card" />
        </div>
        <div onClick={handleMif} className="card">
          <span className="content-card">
            MEDIDA DE INDEPENDÊNCIA FUNCIONAL
          </span>
          <FaInfoCircle className="icon-card" />
        </div>
      </div>
    </div>
  );
};

export default Assessment;
