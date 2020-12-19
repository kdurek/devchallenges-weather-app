const Card = ({ children, title, value, units }) => {
  return (
    <div className="flex justify-center bg-blue-c1E213A">
      <div className="p-4 w-full flex flex-col items-center gap-4">
        <p className="font-ral font-medium text-base text-gray-cE7E7EB">
          {title}
        </p>
        <div className="flex items-end gap-2">
          <p className="font-ral font-bold text-6xl text-gray-cE7E7EB">
            {value}
          </p>
          <p className="font-ral font-medium text-4xl text-gray-cE7E7EB">
            {units}
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Card
