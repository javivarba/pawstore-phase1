function ProductCard({ product, onViewDetails }) {
  return (
    <article className="product-card">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="product-card-imagen"
      />
      <h3 className="product-card-nombre">{product.nombre}</h3>
      <p className="product-card-precio">${product.precio}</p>
      <p className="product-card-categoria">{product.categoria}</p>
      <button onClick={() => onViewDetails(product.id)}>
        Ver detalles
      </button>
    </article>
  );
}

export default ProductCard;