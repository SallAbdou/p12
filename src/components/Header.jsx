import logo from '../public/assets/logo.png';

const Header = () => {
  return (
    <nav className="header">
      <a><img src={logo} alt="Logo" /> </a>
      <div>
        <a href="#">Accueil</a>
        <a href="#">Profil</a>
        <a href="#">Réglage</a>
        <a href="#">Communauté</a>
      </div>

    </nav>
  );
}

export default Header;