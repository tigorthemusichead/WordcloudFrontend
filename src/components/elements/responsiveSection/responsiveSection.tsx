import React from "react";
import styles from "./responsiveSection.module.sass"

export const ResponsiveSection: React.FC<any> = ({children}) => {
    return(
        <div className={styles.responsiveSection}>
            {children}
        </div>
    )
}