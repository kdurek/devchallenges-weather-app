import Card from "./Card"

const WeatherTodayMore = ({ data }) => {
  console.log(data)
  return (
    <div className="p-6 flex flex-col gap-8">
      <Card title="Wind status" value={Math.round(data.wind_speed)} units="mph">
        <div className="flex items-center gap-2">
          <span class="p-1 align-middle rounded-full bg-white bg-opacity-30 text-gray-cE7E7EB material-icons ">
            navigation
          </span>
          <p className="font-ral font-medium text-sm text-gray-cE7E7EB">
            {data.wind_direction_compass}
          </p>
        </div>
      </Card>
      <Card title="Humidity" value={data.humidity} units="%">
        <p className="font-ral font-medium text-4xl text-gray-cE7E7EB">LINE</p>
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
      <div className="text-center bg-blue-c100E1D">
        <p className="pt-12 font-mon text-gray-c616475 text-sm font-semibold">
          <a href="https://github.com/durashere">durashere</a> @{" "}
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </div>
    </div>
  )
}

export default WeatherTodayMore
