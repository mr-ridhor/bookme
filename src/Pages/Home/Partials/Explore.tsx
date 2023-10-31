// import Images from "../../../images/Images";
import exploreList from '../../../Utils/data'

const Explore = () => {
  
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
