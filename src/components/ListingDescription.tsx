import { FunctionComponent } from "react";
import DetailsCard from "./DetailsCard";
import styles from "./ListingDescription.module.css";

const ListingDescription: FunctionComponent = () => {
  return (
    <div className={styles.listingDescription}>
      <h3 className={styles.aboutThisHome}>About this home</h3>
      <div className={styles.frameParent}>
        <div className={styles.welcomeToBrightwoodsCabinParent}>
          <div className={styles.welcomeToBrightwoodsContainer}>
            <p className={styles.welcomeToBrightwoodsCabin}>
              <i>
                Welcome to Brightwoods Cabin, your idyllic retreat nestled in
                the heart of Bridlepath, Ontario! Our cozy cabin, surrounded by
                the tranquility of nature's embrace, is designed to provide the
                ultimate relaxing getaway.
              </i>
            </p>
            <p className={styles.livingSpaceThisCharmingCa}>
              <i className={styles.livingSpace}>{`Living Space: `}</i>
              <i>
                This charming cabin boasts a spacious living area adorned with
                rustic decor and modern amenities. Enjoy the warmth of the
                wood-burning fireplace, relax on the plush sofas, and make
                yourself at home with our entertainment center featuring a
                flat-screen TV, WiFi, and more.
              </i>
            </p>
            <p className={styles.bedroomsWith3BeautifullyA}>
              <i className={styles.bedrooms}>Bedrooms:</i>
              <i>
                {" "}
                With 3 beautifully appointed bedrooms, our cabin comfortably
                accommodates up to [number of guests]. Each room is furnished
                with luxurious bedding and unique woodland-inspired touches to
                ensure a restful slumber.
              </i>
            </p>
            <p className={styles.kitchenDiningOurFullyEq}>
              <i className={styles.kitchenDining}>{`Kitchen & Dining:`}</i>
              <i>
                {" "}
                Our fully-equipped kitchen offers everything you need to prepare
                delicious home-cooked meals. The open dining area provides a
                welcoming space to enjoy meals with friends and family.
              </i>
            </p>
            <p className={styles.bathrooms2ModernBathrooms}>
              <i className={styles.bathrooms}>Bathrooms:</i>
              <i>
                {" "}
                2 modern bathrooms stocked with fresh towels, toiletries, and
                all essential amenities add to your convenience.
              </i>
            </p>
            <p className={styles.outdoorSpaceStepOutsideTo}>
              <i className={styles.outdoorSpace}>Outdoor Space:</i>
              <i>
                {" "}
                Step outside to a serene outdoor setting. Whether it's a morning
                coffee on the porch, a BBQ in the yard, or a soothing evening by
                the fire pit, the beauty of Bridlepath is at your doorstep.
              </i>
            </p>
            <p className={styles.locationLocatedJustMinutes}>
              <i className={styles.location}>Location:</i>
              <i>
                {" "}
                Located just minutes from [local attractions, trails, dining,
                shopping], our cabin offers the perfect base to explore the best
                of the region or simply unwind in seclusion.
              </i>
            </p>
            <p className={styles.hostedWithLoveWeTakePrid}>
              <i className={styles.hostedWithLove}>Hosted with Love:</i>
              <i>
                {" "}
                We take pride in hosting our guests and are committed to making
                your stay unforgettable. We're just a call or message away
                should you need anything during your stay.
              </i>
            </p>
            <p className={styles.comeBeOurGuestAtCabinN}>
              <i>
                Come, be our guest at [Cabin Name], and experience a piece of
                woodland serenity right here in Bridlepath, Ontario. Book now
                and make yourself at home!
              </i>
            </p>
          </div>
          <i className={styles.button}>Show more</i>
        </div>
        <div className={styles.detailscardParent}>
          <DetailsCard
            frame65="/frame-65.svg"
            dedicatedWorkspace="Dedicated workspace"
            aPrivateRoomEquippedWithW="A private room equipped with WiFi"
          />
          <DetailsCard
            frame65="/frame-65-1.svg"
            dedicatedWorkspace="Self check-in"
            aPrivateRoomEquippedWithW="Check in with just your phone"
            propMinWidth="111px"
            propLineHeight="unset"
            propMinWidth1="unset"
          />
          <DetailsCard
            frame65="/frame-65-2.svg"
            dedicatedWorkspace="Free cancellation"
            aPrivateRoomEquippedWithW="Cancel anytime"
            propMinWidth="unset"
            propLineHeight="17.5px"
            propMinWidth1="116px"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingDescription;
