import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { fade, videoWorks } from "./portfolioData";
import SectionIntro from "./SectionIntro";

function VideoCard({ video, index }) {
  const [active, setActive] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.play();
      setActive(true);
    } else {
      videoEl.pause();
      setActive(false);
    }
  };

  const toggleMute = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    videoEl.muted = !videoEl.muted;
    setMuted(videoEl.muted);
  };

  const updateProgress = () => {
    const videoEl = videoRef.current;
    if (!videoEl?.duration) return;
    setProgress((videoEl.currentTime / videoEl.duration) * 100);
  };

  return (
    <motion.article
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20"
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      transition={{ delay: index * 0.06 }}
    >
      <div className="relative bg-black">
        <video
          ref={videoRef}
          src={video.src}
          className="aspect-[9/13] w-full object-cover"
          muted={muted}
          playsInline
          preload="metadata"
          onTimeUpdate={updateProgress}
          onEnded={() => setActive(false)}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
          <div className="mb-4 h-1 rounded-full bg-white/15">
            <div className="h-full rounded-full bg-red-500" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex items-center justify-between">
            <button onClick={togglePlay} className="grid h-11 w-11 place-items-center rounded-full bg-red-600 text-white" aria-label="Play video">
              {active ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={toggleMute} className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white" aria-label="Toggle sound">
              {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-red-400">{video.type}</p>
        <h3 className="mt-2 text-xl font-black text-white">{video.title}</h3>
      </div>
    </motion.article>
  );
}

export default function VideoSection() {
  return (
    <section id="videos" className="bg-[#060606] px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Video work" title="Edited motion for brands, events and social attention." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videoWorks.map((video, index) => (
            <VideoCard key={`${video.title}-${index}`} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
