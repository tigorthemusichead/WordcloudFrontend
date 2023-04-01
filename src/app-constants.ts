class _CONSTANTS {

    DEVELOP_BASE_URL = "http://localhost:8000"

    ROUTES = {
        HOME: "/",
        ABOUT: "/about",
        TUTORIAL: "/tutorial",
        UPLOAD: "/#upload",
        CONTACT: "/#contact",
        //COMMUNITY: "/community"
    }

    API_ROUTES = {
        CONTACT: "/contact/",
        UPLOAD: "/uploadFile/"
    }

    LINKS = {
        TG_CHANNEL: "https://t.me/tghireus"
    }

    LANGUAGES = [
        {
          short: "en",
          label: "🇬🇧 English"
        },
        {
            short: "ru",
            label: "🇷🇺 Русский"
        }
    ]

    CONTACT = {
        TELEGRAM: "TELEGRAM",
        EMAIL: "EMAIL"
    }

    NAVIGATION =  [
        {
            label: "Upload",
            to: this.ROUTES.UPLOAD
        },
        {
            label: "Tutorial",
            to: this.ROUTES.TUTORIAL
        },
        {
            label: "About",
            to: this.ROUTES.ABOUT
        },
        {
            label: "Contact",
            to: this.ROUTES.CONTACT
        },
        {
            label: "Community",
            to: this.LINKS.TG_CHANNEL,
            target: "_blank"
        }
    ]

    ICONS = {
        LOGO_MIN: "/images/logo/wc-logo.svg",
        TUTORIAL_EXPORT: "/images/tutorial/export.png",
        TUTORIAL_EXPORT_SETTINGS: "/images/tutorial/export-settings.png",
        TUTORIAL_EXPORT_FORMAT: "/images/tutorial/export-format.png",
        CLOSE_ICON: "/images/icons/close.svg"
    }
}

export default new _CONSTANTS();