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
    if (
      password === passwordLogin &&
      emailLogin === email.toLocaleLowerCase()
    ) {
      console.log("Login realizado com sucesso");
      toast.success("Login realizado com sucesso!", { autoClose: 1000 });
      router.push("/home");
    } else {
      toast.error("Login ou senha inválido.");
    }
  };

  return (
    <div className="container-login">
      <div className="card-box">
        <div className="card-login-desktop">
          <div className="content-card-desktop">
            <div className="box-text-desk-login p-4">
              <h2 className="m-0"> Olá, seja</h2>
              <h1 style={{ paddingLeft: "20px" }}>BEM VINDO!</h1>
            </div>
            <div className="image-login-desk">
              <Image
                src={imgMedical}
                width={400}
                height={400}
                alt="Logo"
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="login-container">
          <div className="image-login">
            <Image
              src={imagem}
              width={200}
              height={200}
              alt="Logo"
              priority={true}
            />
          </div>

          <div className="input-login">
            <Input
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              id="email"
              placeholder="Email"
            />
            <FaUser style={{ color: "#6699ae " }} />
          </div>
          <div className="input-login">
            <Input
              onChange={({ target }) => setPassword(target.value)}
              type={viewPassword ? "text" : "password"}
              placeholder="Senha"
            />
            {!password ? (
              <FaLock style={{ color: "#6699ae " }} />
            ) : (
              <>
                {!viewPassword ? (
                  <FaEye
                    onClick={handleViewPassword}
                    style={{ color: "#6699ae " }}
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={handleViewPassword}
                    style={{ color: "#6699ae " }}
                  />
                )}
              </>
            )}
          </div>
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
