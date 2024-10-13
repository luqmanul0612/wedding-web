import { FC, useEffect, useRef } from "react";
import bgvideo from "../../assets/videos/bg-video-3.mp4";
import classNames from "./slider3.module.scss";
import { motion } from "framer-motion";

interface Props {
  inView: boolean;
}

const Slider3: FC<Props> = (props) => {
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
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.title}
          >
            Q.S. Ar Rum: 21
          </motion.p>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.text}
          >
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default Slider3;
