import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DetailsCard.module.css";

export type DetailsCardType = {
  frame65?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propLineHeight?: CSSProperties["lineHeight"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  frame65,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propMinWidth,
  propLineHeight,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const aPrivateRoomStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      minWidth: propMinWidth1,
    };
  }, [propLineHeight, propMinWidth1]);

  return (
    <div className={styles.detailscard}>
      <img
        className={styles.detailscardChild}
        loading="lazy"
        alt=""
        src={frame65}
      />
      <div className={styles.nestedSet}>
        <i
          className={styles.dedicatedWorkspace}
          style={dedicatedWorkspaceStyle}
        >
          {dedicatedWorkspace}
        </i>
        <i className={styles.aPrivateRoom} style={aPrivateRoomStyle}>
          {aPrivateRoomEquippedWithW}
        </i>
      </div>
    </div>
  );
};

export default DetailsCard;
