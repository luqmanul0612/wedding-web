/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/navigation";
import clsx from "clsx";
import { config } from "./config";

export default function App() {
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
  };

  useEffect(() => {
    if (isOpened) {
      instanceRef.current?.moveToIdx(1, true);
    }
  }, [isOpened]);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

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
      >
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
