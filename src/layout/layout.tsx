import React from "react";
import styles from "./layout.module.sass"
import {Header} from "../components/chunks/header/header";
import {Footer} from "../components/chunks/footer/footer";

export const Layout: React.FC<any> = ({children}) => {
    return(
        <div className={styles.layout}>
            <div className={styles.layout__top}>
                <Header/>
                <div className={styles.layout__content}>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}