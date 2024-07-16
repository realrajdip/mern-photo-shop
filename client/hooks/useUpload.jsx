import axios from "axios";

const useUpload = async ({ image, onUploadProgress }) => {
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
      );
      formData.append("upload_key", import.meta.env.VITE_CLOUDINARY_UPLOAD_KEY);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
        withCredentials: false,
      };

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.CLOUDINARY_CLOUD_NAME
        }/image/upload`
      );
      const data = await res.data;
      if (!data) {
        return console.log("image upload failed");
      }
      return data;
    } catch (err) {
      return error.message;
    }
  };

  const { public_id, secure_url } = await upload();

  return {public_id, secure_url};
};
