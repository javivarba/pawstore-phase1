import { useState } from 'react';
import products from './data/products.json';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);

  function handleNavigate(view) {
    setCurrentView(view);
  }

  function handleViewDetails(id) {
    setSelectedProductId(id);
    setCurrentView('detail');
  }

  function handleBackToCatalog() {
    setCurrentView('catalog');
  }

  function renderView() {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;

      case 'catalog':
        return (
          <Catalog products={products} onViewDetails={handleViewDetails} />
        );

      case 'detail': {
        const product = products.find(
          (p) => p.id === selectedProductId
        );
        return <ProductDetail product={product} onBack={handleBackToCatalog} />;
      }

      case 'contact':
        return <Contact />;

      default:
        return null;
    }
  }

  return (
    <>
      <Header currentView={currentView} onNavigate={handleNavigate} />
      <main>{renderView()}</main>
      <Footer />
    </>
  );
}

export default App;