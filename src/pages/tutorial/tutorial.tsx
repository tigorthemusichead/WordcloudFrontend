import React from "react";
import styles from "../page.module.sass"
import {InfoCard} from "../../components/elements/infoCard/infoCard";
import {Link} from "react-router-dom";
import CONSTANTS from "../../app-constants";
export const Tutorial: React.FC<any> = () => {
    return(
        <article className={styles.page}>
            <h2 className={styles.page__title}>
                Welcome to our tutorial page!
            </h2>

            <section className={styles.page__text}>
                <InfoCard>
                    <p className={styles.page__paragraph}>
                        We understand that exporting your Telegram chat history and uploading it to our service might be a bit intimidating, so we've put together this step-by-step tutorial to guide you through the process.
                    </p>
                </InfoCard>
                <p className={styles.page__paragraph}>
                    <h3><span className={styles.page__step}>Step 1:</span> Export your Telegram chat history</h3>
                    <div className={styles.page__imageSection}>
                        <img src={CONSTANTS.ICONS.TUTORIAL_EXPORT} alt="" className={styles.page__imageSection__image}/>
                        <img src={CONSTANTS.ICONS.TUTORIAL_EXPORT_SETTINGS} alt="" className={styles.page__imageSection__image}/>
                        <img src={CONSTANTS.ICONS.TUTORIAL_EXPORT_FORMAT} alt="" className={styles.page__imageSection__image}/>
                    </div>
                    To export your chat history, go to the chat you want to export and click the three-dot icon in the top right corner. Select <strong>"Export chat history"</strong> and choose the format as <strong>JSON</strong>. This will create a <strong>.json</strong> file with your chat history.
                </p>
                <p className={styles.page__paragraph}>
                    <h3>Step 2: Upload your chat history to our service</h3>
                    Navigate to the <Link to={CONSTANTS.ROUTES.UPLOAD}><strong>Upload and Customize</strong></Link> page
                    of our service and click the <strong>"Choose file"</strong> button. Select the <strong>.json</strong> file you just exported and click <strong>"Upload"</strong>. Our tool will automatically process your chat history and create a preview of your word cloud.
                </p>
                <p className={styles.page__paragraph}>
                    <h3>Step 3: Customize your word cloud</h3>
                    Customize the appearance of your word cloud. Select your colors, fonts, and layout options to create a unique look that's all your own.
                </p>
            </section>
        </article>
    )
}