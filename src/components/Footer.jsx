import Icon1 from '../public/assets/icon1.png';
import Icon2 from '../public/assets/icon2.png';
import Icon3 from '../public/assets/icon3.png';
import Icon4 from '../public/assets/icon4.png';

const Footer = () => {
  return (
    <nav className="footer">
      <div>
        <button>
          <img src={Icon1} alt="Icon 1" />
        </button>
        <button>
          <img src={Icon2} alt="Icon 2" />
        </button>
        <button>
          <img src={Icon3} alt="Icon 3" />
        </button>
        <button>
          <img src={Icon4} alt="Icon 4" />
        </button>
      </div>
      <p>© Copiryght, SportSee 2020</p>
    </nav>
  );
}

export default Footer;
