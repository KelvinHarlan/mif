"use client";

import Image from "next/image";
import imagem from "@/../public/imagens/logo.png";
import Input from "@/components/common/form/Input/Input";
import { FaEye, FaLock, FaRegEyeSlash, FaUser } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [password, setPassword] = useState("");
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <div className="login-container">
      <div className="image-login">
        <Image
          src={imagem}
          width={200}
          height={68}
          alt="Logo"
          priority={true}
        />
      </div>

      <span className="input-login">
        <Input placeholder="Email" />
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
      <button className="btn-login">Entrar</button>
    </div>
  );
};

export default Login;
