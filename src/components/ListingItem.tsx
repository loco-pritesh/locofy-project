import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListingItem.module.css";

export type ListingItemType = {
  listingImage?: string;
  heartIcon?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
  trendIcon?: string;
  showBestTime?: boolean;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propMinWidth2?: CSSProperties["minWidth"];

  /** Action props */
  onListingItemContainerClick?: () => void;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  listingImage,
  heartIcon,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  trendIcon,
  showBestTime,
  propMinWidth,
  propMinWidth1,
  propPadding,
  propFlex,
  propMinWidth2,
  onListingItemContainerClick,
}) => {
  const listingTitleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const listingSubtitleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const bottomContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const pricePerNightStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const priceChartStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={styles.listingItem} onClick={onListingItemContainerClick}>
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
          alt=""
          src="/superhost-icon.svg"
        />
        <i className={styles.superhost}>Superhost</i>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src={heartIcon}
        />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <i className={styles.listingTitle} style={listingTitleStyle}>
              {listingTitle}
            </i>
            <i className={styles.listingSubtitle} style={listingSubtitleStyle}>
              {listingSubtitle}
            </i>
          </div>
          <div className={styles.ratingCont}>
            <i className={styles.rating}>{rating}</i>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.bottomContainer} style={bottomContainerStyle}>
          <div className={styles.pricePerNight} style={pricePerNightStyle}>
            <i className={styles.price}>{price}</i>
            <i className={styles.night}>/night</i>
          </div>
          {showBestTime && (
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                loading="lazy"
                alt=""
                src={trendIcon}
              />
              <i className={styles.priceChart} style={priceChartStyle}>
                Price chart
              </i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
