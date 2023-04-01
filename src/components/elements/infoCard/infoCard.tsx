import React from "react";
import styles from "./infoCard.module.sass"
export const InfoCard: React.FC<any> = ({children}) => {
    return(
        <div className={styles.info__wrapper}>
            <div className={styles.info}>
                { children }
            </div>
        </div>
    )
}