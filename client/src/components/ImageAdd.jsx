import { useState } from "react";
import toast from "react-hot-toast";

const ImageAdd = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const addPost = async (e) => {
    e.preventDefault();
    try {
      const title = e.target.title.value;
      const price = e.target.title.price;

      if (!title || !price) return toast.error("Please fill all the fields!");
      if (title.trim === "" || price.trim === "")
        return toast.error("Please fill all the feilds");

      const {public_id, secure_url} = await useUpload({
        image, 
        onUploadProgress
      })
    
    } catch (err) {
      return toast.error(err.response.data.message);
    }
  };
  return (
    <div className="p-5 bg-white mx-8 rounded-2xl shadow-md ">
      <h2 className="text-xl font-bold">Add New Product</h2>
      <form className="grid grid-cols-1 gap-2 my-4">
        <img
          src={`${
            image
              ? URL.createObjectURL(image)
              : "https://dummyimage.in/600x400/d4d4d4/ffffff?text=No%20Image"
          }`}
          alt="this picture"
          className="w-[350px] h-[25vh] sm:h-[30vh] rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <label htmlFor="image" className="font-bold">
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            required
            className="rounded-lg border outline-none px-3 py-3 mt-1"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="font-bold">
            Title
          </label>
          <input
            type="text"
            placeholder="Beautiful Flower"
            name="title"
            required
            id="title"
            className="rounded-lg border outline-none px-3 py-3 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="font-bold">
            Price
          </label>
          <input
            type="text"
            placeholder="45"
            required
            name="price"
            id="price"
            className="rounded-lg border outline-none px-3 py-3 mt-1"
          />
        </div>
        <button
          type="submit"
          className="py-1 px-3 bg-black font-semibold text-white rounded-lg mt-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ImageAdd;
