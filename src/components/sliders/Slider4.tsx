import { FC } from "react";
import bgImg from "../../assets/images/img-1.jpeg";
import classNames from "./slider4.module.scss";
import { motion } from "framer-motion";
import PhotoFrame from "../photo-frame";
import manPhoto from "../../assets/images/man.jpg";
import womanPhoto from "../../assets/images/woman.jpg";
import Instagram from "../../assets/icons/instagram.svg?react";

interface Props {
  inView: boolean;
}

const Slider3: FC<Props> = (props) => {
  return (
    <div className={classNames.main}>
      <img className={classNames.bgImg} src={bgImg} />
      {props.inView && (
        <div className={classNames.content}>
          <motion.p
            initial={{ y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.name}
          >
            Seila Tazkiyah
          </motion.p>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.desc}
          >
            Putri Bapak H. Aman Widjoyokusuma <br />
            dan Ibu Hj. Aminah
          </motion.p>
          <motion.button
            className={classNames.button}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
          >
            <Instagram />
            user_instagram
          </motion.button>
          <div className={classNames.photoWrapper}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            >
              <PhotoFrame src={manPhoto} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            >
              <PhotoFrame src={womanPhoto} />
            </motion.div>
          </div>
          <motion.button
            className={classNames.button}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
          >
            <Instagram />
            user_instagram
          </motion.button>
          <motion.p
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.name}
          >
            Ridho Imantiyar
          </motion.p>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.desc}
          >
            Putra Bapak Budi Sudarsoni <br />
            dan Ibu Nelly Nurdewi
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default Slider3;
