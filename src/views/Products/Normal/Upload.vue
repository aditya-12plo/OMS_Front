<template>
  <div>
    <section>
      <menu-component classMenu="Products"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-barcode"></i> {{$t('uploadProducts')}}</h3>
        </div>

<form @submit.prevent="submitData" method="POST">

        <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">Form</h3>

                        <div class="form-group col-md-12">
                            <label for="companyName" class="input__label">{{$t('companyName')}}</label>
                            <v-select :options="options" label="name" placeholder="Choose a Company" v-model="forms.company" @search="searchCompany" :reduce="company => `${company.company_id}`" autocomplete>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.company"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>
                            
                            <div v-if="errors.company">
                                <div class="invalid-feedback" v-for="error in errors.company" :key="error">{{error}}</div>
                            </div>
                        </div>
                    
                        <div class="form-group col-md-12">
                            <label for="file" class="input__label">File (max. 2 MB)</label>
                            <input type="file" ref="file" @change="uploadFile" class="form-control input-style" required="">
                        
                            <div v-if="errors.files">
                                <div class="invalid-feedback" v-for="error in errors.files" :key="error">{{error}}</div>
                            </div>
                        </div>


                        <div class="col-lg-12">
                            <h3 class="block__title mb-lg-4">Result</h3>
                                <div class="form-group col-md-12" v-if="errors.message">
                                    <pre><div class="invalid-feedback">{{JSON.stringify(errors.message, null, '\t')}}</div></pre>
                                </div>
                                <div class="form-group col-md-12" v-if="datasSuccess.datas">
                                    <pre><div class="invalid-feedback" style="color:green;">{{JSON.stringify(datasSuccess.datas, null, '\t')}}</div></pre>
                                </div>
                        </div>
                        

                </div>
                <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">{{$t('downloadTemplateNormalProducts')}}</h3>

                        <div class="form-group col-md-12">
                            <label for="xlsx" class="input__label"><button type="button" @click="downloadTemplate('xlsx')" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">XLSX</button></label>
                            <label for="csv" class="input__label"><button type="button" @click="downloadTemplate('csv')" class="btn btn-success btn-style mt-4">CSV</button></label>
                            
                        </div>
                    <h3 class="block__title mb-lg-4">{{$t('uom')}}</h3>
                        <div class="form-group col-md-12">
                            <ol>
                            <ol>
                                <li v-for="(uom,index) in optionsUom" :key="index">{{uom.uom_code}} ({{uom.uom_description}})</li>
                            </ol>
                            </ol>
                        </div>
                    <h3 class="block__title mb-lg-4">{{$t('time_to_live')}}</h3>
                        <div class="form-group col-md-12">
                            <ol>
                                <li>0 is false</li>
                                <li>1 is true</li>
                            </ol>
                        </div>

                </div>
                

                <button type="button" @click="backLink()" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">{{$t('backMsg')}}</button>
                
                <button type="submit" class="btn btn-warning btn-style mt-4">Submit</button>

                </div>
            </div>
            </div>

</form>

          
          
          
          
           

            </div>
 
        </div>
        <!-- main content end-->


    </section>


  </div>
</template>
<script>
import vSelect from 'vue-select'
import menuComponent from '@/views/Menu/Index'
import 'vue-select/dist/vue-select.css'

