import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <HeroContainer />
      <main className={styles.staysSection}>
        <SearchSectionHeader />
        <section className={styles.homes}>
          <ListingItem
            listingImage="/listing-image@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Cabin"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            price="$658"
            trendIcon="/trend-icon@2x.png"
            showBestTime
            onListingItemContainerClick={onListingItemContainerClick}
          />
          <ListingItem
            listingImage="/image@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            price="$410"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
            propMinWidth="81px"
            propMinWidth1="unset"
            propPadding="var(--padding-5xs-5) 0px"
            propFlex="1"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-1@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            price="$325"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
            propMinWidth="unset"
            propMinWidth1="unset"
            propPadding="var(--padding-5xs-5) 0px"
            propFlex="1"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-2@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            price="$485"
            trendIcon="/trend-icon@2x.png"
            showBestTime
            propMinWidth="129px"
            propMinWidth1="unset"
            propPadding="var(--padding-8xs) 0px"
            propFlex="unset"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-3@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            price="$502"
            trendIcon="/trend-icon@2x.png"
            showBestTime
            propMinWidth="unset"
            propMinWidth1="unset"
            propPadding="var(--padding-8xs) 0px"
            propFlex="unset"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-4@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            price="$655"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
            propMinWidth="120px"
            propMinWidth1="unset"
            propPadding="var(--padding-5xs-5) 0px"
            propFlex="1"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-5@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            price="$320"
            trendIcon="/trend-icon@2x.png"
            showBestTime
            propMinWidth="103px"
            propMinWidth1="unset"
            propPadding="var(--padding-8xs) 0px"
            propFlex="unset"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-6@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            price="$350"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
            propMinWidth="113px"
            propMinWidth1="unset"
            propPadding="var(--padding-5xs-5) 0px"
            propFlex="1"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-7@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            price="$395"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
            propMinWidth="unset"
            propMinWidth1="unset"
            propPadding="var(--padding-5xs-5) 0px"
            propFlex="1"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-8@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime
            propMinWidth="unset"
            propMinWidth1="unset"
            propPadding="var(--padding-8xs) 0px"
            propFlex="unset"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-9@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime
            propMinWidth="80px"
            propMinWidth1="unset"
            propPadding="var(--padding-8xs) 0px"
            propFlex="unset"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-10@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
            propMinWidth="unset"
            propMinWidth1="unset"
            propPadding="var(--padding-5xs-5) 0px"
            propFlex="1"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-11@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
            propMinWidth="123px"
            propMinWidth1="unset"
            propPadding="var(--padding-5xs-5) 0px"
            propFlex="1"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-12@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime
            propMinWidth="unset"
            propMinWidth1="unset"
            propPadding="var(--padding-8xs) 0px"
            propFlex="unset"
            propMinWidth2="70px"
          />
          <ListingItem
            listingImage="/image-13@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
            propMinWidth="unset"
            propMinWidth1="127px"
            propPadding="var(--padding-5xs-5) 0px"
            propFlex="1"
            propMinWidth2="unset"
          />
          <ListingItem
            listingImage="/image-14@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
            propMinWidth="unset"
            propMinWidth1="127px"
            propPadding="var(--padding-5xs-5) 0px"
            propFlex="1"
            propMinWidth2="unset"
          />
        </section>
        <Button
          className={styles.showMoreButton}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00c29f",
            fontSize: "16",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#00c29f" },
            width: 147,
            height: 48,
          }}
        >
          Show more
        </Button>
      </main>
      <Footer />
      <div className={styles.band}>
        <div className={styles.graphNetwork}>
          <div className={styles.networkHub}>
            <i className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </i>
            <div className={styles.networkLink}>
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

export default Homepage;
