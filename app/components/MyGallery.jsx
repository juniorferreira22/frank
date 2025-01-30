import Image from "next/image";

const MyGallery = () => (
  <div className="bg-white w-screen flex justify-center py-4">
    <Image 
      src="/assets/my-gallery.svg"
      alt="Gallery Image"
      width={200}    
      height={400}
      className="p-4"
    />
  </div>
);

export default MyGallery;