import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/home/itemsListCotainer/ItemListContainer";

function App() {
  let saludo = "Hola!!!!";
  let local = "UN JARDIN PARA ARTEMISA";

  return (
    <div>
      <Navbar />

      <Home />
      <ItemListContainer welcome={saludo} vivero={local} />

      <Footer />
    </div>
  );
}

export default App;
