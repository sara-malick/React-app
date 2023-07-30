import ReactPlayer from "react-player"

function Video() {

    const videoUrl = "https://www.youtube.com/watch?v=K0aRrQJfxZI";
    return (
        <ReactPlayer
            url={videoUrl}
            playing={false}
            volume={0.5}
            controls={true}
        />
    )
}

export default Video