"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const { default: Search } = require("../shared/icons/search-line.svg");
const { default: TShirt } = require("../shared/icons/t-shirt-line.svg");
const { default: Percent } = require("../shared/icons/percent-line.svg");
const {
  default: ShoppingCart,
} = require("../shared/icons/shopping-cart-line.svg");
const { default: Translate } = require("../shared/icons/translate-line.svg");
const { default: ArrowRight } = require("../shared/icons/arrow-right-line.svg");
const { default: ArrowDown } = require("../shared/icons/arrow-down-line.svg");
const { default: Login } = require("../shared/icons/login-line.svg");
const {
  default: CreateNewAccount,
} = require("../shared/icons/create-new-account-line.svg");

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const navbarHandler = () => {
    setExpandNavbar(!expandNavbar);
  };

  useEffect(() => {
    const breakpointsHandler = window.innerWidth <= 768;
    setExpandNavbar(!breakpointsHandler);
  }, []);

  return (
    <nav
      className={`${
        expandNavbar ? "h-screen lg:h-auto" : "h-auto"
      } bg-white text-white text-sm p-4 lg:px-4 lg:pt-2 lg:pb-4 flex flex-col lg:flex-row gap-8 lg:gap-2 items-start lg:items-center justify-between w-full`}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-start lg:items-center w-full lg:w-auto">
        <div className="flex flex-row gap-4 lg:gap-2 items-center justify-between lg:justify-normal w-full lg:w-auto">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-2">
            <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-4 lg:gap-2 items-center justify-between font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2 w-full lg:w-auto">
              <h1 className="font-semibold bg-transparent text-black">
                STYLIZED
              </h1>
              <p className="text-start text-xs lg:text-sm font-medium bg-transparent text-black/80">
                Match your style
              </p>
            </button>
          </div>
          <button
            className="flex lg:hidden bg-black/10 p-2 rounded-lg"
            onClick={navbarHandler}
          >
            <Image
              className={`${
                expandNavbar ? "rotate-180" : "rotate-0"
              } transition-all`}
              src={ArrowDown}
              width="16"
              height="16"
            />
          </button>
        </div>
        <label className="hidden lg:flex font-semibold bg-transparent text-black">
          |
        </label>
        {expandNavbar && (
          <>
            <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-4 lg:gap-2 items-center justify-between font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2 w-full lg:w-auto">
              <div className="flex flex-col items-start">
                <div className="flex flex-row gap-2">
                  <Image src={TShirt} width="16" height="16" />
                  Fashion
                </div>
                <p className="flex lg:hidden text-start text-xs font-medium bg-transparent text-black/80">
                  Discover a curated selection that complements your unique
                  taste
                </p>
              </div>
              <Image
                className="flex lg:hidden"
                src={ArrowRight}
                width="16"
                height="16"
              />
            </button>
            <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-4 lg:gap-2 items-center justify-between font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2 w-full lg:w-auto">
              <div className="flex flex-col items-start">
                <div className="flex flex-row gap-2">
                  <Image src={Percent} width="16" height="16" />
                  Promo
                </div>
                <p className="flex lg:hidden text-start text-xs font-medium bg-transparent text-black/80">
                  Explore our limited-time promotions and discounts curated just
                  for you
                </p>
              </div>
              <Image
                className="flex lg:hidden"
                src={ArrowRight}
                width="16"
                height="16"
              />
            </button>
          </>
        )}
      </div>
      {expandNavbar && (
        <>
          <div className="flex flex-row gap-2 items-center bg-black/10 outline-none w-full lg:w-[20%] font-semibold text-black rounded-lg px-2 py-2">
            <input
              placeholder={["2000s Outfit", " Long Sleeve Shirt"]}
              className="bg-transparent w-full outline-none"
              type="text"
            />
            <Image src={Search} width="16" height="16" />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-start lg:items-center w-full lg:w-auto">
            <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
              <Image src={ShoppingCart} width="16" height="16" />
              Cart
              <Image src={ArrowDown} width="16" height="16" />
            </button>
            <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
              <Image src={Translate} width="16" height="16" />
              English
              <Image src={ArrowDown} width="16" height="16" />
            </button>
            <div className="flex flex-row gap-4 lg:gap-2 items-start lg:items-center justify-between lg:justify-normal w-full lg:w-auto">
              <button className="transition-all lg:hover:bg-black/90 flex flex-row gap-2 items-center font-semibold bg-black text-white rounded-lg p-2 lg:px-2 lg:py-2">
                <Image src={Login} width="16" height="16" />
                Log in
              </button>
              <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-lg p-2 lg:px-2 lg:py-2">
                <Image src={CreateNewAccount} width="16" height="16" />
                Join Now!
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
