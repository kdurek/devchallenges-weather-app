import moment from "moment"
import chooseIcon from "../../utils/chooseIcon"
import convertToF from "../../utils/convertToF"

const WeatherToday = ({
  fahrenheit,
  data,
  setData,
  currentLocation,
  navOpen,
  setNavOpen,
}) => {
  return (
    <div className="p-4 xl:p-8 h-screen flex flex-col">
      <div className="flex justify-between">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="p-2 shadow-lg bg-gray-c6E707A font-ral font-medium text-base text-gray-cE7E7EB focus:outline-none"
        >
          Search for places
        </button>
        <button
          onClick={() => setData(currentLocation)}
          className="p-2 shadow-lg rounded-full bg-gray-c6E707A text-sm text-gray-cE7E7EB focus:outline-none"
        >
          <span className="align-middle material-icons">my_location</span>
        </button>
      </div>
      <div className="h-full flex flex-col items-center justify-evenly">
        <img
          src={chooseIcon(data.consolidated_weather[0].weather_state_abbr)}
          alt="weather-icon"
          className="relative right-4 w-1/2"
        />
        <div className="flex items-center">
          <p className="font-ral font-medium text-9xl text-gray-cE7E7EB">
            {fahrenheit
              ? Math.round(convertToF(data.consolidated_weather[0].the_temp))
              : Math.round(data.consolidated_weather[0].the_temp)}
          </p>
          <p className="relative top-6 text-5xl text-gray-cA09FB1">
            {fahrenheit ? "℉" : "℃"}
          </p>
        </div>
        <p className="font-ral font-semibold text-4xl text-gray-cA09FB1">
          {data.consolidated_weather[0].weather_state_name}
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className="tracking-widest font-ral font-medium text-lg text-blue-c88869D">
            {`Today • ${moment(
              data.consolidated_weather[0].applicable_date
            ).format("ddd, d MMM")}`}
          </p>
          <p className="font-ral font-semibold text-lg text-blue-c88869D">
            <span className="align-middle tracking-widest text-blue-c88869D material-icons">
              place
            </span>
            {data.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherToday
