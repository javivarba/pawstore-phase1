import NavLink from './NavLink';

const MENU_ITEMS = [
  { label: 'Inicio', view: 'home' },
  { label: 'Productos', view: 'catalog' },
  { label: 'Contacto', view: 'contact' },
];

function Header({ currentView, onNavigate }) {
  return (
    <header className="header">
      <h1 className="header-titulo">PawStore</h1>
      <nav className="header-nav">
        {MENU_ITEMS.map((item) => (
          <NavLink
            key={item.view}
            view={item.view}
            label={item.label}
            currentView={currentView}
            onClick={() => onNavigate(item.view)}
          />
        ))}
      </nav>
    </header>
  );
}

export default Header;