import Image from "next/image";

const {
  default: NEWYEARSTYLIZED,
} = require("../shared/header/newyearstylized.svg");

const Header = () => {
  return (
    <header className="bg-black/10 h-auto">
      <Image className="w-full h-auto" src={NEWYEARSTYLIZED} />
    </header>
  );
};

export default Header;
