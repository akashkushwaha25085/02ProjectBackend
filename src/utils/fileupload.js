import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

(async function () {

   cloudinary.config({
      cloud_name: 'ddyt7szjo',
      api_key: '372167118682671',
      api_secret: '2HKAsPfOwD1F7xFBkju2ir_ByQ8' 
   });

   // Upload an image
   const uploadResult = await cloudinary.uploader
      .upload(
         'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
         public_id: 'shoes',
      }
      )
      .catch((error) => {
         console.log(error);
      });

   console.log(uploadResult)

})();

export {uploadResult}