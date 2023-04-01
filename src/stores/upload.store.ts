import { makeAutoObservable } from "mobx";
import RootStore from "./root.store";
import axiosInstance from "../utils/axiosInstance";
import CONSTANTS from "../app-constants";

class UploadStore {
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    rootStore: RootStore;

    previewHref: string;
    previewReady: boolean = false;
    loading: boolean = false;

    file: File;
    wordCount: number = 100;
    height: number = 1000;
    width: number = 1000;
    background: string = '#FFFFFF';

    setLoading = (state: boolean) => {this.loading = state};

    setFile = (file: File) => {this.file = file};

    setWordCount = (wordCount: number) => { this.wordCount = wordCount };

    setWidth = (width: number) => { this.width = width };

    setHeight = (height: number) => { this.height = height };

    setBackground = (background: string) => { this.background = background};

    setPreview = (previewHref: string) => {
        this.previewHref = previewHref;
        this.previewReady = true;
    }

    removePreview = (saveFile: boolean = false) => {
        this.previewHref = "";
        this.previewReady = false;
        if(!saveFile) {
            this.file = new File([], "");
        }
    }

    generatePreview = async () => {
        const axios = await axiosInstance;
        this.setLoading(true);
        this.removePreview(true);
        try {
            const formData = new FormData();
            formData.append("file", this.file);
            formData.append("word_count", `${this.wordCount}`);
            formData.append("width", `${this.width}`);
            formData.append("height", `${this.height}`);
            formData.append("background", `${this.background}`);
            const response = await axios.post(CONSTANTS.API_ROUTES.UPLOAD, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if(response.status === 200) {
                const baseURL = process.env.REACT_APP_BASE_URL;
                this.setPreview(`${baseURL}${response.data.filePath}`);
            } else {
                throw("");
            }
        } catch (err) {
            console.warn(err)
        }
        this.setLoading(false);
    }

}

export default UploadStore;