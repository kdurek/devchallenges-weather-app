import Card from "./Card"

const WeatherWeek = ({ fahrenheit, data }) => {
  return (
    <div className="p-12 xl:p-0 flex flex-col">
      <div className="grid grid-cols-2 xl:grid-cols-5 gap-6">
        {data.consolidated_weather.slice(1).map((day) => (
          <Card key={day.id} fahrenheit={fahrenheit} data={day} />
        ))}
      </div>
    </div>
  )
}

export default WeatherWeek
