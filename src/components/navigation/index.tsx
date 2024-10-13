import { KeenSliderHooks, KeenSliderInstance } from "keen-slider";
import { FC } from "react";
import classNames from "./navigation.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { menu } from "./data";

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
            {menu.map((item) => (
              <div key={item.id} className="keen-slider__slide">
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;
