import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
    "en": {
        loginMsg: "Welcome back, login to continue",
        loginBtn: "Login Now",
        loginPassword: "Password",
        page404: "Page not found",
        page500: "Internal Server Error",
        oops404: "Oops! The page you are looking for does not exist. It might have been moved or deleted.",
        oops500: "We'll be back soon..",
        backMsg: "Back",
        areYouSure: "Are you sure ?",
        yourData: "Submit data.",
        companyId: "Company Code",
    },
    "id": {
        loginMsg: "Selamat datang kembali, silahkan login terlebih dahulu",
        loginBtn: "Masuk",
        loginPassword: "Kata Sandi",
        page404: "Halaman Tidak Ditemukan",
        page500: "Masalah Pada Server Kami",
        oops404: "Halaman yang Anda cari tidak ada. Mungkin telah dipindahkan atau dihapus.",
        oops500: "Kami akan kembali segera.",
        backMsg: "Kembali",
        areYouSure: "Apakah Anda Sudah Yakin ?",
        yourData: "Data yang dikirim.",
        companyId: "Kode Perusahaan",
    }
};

const i18n = new VueI18n({
    locale: "id",
    fallbackLocale: 'en',
    messages,
});

export default i18n;