"use client";
import NavBar from "./NavBar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Wrapper from "./Wrapper";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  const strText = "Web Developer\n& Designer";
  const [text] = useTypewriter({
    words: [strText],
    loop: 2,
  });

  return (
    <>
      {<MobileNavBar />}

      <NavBar />
      <Wrapper>
        <div className=" text-[9.9rem] font-extralight" id="home">
          <div className="min-h-screen flex items-center max-[630px]:justify-center ">
            <div className=" text-[9.9rem] font-extralight max-[630px]:text-center">
              <p className=" max-w-[100rem] m-0 max-[832px]:text-[7rem] max-[630px]:text-[5.5rem] max-[500px]:text-[3.5rem] ">
                {text}
                <Cursor />
              </p>
              <p className="text-[7.7rem] leading-[7.5rem max-[832px]:text-[6.5rem] max-[630px]:text-[4rem] "></p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
