import React, {useEffect} from "react";
import styles from "./contactForm.module.sass"
import {useStores} from "../../../stores/root.store";
import {
    Alert,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Snackbar,
    TextField
} from "@mui/material";
import {observer} from "mobx-react-lite";
import CONSTANTS from "../../../app-constants";
import {useTranslation} from "react-i18next";

export const ContactForm: React.FC<any> = observer(() => {
    const { contactStore } = useStores();
    const { t } = useTranslation();
    return(
        <div className={styles.contactForm}>
            <div className={styles.contactForm__item}>
                <TextField
                    label={t("Name")}
                    fullWidth
                    required
                    value={contactStore.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        contactStore.setName(event.target.value);
                    }}
                />
            </div>
            <div className={styles.contactForm__item}>
                <FormControl>
                    <FormLabel id="label-for-contact-radio-buttons-group">{t("Contact method")}</FormLabel>
                    <RadioGroup
                        aria-labelledby="label-for-contact-radio-buttons-group"
                        value={contactStore.contactMethod}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            contactStore.setEmail("");
                            contactStore.setTgUserName("");
                            contactStore.setContactMethod(event.target.value)
                        }}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value={CONSTANTS.CONTACT.TELEGRAM} control={<Radio />} label={t("Telegram")} />
                        <FormControlLabel value={CONSTANTS.CONTACT.EMAIL} control={<Radio />} label={t("Email")} />
                    </RadioGroup>
                </FormControl>
            </div>

            { contactStore.contactMethod === CONSTANTS.CONTACT.TELEGRAM ?
                <div className={styles.contactForm__item}>
                    <TextField
                        label={t("Telegram username")}
                        id={"tg-username"}
                        key={"tg-username"}
                        required
                        fullWidth
                        value={contactStore.tgUserName}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            contactStore.setTgUserName(event.target.value);
                        }}
                    />
                </div>
                :
                <div className={styles.contactForm__item}>
                    <TextField
                        label={t("Email-address")}
                        id={"email"}
                        key={"email"}
                        required
                        fullWidth
                        value={contactStore.email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            contactStore.setEmail(event.target.value);
                        }}
                    />
                </div>
            }
            <div className={styles.contactForm__item}>
                <TextField
                    label={t("Message")}
                    multiline
                    fullWidth
                    rows={7}
                    value={contactStore.message}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        contactStore.setMessage(event.target.value);
                    }}
                />
            </div>
            <div className={styles.contactForm__item}>
                <Button
                    variant="outlined"
                    onClick={contactStore.sendMessage}
                >
                    {t("Submit")}
                </Button>
            </div>
            <Snackbar
                open={contactStore.showError}
                autoHideDuration={6000}
                onClose={contactStore.removeError}
            >
                <Alert severity="error" onClose={contactStore.removeError} sx={{ width: '100%' }}>{contactStore.error}</Alert>
            </Snackbar>
            <Snackbar
                open={contactStore.showSuccess}
                autoHideDuration={6000}
                onClose={contactStore.removeSuccess}
            >
                <Alert severity="success" onClose={contactStore.removeSuccess} sx={{ width: '100%' }}>{t("The message was send successfully")}</Alert>
            </Snackbar>
        </div>
    )
})