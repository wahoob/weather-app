import { useState } from "react";
import Day from "./Day";
import { formatDate } from "./utils";

const Days = ({ setCurrent, currentDay }) => {
  const [start, setStart] = useState(12);

  if (formatDate(new Date()) === currentDay.date) {
    const currentHour = new Date().getHours();
    const newStart = currentHour > 15 ? 15 : currentHour;
    setStart(newStart);
  }
  const end = start + 9;

  return (
    <div className="space-y-14 bg-white rounded-tl-[60px] rounded-tr-[60px] pt-10 pb-32 px-12 relative mt-[116px] z-50">
      {/* Controllers */}
      <div className="flex justify-between items-start text-lg sm:text-[22px]">
        <div
          className="flex items-center gap-2.5 font-medium cursor-pointer"
          onClick={() => setCurrent(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
          >
            <path
              d="M8.13831 0.828334C8.24646 0.936266 8.33227 1.06447 8.39081 1.20561C8.44936 1.34674 8.47949 1.49804 8.47949 1.65083C8.47949 1.80363 8.44936 1.95493 8.39081 2.09606C8.33227 2.2372 8.24646 2.3654 8.13831 2.47333L3.61164 7L8.13831 11.5267C8.35645 11.7448 8.479 12.0407 8.479 12.3492C8.479 12.6577 8.35645 12.9535 8.13831 13.1717C7.92017 13.3898 7.6243 13.5124 7.31581 13.5124C7.00731 13.5124 6.71145 13.3898 6.49331 13.1717L1.13831 7.81667C1.03015 7.70873 0.944348 7.58053 0.885803 7.43939C0.827258 7.29826 0.797124 7.14696 0.797124 6.99417C0.797124 6.84137 0.827258 6.69007 0.885803 6.54894C0.944348 6.4078 1.03015 6.2796 1.13831 6.17167L6.49331 0.816667C6.93664 0.373333 7.68331 0.373334 8.13831 0.828334Z"
              fill="#474747"
            />
          </svg>
          <p>Yesterday</p>
        </div>
        <div className="font-bold cursor-pointer" onClick={() => setCurrent(0)}>
          <p>Today</p>
          <div className="size-2 bg-[#474747] rounded-full mx-auto" />
        </div>
        <div
          className="flex items-center gap-2.5 font-medium cursor-pointer"
          onClick={() => setCurrent(1)}
        >
          <p>Tomorrow</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
          >
            <path
              d="M0.861693 0.828334C0.753539 0.936266 0.667733 1.06447 0.609188 1.20561C0.550643 1.34674 0.520508 1.49804 0.520508 1.65083C0.520508 1.80363 0.550643 1.95493 0.609188 2.09606C0.667733 2.2372 0.753539 2.3654 0.861693 2.47333L5.38836 7L0.861693 11.5267C0.643552 11.7448 0.521002 12.0407 0.521002 12.3492C0.521002 12.6577 0.643552 12.9535 0.861693 13.1717C1.07983 13.3898 1.3757 13.5124 1.68419 13.5124C1.99269 13.5124 2.28855 13.3898 2.50669 13.1717L7.86169 7.81667C7.96985 7.70873 8.05565 7.58053 8.1142 7.43939C8.17274 7.29826 8.20288 7.14696 8.20288 6.99417C8.20288 6.84137 8.17274 6.69007 8.1142 6.54894C8.05565 6.4078 7.96985 6.2796 7.86169 6.17167L2.50669 0.816667C2.06336 0.373333 1.31669 0.373334 0.861693 0.828334Z"
              fill="#474747"
            />
          </svg>
        </div>
      </div>

      {/* hours */}
      <div className="flex justify-center gap-2.5 flex-wrap">
        {currentDay.hour?.slice(start, end).map((h) => {
          const { time, temp_c } = h;
          const hour24 = time.split(" ")[1].split(":")[0];
          const date = time.split(" ")[0];
          const period = hour24 >= 12 ? "PM" : "AM";
          const hour12 = hour24 % 12 || 12;
          const currentHour = new Date().getHours();
          const today = new Date().toISOString().split("T")[0] === date;

          return (
            <Day
              key={h.time}
              tempInC={temp_c}
              period={period}
              hourIn12={hour12}
              active={currentHour == hour24 && today}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Days;
