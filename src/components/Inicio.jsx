function Inicio({ onNavegar }) {
  return (
    <div className="inicio">
      <h2 className="inicio-titulo">Bienvenido a PawStore</h2>
      <p className="inicio-texto">Somos una tienda dedicada a ofrecer productos de calidad para tus mascotas.</p>
      <p className="inicio-texto">Explora nuestro catálogo para encontrar camas, juguetes, accesorios y más.</p>
      <button onClick={() => onNavegar('catalogo')}>Ver productos</button>
      <p className="inicio-info">
        Esta es la página principal de la aplicación. Más adelante aquí se podrán
        mostrar productos destacados.
      </p>
    </div>
  );
}

export default Inicio;