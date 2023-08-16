import './App.css';
import CardWrapper from './CardWrapper';

const productConfig = {
  desktopView: "./assets/image-product-desktop.jpg",
  mobileView: "./assets/image-product-mobile.jpg",
  type: "PERFUME",
  name: "Gabrielle Essence Eau De Parfum",
  description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  salePrice: "$149.99",
  fullPrice: "$169.99",
}

function App() {
  return <main>
    <CardWrapper config={productConfig} />
  </main>
}

export default App
