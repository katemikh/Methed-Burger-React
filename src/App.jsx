//import { Container } from "./components/Container/Container";
import { Provider } from "react-redux";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { ModalDelivery } from "./components/ModalDelivery/ModalDelivery.jsx";
import { Navigation } from "./components/Navigation/Navigation";
import { store } from "./store";

export const App = () => {
  

  return (
    <Provider store={store}> 
    <Header />
    <main> 
    <Navigation />
    <Catalog />
    </main>
    <Footer />
    <ModalDelivery />
    
</Provider>
  )
}

