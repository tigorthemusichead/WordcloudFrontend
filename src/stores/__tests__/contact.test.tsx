import React from 'react';
import ContactStore from "../contact.store";
import RootStore from "../root.store";
import CONSTANTS from "../../app-constants";

describe("TodoStore", () => {
    const rootStore = new RootStore()
    const store = rootStore.contactStore;
    it("test validation", () => {
        store.setContactMethod(CONSTANTS.CONTACT.TELEGRAM);
        store.setName("Name")
        store.setEmail("");
        store.setTgUserName("@tiigor");
        store.setMessage("");

        expect(store.validate()).toBe(null);

        store.setContactMethod(CONSTANTS.CONTACT.TELEGRAM);
        store.setName("")
        store.setEmail("a@gamil.com");
        store.setTgUserName("@tiigor");
        store.setMessage("message");


        expect(store.validate()).not.toBe(null);

        store.setContactMethod(CONSTANTS.CONTACT.TELEGRAM);
        store.setName("Name")
        store.setEmail("");
        store.setTgUserName("");
        store.setMessage("message");

        expect(store.validate()).not.toBe(null);


        store.setContactMethod(CONSTANTS.CONTACT.EMAIL);
        store.setName("Name")
        store.setEmail("email@gmail.com");
        store.setTgUserName("");
        store.setMessage("message");


        expect(store.validate()).toBe(null);

        store.setContactMethod(CONSTANTS.CONTACT.TELEGRAM);
        store.setName("Name")
        store.setEmail("");
        store.setTgUserName("@tiigor");
        store.setMessage("message");

        expect(store.validate()).toBe(null);
    })

    it("test clear values", () => {
        store.clearValues();
        expect(store.contactMethod).toBe(CONSTANTS.CONTACT.TELEGRAM);
        expect(store.name).toBe("");
        expect(store.email).toBe("");
        expect(store.tgUserName).toBe("");
        expect(store.message).toBe("");
    })
})