import { FC, useMemo } from "react";
import bgImg from "../../assets/images/img-4.jpeg";
import classNames from "./RundownSlider.module.scss";
import { config } from "../../config";
import clsx from "clsx";

interface Props {
  inView: boolean;
}

const RundownSlider: FC<Props> = (props) => {
  const photos = useMemo(() => config.galeries.slice(0, 6), []);
  return (
    <div className={classNames.main}>
      <img className={classNames.bgImg} src={bgImg} />
      {props.inView && (
        <div className={classNames.content}>
          <div className={classNames.galeries}>
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className={clsx(classNames.photo, classNames[`photo${idx}`])}
              >
                <img src={photo} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RundownSlider;
