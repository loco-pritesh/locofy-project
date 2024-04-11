import { FunctionComponent } from "react";
import styles from "./SocialMediaLogin.module.css";

export type SocialMediaLoginType = {
  orSignUpWith?: string;
  image?: string;
  image1?: string;
  image2?: string;
};

const SocialMediaLogin: FunctionComponent<SocialMediaLoginType> = ({
  orSignUpWith,
  image,
  image1,
  image2,
}) => {
  return (
    <div className={styles.socialMediaLogin}>
      <i className={styles.orSignUp}>{orSignUpWith}</i>
      <div className={styles.socialLoginContainer}>
        <div className={styles.socialLogin}>
          <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
          <i className={styles.text}>Google</i>
        </div>
        <div className={styles.socialLogin1}>
          <img className={styles.imageIcon1} alt="" src={image1} />
          <i className={styles.text1}>Facebook</i>
        </div>
        <div className={styles.socialLogin2}>
          <img className={styles.imageIcon2} alt="" src={image2} />
          <i className={styles.blackInear}>Apple</i>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
