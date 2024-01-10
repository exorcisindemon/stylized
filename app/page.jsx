const { default: HeaderHome } = require("../components/header-home");
const {
  default: ScreenLayout,
} = require("../components/layouts/screen-layout");

export default function Home() {
  return (
    <ScreenLayout>
      <HeaderHome />
    </ScreenLayout>
  );
}
