"use client";

import Image from "next/image";
import imagem from "@/../public/imagens/logo.png";
import imgMedical from "@/../public/imagens/medical.svg";
import Input from "@/components/common/form/Input/Input";
import { FaEye, FaLock, FaRegEyeSlash, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [viewPassword, setViewPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };
  const [passwordLogin, setPasswordLogin] = useState("123");
  const [emailLogin, setEmailLogin] = useState("avaliamais@gmail.com");

  const verifyLogin = () => {
    if (password === passwordLogin && emailLogin === email) {
      console.log("Login realizado com sucesso");
      toast.success("Login realizado com sucesso!");
      router.push("/home");
    } else {
      console.log("algo deu errado ");
      toast.error("Login ou senha inválido.");
    }
  };

  return (
    <div className="container">
      <div className="card-box">
        <div className="card-login-desktop">
          <div className="content-card-desktop text-center">
            <div className="image-login">
              <Image
                src={imgMedical}
                width={400}
                height={400}
                alt="Logo"
                priority={true}
              />
            </div>
            <h5> Cuidar com precisão, avaliar com o coração.</h5>
          </div>
        </div>
        <div className="login-container">
          <div className="image-login">
            <Image
              src={imagem}
              width={220}
              height={75}
              alt="Logo"
              priority={true}
            />
          </div>

          <span className="input-login">
            <Input
              onChange={({ target }) => setEmail(target.value)}
              placeholder="Email"
            />
            <FaUser  style={{ color: "#271d77" }} />
          </span>
          <span className="input-login">
            <Input
              onChange={({ target }) => setPassword(target.value)}
              type={viewPassword ? "text" : "password"}
              placeholder="Senha"
            />
            {!password ? (
              <FaLock style={{ color: "#271d77" }} />
            ) : (
              <>
                {!viewPassword ? (
                  <FaEye
                    onClick={handleViewPassword}
                    style={{ color: "#271d77" }}
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={handleViewPassword}
                    style={{ color: "#271d77" }}
                  />
                )}
              </>
            )}
          </span>
          <div className="forgot-password">
            <span>Esqueceu a senha?</span>
          </div>
          <button onClick={verifyLogin} className="btn-login">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
