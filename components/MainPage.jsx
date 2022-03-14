import Homesection from "./homesection";
import Rightside from "./rightside";
import Leftside from "./Leftside";

function MainPage() {
  return (
    <>
      <header>
        <title>Home/ TwitterClone</title>
      </header>
      <div className="grid grid-cols-3  ">
        <Leftside />

        <Homesection />

        <Rightside />
      </div>
    </>
  );
}

export default MainPage;
