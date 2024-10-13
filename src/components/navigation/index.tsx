import { KeenSliderHooks, KeenSliderInstance } from "keen-slider";
import { FC } from "react";
import classNames from "./navigation.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

interface Props {
  isOpened: boolean;
  navigationRef: KeenSliderInstance<object, object, KeenSliderHooks>;
  currentSlide: number;
}

const Navigation: FC<Props> = (props) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
    },
  });

  return (
    <div className={classNames.main}>
      {props.isOpened && (
        <motion.div
          className={classNames.content}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, bounce: 0 }}
        >
          <div ref={ref} className="keen-slider">
            <div className="keen-slider__slide">1</div>
            <div className="keen-slider__slide">2</div>
            <div className="keen-slider__slide">3</div>
            <div className="keen-slider__slide">4</div>
            <div className="keen-slider__slide">5</div>
            <div className="keen-slider__slide">6</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;
