import { FunctionComponent } from "react";
import StayCard from "./StayCard";
import styles from "./SimilarStaysSection.module.css";

const SimilarStaysSection: FunctionComponent = () => {
  return (
    <section className={styles.similarStaysSection}>
      <div className={styles.fillerFiller}>
        <h3 className={styles.similarStays}>Similar stays</h3>
        <i className={styles.button}>View all</i>
      </div>
      <div className={styles.anchorAnchorage}>
        <StayCard
          missisuagaAistream="Missisuaga Aistream"
          missisaugaOntarioCanada="Missisauga, Ontario, Canada"
        />
        <div className={styles.staycard}>
          <div className={styles.frameParent}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <i className={styles.superhost}>Superhost</i>
            </div>
            <div className={styles.wrapperHeartIcon}>
              <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.urbanLoftParent}>
                <i className={styles.urbanLoft}>Urban Loft</i>
                <i className={styles.urbanLoft1}>Urban Loft</i>
              </div>
              <div className={styles.parent}>
                <i className={styles.i}>4.8</i>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/star-icon.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.group}>
                <i className={styles.i1}>$502</i>
                <i className={styles.night}>/night</i>
              </div>
            </div>
          </div>
        </div>
        <StayCard
          missisuagaAistream="Forestville Cottages"
          missisaugaOntarioCanada="Simcoe, Ontario Canada"
          propBackgroundImage="url('/frame-93@3x.png')"
          propLineHeight="unset"
        />
      </div>
    </section>
  );
};

export default SimilarStaysSection;
