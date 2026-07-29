import ProductCard from './ProductCard';

function Catalog({ products, onViewDetails }) {
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles por el momento.</p>;
  }

  return (
    <div className="catalogo">
      <h2 className="catalogo-titulo">Catálogo de productos</h2>
      <div className="catalogo-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;