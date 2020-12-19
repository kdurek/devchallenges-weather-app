import { useState } from "react"
import Button from "./Button"

const Navigation = ({ setData, navOpen, setNavOpen }) => {
  const [searchLocation, setSearchLocation] = useState("")
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async ({ event, searchLocation }) => {
    event.preventDefault()
    const getData = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${searchLocation}`
    )
    const locations = await getData.json()
    console.log(locations)
    setLocations(locations)
  }

  const handleSetLocation = async (woeid) => {
    setLoading(true)
    const getData = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
    )
    const data = await getData.json()
    setData(data)
    setNavOpen(false)
    setLoading(false)
  }

  return (
    <div
      className={`fixed h-screen z-10 overflow-hidden bg-blue-c1E213A transition-all ${
        navOpen ? "w-screen xl:w-1/3" : "w-0"
      }`}
    >
      {loading && (
        <div className="fixed w-screen h-screen bg-white bg-opacity-30" />
      )}
      <div className="p-4 flex flex-col gap-8">
        <button onClick={() => setNavOpen(!navOpen)} className="self-end">
          <span className="align-middle text-gray-cE7E7EB material-icons">
            close
          </span>
        </button>
        <div className="flex justify-between gap-4">
          <form
            onSubmit={(event) => handleSearch({ event, searchLocation })}
            className="p-4 w-full flex items-center gap-4 border border-gray-cE7E7EB"
          >
            <span className="text-gray-c616475 align-middle material-icons">
              search
            </span>
            <input
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder="Search location"
              className="w-full placeholder-gray-c616475 bg-transparent font-ral font-medium text-base text-gray-cE7E7EB focus:outline-none"
            />
          </form>
          <button
            type="submit"
            className="p-4 font-ral font-semibold text-base text-gray-cE7E7EB bg-blue-c3C47E9 focus:outline-none"
          >
            Search
          </button>
        </div>
        {locations.map((location) => (
          <Button
            onClick={() => handleSetLocation(location.woeid)}
            key={location.woeid}
          >
            {location.title}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Navigation
