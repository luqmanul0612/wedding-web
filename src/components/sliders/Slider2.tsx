/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef } from "react";
import bgvideo from "../../assets/bg-video-2.mp4";
import classNames from "./slider2.module.scss";
import { motion } from "framer-motion";

interface Props {
  inView: boolean;
}

const Slider2: FC<Props> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (props.inView && videoRef.current) {
      videoRef.current.play();
      videoRef.current.currentTime = 0;
    }
  }, [props.inView]);

  return (
    <div className={classNames.main}>
      <video ref={videoRef} className={classNames.bgVideo} muted loop>
        <source src={bgvideo} type="video/mp4" />
      </video>
      {props.inView && (
        <div className={classNames.content}>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.title}
          >
            Assalamu'alaikum Wr.Wb.
          </motion.p>
          <motion.p
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.text}
          >
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/ Ibu/
            Saudara/ I pada acara resepsi pernikahan kami.
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default Slider2;