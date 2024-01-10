import Image from "next/image";

const { default: TShirt } = require("../shared/category/t-shirt.svg");
const { default: LongShirt } = require("../shared/category/long-shirt.svg");
const { default: Hoodie } = require("../shared/category/hoodie.svg");
const { default: ShortPants } = require("../shared/category/short-pants.svg");
const { default: LongPants } = require("../shared/category/long-pants.svg");
const { default: Cap } = require("../shared/category/cap.svg");

const Category = () => {
  return (
    <main className="bg-black/10 flex flex-col lg:flex-row items-center justify-between w-full gap-4 px-6 py-12">
      <div className="flex flex-col w-full lg:w-[50%]">
        <h1 className="text-lg lg:text-2xl font-semibold bg-transparent text-black">
          Category
        </h1>
        <p className="text-sm lg:text-lg text-start font-medium bg-transparent text-black/80">
          Explore Now and Dive into the Elegance of STYLIZED!
        </p>
      </div>
    </main>
  );
};

export default Category;
