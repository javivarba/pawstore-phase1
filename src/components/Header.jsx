import NavLink from './NavLink';

const ITEMS_MENU = [
  { label: 'Inicio', vista: 'inicio' },
  { label: 'Productos', vista: 'catalogo' },
  { label: 'Contacto', vista: 'contacto' },
];

function Header({ vistaActual, onNavegar }) {
  return (
    <header className="header">
      <h1 className="header-titulo">PawStore</h1>
      <nav className="header-nav">
        {ITEMS_MENU.map((item) => (
          <NavLink
            key={item.vista}
            vista={item.vista}
            label={item.label}
            vistaActual={vistaActual}
            onClick={() => onNavegar(item.vista)}
          />
        ))}
      </nav>
    </header>
  );
}

export default Header;