import AppStore from "./app.store";
import React from "react";
import ContactStore from "./contact.store";
import UploadStore from "./upload.store";

class RootStore {
    constructor() {
        this.appStore = new AppStore(this);
        this.contactStore = new ContactStore(this);
        this.uploadStore = new UploadStore(this);
    }
    appStore: AppStore;
    contactStore: ContactStore;
    uploadStore: UploadStore;
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);

export default RootStore;