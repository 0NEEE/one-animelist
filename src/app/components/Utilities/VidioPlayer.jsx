"use client"
import { Toilet } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VidioPlayer = ({ youtubeid }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVidioPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }
    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVidioPlayer}
                    className="text-color-primary float-right"><Toilet size={32} />
                </button>
                <YouTube
                    videoId={youtubeid}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Vidio is broken, please try another.")}
                />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return (
            <button
                onClick={handleVidioPlayer}
                className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl">
                Lihat Trailer
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer />

}
export default VidioPlayer