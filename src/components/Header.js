import Image from "next/image";
import NavBar from "./NavBar";
import bgImage from "@/assets/DESKTOP/desktop-bg-portfolio 1.png";

const Header = () => {
  return (
    <>
      <NavBar />
      <div className="w-full flex justify-end mt-[-7rem]">
        <Image src={bgImage} width={1440} height={808} alt="bg-image" />
      </div>
    </>
  );
};

export default Header;
