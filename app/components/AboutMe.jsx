import FrankVideo from "./FrankVideo";

const AboutMe = () => {
    return(
        <>
            <div className="text-center flex flex-col max-w-screen gap-10 mt-6 mb-24">
                <div>
                    <h1 className="mb-4 bg-white p-4 text-black text-2xl">QUEM SOU EU</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aut quasi, inventore error, nesciunt, laudantium molestiae at nulla quibusdam praesentium labore delectus vero aperiam animi dolorum alias aliquam corrupti mollitia!</p>
                </div>
                <div className="m-0 my-2">
                    <FrankVideo />
                </div>
                <div>
                    <h1 className="mb-4 bg-white p-4 text-black text-2xl">O QUE EU FAÇO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit hic quibusdam voluptates aliquid veniam incidunt optio quos molestias numquam at, eligendi delectus, odio minima possimus magnam voluptatibus. Natus, inventore!</p>
                </div>
            </div>
        </>
    );
}

export default AboutMe;