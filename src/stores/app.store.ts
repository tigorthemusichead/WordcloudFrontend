import { makeAutoObservable } from "mobx";
import RootStore from "./root.store";

class AppStore {
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    rootStore: RootStore;
    language: string = "en";

    setLanguage = (language: string) => {
        this.language = language;
    }
}

export default AppStore;