import Images from "../../../images/Images";
const Explore = () => {
  const exploreList = [
    {
      name: "Abuja",
      desc: "202 properties",
      img: `${Images.place1}`,
    },
    {
      name: "Paris",
      desc: "20 properties",
      img: `${Images.place2}`,
    },
    {
      name: "Mumbai",
      desc: "22 properties",
      img: `${Images.place3}`,
    },
    {
      name: "New York",
      desc: "250 properties",
      img: `${Images.place4}`,
    },
    {
      name: "Lagos",
      desc: "202 properties",
      img: `${Images.place5}`,
    },
    {
      name: "Lag",
      desc: "211 properties",
      img: `${Images.place6}`,
    },
  ];
  return (
    <div className="flex w-full  ">
      {exploreList.map((list, id) => {
        return (
          <div key={id} className="flex flex-col px-2">
            <div className="h-28 w-40">
              <img src={list.img} alt="" className="h-full w-full" />
            </div>
            <div className="flex mt-3 flex-col">
              <span className="font-bold">{list.name}</span>
              <span className="text-black/50">{list.desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
