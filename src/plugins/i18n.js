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
        collapseSidebar: "Collapse Sidebar",
        welcomeBack: "Welcome back",
        actionField:"Action",
        companyCode:"Company Code",
        companyName:"Company Name",
        fulfillmentCode:"Fulfillment Code",
        fulfillmentName:"Fulfillment Name",
        fulfillmentAddress:"Fulfillment Address",
        fulfillmentAddress2:"Fulfillment Address 2",
        fulfillmentCreate:"Create New Fulfillment",
        location:"Location",
        country:"Country",
        province:"Province",
        city:"City",
        village:"Village",
        postalCode:"Postal Code",
        remarks:"Remarks",
        name:"Name",
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
        collapseSidebar: "Ciutkan  Sidebar",
        welcomeBack: "Selamat Datang Kembali",
        actionField:"Aksi",
        companyCode:"Kode Perusahaan",
        companyName:"Nama Perusahaan",
        fulfillmentCode:"Kode Fulfillment",
        fulfillmentName:"Nama Fulfillment",
        fulfillmentAddress:"Alamat Fulfillment",
        fulfillmentAddress2:"Alamat Fulfillment 2",
        fulfillmentCreate:"Buat Baru Fulfillment",
        location:"Lokasi",
        country:"Negara",
        province:"Provinsi",
        city:"Kota",
        village:"Desa",
        postalCode:"Kode Pos",
        remarks:"Catatan",
        name:"Nama",
    }
};

const i18n = new VueI18n({
    locale: "id",
    fallbackLocale: 'en',
    localeDir: 'locales',
    enableInSFC: true,
    messages,
});

export default i18n;