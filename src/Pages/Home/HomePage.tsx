import { BsQuestionCircle } from "react-icons/bs";
import Button from "../../Components/Button";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi";
import { LiaBedSolid } from "react-icons/lia";
import Flights from "../../Components/Icons/Flights.jsx";
import { IoCarOutline, IoFlowerOutline } from "react-icons/io5";
import Taxi from "../../Components/Icons/Taxi.js";
import Input from "../../Components/Input.js";
const HomePage = () => {
  return (
    <div className="h-full w-full">
      <div className="bg-blue-800 pt-4 px-10 w-full md:flex justify-between flex-col  hidden">
        <div className="flex w-full justify-between">
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
              <Button
                type={"button"}
                onClick={() => console.log("HI")}
                className="rounded-md bg-white text-[#555cea] font-semibold text-md flex items-center justify-center px-3 py-1.5"
              >
                Register
              </Button>
              <Button
                type={"button"}
                onClick={() => console.log("HI")}
                className="rounded-md bg-white text-[#555cea] font-semibold text-md flex items-center justify-center w-20 h-10"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className="flex text-white gap-3 my-4">
          <div className="flex rounded-full border  border-white h-12 w-24 justify-center gap-1 items-center">
            <span className="flex items-center text-[20px]">
              <LiaBedSolid />
            </span>
            <p className="text-[16px]">Stays</p>
          </div>
          <div className="flex items-center gap-2">
            <Flights />
            <p>Flights</p>
          </div>
          <div className="flex items-center gap-2">
            <IoCarOutline size={20} />
            <p>Car rentals</p>
          </div>
          <div className="flex items-center gap-2">
            <IoFlowerOutline />
            <p>Attractions</p>
          </div>
          <div className="flex items-center gap-2">
            <Taxi />
            <p>Airport taxi</p>
          </div>
        </div>
        <div className=" mt-2 h-56  flex items-center border px-2 relative">
          <div className="text-white flex flex-col">
            <p className=" font-bold text-[45px]">Find your next stay</p>
            <p className="text-[22px]">
              Search low prices on hotels, homes and much more...
            </p>
          </div>
          <div className="absolute -bottom-6 border-2 bg-yellow-400 rounded-lg  right-0 left-0 h-14 w-full flex gap-2 p-1 ">
            <div className="rounded-sm bg-white w-5/12 h-full">
              <div className="flex  items-center  w-full p-2 gap-1 h-full">
                <LiaBedSolid />
                <input name="map" type="text"  className="flex-1  h-full"/>
                {/* <Input type={"text"}   name={"map"} register={register} /> */}
              </div>
            </div>
            <div className="rounded-sm bg-white flex items-center w-3/12">
              <div className="w-full flex px-2 gap-0.5">
                <LiaBedSolid />
                <input name="map" type="text" className="flex-1" />
              </div>
              {/* <Input type={"text"}   name={"map"} register={register} /> */}
            </div>
            <div className="rounded-sm bg-white flex items-center w-3/12">
              <LiaBedSolid />
              <select name="" id="">
                <option value="">rooms</option>
              </select>
            </div>
            <Button
              type="submit"
              onClick={() => console.log("hi")}
              className={" bg-blue-600 rounded-md text-white w-1/12"}
            >
              Search
            </Button>
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
            <HiOutlineUserCircle />
          </span>
          <span>
            <HiBars3 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
