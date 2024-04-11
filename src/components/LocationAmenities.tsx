import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import AmenitiesSection from "./AmenitiesSection";
import styles from "./LocationAmenities.module.css";

const LocationAmenities: FunctionComponent = () => {
  return (
    <div className={styles.locationAmenities}>
      <div className={styles.conditionalFlow}>
        <h3 className={styles.amenities}>Amenities</h3>
        <div className={styles.frameParent}>
          <div className={styles.amenitiessection1Parent}>
            <AmenitiesSection
              mdilake="/mdilake.svg"
              lakeside="Lakeside"
              tablertoolsKitchen2="/tablertoolskitchen2.svg"
              kitchen="Kitchen"
              materialSymbolsnestCamIqO="/materialsymbolsnestcamiqoutdooroutline.svg"
              securityCamerasOnProperty="Security cameras on property"
              ionwifi="/ionwifi.svg"
              wifi="Wifi"
            />
            <AmenitiesSection
              mdilake="/phcar.svg"
              lakeside="Free parking"
              tablertoolsKitchen2="/cilshower.svg"
              kitchen="Outdoor shower"
              materialSymbolsnestCamIqO="/materialsymbolswatervocoutlinerounded.svg"
              securityCamerasOnProperty="Hot water"
              ionwifi="/covidpersonalhygienehandliquidsoap.svg"
              wifi="Shampoo"
              propFlex="0.6025"
              propMinHeight="20px"
              propMinWidth="89px"
              propWidth="unset"
              propFlex1="unset"
              propMinWidth1="114px"
              propAlignSelf="unset"
              propMinWidth2="69px"
              propMinWidth3="70px"
            />
            <AmenitiesSection
              mdilake="/phfireextinguisher.svg"
              lakeside="Fire Extinguisher"
              tablertoolsKitchen2="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
              kitchen="Freezer"
              materialSymbolsnestCamIqO="/materialsymbolscoffeemakeroutline.svg"
              securityCamerasOnProperty="Coffee Maker"
              ionwifi="/mdistove.svg"
              wifi="Glass stove"
              propFlex="0.6276"
              propMinHeight="20px"
              propMinWidth="120px"
              propWidth="unset"
              propFlex1="unset"
              propMinWidth1="55px"
              propAlignSelf="unset"
              propMinWidth2="95px"
              propMinWidth3="84px"
            />
          </div>
          <Button
            className={styles.searchFlightsButton}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
              width: 186,
              height: 48,
            }}
          >
            Show all amenities
          </Button>
        </div>
      </div>
      <div className={styles.locationAmenitiesInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.whereYoullBeParent}>
              <h3 className={styles.whereYoullBe}>Where you’ll be</h3>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
                <i className={styles.theBridlePath}>The Bridle Path</i>
              </div>
            </div>
            <div className={styles.weatherInfoParent}>
              <div className={styles.weatherInfo}>
                <img
                  className={styles.suncloudIcon}
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className={styles.weatherInfo1}>
                  <i className={styles.temperature}>20°C</i>
                  <i className={styles.weatherDetail}>Broken clouds</i>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper}>
                    <i className={styles.c}>23°C</i>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <i className={styles.sun}>Sun</i>
                  <i className={styles.aug}>27 Aug</i>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.suncloudParent}>
                  <img
                    className={styles.suncloudIcon1}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cContainer}>
                    <i className={styles.c1}>22°C</i>
                  </div>
                </div>
                <div className={styles.monParent}>
                  <i className={styles.mon}>Mon</i>
                  <i className={styles.aug1}>28 Aug</i>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.sunContainer}>
                  <img className={styles.sunIcon1} alt="" src="/sun.svg" />
                  <div className={styles.cFrame}>
                    <i className={styles.c2}>23°C</i>
                  </div>
                </div>
                <div className={styles.tueParent}>
                  <i className={styles.tue}>Tue</i>
                  <i className={styles.aug2}>29 Aug</i>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.suncloudGroup}>
                  <img
                    className={styles.suncloudIcon2}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper1}>
                    <i className={styles.c3}>20°C</i>
                  </div>
                </div>
                <div className={styles.wedParent}>
                  <i className={styles.wed}>Wed</i>
                  <i className={styles.aug3}>30 Aug</i>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.suncloudContainer}>
                  <img
                    className={styles.suncloudIcon3}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper2}>
                    <i className={styles.c4}>19°C</i>
                  </div>
                </div>
                <div className={styles.thuParent}>
                  <i className={styles.thu}>Thu</i>
                  <i className={styles.aug4}>31 Aug</i>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.sunParent1}>
                  <img className={styles.sunIcon2} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper3}>
                    <i className={styles.c5}>24°C</i>
                  </div>
                </div>
                <div className={styles.friParent}>
                  <i className={styles.fri}>Fri</i>
                  <i className={styles.sep}>1 Sep</i>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.frameChild} alt="" src="/rectangle-1@2x.png" />
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationAmenities;
