import { BsQuestionCircle } from "react-icons/bs";
import Button from "../../Components/Button";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi";
import { LiaBedSolid } from "react-icons/lia";
import Flights from "../../Components/Icons/Flights.jsx";
import { IoCarOutline, IoFlowerOutline } from "react-icons/io5";
import Taxi from "../../Components/Icons/Taxi.js";
import { GoSearch } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import Card from "../../Components/Card.js";
import Images from "../../images/Images.js";

const HomePage = () => {
  interface ImageProps {
    title: string;
    description: string;
    imageUrl: string;
    name:string
  }
  const Image:React.FC<ImageProps> = ({ title, description, imageUrl,name }) => {
    return (
      <div className="border space-y-3  px-2 py-3">
        <div className="flex justify-between gap-6">
        <div className="w-[70%] text-sm">
          <p className="font-bold">{title}</p>
          <p>{description}</p>
        </div>
        <div className="w-16 h-16">
          <img src={imageUrl} alt="Image" />
        </div>

        </div>
        <div className=" ">
          <button className="border h-10  w-24 font-medium rounded-sm border-blue-800 text-blue-700">{name}</button>
        </div>
      </div>
    );
  };
  return (
    <div className="h-full w-full">
      <div className="w-full bg-blue-800 flex items-center justify-center">
        <div className=" pt-4  w-[90%] md:flex justify-between flex-col  hidden">
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
          <div className=" mt-2 h-56  flex items-center borderz px-2 relative">
            <div className="text-white flex flex-col">
              <p className=" font-bold text-[45px]">Find your next stay</p>
              <p className="text-[22px]">
                Search low prices on hotels, homes and much more...
              </p>
            </div>
            <div className="absolute -bottom-6 border-2 bg-yellow-400 rounded-lg  right-0 left-0 h-14 w-full flex gap-1 p-1 ">
              <div className="rounded-md bg-white w-4/12 h-full ">
                <div className="flex  items-center  w-full  p gap-1 h-ll rounded-md  ">
                  <input
                    name="map"
                    type="text"
                    className="w-full   focus:border-2 py-2 focus:outline-blue-800 relative  px-10 placeholder:text-amber-950"
                    placeholder="Where are you going?"
                  />

                  <span className="absolute left-2 top-">
                    <LiaBedSolid size={30} />
                  </span>
                </div>
              </div>
              <div className="rounded-md bg-white flex items-center w-4/12 relative">
                <div className="w-full flex  px-2">
                  <span className="">
                    <LiaBedSolid size={30} />
                  </span>
                </div>
              </div>
              <div className="relative rounded-md bg-white flex items-center w-4/12 gap-0.5">
                <select name="" id="" className="w-full px-10 py-2">
                  <option value="">rooms</option>
                </select>
                <span className="absolute left-2 top-">
                  <LiaBedSolid size={30} />
                </span>
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
      </div>

      {/* mobile */}

      <div className="flex md:hidden flex-col">
        <div className="bg-blue-800 flex-col flex md:hidden    px-3 pt-4 pb-2 text-white">
          <div className=" items-center justify-between w-full flex text-2xl">
            <span className="font-medium ">
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
          <div className=" flex w-full overflow-x-scroll  gap-4 mt-3 text-sm">
            <div className="border border-white min-] rounded-full   px-4 py-3 gap-2 items-center flex">
              <span className="flex items-center ">
                <LiaBedSolid size={25} />
              </span>
              <p className="">Stays</p>
            </div>
            <div className="flex items-center gap-2 ">
              <Flights />
              <p>Flights</p>
            </div>
            <div className="flex items-center gap-2 min-w-[110px] ">
              <IoCarOutline size={20} />
              <p>Car rentals</p>
            </div>
            <div className="flex items-center gap-2 ">
              <IoFlowerOutline />
              <p>Attractions</p>
            </div>
            <div className="flex items-center gap-2 min-w-[120px]">
              <Taxi />
              <p>Airport taxi</p>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] pt-6 flex flex-col  justify-center w-full">
          <div className="w-full flex items-center justify-center">
            <div className="w-[95%]">
              <div className="w-full ">
                <span className="text-2xl font-bold">Find your next stay</span>
                <p className="text-sm">
                  Search deals on hotels, homes, and much more...
                </p>
                <div className="bg-[#FBCF57] my-6 p-2 space-y-2">
                  <div className="bg-white w-full relative  h-14">
                    <input
                      className=" placeholder:font-bold placeholder:text-black placeholder:text-lg flex-1 w-full h-full px-8"
                      placeholder="Around current location"
                    />
                    <span className="absolute left-2 top-4 text-gray-300 font-bold">
                      <GoSearch />
                    </span>
                    <span className="absolute right-2 top-4 text-gray-300 font-bold">
                      <AiOutlineClose size={20} />
                    </span>
                  </div>
                  <div className=" w-full flex space-x-2 h-14">
                    <div className="bg-white w-1/2 h-full  px-2">
                      <span>check-in date</span>
                    </div>
                    <div className="bg-white w-1/2 px-2 py-4">
                      <span>check-out date</span>
                    </div>
                  </div>
                  <div className="bg-white h-14 flex justify-evenly w-full">
                    <span className="border-r px-2 w-1/3 my-1">Adults</span>
                    <span className="border-r px-2 w-1/3 my-1">Children</span>
                    <span className="px-2 w-1/3 my-1">Rooms</span>
                  </div>
                  <div className="bg-white h-14 flex gap-3 items-center px-2">
                    <input type="checkbox" className="h-6 w-6" />
                    <p>I'm traveling for work</p>
                  </div>
                  <div className="h-14 w-full">
                    <button className="bg-[#0071C2] text-2xl rounded-md w-full h-full text-white font-bold">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Card>
              <div className="px-2 pt">
                <div className="">
                  <p className="font-bold text-xl">Offers</p>
                  <p>Promotions, deals, and special offers for you</p>
                </div>
                <div className="mt-4 space-y-4">
                  <Image
                    title="Planning a long vacation?"
                    description="Many extended stays have reduced monthly rates"
                    imageUrl={Images.image1}
                    name={"Find a stay"}
                  />
                  <Image  title="Save 15% with Late Escape Deals"
                    description="Explore thousands of dream destinations worldwide"
                    imageUrl={Images.image2}
                    name={"Find deal"}
                    />

                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
