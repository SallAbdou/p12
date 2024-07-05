import logo from  '../public/assets/icone.png';

const Header = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <a className='logo-title'>SportSee</a>
      
      <nav className='navbarTEST'>
        <a>Accueil</a>
        <a href="#">Profil</a>
        <a>Réglage</a>
        <a>Communauté</a>
      </nav>
      
    </div>
  );
}

export default Header;