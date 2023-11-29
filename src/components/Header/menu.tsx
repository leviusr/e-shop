import Iconos from "./iconos";
import Lista from "./lista";
import Logo from "./logo";

function Menu() {
  return (
    <div className="z-10 flex flex-row justify-between items-center h-[10vh] bg-secondary/50 px-10">
      <div>
        <Logo />
      </div>
      <div className="flex">
        <ul className="flex gap-10">
          <Lista text="Adultos" link="/" />
          <Lista text="Niños" link="/" />
          <Lista text="Accesorios" link="/" />
          <Lista text="all..." link="/" />
        </ul>
      </div>
      <div>
        <Iconos />
      </div>
    </div>
  );
}

export default Menu;
