import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import WeatherToday from "../components/WeatherToday"
import WeatherWeek from "../components/WeatherWeek"
import WeatherTodayMore from "../components/WeatherTodayMore"
import Navigation from "../components/Navigation"

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState()
  const [data, setData] = useState()
  const [navOpen, setNavOpen] = useState(false)
  const [fahrenheit, setFahrenheit] = useState(false)

  useEffect(async () => {
    if (typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(showPosition)

      async function showPosition(position) {
        const geoLocation = {
          latt: position.coords.latitude,
          long: position.coords.longitude,
        }
        const getClosestData = await fetch(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${geoLocation.latt},${geoLocation.long}`
        )
        const closestData = await getClosestData.json()
        const getData = await fetch(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${closestData[0].woeid}`
        )
        const data = await getData.json()
        setCurrentLocation(data)
        setData(data)
      }
    }
  }, [])

  return (
    <Layout>
      {data && (
        <div className="w-screen h-screen">
          <Navigation
            setData={setData}
            navOpen={navOpen}
            setNavOpen={setNavOpen}
          />
          <div className="w-screen xl:h-screen xl:flex">
            <div className="xl:w-1/3 xl:h-full xl:flex xl:flex-col bg-blue-c1E213A">
              <WeatherToday
                fahrenheit={fahrenheit}
                data={data}
                setData={setData}
                currentLocation={currentLocation}
                navOpen={navOpen}
                setNavOpen={setNavOpen}
              />
            </div>
            <div className="xl:px-36 xl:pt-8 xl:w-2/3 xl:h-full xl:flex xl:flex-col xl:justify-between bg-blue-c100E1D">
              <div className="hidden xl:self-end xl:flex xl:gap-4">
                <button
                  onClick={() => setFahrenheit(false)}
                  className="px-3 py-2 rounded-full bg-gray-cE7E7EB focus:outline-none"
                >
                  <p className="align-middle font-ral font-bold text-lg text-blue-c110E3C">
                    ℃
                  </p>
                </button>
                <button
                  onClick={() => setFahrenheit(true)}
                  className="px-3 py-2 rounded-full bg-purple-c585676 focus:outline-none"
                >
                  <p className="align-middle font-ral font-bold text-lg text-gray-cE7E7EB">
                    ℉
                  </p>
                </button>
              </div>
              <WeatherWeek fahrenheit={fahrenheit} data={data} />
              <WeatherTodayMore data={data.consolidated_weather[0]} />
              <div className="flex flex-col text-center bg-blue-c100E1D">
                <p className="p-8 font-mon text-gray-c616475 text-sm font-semibold">
                  <a href="https://github.com/durashere">durashere</a> @{" "}
                  <a href="https://devchallenges.io">DevChallenges.io</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
