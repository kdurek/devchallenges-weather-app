import Card from "./Card"

const WeatherWeek = ({ data }) => {
  return (
    <div className="p-12">
      <div className="grid grid-cols-2 gap-6">
        {data.consolidated_weather.slice(1).map((day) => (
          <Card key={day.id} data={day} />
        ))}
      </div>
    </div>
  )
}

export default WeatherWeek
