import {makeAutoObservable, observable} from "mobx";
import RootStore from "./root.store";
import Joi from "joi";
import CONSTANTS from "../app-constants"
import axiosInstance from "../utils/axiosInstance";

class ContactStore {
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    rootStore: RootStore;

    name: string;
    email: string;
    tgUserName: string;
    message: string;
    contactMethod: string = CONSTANTS.CONTACT.TELEGRAM;

    setName = (value: string) => { this.name = value };
    setEmail = (value: string) => { this.email = value };
    setTgUserName = (value: string) => { this.tgUserName = value };
    setMessage = (value: string) => { this.message = value};
    setContactMethod = (value: string) => { this.contactMethod = value};

    error: string;
    showError: boolean = false;

    setError = (error: string) => {
        this.error = error;
        this.showError = true;
    }

    removeError = () => {
        this.error = "";
        this.showError = false;
    }

    showSuccess: boolean = false;

    setSuccess = () => {
        this.showSuccess = true;
    }

    removeSuccess = () => {
        this.showSuccess = false;
    }

    validate = () => {
        const schema: any = {
            name: Joi.string().required().min(1).max(100),
            email: Joi.string().required().email({ tlds: { allow: false } }),
            tgUserName: Joi.string().required().regex(/\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*/),
            message: Joi.optional()
        };

        if(this.contactMethod === CONSTANTS.CONTACT.TELEGRAM) {
            schema.email = Joi.optional();
        } else {
            schema.tgUserName = Joi.optional();
        }

        const { error } = Joi.object(schema).validate({
            name: this.name,
            email: this.email,
            tgUserName: this.tgUserName,
            message: this.message
        });

        if(error !== undefined) {
            try {
                this.setError(error.details[0].message);
            } catch (err) {
                this.setError("Validation error");
            }
            return error;
        }

        return null;
    }

    clearValues = () => {
        this.name = "";
        this.email = "";
        this.tgUserName = "";
        this.message = "";
        this.contactMethod = CONSTANTS.CONTACT.TELEGRAM;
    }

    sendMessage = async () => {
        const error = this.validate();
        if(error !== null) {
            return;
        }
        const axios = await axiosInstance;
        try {
            const response = await axios.post(CONSTANTS.API_ROUTES.CONTACT, {
                name: this.name,
                email: this.email,
                tgUserName: this.tgUserName,
                message: this.message,
                contactMethod: this.contactMethod
            });
            if(response.status === 200) {
                this.setSuccess();
                this.clearValues();
            } else {
                throw("");
            }
        } catch {
            this.setError("An error occurred while sending the message")
        }
    }

}

export default ContactStore;