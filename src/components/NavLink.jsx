function NavLink({ view, label, currentView, onClick }) {
  const isActive = view === currentView;

  return (
    <a
      href="#"
      className={isActive ? 'nav-link nav-link-activo' : 'nav-link'}
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