import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
        <ToastContainer
          position="bottom-right" // Bildirimlerin konumu (örneğin: "top-right", "top-center", "bottom-left" vb.)
          autoClose={3000} // Otomatik kapanma süresi (ms cinsinden, 3000ms = 3 saniye)
          hideProgressBar={false} // İlerleme çubuğunu gizle/göster
          newestOnTop={false} // Yeni bildirimler üste mi gelsin?
          closeOnClick // Bildirime tıklayınca kapansın mı?
          rtl={false} // Sağdan sola dil desteği
          pauseOnFocusLoss // Pencere odağını kaybedince duraklat
          draggable // Sürüklenebilir bildirimler
          pauseOnHover // Üzerine gelince duraklat
          theme="light" // Tema: "light", "dark", veya "colored"
        />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
