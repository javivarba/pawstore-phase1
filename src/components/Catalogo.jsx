import ProductCard from './ProductCard';

function Catalogo({ productos, onVerDetalle }) {
  if (!productos || productos.length === 0) {
    return <p>No hay productos disponibles por el momento.</p>;
  }

  return (
    <div className="catalogo">
      <h2 className="catalogo-titulo">Catálogo de productos</h2>
      <div className="catalogo-grid">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onVerDetalle={onVerDetalle}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;