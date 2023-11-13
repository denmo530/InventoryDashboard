import { FaTruck } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { GiPear } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="bg-primary w-fit h-full p-6 flex flex-col justify-between">
      <div>
        <div className="flex flex-row items-center gap-1 py-10">
          <GiPear size={24} />
          <h1 className="text-xl font-medium">Päron</h1>
        </div>
        <div className="flex flex-col items-center gap-10">
          <span className="cursor-pointer text-secondary p-3  rounded-md border-2 border-primary hover:border-white hover:text-white ">
            <MdInventory2 size={24} />
          </span>
          <span className="cursor-pointer text-secondary p-3  rounded-md border-2 border-primary hover:border-white hover:text-white ">
            <FaTruck size={24} />
          </span>
        </div>
      </div>
      <div>
        <p className="text-secondary text-xs">version 1.0.0</p>
      </div>
    </nav>
  );
};

export default Navbar;
