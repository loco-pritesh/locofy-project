import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ReviewCard.module.css";

export type ReviewCardType = {
  ellipse12?: string;
  johnnyCash?: string;
  june2023?: string;
  opacityOptimizer?: string;
  michellesPlaceWasSoGreatA?: string;

  /** Style props */
  propFlexWrap?: CSSProperties["flexWrap"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  ellipse12,
  johnnyCash,
  june2023,
  opacityOptimizer,
  michellesPlaceWasSoGreatA,
  propFlexWrap,
  propMinWidth,
  propMinWidth1,
}) => {
  const imageImporterStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const johnnyCashStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.reviewcard}>
      <div className={styles.imageImporter} style={imageImporterStyle}>
        <div className={styles.symbolSorter}>
          <img
            className={styles.symbolSorterChild}
            loading="lazy"
            alt=""
            src={ellipse12}
          />
          <div className={styles.johnnyCashParent}>
            <i className={styles.johnnyCash} style={johnnyCashStyle}>
              {johnnyCash}
            </i>
            <i className={styles.june2023} style={june2023Style}>
              {june2023}
            </i>
          </div>
        </div>
        <div className={styles.rotationRotator}>
          <i className={styles.opacityOptimizer}>{opacityOptimizer}</i>
          <img className={styles.blendBuilderIcon} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <i className={styles.michellesPlaceWas}>{michellesPlaceWasSoGreatA}</i>
    </div>
  );
};

export default ReviewCard;
