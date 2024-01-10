const {
  default: ScreenLayout,
} = require("../components/layouts/screen-layout");
const { default: Header } = require("../components/header");
const { default: Category } = require("../components/category");

export default function Home() {
  return (
    <ScreenLayout>
      <div className="relative top-auto lg:top-[120px]">
        <Header />
      </div>
    </ScreenLayout>
  );
}
