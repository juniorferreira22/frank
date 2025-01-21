import Image from "next/image";

const AboutMe = () => {
    return(
        <>
            <div className="flex flex-col max-w-screen-md gap-10">
                <div>
                    <h1>QUEM SOU EU</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aut quasi, inventore error, nesciunt, laudantium molestiae at nulla quibusdam praesentium labore delectus vero aperiam animi dolorum alias aliquam corrupti mollitia!</p>
                </div>
                <div className="m-auto my-2">
                    <Image 
                    src={"/assets/Player.svg"}
                    width={300}
                    height={100}
                    alt="Player de Video"/>
                </div>
                <div>
                    <h1>O QUE EU FAÇO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit hic quibusdam voluptates aliquid veniam incidunt optio quos molestias numquam at, eligendi delectus, odio minima possimus magnam voluptatibus. Natus, inventore!</p>
                </div>
            </div>
        </>
    );
}

export default AboutMe;