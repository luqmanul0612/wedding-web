/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Slider1, Slider2 } from "./components/sliders";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/navigation";
import clsx from "clsx";

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
        <div className="keen-slider__slide">
          <Slider1
            isOpened={isOpened}
            onClickOpen={onClickOpen}
            inView={currentSlide == 0}
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Slider2 inView={currentSlide == 1} />
        </div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
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
