import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
    "en": {
        loginMsg: "Welcome back, login to continue",
        loginBtn: "Login Now",
        loginPassword: "Password"
    },
    "id": {
        loginMsg: "Selamat datang kembali, silahkan login terlebih dahulu",
        loginBtn: "Masuk",
        loginPassword: "Kata Sandi"
    }
};

const i18n = new VueI18n({
    locale: "id",
    fallbackLocale: 'en',
    messages,
});

export default i18n;