import { BsQuestionCircle } from "react-icons/bs";
import Button from "../../Components/Button";
import {HiBars3} from 'react-icons/hi2'
import {HiOutlineUserCircle} from 'react-icons/hi'
const HomePage = () => {
  return (
    <div className="h-full w-full">
      <div className="bg-blue-800 py-4 px-10 w-full md:flex justify-between items-center hidden">
        <span className="text-white font-bold text-xl">
          <p>BookMe.com</p>
        </span>
        <div className="text-white flex items-center space-x-4 text-lg">
          <span className="  ">
            <p>NGN</p>
          </span>
          <span>
            <p>country</p>
          </span>
          <span>
            <BsQuestionCircle />
          </span>
          <span>
            <p>List your property</p>
          </span>
          <div className="flex  gap-2">

          <Button type={"button"} onClick={()=>console.log("HI")} className="rounded-md bg-white text-[#555cea] font-semibold text-md flex items-center justify-center px-3 py-1.5">Register</Button>
          <Button type={"button"} onClick={()=>console.log("HI")} className="rounded-md bg-white text-[#555cea] font-semibold text-md flex items-center justify-center w-20 h-10">Login</Button>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="bg-blue-800  flex md:hidden items-center justify-between p-2 text-white">
        <span className="font-medium">
            <p>Bookme.com</p>
        </span>
        <div className="flex gap-2 items-center">
            <span>
                <HiOutlineUserCircle/>
            </span>
            <span>
                <HiBars3/>
            </span>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
