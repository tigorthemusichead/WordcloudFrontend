import React from "react";
import styles from "../page.module.sass"
import {InfoCard} from "../../components/elements/infoCard/infoCard";
export const About: React.FC<any> = () => {
    return (
        <article className={styles.page}>
            <h2 className={styles.page__title}>
                Welcome to our About page!
            </h2>
            <section className={styles.page__text}>
                    <p className={styles.page__paragraph}>
                        Our Telegram Chat Word Cloud Generator is an open-source project created with the goal of providing users with an easy and fun way to analyze their Telegram chat histories. We believe that data privacy is essential, and that's why our service is free to use and respects your privacy. We don't store any of your data on our servers, and all processing is done securely on your device.
                    </p>
                    <p className={styles.page__paragraph}>
                        Our project is available on GitHub. We welcome contributions and feedback from the community, and we're always looking for ways to improve our service.
                        If you're interested in contributing to our project, or if you have any questions or feedback, please visit our GitHub repository at <a href="#">#</a>. We appreciate your support and look forward to hearing from you.
                    </p>
                    <p className={styles.page__paragraph}>
                        Thank you for choosing our Telegram Chat Word Cloud Generator, and we hope you enjoy using our service!
                    </p>
            </section>
        </article>
    )
}