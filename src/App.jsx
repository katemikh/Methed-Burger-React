//import { Container } from "./components/Container/Container";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Navigation } from "./components/Navigation/Navigation";

export const App = () => {
  

  return (
    <> 
    <Header />

    <main> 
    <Navigation />
    <Catalog />
    </main>
    <Footer />

</>
  )
}

