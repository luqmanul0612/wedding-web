import { FC } from "react";
import bgImg from "../../assets/images/img-3.jpeg";
import mapLocation from "../../assets/images/map-location.png";
import classNames from "./slider7.module.scss";
import { motion } from "framer-motion";

interface Props {
  inView: boolean;
}

const Slider7: FC<Props> = (props) => {
  const location = {
    mapLink: "https://maps.app.goo.gl/QWh59omV8rFZ1tkD6",
    desc: "Kediman mempelai wanita Jl. Hasanuddin 1 No 1 Bekasi",
  };
  const onClickLocation = () => {
    window.open(location.mapLink, "_blank");
  };

  return (
    <div className={classNames.main}>
      <img className={classNames.bgImg} src={bgImg} />
      {props.inView && (
        <div className={classNames.content}>
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.title}
          >
            Acara Resepsi
          </motion.p>
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.desc}
          >
            {location.desc}
          </motion.p>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 1.5, ease: "easeInOut" }}
            className={classNames.map}
          >
            <img src={mapLocation} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
          >
            <button className={classNames.button} onClick={onClickLocation}>
              Petunjuk ke Lokasi
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Slider7;
