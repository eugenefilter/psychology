import Contacts from "../Components/Contacts";
import Menu from "../Components/Menu";
import NavBar from "../Components/NavBar";

export default function Footer() {
  return (
    <>
      <div className="wrapper">
        <NavBar>
          <Menu />
        </NavBar>

        {/* <div className="py-5">
          <Contacts />
        </div> */}

        <div className="border-b border-white my-5"></div>

        <div>
          <Contacts />
        </div>

      </div>
    </>
  );
}