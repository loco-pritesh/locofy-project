import { FunctionComponent } from "react";
import Header from "../components/Header";
import NestedLoop from "../components/NestedLoop";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import ReviewSection from "../components/ReviewSection";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";
import styles from "./PropertyDetails.module.css";

const PropertyDetails: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <main className={styles.nestedLoopParent}>
        <NestedLoop />
        <section className={styles.listingDetailsSection}>
          <ListingDescription />
          <LocationAmenities />
        </section>
        <ReviewSection />
        <SimilarStaysSection />
      </main>
      <Footer />
      <div className={styles.band}>
        <div className={styles.errorHandler}>
          <div className={styles.valueMapper}>
            <i className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </i>
            <div className={styles.multiOutput}>
              <i className={styles.privacyPolicy}>Privacy Policy</i>
              <i className={styles.termsConditions}>{`Terms & Conditions`}</i>
              <i className={styles.contactUs}>Contact us</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
