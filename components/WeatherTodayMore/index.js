import Card from "./Card"

const compassRotate = (compass) => {
  switch (compass) {
    case "N":
      return ""
    case "NNE":
      return "rotate-NNE"
    case "NE":
      return "rotate-NE"
    case "ENE":
      return "rotate-ENE"
    case "E":
      return "rotate-E"
    case "ESE":
      return "rotate-ESE"
    case "SE":
      return "rotate-SE"
    case "SSE":
      return "rotate-SSE"
    case "S":
      return "rotate-S"
    case "SSW":
      return "rotate-SSW"
    case "SW":
      return "rotate-SW"
    case "WSW":
      return "rotate-WSW"
    case "W":
      return "rotate-W"
    case "WNW":
      return "rotate-WNW"
    case "NW":
      return "rotate-NW"
    case "NNW":
      return "rotate-NNW"
  }
}

const WeatherTodayMore = ({ data }) => {
  return (
    <div className="p-6 xl:p-0 flex flex-col">
      <p className="pb-8 font-ral font-bold text-2xl text-gray-cE7E7EB">
        Today’s Hightlights
      </p>
      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8">
        <Card
          title="Wind status"
          value={Math.round(data.wind_speed)}
          units="mph"
        >
          <div className="flex items-center gap-2">
            <span
              className={`p-1 align-middle rounded-full bg-white bg-opacity-30 text-gray-cE7E7EB transform material-icons ${compassRotate(
                data.wind_direction_compass
              )}`}
            >
              navigation
            </span>
            <p className="font-ral font-medium text-sm text-gray-cE7E7EB">
              {data.wind_direction_compass}
            </p>
          </div>
        </Card>
        <Card title="Humidity" value={data.humidity} units="%">
          <div className="px-8 w-full">
            <div className="w-full flex justify-between">
              <p className="font-ral font-bold text-xs text-gray-cA09FB1">0</p>
              <p className="font-ral font-bold text-xs text-gray-cA09FB1">50</p>
              <p className="font-ral font-bold text-xs text-gray-cA09FB1">
                100
              </p>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-cE7E7EB" />
            <div
              className={`relative bottom-2 w-${data.humidity}% h-2 rounded-full bg-yellow-cFFEC65`}
            />
            <p className="text-right font-ral font-bold text-xs text-gray-cA09FB1">
              %
            </p>
          </div>
        </Card>
        <Card
          title="Visibility"
          value={data.visibility.toFixed(1)}
          units="miles"
        />
        <Card
          title="Air Pressure"
          value={Math.round(data.air_pressure)}
          units="mb"
        />
      </div>
    </div>
  )
}

export default WeatherTodayMore
