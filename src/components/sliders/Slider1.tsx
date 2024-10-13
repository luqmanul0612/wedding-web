import { FC, useEffect, useRef } from "react";
import bgvideo from "../../assets/videos/bg-video-1.mp4";
import classNames from "./slider1.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isOpened: boolean;
  inView: boolean;
  onClickOpen: () => void;
}

const Slider1: FC<Props> = (props) => {
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
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.title}
          >
            THE WEDDING OF
          </motion.p>
          <motion.p
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.names}
          >
            Seila Ridho
          </motion.p>
          <motion.div
            className={classNames.invitation}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ bounce: 0, duration: 1, ease: "easeInOut" }}
          >
            <p>KEPADA YTH</p>
            <p>Tamu Undangan</p>
            <AnimatePresence>
              {!props.isOpened && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    className={classNames.button}
                    onClick={props.onClickOpen}
                  >
                    Buka Undangan
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Slider1;
