import Image from "next/image";
const MyGallery = () => {
    return (
        <div className="bg-white w-screen text-center items-center">
            <Image 
                src="/assets/my-gallery.svg"
                alt="Image 1"
                width={200}    
                height={400}
                className="m-auto p-4"
            />
        </div>
    );
};

export default MyGallery;