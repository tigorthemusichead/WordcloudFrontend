import React from "react";
import styles from "../page.module.sass"
import {InfoCard} from "../../components/elements/infoCard/infoCard";
import {ContactForm} from "../../components/chunks/contactForm/contactForm";
import {observer} from "mobx-react-lite";
import {ResponsiveSection} from "../../components/elements/responsiveSection/responsiveSection";
import {useTranslation} from "react-i18next";

export const Contact: React.FC<any> = () => {
    const { t } = useTranslation()
    return (
        <article className={styles.page}>
            <h2 className={styles.page__title}>
                {t("contact-page-title")}
            </h2>
            <ResponsiveSection>
                <InfoCard>
                    <section className={styles.page__text}>
                        <p className={styles.page__paragraph}
                            dangerouslySetInnerHTML={{
                                __html: t("contact-page-p1")
                            }}
                        />

                        <p className={styles.page__paragraph}
                           dangerouslySetInnerHTML={{
                               __html: t("contact-page-p2")
                           }}
                        />
                    </section>
                </InfoCard>
                <ContactForm/>
            </ResponsiveSection>
        </article>
    )
}