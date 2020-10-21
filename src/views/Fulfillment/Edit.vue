<template>
  <div>
    <section>
      <menu-component classMenu="Fulfillment"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-warehouse"></i> {{$t('fulfillmentEdit')}}</h3>
        </div>

<form @submit.prevent="submitData" method="POST">
        <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">Fulfillment</h3>
                    
 
                        <div class="form-group col-md-12">
                            <label for="fulfillmentCode" class="input__label">{{$t('fulfillmentCode')}}</label>
                            <input type="text" v-model="forms.fulfillment_code" class="form-control input-style" id="fulfillmentCode" @keydown="removeSpecial($event)" placeholder="Fulfillment Code" required="" maxlength="255" @input="forms.fulfillment_code = $event.target.value.toUpperCase()">
                        
                            <div v-if="errors.fulfillment_code">
                                <div class="invalid-feedback" v-for="error in errors.fulfillment_code" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="fulfillmentName" class="input__label">{{$t('fulfillmentName')}}</label>
                            <input type="text" v-model="forms.fulfillment_name" class="form-control input-style" id="fulfillmentName" placeholder="Fulfillment Name" required="" maxlength="255">
                        
                            <div v-if="errors.fulfillment_name">
                                <div class="invalid-feedback" v-for="error in errors.fulfillment_name" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="fulfillmentAddress" class="input__label">{{$t('fulfillmentAddress')}}</label>
                            <textarea v-model="forms.address" class="form-control input-style" id="fulfillmentAddress" placeholder="Fulfillment Address" required=""></textarea>
                        
                            <div v-if="errors.address">
                                <div class="invalid-feedback" v-for="error in errors.address" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="fulfillmentAddress2" class="input__label">{{$t('fulfillmentAddress2')}}</label>
                            <textarea v-model="forms.address2" class="form-control input-style" id="fulfillmentAddress2" placeholder="Fulfillment Address 2"></textarea>
                        
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
                            <input type="text" v-model="forms.area" class="form-control input-style" id="area" placeholder="Area" maxlength="255">
                        
                            <div v-if="errors.area">
                                <div class="invalid-feedback" v-for="error in errors.area" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="subArea" class="input__label">Sub Area</label>
                            <input type="text" v-model="forms.sub_area" class="form-control input-style" id="subArea" placeholder="Sub Area" maxlength="255">
                        
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
                            <label for="postalCode" class="input__label">{{$t('postalCode')}}</label>
                            <input type="text" v-model="forms.postal_code" class="form-control input-style" id="postalCode" placeholder="Postal Code" required="" maxlength="6" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.postal_code">
                                <div class="invalid-feedback" v-for="error in errors.postal_code" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="longitude" class="input__label">Longitude</label>
                            <input type="text" v-model="forms.longitude" class="form-control input-style" id="Longitude" placeholder="Longitude" maxlength="255" @keydown.space="(event) => event.preventDefault()">
                        
                            <div v-if="errors.longitude">
                                <div class="invalid-feedback" v-for="error in errors.longitude" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="latitude" class="input__label">Latitude</label>
                            <input type="text" v-model="forms.latitude" class="form-control input-style" id="latitude" placeholder="Latitude" maxlength="255" @keydown.space="(event) => event.preventDefault()">
                        
                            <div v-if="errors.latitude">
                                <div class="invalid-feedback" v-for="error in errors.latitude" :key="error">{{error}}</div>
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
                            <label for="status" class="input__label">Status</label>
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
                            <label for="fax" class="input__label">fax</label>
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
  name: 'FulfillmentEdit',
    props: {},
    components: {
        'menu-component':menuComponent,
        'v-select':vSelect,
         
    },
    data () {
        return {
            selected:'',
            books:['asd','cvb'],
            options: [],
            optionsCountry: [],
            optionsProvince: [],
            optionsCity: [],
            maxToasts: 100,
            isLoading: false,  
            position: 'up right',
            closeBtn: true,  
            errors: [],
            langs: ['id', 'en'],
            statuses: ['ACTIVATE','DEACTIVATE'],
            forms: {fulfillment_center_id:'',fulfillment_code:'', fulfillment_name: '', address: '', address2: '', province: ''
                    , city: '', area: '', sub_area: '', village: '', postal_code: '', country: '', remarks: ''
                    , pic_name: '', pic_phone: '', pic_mobile: '', pic_fax: '', pic_email: '', status: ''
                    ,longitude:'', latitude:''
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
                    
                    if (this.forms.fulfillment_code.trim() && this.forms.postal_code.trim()) {
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

                        
                        var formData = {
                            fulfillment_code    : this.forms.fulfillment_code.trim(),
                            postal_code         : this.forms.postal_code.trim(),
                            address             : this.forms.address,
                            address2            : this.forms.address2,
                            area                : this.forms.area,
                            city                : city,
                            country             : country,
                            fulfillment_name    : this.forms.fulfillment_name,
                            latitude            : this.forms.latitude,
                        	longitude           : this.forms.longitude,
                            pic_email           : this.forms.pic_email,
                            pic_fax             : this.forms.pic_fax,
                            pic_mobile          : this.forms.pic_mobile,
                            pic_name            : this.forms.pic_name,
                            pic_phone           : this.forms.pic_phone,
                            province            : province,
                            remarks             : this.forms.remarks,
                            status              : this.forms.status,
                            sub_area            : this.forms.sub_area,
                            village             : this.forms.village
                        };
                        
                        const baseURI  =  this.$settings.endPoint+"/fulfillment/update/"+this.forms.fulfillment_center_id;
                        
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
  
        backLink() {
            window.location.href = '/fulfillment-center/list';
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

        fetchForm(){
            var id  = this.$onBehind(this.$route.params.id);
            const baseURI  =  this.$settings.endPoint+"/fulfillment/detail/"+id;
            
            return this.$http.get(baseURI).then((response) => {
            this.forms.fulfillment_center_id    = response.data.datas.fulfillment_center_id
            this.forms.fulfillment_code         = response.data.datas.code
            this.forms.fulfillment_name         = response.data.datas.name
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
            this.forms.longitude                = response.data.datas.longitude
            this.forms.latitude                 = response.data.datas.latitude
            })
        },

      fetchIt() {
        const datasUser = this.$getUserInfo();
        var userDatas = datasUser.sub;
        if(userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'){
            console.log('ok');
        }else{
            this.backLink();
        }
      }

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
        this.fetchForm();
        this.fetchIt();
    }

}
</script>
<style scoped>
   
</style>