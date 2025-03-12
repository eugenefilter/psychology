
import { useState } from "react";
import Menu from "../Components/Menu";
import NavBar from "../Components/NavBar";
import CloseSvg from "../BaseComponents/svg/CloseSvg";
import BurgerMenuSvg from "../BaseComponents/svg/BurgerMenuSvg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <NavBar className={`h-full w-full mx-auto mb-5 fixed md:relative z-30 text-center bg-main-gray-light border rounded-b-lg ${isMenuOpen ? "block" : "hidden"
        } md:block`}>


        <Menu
          className="flex flex-col md:flex-row justify-evenly my-5 mx-10 md:mx-auto text-main-black uppercase"
          onClose={handleCloseMenu}
          isHeader={true}
        />


        {isMenuOpen && (
          <button className="absolute top-2 right-2" onClick={toggleMenu}>
            <CloseSvg width={25} height={25} />
          </button>
        )}
      </NavBar>

      {!isMenuOpen && (
        <button className="fixed md:hidden z-20 mt-2 bg-slate-200 p-3" onClick={toggleMenu}>
          <BurgerMenuSvg width={25} height={25} />
        </button>
      )}
    </>
  );
}