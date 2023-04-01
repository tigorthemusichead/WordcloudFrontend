import React from "react";
import styles from "./logo.module.sass"
import CONSTANTS from "../../../app-constants";
export const Logo: React.FC<any> = () => {
    return(
        <div className={styles.logo}>
            <img src={CONSTANTS.ICONS.LOGO_MIN} className={styles.logo__icon} alt=""/>
            <h1 className={styles.logo__label}>Wordcloud</h1>
        </div>
    )
}