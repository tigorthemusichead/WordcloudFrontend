import React from "react";
import styles from "./footer.module.sass"
import {Link} from "react-router-dom";
import CONSTANTS from "../../../app-constants";
import {Logo} from "../../elements/logo/logo";

export const Footer: React.FC<any> = () => {
    return(
        <footer className={styles.footer}>
            Wordcloud 2023
        </footer>
    )
}