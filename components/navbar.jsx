"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const { default: Search } = require("../shared/icons/search-line.svg");
const { default: TShirt } = require("../shared/icons/t-shirt-line.svg");
const { default: Coupon } = require("../shared/icons/coupon-line.svg");
const {
  default: Notification,
} = require("../shared/icons/notification-line.svg");
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
  const [expandNotifications, setExpandNotifications] = useState(false);
  const [expandCart, setExpandCart] = useState(false);
  const [expandLanguage, setExpandLanguage] = useState(false);

  const navbarHandler = () => {
    setExpandNavbar(!expandNavbar);
  };

  const notificationsHandler = () => {
    setExpandNotifications(!expandNotifications);
    setExpandCart(false);
    setExpandLanguage(false);
  };

  const cartHandler = () => {
    setExpandCart(!expandCart);
    setExpandNotifications(false);
    setExpandLanguage(false);
  };

  const languageHandler = () => {
    setExpandLanguage(!expandLanguage);
    setExpandNotifications(false);
    setExpandCart(false);
  };

  useEffect(() => {
    const breakpointsHandler = window.innerWidth <= 768;
    setExpandNavbar(!breakpointsHandler);
  }, []);

  return (
    <nav
      className={`${
        expandNavbar ? "h-screen lg:h-auto" : "h-auto"
      } invert lg:invert-0 bg-white text-white text-sm p-4 lg:px-4 lg:pt-2 lg:pb-4 flex flex-col lg:flex-row gap-8 lg:gap-2 items-start lg:items-center justify-between w-full`}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-start lg:items-center w-full lg:w-auto">
        <div className="flex flex-row gap-4 lg:gap-2 items-center justify-between lg:justify-normal w-full lg:w-auto">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-2">
            <button className="transition-all lg:hover:bg-black/10 flex flex-col lg:flex-row gap-0 lg:gap-2 items-start lg:items-center justify-between font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2 w-full lg:w-auto">
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
            <div className="flex flex-row gap-2 items-center bg-black/10 outline-none w-full lg:w-auto font-semibold text-black rounded-lg px-2 py-2">
              <input
                placeholder={["2000s Outfit", " Long Sleeve Shirt"]}
                className="bg-transparent w-full lg:w-64 outline-none"
                type="text"
              />
              <Image src={Search} width="16" height="16" />
            </div>
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
                  <Image src={Coupon} width="16" height="16" />
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
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-start lg:items-center w-full lg:w-auto">
            <div className="relative w-full lg:w-auto">
              <button
                onClick={notificationsHandler}
                className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2"
              >
                <Image src={Notification} width="16" height="16" />
                Notifications
                <Image
                  className={`${
                    expandNotifications ? "rotate-180" : "rotate-0"
                  } transition-all`}
                  src={ArrowDown}
                  width="16"
                  height="16"
                />
              </button>
              {expandNotifications && (
                <div className="absolute flex flex-col gap-4 top-16 right-0 w-full lg:w-80 mt-0 bg-white text-black rounded-lg p-4 shadow-2xl shadow-white/20">
                  <div className="flex flex-row">
                    <p className="font-bold bg-transparent text-black/80">
                      Notifications
                    </p>
                  </div>
                  <button className="transition-all hover:bg-black/10 flex flex-col p-2 rounded-lg">
                    <div className="flex flex-row w-full gap-2">
                      <div className="flex flex-col w-full items-start">
                        <p className="font-semibold text-start bg-transparent text-black">
                          10% OFF COUPON
                        </p>
                        <p className="text-xs font-medium text-start bg-transparent text-black mt-2">
                          Use now and get a 10% discount of your purchases
                        </p>
                      </div>
                      <Image src={ArrowRight} width="16" height="16" />
                    </div>
                  </button>
                  <button className="transition-all hover:bg-black/10 flex flex-col p-2 rounded-lg">
                    <div className="flex flex-row w-full gap-2">
                      <div className="flex flex-col w-full items-start">
                        <p className="font-semibold text-start bg-transparent text-black">
                          Account Creation
                        </p>
                        <p className="text-xs font-medium text-start bg-transparent text-black mt-2">
                          To complete your account setup, we need a bit more
                          information from you. Please log in to your account
                          and fill in the required fields to ensure a seamless
                          experience
                        </p>
                      </div>
                      <Image src={ArrowRight} width="16" height="16" />
                    </div>
                  </button>
                </div>
              )}
            </div>
            <div className="relative w-full lg:w-auto">
              <button
                onClick={cartHandler}
                className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2"
              >
                <Image src={ShoppingCart} width="16" height="16" />
                Cart
                <Image
                  className={`${
                    expandCart ? "rotate-180" : "rotate-0"
                  } transition-all`}
                  src={ArrowDown}
                  width="16"
                  height="16"
                />
              </button>
              {expandCart && (
                <div className="absolute flex flex-col gap-4 top-16 right-0 w-full lg:w-80 mt-0 bg-white text-black rounded-lg p-4 shadow-2xl shadow-white/20">
                  <div className="flex flex-row">
                    <p className="font-bold bg-transparent text-black/80">
                      Cart
                    </p>
                  </div>
                  <button className="transition-all hover:bg-black/10 flex flex-col p-2 rounded-lg">
                    <div className="flex flex-row w-full gap-2">
                      <div className="flex flex-col w-full items-start">
                        <p className="font-semibold text-start bg-transparent text-black">
                          Cart Empty
                        </p>
                        <p className="text-xs font-medium text-start bg-transparent text-black mt-2">
                          Empty
                        </p>
                      </div>
                      <Image src={ArrowRight} width="16" height="16" />
                    </div>
                  </button>
                </div>
              )}
            </div>
            <div className="relative w-full lg:w-auto">
              <button
                onClick={languageHandler}
                className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2"
              >
                <Image src={Translate} width="16" height="16" />
                English
                <Image
                  className={`${
                    expandLanguage ? "rotate-180" : "rotate-0"
                  } transition-all`}
                  src={ArrowDown}
                  width="16"
                  height="16"
                />
              </button>
              {expandLanguage && (
                <div className="absolute flex flex-col gap-4 top-16 right-0 w-full lg:w-80 mt-0 bg-white text-black rounded-lg p-4 shadow-2xl shadow-white/20">
                  <div className="flex flex-row">
                    <p className="font-bold bg-transparent text-black/80">
                      Language
                    </p>
                  </div>
                  <button className="transition-all hover:bg-black/10 flex flex-col p-2 rounded-lg">
                    <div className="flex flex-row w-full gap-2">
                      <div className="flex flex-col w-full items-start">
                        <p className="font-semibold text-start bg-transparent text-black">
                          English
                        </p>
                        <p className="text-xs font-medium text-start bg-transparent text-black mt-2">
                          EN-USD. English Text, Dollar Currency
                        </p>
                      </div>
                      <Image src={ArrowRight} width="16" height="16" />
                    </div>
                  </button>
                  <button className="transition-all hover:bg-black/10 flex flex-col p-2 rounded-lg">
                    <div className="flex flex-row w-full gap-2">
                      <div className="flex flex-col w-full items-start">
                        <p className="font-semibold text-start bg-transparent text-black">
                          Bahasa
                        </p>
                        <p className="text-xs font-medium text-start bg-transparent text-black mt-2">
                          ID-IDR. Indonesia Text, Rupiah Currency
                        </p>
                      </div>
                      <Image src={ArrowRight} width="16" height="16" />
                    </div>
                  </button>
                </div>
              )}
            </div>
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
