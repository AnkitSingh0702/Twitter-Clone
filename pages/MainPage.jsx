import Homesection from "../components/homesection";
import Rightside from "../components/rightside";
import Leftside from "../components/Leftside";

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
