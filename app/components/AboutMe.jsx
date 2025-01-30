import FrankVideo from "./frankVideo";

const AboutMe = () => {
    return (
        <div className="text-center flex flex-col max-w-screen mt-6 mb-24">
            <Section title="QUEM SOU EU" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aut quasi, inventore error, nesciunt, laudantium molestiae at nulla quibusdam praesentium labore delectus vero aperiam animi dolorum alias aliquam corrupti mollitia!" />
            <div className="m-0 mt-2 mb-0">
                <FrankVideo />
            </div>
            <Section title="O QUE EU FAÇO" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit hic quibusdam voluptates aliquid veniam incidunt optio quos molestias numquam at, eligendi delectus, odio minima possimus magnam voluptatibus. Natus, inventore!" />
        </div>
    );
};

const Section = ({ title, content }) => (
    <div>
        <h1 className="my-4 bg-white p-4 text-black text-2xl">{title}</h1>
        <p className="px-4 mt-4 text-sm">{content}</p>
    </div>
);

export default AboutMe;
