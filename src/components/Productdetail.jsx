function ProductDetail({ product, onBack }) {
  if (!product) return null;

  return (
    <div className="detalle">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="detalle-imagen"
      />
      <h2 className="detalle-nombre">{product.nombre}</h2>
      <p className="detalle-precio">${product.precio}</p>
      <p className="detalle-categoria">{product.categoria}</p>
      <p className="detalle-descripcion">{product.descripcion}</p>
      <p className="detalle-info">
        Más adelante aquí se podrá agregar este producto al carrito y
        completar la compra.
      </p>
      <button onClick={onBack}>Volver al catálogo</button>
    </div>
  );
}

export default ProductDetail;