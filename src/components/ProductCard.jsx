function ProductCard({ producto, onVerDetalle }) {
  return (
    <article className="product-card">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="product-card-imagen"
      />
      <h3 className="product-card-nombre">{producto.nombre}</h3>
      <p className="product-card-precio">${producto.precio}</p>
      <p className="product-card-categoria">{producto.categoria}</p>
      <button onClick={() => onVerDetalle(producto.id)}>
        Ver detalles
      </button>
    </article>
  );
}

export default ProductCard;