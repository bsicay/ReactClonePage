import Navbar from "@/scenes/navbar";
import Main from "@/scenes/main";
import Interface from "@/scenes/createInterfaces";
import Platform from "@/scenes/platform";
import Carrousel from "@/scenes/carrousel";
import Footer from "@/scenes/footer";
import Upgrade from "@/scenes/upgrade";

function App() {
  return <div className="app bg-gray-20">
      <Navbar />
      <Main />
      <Interface />
      <Platform />
      <Upgrade />
      <Carrousel />
      <Footer />
  </div>
}

export default App;
