import { FunctionComponent } from "react";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewSection.module.css";

const ReviewSection: FunctionComponent = () => {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.triangleTrainer}>
        <h3 className={styles.reviews}>Reviews</h3>
        <i className={styles.button}>View all</i>
      </div>
      <div className={styles.reviewcardParent}>
        <ReviewCard
          ellipse12="/ellipse-12@2x.png"
          johnnyCash="Johnny Cash"
          june2023="June 2023"
          opacityOptimizer="5.0"
          michellesPlaceWasSoGreatA="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
        />
        <ReviewCard
          ellipse12="/ellipse-12-1@2x.png"
          johnnyCash="Yuta Watanabe"
          june2023="May 2023"
          opacityOptimizer="4.5"
          michellesPlaceWasSoGreatA="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
          propFlexWrap="wrap"
          propMinWidth="116px"
          propMinWidth1="64px"
        />
        <ReviewCard
          ellipse12="/ellipse-12-2@2x.png"
          johnnyCash="Shane Willis"
          june2023="December 2022"
          opacityOptimizer="4.8"
          michellesPlaceWasSoGreatA="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
          propFlexWrap="unset"
          propMinWidth="95px"
          propMinWidth1="104px"
        />
      </div>
    </section>
  );
};

export default ReviewSection;
