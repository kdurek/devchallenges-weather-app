import moment from "moment"
import chooseIcon from "../../utils/chooseIcon"

const Card = ({ data }) => {
  return (
    <div className="flex justify-center bg-blue-c1E213A">
      <div className="p-4 w-32 h-44 flex flex-col items-center justify-between">
        <p className="font-ral font-medium text-base text-gray-cE7E7EB">
          {moment(data.applicable_date).format("ddd, D MMM")}
        </p>
        <img
          src={chooseIcon(data.weather_state_abbr)}
          alt="weather-icon"
          className="w-7/12 relative right-2"
        />
        <div className="w-full flex justify-around">
          <p className="font-ral font-medium text-base text-gray-cE7E7EB">{`${Math.round(
            data.max_temp
          )}°C`}</p>
          <p className="font-ral font-medium text-base text-gray-cA09FB1">{`${Math.round(
            data.min_temp
          )}°C`}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
