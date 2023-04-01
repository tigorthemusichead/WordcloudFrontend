import React from "react";
import styles from "../page.module.sass"
import {InfoCard} from "../../components/elements/infoCard/infoCard";
import {UploadForm} from "../../components/chunks/uploadForm/uploadForm";
import {useTranslation} from "react-i18next";
export const Upload: React.FC<any> = () => {
    const { t } = useTranslation();
    return(
        <article className={styles.page}>
            <h2 className={styles.page__title}>
                {t("upload-page-title")}
            </h2>
            <section className={styles.page__text}>
                <InfoCard>
                    <p className={styles.page__paragraph}
                        dangerouslySetInnerHTML={{
                            __html: t("upload-page-p1", { 'interpolation': {'escapeValue': false} })
                    }}
                    />
                    <p className={styles.page__paragraph}
                       dangerouslySetInnerHTML={{
                           __html: t("upload-page-p2", { 'interpolation': {'escapeValue': false} })
                       }}
                    />
                    <p className={styles.page__paragraph}
                       dangerouslySetInnerHTML={{
                           __html: t("upload-page-p3", { 'interpolation': {'escapeValue': false} })
                    }}
                    />
                </InfoCard>
            </section>
            <UploadForm/>
        </article>
    )
}