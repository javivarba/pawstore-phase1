function Detalle({ producto, onVolver }) {
  if (!producto) return null;

  return (
    <div className="detalle">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="detalle-imagen"
      />
      <h2 className="detalle-nombre">{producto.nombre}</h2>
      <p className="detalle-precio">${producto.precio}</p>
      <p className="detalle-categoria">{producto.categoria}</p>
      <p className="detalle-descripcion">{producto.descripcion}</p>
      <p className="detalle-info">
        Más adelante aquí se podrá agregar este producto al carrito y
        completar la compra.
      </p>
      <button onClick={onVolver}>Volver al catálogo</button>
    </div>
  );
}

export default Detalle;