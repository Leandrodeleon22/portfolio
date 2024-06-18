import Image from "next/image";
import NavBar from "./NavBar";
import bgImage from "@/assets/DESKTOP/desktop-bg-portfolio 1.png";
import Wrapper from "./Wrapper";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  return (
    <>
      {<MobileNavBar />}

      <NavBar />
      <Wrapper>
        <div className=" text-[9.9rem] font-extralight" id="home">
          <div className="min-h-screen flex items-center">
            <div className="mt-[-11rem] text-[9.9rem] font-extralight">
              <p className=" m-0">Web Developer</p>
              <p className="text-[7.7rem] leading-[7.5rem]">& Designer</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