export default {
    name: 'ProductsNormalUpload',
    props: {},
    components: {
        'menu-component':menuComponent,
        'v-select':vSelect,
    },
    data () {
        return {
            file:'',
            maxToasts: 100,
            isLoading: false,  
            position: 'up right',
            closeBtn: true,  
            errors: [],
            datasSuccess: [],
            forms: {company:'', files: '' },
            options: [],
            optionsUom: [],
            money: {
                decimal: ',',
                thousands: '.',
                prefix: '',
                suffix: '',
                precision: 2,
                masked: false
            }
        }
    },
    watch: { 

    },
    methods: {
        uploadFile(event) {
            let files = event.target.files || event.dataTransfer.files;
            if (files.length) this.forms.files = files[0]; 
        },

        downloadTemplate(type){
            this.loading();
            const baseURI  =  this.$settings.endPoint+"/products/normal/template/"+type;

            this.$http({
                url: baseURI,
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                this.errors     = [];
                var filename    = '';
                var type        = response.headers["content-type"];
                if(type === "application/vnd.ms-excel"){
                    filename    = "normal_products_template.xlsx";
                }else{
                    filename    = "normal_products_template.csv";
                }

                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', filename);
                document.body.appendChild(fileLink);
                fileLink.click();
            }).catch(error => {
                if (error.response) {
                    if(error.response.status === 422) {
                        this.errors =  {"message": ["File Not Found"]};
                        this.error("File Not Found");
                    }else if (error.response.status === 500) {
                        this.$router.push('/server-error');
                    }else{
                        this.$router.push('/page-not-found');
                    }
                }
            });
        },

        submitData() {
            this.$swal({
                title: this.$t('areYouSure'),
                text: this.$t('yourData'),
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then((result) => {
                if (result.value) {
                
                    this.fade(true);

                    let formData = new FormData();
                    formData.append("files", this.forms.files);
                    formData.append("company", this.forms.company);

                        
                    const baseURI  =  this.$settings.endPoint+"/products/normal/upload";
                        
                    this.$http.post(baseURI,formData)
                        .then((response) => {
                            this.fade(false);
                            if(response.data.status === 200) {
                                 this.errors        = []; 
                                this.datasSuccess   = response.data.datas;
                                this.success(response.data.datas.message);
                                this.forms.company  = '';
                                this.forms.files    = '';
                                this.$refs.file.value   = '';
                                this.file           = '';

                            }else{
                                this.errors = response.data.errors;
                                this.resultError(response.data.errors.message);
                            }
                    }).catch(error => {
                        this.fade(false);
                        if (error.response) {
                            if(error.response.status === 422) {
                                this.errors = error.response.data.errors;
                                this.resultError(error.response.data.errors.message);
                            }else if (error.response.status === 500) {
                                this.$router.push('/server-error');
                            }else{
                                this.$router.push('/page-not-found');
                            }
                        }
                     });
                }
            })
        },

        isNumberPrice: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode !== 46)) {
                evt.preventDefault();
            } else {
                return true;
            }
        },

        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
        
        removeSpecial(e) {
            if (/^\W$/.test(e.key)) {
                e.preventDefault();
            }
        },
        
        getCompany(){
            const baseURI  =  this.$settings.endPoint+"/company/index";
            return this.$http.get(baseURI).then((response) => {
                this.options = response.data.data
            })
        },

        searchCompany(val){
            const baseURI  =  this.$settings.endPoint+"/company/index";
            return this.$http.get(baseURI+`?name=${val}`).then((response) => {
                this.options = response.data.data
            })
        },

        formatDate (value, fmt = 'DD-MM-YYYY HH:mm:ss') {
            return (value == null) ? '' : this.$moment(value, 'DD-MM-YYYY HH:mm:ss').format(fmt)
        },

        timetolive(value){
            if(value > 0){
                return 'true';
            }else{
                return 'false';
            }
        },

        backLink() {
            window.location.href = '/products/normal';
        } ,

        resultError(data) {  
            var count = Object.keys(data).length;
            for(var x=0; x < count;x++){ 
                var nameOb      = Object.keys(data)[x];
                var objectData  = data[nameOb];
                for(var y=0; y < objectData.length;y++){ 
                this.error(objectData[y]);
                }
            }
        },
      
        success(kata) {
            const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', this.$swal.stopTimer)
                toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            }
            })
                Toast.fire({
            icon: 'success',
            title: kata
            })
        },
        
        error(kata) {      
            const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', this.$swal.stopTimer)
                toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            }
            })
                Toast.fire({
            icon: 'error',
            title: kata
            })
        
        },
    
        fade(sType){  	
            this.isLoading = sType;
        },

        loading(){
            setTimeout(() => {
            this.isLoading = false;
            }, 1000); // hide the message after 3 seconds
        },
        getUom(){
            const baseURI  =  this.$settings.endPoint+"/uom/index?per_page=100";
            return this.$http.get(baseURI).then((response) => {
                this.optionsUom = response.data.data
            })
        },



    },
    events: {

    },
    created: function() { 
 
    },
	mounted() {
        document.body.classList.add("sidebar-menu-collapsed");
        this.getCompany();
        this.getUom();
    }

}
</script>
<style scoped>
 
</style>