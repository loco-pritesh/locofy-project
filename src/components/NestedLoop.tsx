import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./NestedLoop.module.css";

const NestedLoop: FunctionComponent = () => {
  return (
    <section className={styles.nestedLoop}>
      <div className={styles.ifStatement}>
        <img
          className={styles.elseStatementIcon}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.caseStatement}>
          <img
            className={styles.forEachLoop}
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.forEachLoop1}
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.forEachLoop2}
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.forEachLoop3}
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.forEachLoop4}>
            <img
              className={styles.whileLoopIcon}
              alt=""
              src="/while-loop@2x.png"
            />
            <img
              className={styles.breakConditionIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.variableContainerParent}>
        <div className={styles.variableContainer}>
          <div className={styles.functionContainer}>
            <div className={styles.frameParent}>
              <div className={styles.brightwoodsCabinParent}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <i className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </i>
              </div>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <i className={styles.i}>5.0</i>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              </div>
              <div className={styles.decisionMaker}>
                <i className={styles.reviews}>200 Reviews</i>
              </div>
            </div>
          </div>
          <i
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</i>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.group}>
              <i className={styles.i1}>$658</i>
              <div className={styles.nightWrapper}>
                <i className={styles.night}>/night</i>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.icontrendParent}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.frameChild} />
                  </div>
                </div>
                <div className={styles.bestTimeToBookWrapper}>
                  <i className={styles.bestTimeTo}>Best time to Book</i>
                </div>
              </div>
            </div>
          </div>
          <Button
            className={styles.searchFlightsButton}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className={styles.hostedByParent}>
          <i className={styles.hostedBy}>Hosted by:</i>
          <div className={styles.dataAggregatorParent}>
            <img
              className={styles.dataAggregatorIcon}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.logicGate}>
              <i className={styles.michelleWard}>Michelle Ward</i>
              <i className={styles.joinedInMay}>Joined in May 2021</i>
            </div>
            <button className={styles.outputSet}>
              <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
              <i className={styles.superhost}>Superhost</i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NestedLoop;
