import classNames from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/navigation";
import clsx from "clsx";
import { config } from "./config";
import BackgroundMusic from "./components/background-music";
import preLoadAssets from "./utils/preload-assets";

export default function App() {
  const [playAudio, setPlayAudio] = useState(false);
  const [loadedSlider, setLoadedSlider] = useState(false);
  const [isLoadingAssets, setIsLoadingAssets] = useState(true);
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
        setLoadedSlider(true);
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

  useEffect(() => {
    setIsLoadingAssets(true);
    preLoadAssets()
      .then(() => {
        setTimeout(() => {
          setIsLoadingAssets(false);
        }, 1000);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <motion.div
      className={classNames.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence mode="wait">
        {isLoadingAssets && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ bounce: 0, duration: 0.5, ease: "easeInOut" }}
            className={classNames["loader-container"]}
          >
            <div className={classNames.loader}>Loading..</div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ bounce: 0, duration: 1, ease: "easeInOut" }}
        ref={sliderRef}
        className={clsx("keen-slider", classNames["keen-slider-main"])}
        style={{ position: "relative" }}
      >
        <BackgroundMusic
          isOpened={isOpened}
          playAudio={playAudio}
          setPlayAudio={setPlayAudio}
        />
        {(isOpened ? config.sliderList : config.sliderList.slice(0)).map(
          ({ component: Slider }, idx) => (
            <div key={idx} className="keen-slider__slide">
              <Slider
                isOpened={isOpened}
                onClickOpen={onClickOpen}
                inView={currentSlide === idx}
              />
            </div>
          )
        )}
      </motion.div>
      {loadedSlider && (
        <Navigation
          currentSlide={currentSlide}
          isOpened={isOpened}
          navigationRef={instanceRef.current!}
        />
      )}
    </motion.div>
  );
}
