import rains from "./assets/rains.png";
import { formatDate } from "./utils";

const Header = ({ location, currentTemp }) => {
  return (
    <div className="w-full h-fit relative top-[69px] flex justify-center items-center overflow-hidden">
      <img src={rains} alt="rains" className="min-w-min object-cover" />
      <div className="absolute flex items-center gap-36">
        <div className="day-info">
          <p className="font-medium text-xl">{formatDate(new Date())}</p>
          <p className="text-xl">{location}</p>
        </div>
        <h3 className="font-semibold text-[40px]">{currentTemp}°C</h3>
      </div>
    </div>
  );
};

export default Header;
