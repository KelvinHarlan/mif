import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {/* Adicione o ToastContainer aqui */}
        <ToastContainer position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
