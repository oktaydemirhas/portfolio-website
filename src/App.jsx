import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Skills />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
