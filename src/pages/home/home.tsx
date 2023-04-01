import React from "react";
import styles from "../page.module.sass"
import {InfoCard} from "../../components/elements/infoCard/infoCard";
import {Upload} from "../upload/upload";
import {Contact} from "../contact/contact";
import {useTranslation} from "react-i18next";
export const Home: React.FC<any> = () => {
    const { t } = useTranslation();
    return(
        <>
            <article className={styles.page}>
                <h2 className={styles.page__title}
                    id={"home"}
                >
                    {t("home-page-title")}
                </h2>
                <section className={styles.page__text}>
                    <p className={styles.page__paragraph}>
                        {t("home-page-p1")}
                    </p>
                    <p className={styles.page__paragraph}>
                        {t("home-page-p2")}
                    </p>
                    <p className={styles.page__paragraph}>
                        {t("home-page-p3")}
                    </p>
                    <p className={styles.page__paragraph}>
                        {t("home-page-p4")}
                    </p>
                </section>
            </article>
            <div className={styles.page__gap} id={"upload"}/>
            <Upload/>
            <div className={styles.page__gap} id={"contact"}/>
            <Contact/>
        </>
    )
}