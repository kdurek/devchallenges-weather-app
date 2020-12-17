import Layout from "../components/Layout"
import WeatherToday from "../components/WeatherToday"
import WeatherWeek from "../components/WeatherWeek"
import WeatherTodayMore from "../components/WeatherTodayMore"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="bg-blue-c1E213A">
        <WeatherToday data={data} />
      </div>
      <div className="bg-blue-c100E1D">
        <WeatherWeek data={data} />
        <WeatherTodayMore data={data.consolidated_weather[0]} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://www.metaweather.com/api/location/565346/`)
  const data = await res.json()

  return { props: { data } }
}
