import { Link } from "react-router-dom";
import Corzina from "../assets/Vector.svg"

const Header = () => {
  return (
    <header className="shadow-md py-4 px-6 flex justify-between items-center bg-[#484283]">
      <h1 className="text-2xl font-bold text-white ml-[200px] mr-[100px]">SneakMax</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-600 text-white">Каталог</Link></li>
          <li><Link to="/blog" className="hover:text-gray-600 text-white">Блог</Link></li>
          <li><Link to="/kartas" className="hover:text-gray-600 text-white">Контакты</Link></li>
          <li><Link to="/" className="hover:text-gray-600 text-white">Наша команда</Link></li>
          <li><Link to="/" className="hover:text-gray-600 text-white">Доставка и оплата</Link></li>
          <li><Link to="/" className="hover:text-gray-600 text-white">Контакты</Link></li>
          <li><Link to="/" className="hover:text-gray-600 text-white">Корзина</Link></li>
        <img src={Corzina} alt="" />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
