function NavLink({ vista, label, vistaActual, onClick }) {
  const esActivo = vista === vistaActual;

  return (
    <a
      href="#"
      className={esActivo ? "nav-link nav-link-activo" : "nav-link"}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {label}
    </a>
  );
}

export default NavLink;
