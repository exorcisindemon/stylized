const { default: Header } = require("../components/header");
const {
  default: ScreenLayout,
} = require("../components/layouts/screen-layout");

export default function Home() {
  return (
    <ScreenLayout>
      <Header />
    </ScreenLayout>
  );
}
