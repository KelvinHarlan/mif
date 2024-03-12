"use client";

import Image from "next/image";
import imagem from "@/../public/imagens/logo.png";
import Input from "@/components/common/form/Input/Input";
import { FaEye, FaLock, FaRegEyeSlash, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
      router.push("/home");
    } else {
      console.log("algo deu errado ");
    }
  };

  return (
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
        <FaUser style={{ color: "#271d77" }} />
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
  );
};

export default Login;
