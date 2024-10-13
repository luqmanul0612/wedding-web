import { FC } from "react";
import bgvideo from "../../assets/bg-video-1.mp4";
import classNames from "./slider1.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isOpened: boolean;
  onClickOpen: () => void;
}

const Slider1: FC<Props> = (props) => {
  return (
    <div className={classNames.main}>
      <video className={classNames.bgVideo} autoPlay muted loop>
        <source src={bgvideo} type="video/mp4" />
      </video>
      <div className={classNames.content}>
        <p className={classNames.title}>THE WEDDING OF</p>
        <p className={classNames.names}>Seila Ridho</p>
        <div className={classNames.invitation}>
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
        </div>
      </div>
    </div>
  );
};

export default Slider1;
