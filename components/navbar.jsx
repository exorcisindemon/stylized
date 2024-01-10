import Image from "next/image";

const { default: Search } = require("../shared/icons/search-line.svg");
const {
  default: DownloadApp,
} = require("../shared/icons/download-app-line.svg");
const { default: Translate } = require("../shared/icons/translate-line.svg");
const {
  default: CustomerService,
} = require("../shared/icons/customer-service-line.svg");
const { default: ArrowDown } = require("../shared/icons/arrow-down-line.svg");
const { default: Login } = require("../shared/icons/login-line.svg");
const {
  default: CreateNewAccount,
} = require("../shared/icons/create-new-account-line.svg");

const Navbar = () => {
  return (
    <div className="bg-white text-white text-sm p-4 flex flex-col lg:flex-row gap-4 lg:gap-2 items-start lg:items-center justify-between w-full">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 items-start lg:items-center w-full lg:w-auto">
        <h1 className="font-semibold bg-transparent text-black">STYLIZED</h1>
        <label className="hidden lg:flex font-semibold bg-transparent text-black">
          |
        </label>
        <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          <Image src={CreateNewAccount} width="16" height="16" />
          Fashion
        </button>
        <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          <Image src={CreateNewAccount} width="16" height="16" />
          Promo
        </button>
        <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          <Image src={DownloadApp} width="16" height="16" />
          Download App
        </button>
      </div>
      <div className="flex flex-row gap-2 items-center bg-black/10 outline-none w-[20%] font-semibold text-black rounded-lg px-2 py-2">
        <input
          placeholder={["2000s outfit", "Long Sleeve Shirt"]}
          className="bg-transparent w-full outline-none"
          type="text"
        />
        <Image src={Search} width="16" height="16" />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 items-start lg:items-center w-full lg:w-auto">
        <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          <Image src={CustomerService} width="16" height="16" />
          Help Center
        </button>
        <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          <Image src={Translate} width="16" height="16" />
          English
          <Image src={ArrowDown} width="16" height="16" />
        </button>
        <button className="transition-all lg:hover:bg-black/90 flex flex-row gap-2 items-center font-semibold bg-black text-white rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          <Image src={Login} width="16" height="16" />
          Log in
        </button>
        <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          <Image src={CreateNewAccount} width="16" height="16" />
          Create new Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
