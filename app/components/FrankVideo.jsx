export default function FrankVideo() {
    return (
        <div className="w-screen flex justify-center">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jZbtv5EAJEI?autoplay=1&mute=1&loop=1&playlist=jZbtv5EAJEI"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}
