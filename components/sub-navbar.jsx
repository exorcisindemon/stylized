"use client";
import Image from "next/image";
import Link from "next/link";

const {
  default: SellerCenter,
} = require("../shared/icons/seller-center-line.svg");
const {
  default: StartSelling,
} = require("../shared/icons/start-selling-line.svg");
const {
  default: DownloadApp,
} = require("../shared/icons/download-app-line.svg");
const { default: Discord } = require("../shared/icons/discord-line.svg");
const { default: GitHub } = require("../shared/icons/github-line.svg");
const { default: Instagram } = require("../shared/icons/instagram-line.svg");
const {
  default: CustomerService,
} = require("../shared/icons/customer-service-line.svg");

const SubNavbar = () => {
  return (
    <nav className="invert lg:invert-0 bg-white text-white text-sm p-4 lg:px-4 lg:pt-4 lg:pb-2 flex flex-col lg:flex-row gap-8 lg:gap-2 items-start lg:items-center justify-between w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-start lg:items-center w-full lg:w-auto">
        <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          <Image src={SellerCenter} width="16" height="16" />
          Seller Center
        </button>
        <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          <Image src={StartSelling} width="16" height="16" />
          Start Selling
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-start lg:items-center w-full lg:w-auto">
        <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2 w-full lg:w-auto">
          <Image src={DownloadApp} width="16" height="16" />
          Download App
        </button>
        <button className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          <Image src={CustomerService} width="16" height="16" />
          Help Center
        </button>
        <div className="transition-all lg:hover:bg-black/10 flex flex-row gap-2 items-center font-semibold bg-transparent text-black rounded-none lg:rounded-lg p-0 lg:px-2 lg:py-2">
          Follow Us
          <Link href="/">
            <Image src={Discord} width="16" height="16" />
          </Link>
          <Link href="https://github.com/exorcisindemon">
            <Image src={GitHub} width="16" height="16" />
          </Link>
          <Link href="https://www.instagram.com/rasxev/">
            <Image src={Instagram} width="16" height="16" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
