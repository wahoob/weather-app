import { useEffect } from "react";
import rainyGirl from "./assets/rainy-girl.gif";
import Days from "./Days";
import Header from "./Header";
import { useState } from "react";
import { formatDay } from "./utils";

const API_URL = "https://api.weatherapi.com/v1/forecast.json";
const KEY = "eda8d98890214bab926190059241708";

const App = () => {
  const [loc, setLoc] = useState({});
  const [currentDay, setCurrentDay] = useState({});
  const [current, setCurrent] = useState(0); // today
  const [today, setToday] = useState({});

  const fetchDay = async (lat, lng, day) => {
    try {
      const response = await fetch(
        `${API_URL}?key=${KEY}&q=${lat},${lng}&dt=${day}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setCurrentDay(data.forecast.forecastday[0]);
      setToday(data.current);
      setLoc(data.location);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const date = new Date(new Date().setDate(new Date().getDate() + current));
    const day = date.toISOString().split("T")[0];

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          fetchDay(latitude, longitude, day);
        },
        (error) => {
          console.error("Error getting the location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [current]);

  return (
    <div className="bg-[#B5D6D6] min-h-screen text-[#474747] relative">
      <Header
        location={`${loc.name}, ${loc.country}`}
        currentTemp={today.temp_c}
      />

      <div className="mt-[3.1rem]">
        <img src={rainyGirl} alt="rainy girl" className="h-[155px] mx-auto" />
      </div>
      <div className="w-full h-[285px] absolute top-[26.25rem] left-1/2 -translate-x-1/2 bg-[url('./assets/Clouds.png')] bg-cover bg-center">
        <div className="space-y-2 absolute top-12 left-1/2 -translate-x-1/2 text-center">
          <h3 className="text-[28px] font-bold uppercase">
            {formatDay(
              new Date(new Date().setDate(new Date().getDate() + current))
            )}
          </h3>
          <p className="text-2xl font-normal">
            {currentDay.day?.condition.text}
          </p>
        </div>
      </div>

      <Days setCurrent={setCurrent} currentDay={currentDay} />
    </div>
  );
};

export default App;
