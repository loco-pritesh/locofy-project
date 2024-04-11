import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.treeVertex}>
        <div className={styles.treeRoot}>
          <div className={styles.shortestPathTree}>
            <h3 className={styles.support}>Support</h3>
            <i className={styles.helpCentre}>Help Centre</i>
            <i className={styles.aircover}>AirCover</i>
            <i className={styles.combatingDiscrimination}>
              Combating discrimination
            </i>
            <i className={styles.supportingPeopleWith}>
              Supporting people with disabilities
            </i>
            <i className={styles.cencellationOptions}>Cencellation options</i>
            <i className={styles.reportNeighbourhoodConcern}>
              Report neighbourhood concern
            </i>
          </div>
          <div className={styles.treeLeaf}>
            <h3 className={styles.hosting}>Hosting</h3>
            <i className={styles.localHome}>Local home</i>
            <i className={styles.coverForHosts}>Cover for hosts</i>
            <i className={styles.hostingResources}>Hosting resources</i>
            <i className={styles.communityForum}>Community forum</i>
            <i className={styles.hostingResponsibly}>Hosting responsibly</i>
          </div>
          <div className={styles.treeLeaf1}>
            <h3 className={styles.localhost}>Localhost</h3>
            <i className={styles.newsroom}>Newsroom</i>
            <i className={styles.newFeatures}>New Features</i>
            <i className={styles.careers}>Careers</i>
            <i className={styles.investres}>Investres</i>
            <i className={styles.giftCards}>Gift cards</i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
