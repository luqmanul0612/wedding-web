import { FC } from "react";
import bgImg from "../../assets/images/img-7.png";
import classNames from "./GiftSlider.module.scss";
import { motion } from "framer-motion";
import { config } from "../../config";

interface Props {
  inView: boolean;
}

const GiftSlider: FC<Props> = (props) => {
  const onClickGift1 = () => {};
  const onClickGift2 = () => {};

  return (
    <div className={classNames.main}>
      <img className={classNames.bgImg} src={bgImg} />
      {props.inView && (
        <div className={classNames.content}>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.title}
          >
            Kirim Hadiah
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.content}
          >
            {config.gift.content}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.buttons}
          >
            <button className={classNames.button} onClick={onClickGift1}>
              Kirim Angpao
            </button>
            <button className={classNames.button} onClick={onClickGift2}>
              Kirim Hadiah
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GiftSlider;
