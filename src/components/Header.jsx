import logo from  '../public/assets/icone.png';

const Header = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <a href="#">Accueil</a>
      <a href="#">Profil</a>
      <a href="#">Réglage</a>
      <a href="#">Communauté</a>
    </div>
  );
}

export default Header;