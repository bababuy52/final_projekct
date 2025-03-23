const Footer = () => {
    return (
      <footer className="bg-[#444B58] py-6 mt-[100px]">
        <div className="ml-[200px] flex">
        <p className="text-[30px] text-[white] font-bold">SneakMax</p>
        <div className="flex gap-[10px] ml-[600px] mt-[10px]">
          <a className="text-[white] text-[14px]" href="/katalog">Каталог</a>
          <a className="text-[white] text-[14px]" href="/blog">Блог</a>
          <a className="text-[white] text-[14px]" href="/kartas">Контакты</a>
          <a className="text-[white] text-[14px]" href="/mans">Наша команда</a>
          <a className="text-[white] text-[14px]" href="/dotavka">Доставка и оплата</a>
          <a className="text-[white] text-[14px]" href="/kontakt">Контакты</a>
        </div>
        </div>
      </footer>
    );
  };
  export default Footer;
  