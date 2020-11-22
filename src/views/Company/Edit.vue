<template>
  <div>
    <section>
      <menu-component classMenu="Company"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-building"></i> {{$t('CompanytEdit')}}</h3>
        </div>

<form @submit.prevent="submitData" method="POST">
        <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">{{$t('company')}}</h3>
 
                        <div class="form-group col-md-12">
                            <label for="companyName" class="input__label">{{$t('companyName')}}</label>
                            <input type="text" v-model="forms.company_name" class="form-control input-style" id="companyName" placeholder="Company Name" required="" maxlength="255">
                        
                            <div v-if="errors.company_name">
                                <div class="invalid-feedback" v-for="error in errors.company_name" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="companyAddress" class="input__label">{{$t('companyAddress')}}</label>
                            <textarea v-model="forms.address" class="form-control input-style" id="companyAddress" placeholder="Company Address" required=""></textarea>
                        
                            <div v-if="errors.address">
                                <div class="invalid-feedback" v-for="error in errors.address" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="companyAddress2" class="input__label">{{$t('companyAddress2')}}</label>
                            <textarea v-model="forms.address2" class="form-control input-style" id="companyAddress2" placeholder="Company Address 2"></textarea>
                        
                            <div v-if="errors.address2">
                                <div class="invalid-feedback" v-for="error in errors.address2" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="country" class="input__label">{{$t('country')}}</label>
                             <v-select :options="optionsCountry" label="name" placeholder="Choose a Country" v-model="forms.country" @search="searchCountry" autocomplete>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.country"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>

                            <div v-if="errors.country">
                                <div class="invalid-feedback" v-for="error in errors.country" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        
                        <div class="form-group col-md-12">
                            <label for="province" class="input__label">{{$t('province')}}</label>
                            <v-select :options="optionsProvince" label="province" placeholder="Choose a Province" v-model="forms.province" @search="searchProvince" autocomplete>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.province"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>
                            
                            <div v-if="errors.province">
                                <div class="invalid-feedback" v-for="error in errors.province" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="city" class="input__label">{{$t('city')}}</label>
                            <v-select :options="optionsCity" label="city" placeholder="Choose a City" v-model="forms.city" @search="searchCity" autocomplete>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.city"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>

                            <div v-if="errors.city">
                                <div class="invalid-feedback" v-for="error in errors.city" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="area" class="input__label">Area</label>
                            
                            <v-select :options="optionsArea" label="area" placeholder="Choose a Area" v-model="forms.area" @search="searchArea" autocomplete>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.area"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>

                            <div v-if="errors.area">
                                <div class="invalid-feedback" v-for="error in errors.area" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="subArea" class="input__label">Sub Area</label>
                            
                            <v-select :options="optionsSubArea" label="sub_area" placeholder="Choose a Sub Area" v-model="forms.sub_area" @search="searchSubArea" autocomplete>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.sub_area"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>
                            <div v-if="errors.sub_area">
                                <div class="invalid-feedback" v-for="error in errors.sub_area" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="village" class="input__label">{{$t('village')}}</label>
                            <input type="text" v-model="forms.village" class="form-control input-style" id="village" placeholder="Village" maxlength="255">
                        
                            <div v-if="errors.village">
                                <div class="invalid-feedback" v-for="error in errors.village" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="subArea" class="input__label">Sub Area</label>
                            
                            <v-select :options="optionsPostalCode" label="postal_code" placeholder="Choose a Postal Code" v-model="forms.postal_code" @search="searchPostalCode" autocomplete>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.postal_code"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>
                            <div v-if="errors.postal_code">
                                <div class="invalid-feedback" v-for="error in errors.postal_code" :key="error">{{error}}</div>
                            </div>
                        </div>
  
                        <div class="form-group col-md-12">
                            <label for="remarks" class="input__label">{{$t('remarks')}}</label>
                            <textarea v-model="forms.remarks" class="form-control input-style" id="remarks" placeholder="Remarks"></textarea>
                        
                            <div v-if="errors.remarks">
                                <div class="invalid-feedback" v-for="error in errors.remarks" :key="error">{{error}}</div>
                            </div>
                        </div>


                        <div class="form-group col-md-12">
                            <label for="companyName" class="input__label">Status</label>
                            <v-select :options="statuses" placeholder="Choose a Status" v-model="forms.status">
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.status"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>

                            <div v-if="errors.status">
                                <div class="invalid-feedback" v-for="error in errors.status" :key="error">{{error}}</div>
                            </div>
                        </div>
 

                        

                </div>
                <div class="col-lg-6">
                   <h3 class="block__title mb-lg-4">PIC</h3>
                    
                    
                    
                        <div class="form-group col-md-12">
                            <label for="name" class="input__label">{{$t('name')}}</label>
                            <input type="text" v-model="forms.pic_name" class="form-control input-style" id="name" placeholder="PIC Name" required="" maxlength="255">
                        
                            <div v-if="errors.pic_name">
                                <div class="invalid-feedback" v-for="error in errors.pic_name" :key="error">{{error}}</div>
                            </div>
                        </div>
                    
                        <div class="form-group col-md-12">
                            <label for="phone" class="input__label">{{$t('phone')}}</label>
                            <input type="text" v-model="forms.pic_phone" class="form-control input-style" id="phone" placeholder="PIC Phone" required="" maxlength="10" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.pic_phone">
                                <div class="invalid-feedback" v-for="error in errors.pic_phone" :key="error">{{error}}</div>
                            </div>
                        </div>
                    
                        <div class="form-group col-md-12">
                            <label for="handphone" class="input__label">{{$t('handphone')}}</label>
                            <input type="text" v-model="forms.pic_mobile" class="form-control input-style" id="pic_mobile" placeholder="PIC Mobile" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.pic_mobile">
                                <div class="invalid-feedback" v-for="error in errors.pic_mobile" :key="error">{{error}}</div>
                            </div>
                        </div>
                    
                        <div class="form-group col-md-12">
                            <label for="fax" class="input__label">Fax</label>
                            <input type="text" v-model="forms.pic_fax" class="form-control input-style" id="fax" placeholder="PIC Fax" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.pic_fax">
                                <div class="invalid-feedback" v-for="error in errors.pic_fax" :key="error">{{error}}</div>
                            </div>
                        </div>
                    
                        <div class="form-group col-md-12">
                            <label for="Email" class="input__label">Email</label>
                            <input type="email" v-model="forms.pic_email" class="form-control input-style" id="Email" placeholder="PIC Email" maxlength="255">
                        
                            <div v-if="errors.pic_email">
                                <div class="invalid-feedback" v-for="error in errors.pic_email" :key="error">{{error}}</div>
                            </div>
                        </div>

                        
                    <br>
                    <br>
                    <h3 class="block__title mb-lg-4">Fulfillment</h3>
                    

                        <div class="form-group col-md-12">
                            <v-select :options="optionsFulfillment" label="name" placeholder="Choose a Fulfillment" multiple v-model="forms.fulfillment" @search="searchFulfillment" autocomplete>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.fulfillment"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>
                            <div v-if="errors.fulfillment">
                                <div class="invalid-feedback" v-for="error in errors.fulfillment" :key="error">{{error}}</div>
                            </div>
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
  name: 'CompanyEdit',
    props: {},
    components: {
        'menu-component':menuComponent,
        'v-select':vSelect,
         
    },
    data () {
        return {
            selected:'',
            options: [],
            optionsCountry: [],
            optionsProvince: [],
            optionsCity: [],
            optionsArea: [],
            optionsSubArea: [],
            optionsPostalCode: [],
            optionsFulfillment: [],
            maxToasts: 100,
            isLoading: false,  
            position: 'up right',
            closeBtn: true,  
            errors: [],
            langs: ['id', 'en'],
            statuses: ['ACTIVATE','DEACTIVATE'],
            forms: {company_id:'', company_name: '', address: '', address2: '', province: ''
                    , city: '', area: '', sub_area: '', village: '', postal_code: '', country: '', remarks: ''
                    , pic_name: '', pic_phone: '', pic_mobile: '', pic_fax: '', pic_email: '', status: '', fulfillment:''
            },
        }
    },
    watch: { 

    },
    methods: {

        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                evt.preventDefault();
            } else {
                return true;
            }
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
                    
                        var country     = this.forms.country.name;
                        var province    = this.forms.province.province;
                        var city        = this.forms.city.city;
                        var area        = this.forms.area.area;
                        var sub_area    = this.forms.sub_area.sub_area;
                        var postal_code = this.forms.postal_code.postal_code;
                        if(!country){
                            country = this.forms.country;
                        }
                        if(!province){
                            province = this.forms.province;
                        }
                        if(!city){
                            city = this.forms.city;
                        }
                        if(!area){
                            area = this.forms.area;
                        }
                        if(!sub_area){
                            sub_area = this.forms.sub_area;
                        }
                        if(!postal_code){
                            postal_code = this.forms.postal_code;
                        }

                        
                        var formData = {
                            postal_code         : postal_code.trim(),
                            address             : this.forms.address,
                            address2            : this.forms.address2,
                            area                : area,
                            city                : city,
                            country             : country,
                            company_name        : this.forms.company_name,
                            pic_email           : this.forms.pic_email,
                            pic_fax             : this.forms.pic_fax,
                            pic_mobile          : this.forms.pic_mobile,
                            pic_name            : this.forms.pic_name,
                            pic_phone           : this.forms.pic_phone,
                            province            : province,
                            remarks             : this.forms.remarks,
                            status              : this.forms.status,
                            sub_area            : sub_area,
                            village             : this.forms.village,
                            fulfillments        : JSON.stringify(this.forms.fulfillment)
                        };
                        
                        const baseURI  =  this.$settings.endPoint+"/company/update/"+this.forms.company_id;
                        
                        this.$http.put(baseURI,formData)
                        .then((response) => {
                            this.loading();
                            if(response.data.status === 200) {
                                this.success(response.data.datas.message);
                            }else{
                                this.errors = response.data.errors.message;
                                this.resultError(response.data.errors.message);
                            }
                        }).catch(error => {
                        this.loading();
                        if (error.response) {
                            if(error.response.status === 422) {
                                this.errors = error.response.data.errors.message;
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
        
        removeSpecial(e) {
            if (/^\W$/.test(e.key)) {
                e.preventDefault();
            }
        },


        getCountry(){
            const baseURI  =  this.$settings.endPoint+"/country/index";
            return this.$http.get(baseURI).then((response) => {
                this.optionsCountry = response.data.data
            })
        },

        searchCountry(val){
            const baseURI  =  this.$settings.endPoint+"/country/index";
            return this.$http.get(baseURI+`?name=${val}`).then((response) => {
                this.optionsCountry = response.data.data
            })
        },

        getProvince(){
            const baseURI  =  this.$settings.endPoint+"/province/index";
            return this.$http.get(baseURI).then((response) => {
                this.optionsProvince = response.data.data
            })
        },
        

        searchProvince(val){
            var country     = this.forms.country.name;
            if(!country){
                country = this.forms.country;
            }
            
            const baseURI  =  this.$settings.endPoint+"/province/index";
            return this.$http.get(baseURI+`?country=${country}&province=${val}`).then((response) => {
                this.optionsProvince = response.data.data
            })
        },


        getCity(){
            const baseURI  =  this.$settings.endPoint+"/city/index";
            return this.$http.get(baseURI).then((response) => {
                this.optionsCity = response.data.data
            })
        },
        

        searchCity(val){
            var country     = this.forms.country.name;
            var province    = this.forms.province.province;
            if(!country){
                country = this.forms.country;
            }
            if(!province){
                province = this.forms.province;
            }
            const baseURI  =  this.$settings.endPoint+"/city/index";
            return this.$http.get(baseURI+`?country=${country}&province=${province}&city=${val}`).then((response) => {
                this.optionsCity = response.data.data
            })
        },


        getArea(){
            const baseURI  =  this.$settings.endPoint+"/area/index";
            return this.$http.get(baseURI).then((response) => {
                this.optionsArea = response.data.data
            })
        },
        

        searchArea(val){
            var country     = this.forms.country.name;
            var province    = this.forms.province.province;
            var city        = this.forms.city.city;
            if(!country){
                country = this.forms.country;
            }
            if(!province){
                province = this.forms.province;
            }
            if(!city){
                city = this.forms.city;
            }
            const baseURI  =  this.$settings.endPoint+"/area/index";
            return this.$http.get(baseURI+`?country=${country}&province=${province}&city=${city}&area=${val}`).then((response) => {
                this.optionsArea = response.data.data
            })
        },

        getSubArea(){
            const baseURI  =  this.$settings.endPoint+"/sub-area/index";
            return this.$http.get(baseURI).then((response) => {
                this.optionsSubArea = response.data.data
            })
        },
        

        searchSubArea(val){
            
            var country     = this.forms.country.name;
            var province    = this.forms.province.province;
            var city        = this.forms.city.city;
            var area        = this.forms.area.area;
            if(!country){
                country = this.forms.country;
            }
            if(!province){
                province = this.forms.province;
            }
            if(!city){
                city = this.forms.city;
            }
            if(!area){
                area = this.forms.area;
            }
            const baseURI  =  this.$settings.endPoint+"/sub-area/index";
            return this.$http.get(baseURI+`?country=${country}&province=${province}&city=${city}&area=${area}&sub_area=${val}`).then((response) => {
                this.optionsSubArea = response.data.data
            })
        },

        getPostalCode(){
            const baseURI  =  this.$settings.endPoint+"/postal-code/index";
            return this.$http.get(baseURI).then((response) => {
                this.optionsPostalCode = response.data.data
            })
        },
        

        searchPostalCode(val){
            
            var country     = this.forms.country.name;
            var province    = this.forms.province.province;
            var city        = this.forms.city.city;
            var area        = this.forms.area.area;
            var sub_area    = this.forms.sub_area.sub_area;
            if(!country){
                country = this.forms.country;
            }
            if(!province){
                province = this.forms.province;
            }
            if(!city){
                city = this.forms.city;
            }
            if(!area){
                area = this.forms.area;
            }
            if(!sub_area){
                sub_area = this.forms.sub_area;
            }
            
            const baseURI  =  this.$settings.endPoint+"/postal-code/index";
            return this.$http.get(baseURI+`?country=${country}&province=${province}&city=${city}&area=${area}&sub_area=${sub_area}&postal_code=${val}`).then((response) => {
                this.optionsPostalCode = response.data.data
            })
        },

        getFulfillment(){
            const baseURI  =  this.$settings.endPoint+"/fulfillment/index";
            return this.$http.get(baseURI).then((response) => {
                this.optionsFulfillment = response.data.data
            })
        },
        

        searchFulfillment(val){
            const baseURI  =  this.$settings.endPoint+"/fulfillment/index";
            return this.$http.get(baseURI+`?name=${val}`).then((response) => {
                this.optionsFulfillment = response.data.data
            })
        },
 
  
        backLink() {
            window.location.href = '/company/list';
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

        fetchIt() {
            const baseURI  =  this.$settings.endPoint+"/company/detail/"+this.$route.params.id;
            
            return this.$http.get(baseURI).then((response) => {
                this.forms.company_id               = response.data.datas.company_id
                this.forms.company_name             = response.data.datas.name
                this.forms.address                  = response.data.datas.address
                this.forms.address2                 = response.data.datas.address2
                this.forms.province                 = response.data.datas.province
                this.forms.city                     = response.data.datas.city
                this.forms.area                     = response.data.datas.area
                this.forms.sub_area                 = response.data.datas.sub_area
                this.forms.village                  = response.data.datas.village
                this.forms.postal_code              = response.data.datas.postal_code
                this.forms.country                  = response.data.datas.country
                this.forms.remarks                  = response.data.datas.remarks
                this.forms.pic_name                 = response.data.datas.pic
                this.forms.pic_phone                = response.data.datas.phone
                this.forms.pic_mobile               = response.data.datas.mobile
                this.forms.pic_fax                  = response.data.datas.fax
                this.forms.pic_email                = response.data.datas.email
                this.forms.status                   = response.data.datas.status
                var ffs  = response.data.datas.fulfillments;
                var dd  = [];

                ffs.map((f) => {
                    dd.push(f.fulfillment);
                });

                this.forms.fulfillment              = dd;
            })
            
        },


    },
    events: {

    },
    created: function() { 
 
    },
	mounted() {
        document.body.classList.add("sidebar-menu-collapsed");
        this.getCountry();
        this.getProvince();
        this.getCity();
        this.getArea();
        this.getSubArea();
        this.getPostalCode();
        this.getFulfillment();
        this.fetchIt();
    }

}
</script>
<style scoped>
   
</style>