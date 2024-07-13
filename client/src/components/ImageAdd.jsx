const ImageAdd = () => {
  return (
    <div className="p-5 bg-white mx-8 rounded-2xl shadow-md ">
      <h2 className="text-xl font-bold">Add New Product</h2>
      <form className="grid grid-cols-1 gap-2 my-4">
        <img src={`https://placehold.co/600x400`} alt="this picture" 
            className="w-[350px] h-[25vh] sm:h-[30vh] rounded-lg object-cover"
        />
      </form>
    </div>
  )
}

export default ImageAdd
