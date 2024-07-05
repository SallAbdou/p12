import Icon1 from '../public/assets/icon1.png';
import Icon2 from '../public/assets/icon2.png';
import Icon3 from '../public/assets/icon3.png';
import Icon4 from '../public/assets/icon4.png';

const Footer = () => {
  return (
    <div className="sidebar">
      <a href="#"><img src={Icon1} alt="Icon 1" /></a>
      <a href="#"><img src={Icon2} alt="Icon 2" /></a>
      <a href="#"><img src={Icon3} alt="Icon 3" /></a>
      <a href="#"><img src={Icon4} alt="Icon 4" /></a>
    </div>
  );
}

export default Footer;
