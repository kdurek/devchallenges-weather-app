import { useState } from "react"

const Button = ({ children, ...props }) => {
  const [hover, setHover] = useState()

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`pl-4 pr-1 py-4 border ${
        hover ? "border-gray-c616475" : "border-transparent"
      } focus:outline-none`}
      {...props}
    >
      <div className="flex justify-between">
        <p className="font-ral font-medium text-base text-gray-cE7E7EB">
          {children}
        </p>
        {hover && (
          <span className={`alignt-middle text-gray-c616475 material-icons`}>
            chevron_right
          </span>
        )}
      </div>
    </button>
  )
}

export default Button
