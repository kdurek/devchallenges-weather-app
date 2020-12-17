const chooseIcon = (type) => {
  switch (type) {
    case "c":
      return "Clear.png"
    case "h":
      return "Hail.png"
    case "hc":
      return "HeavyCloud.png"
    case "hr":
      return "HeavyRain.png"
    case "lc":
      return "LightCloud.png"
    case "lr":
      return "LightRain.png"
    case "s":
      return "Shower.png"
    case "sl":
      return "Sleet.png"
    case "sn":
      return "Snow.png"
    case "t":
      return "Thunderstorm.png"
  }
}

export default chooseIcon
