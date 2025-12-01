import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import vid from "../../assets/100TMC .mp4";
import vid2 from "../../assets/WhatsApp Video 2025-07-12 at 12.16.09_fcf00cac.mp4";

const videos = [vid, vid2, vid];

export default function PhoneShowcase() {
  const [current, setCurrent] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const [progress, setProgress] = useState(0);

  const touchStart = useRef(null);
  const intervalRef = useRef(null);

  const next = () => {
    setSlideDirection("next");
    setCurrent((c) => (c + 1) % videos.length);
    setProgress(0);
  };

  const prev = () => {
    setSlideDirection("prev");
    setCurrent((c) => (c - 1 + videos.length) % videos.length);
    setProgress(0);
  };

  const getIndex = (i) => (i + videos.length) % videos.length;

  // Auto Slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 1;
      });
    }, 60);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Swipe Gestures
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStart.current;

    if (diff > 60) prev();
    if (diff < -60) next();
  };

  return (
    <div
      className="w-full flex items-center justify-center gap-6"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <div className="relative w-full flex items-center justify-center gap-6 select-none">
        {/* PREV BUTTON */}
        <button
          onClick={prev}
          className="absolute left-0 z-20 text-white bg-red-800 hover:bg-red-500 cursor-pointer
                   backdrop-blur-md p-3 rounded-full shadow-lg transition
                   hover:scale-110 border border-white/10"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* SLIDER */}
        <div
          className="relative w-[360px] h-[550px] flex items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* PREVIEW LEFT */}
          <div
            className={`absolute left-0 transition-all duration-700
                      w-[180px] h-[360px] opacity-40 scale-75 blur-sm 
                      rounded-[30px] overflow-hidden border border-red-500/20
                      ${
                        slideDirection === "next"
                          ? "translate-x-[-10px]"
                          : "translate-x-[10px]"
                      }`}
          >
            <video
              src={videos[getIndex(current - 1)]}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>

          {/* MAIN PHONE */}
          <div
            className={`relative w-[260px] h-[520px] bg-black rounded-[45px] 
                     border-[3px] border-red-600/40 shadow-[0_0_15px_rgba(255,0,0,0.5)]
                     overflow-hidden transition-all duration-700 
                     ${
                       slideDirection === "next"
                         ? "translate-x-0 animate-pulse"
                         : "translate-x-0"
                     }`}
            style={{ zIndex: 10 }}
          >
            {/* iPhone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20"></div>

            <video
              key={current}
              src={videos[current]}
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-full object-cover rounded-[45px] transition-all duration-700`}
            />

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
              <div
                className="h-full bg-red-500 transition-all duration-75"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* PREVIEW RIGHT */}
          <div
            className={`absolute right-0 transition-all duration-700 
                      w-[180px] h-[360px] opacity-40 scale-75 blur-sm 
                      rounded-[30px] overflow-hidden border border-red-500/20
                      ${
                        slideDirection === "next"
                          ? "translate-x-[10px]"
                          : "translate-x-[-10px]"
                      }`}
          >
            <video
              src={videos[getIndex(current + 1)]}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={next}
          className="absolute right-0 z-20 text-white bg-red-800 hover:bg-red-500 cursor-pointer
                   backdrop-blur-md p-3 rounded-full shadow-lg transition
                   hover:scale-110 border border-white/10"
        >
          <FaChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
