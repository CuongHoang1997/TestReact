import Content from "./components/layout/Content";
import Header from "./components/layout/Header";

function App({ isMobile }) {
  return (
    <div className="container lg:max-w-[1920px]">
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;
