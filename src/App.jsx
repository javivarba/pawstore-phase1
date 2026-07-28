import { useState } from 'react';
import products from './data/products.json';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Catalogo from './components/Catalogo';
import Detalle from './components/Detalle';
import Contacto from './components/Contacto';

function App() {
  const [vistaActual, setVistaActual] = useState('inicio');
  const [idProductoSeleccionado, setIdProductoSeleccionado] = useState(null);

  function handleNavegar(vista) {
    setVistaActual(vista);
  }

  function handleVerDetalle(id) {
    setIdProductoSeleccionado(id);
    setVistaActual('detalle');
  }

  function handleVolverCatalogo() {
    setVistaActual('catalogo');
  }

  function renderVista() {
    switch (vistaActual) {
      case 'inicio':
        return <Inicio onNavegar={handleNavegar} />;

      case 'catalogo':
        return (
          <Catalogo productos={products} onVerDetalle={handleVerDetalle} />
        );

      case 'detalle': {
        const producto = products.find(
          (p) => p.id === idProductoSeleccionado
        );
        return <Detalle producto={producto} onVolver={handleVolverCatalogo} />;
      }

      case 'contacto':
        return <Contacto />;

      default:
        return null;
    }
  }

  return (
    <>
      <Header vistaActual={vistaActual} onNavegar={handleNavegar} />
      <main>{renderVista()}</main>
      <Footer />
    </>
  );
}

export default App;