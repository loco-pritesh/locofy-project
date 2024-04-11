import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StayCard.module.css";

export type StayCardType = {
  missisuagaAistream?: string;
  missisaugaOntarioCanada?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  missisuagaAistream,
  missisaugaOntarioCanada,
  propBackgroundImage,
  propLineHeight,
}) => {
  const alignmentAlgorythmStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const missisuagaAistreamStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={styles.staycard}>
      <div
        className={styles.alignmentAlgorythm}
        style={alignmentAlgorythmStyle}
      >
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <i className={styles.superhost}>Superhost</i>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.constraintContainer}>
        <div className={styles.positionPositional}>
          <div className={styles.missisuagaAistreamParent}>
            <i
              className={styles.missisuagaAistream}
              style={missisuagaAistreamStyle}
            >
              {missisuagaAistream}
            </i>
            <i className={styles.missisaugaOntarioCanada}>
              {missisaugaOntarioCanada}
            </i>
          </div>
          <div className={styles.transformTransformerParent}>
            <i className={styles.transformTransformer}>4.8</i>
            <img
              className={styles.matrixManagerIcon}
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.pathPathwayPlanner}>
          <div className={styles.symbolSymboller}>
            <i className={styles.stylingStyleMaster}>$502</i>
            <i className={styles.night}>/night</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
