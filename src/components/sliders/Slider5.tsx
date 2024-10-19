import { FC, useMemo } from "react";
import bgImg from "../../assets/images/img-2.jpeg";
import classNames from "./slider5.module.scss";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";
import Countdown, { CountdownRendererFn } from "react-countdown";
dayjs.locale("id");
dayjs.extend(utc);
dayjs.extend(timezone);

interface Props {
  inView: boolean;
}

const Slider5: FC<Props> = (props) => {
  const event = useMemo(() => {
    return {
      title: "Weeding Seila & Ridho",
      startDate: dayjs.tz("2024-11-15 08:00", "Asia/Jakarta").utc(),
      endDate: dayjs.tz("2024-11-15 17:00", "Asia/Jakarta").utc(),
      detail: "Join us to celebrate the wedding of Seila and Ridho!",
      location: "Kediman mempelai wanita Jl. Hasanuddin 1 No 1 Bekasi",
    };
  }, []);

  const onClickAddToCalendar = () => {
    const link = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${dayjs(event.startDate).format("YYYYMMDDTHHmmss[Z]")}/${dayjs(
      event.endDate
    ).format("YYYYMMDDTHHmmss[Z]")}&details=${encodeURIComponent(
      event.detail
    )}&location=${encodeURIComponent(event.location)}`;
    window.open(link, "_blank");
  };

  const renderer: CountdownRendererFn = (time) => {
    return (
      <div className={classNames.countdown}>
        <div className={classNames.boxes}>
          <p className={classNames.time}>{time.days}</p>
          <p className={classNames.unit}>Hari</p>
        </div>
        <div className={classNames.boxes}>
          <p className={classNames.time}>{time.hours}</p>
          <p className={classNames.unit}>Jam</p>
        </div>
        <div className={classNames.boxes}>
          <p className={classNames.time}>{time.minutes}</p>
          <p className={classNames.unit}>Menit</p>
        </div>
        <div className={classNames.boxes}>
          <p className={classNames.time}>{time.seconds}</p>
          <p className={classNames.unit}>Detik</p>
        </div>
      </div>
    );
  };

  return (
    <div className={classNames.main}>
      <img className={classNames.bgImg} src={bgImg} />
      {props.inView && (
        <div className={classNames.content}>
          <motion.p
            initial={{ x: 90, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.title}
          >
            Akad Nikah
          </motion.p>
          <motion.p
            initial={{ x: 90, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
            className={classNames.desc}
          >
            {dayjs(event.startDate).tz("Asia/Jakarta").format("dddd, DD MMMM YYYY")}
            <br />{" "}
            {`Pukul ${dayjs(event.startDate).tz("Asia/Jakarta").format("HH:mm")} WIB s.d. Selesai`}
            <br />
            <br /> {event.location}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
          >
            <Countdown date={event.startDate.tz("Asia/Jakarta").toDate()} renderer={renderer} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ bounce: 0, duration: 2, ease: "easeInOut" }}
          >
            <button
              className={classNames.button}
              onClick={onClickAddToCalendar}
            >
              Add to Calendar
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Slider5;
