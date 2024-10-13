/* eslint-disable react-hooks/exhaustive-deps */
import "./styles.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Slider1 } from "./components/sliders";
import { useEffect, useState } from "react";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      vertical: true,
      drag: isOpened,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
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
    <div className="main">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <Slider1 isOpened={isOpened} onClickOpen={onClickOpen} />
        </div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>
    </div>
  );
}
