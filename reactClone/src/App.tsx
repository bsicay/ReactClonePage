import Navbar from "@/scenes/navbar";
import Main from "@/scenes/main";
import Interface from "@/scenes/createInterfaces";
import Platform from "@/scenes/platform";
import Carrousel from "@/scenes/carrousel";

function App() {
  return <div className="app bg-gray-20">
      <Navbar />
      <Main />
      <Interface />
      <Platform />
      <Carrousel />
  </div>
}

export default App;
