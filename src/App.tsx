import classNames from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/navigation";
import clsx from "clsx";
import { config } from "./config";
import BackgroundMusic from "./components/background-music";

export default function App() {
  const [playAudio, setPlayAudio] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      vertical: true,
      drag: isOpened,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    []
  );

  const onClickOpen = () => {
    setIsOpened(true);
    setPlayAudio(true);
    setTimeout(() => {
      instanceRef.current?.moveToIdx(1, true);
    }, 300);
  };

  return (
    <motion.div
      className={classNames.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        ref={sliderRef}
        className={clsx("keen-slider", classNames["keen-slider-main"])}
        style={{ position: "relative" }}
      >
        <BackgroundMusic
          isOpened={isOpened}
          playAudio={playAudio}
          setPlayAudio={setPlayAudio}
        />
        {config.sliderList.map(({ component: Slider }, idx) => (
          <div key={idx} className="keen-slider__slide">
            <Slider
              isOpened={isOpened}
              onClickOpen={onClickOpen}
              inView={currentSlide === idx}
            />
          </div>
        ))}
      </div>
      {loaded && (
        <Navigation
          currentSlide={currentSlide}
          isOpened={isOpened}
          navigationRef={instanceRef.current!}
        />
      )}
    </motion.div>
  );
}
