import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-extrabold text-white mb-8">
        Tailwind Çalışıyor 🎯
      </h1>
      <button className="bg-white text-pink-500 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-pink-100 transition">
        Butona Bas
      </button>
    </div>
  );
}

export default App;
