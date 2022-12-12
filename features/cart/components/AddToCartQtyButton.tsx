const AddToCartQtyButton = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <span className="bg-green-600 text-center text-white text-2xl font-bold py-2 px-5 rounded-md hover:text-green-600 hover:bg-white hover:border hover:border-green-600 cursor-pointer">
        -
      </span>
      <span>1</span>
      <span className="bg-green-600 text-center text-white text-2xl font-bold py-2 px-5 rounded-md hover:text-green-600 hover:bg-white hover:border hover:border-green-600 cursor-pointer">
        +
      </span>
    </div>
  )
}

export default AddToCartQtyButton
