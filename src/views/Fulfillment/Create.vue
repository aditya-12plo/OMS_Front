<template>
  <div>
    <section>
      <menu-component classMenu="Fulfillment"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3>{{$t('fulfillmentCreate')}}</h3>
        </div>

<form @submit.prevent="submitData" method="POST">
        <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">{{$t('location')}}</h3>

                        <div class="form-group col-md-12">
                            <label for="companyName" class="input__label">{{$t('companyName')}}</label>
                            <v-select v-model="company_id" placeholder="Choose a Company" label="name" :options="options" @search="searchCompany" :required="!company_id" autocomplete></v-select>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="fulfillmentCode" class="input__label">{{$t('fulfillmentCode')}}</label>
                            <input type="text" v-model="forms.fulfillment_code" class="form-control input-style" id="fulfillmentCode" placeholder="Fulfillment Code" required="">
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="fulfillmentName" class="input__label">{{$t('fulfillmentName')}}</label>
                            <input type="text" v-model="forms.fulfillment_name" class="form-control input-style" id="fulfillmentName" placeholder="Fulfillment Name" required="">
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="fulfillmentAddress" class="input__label">{{$t('fulfillmentAddress')}}</label>
                            <textarea v-model="forms.address" class="form-control input-style" id="fulfillmentAddress" placeholder="Fulfillment Address" required=""></textarea>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="fulfillmentAddress2" class="input__label">{{$t('fulfillmentAddress2')}}</label>
                            <textarea v-model="forms.address2" class="form-control input-style" id="fulfillmentAddress2" placeholder="Fulfillment Address 2"></textarea>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="province" class="input__label">{{$t('province')}}</label>
                            <input type="text" v-model="forms.province" class="form-control input-style" id="province" placeholder="Province" required="">
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="city" class="input__label">{{$t('city')}}</label>
                            <input type="text" v-model="forms.city" class="form-control input-style" id="city" placeholder="City" required="">
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="area" class="input__label">Area</label>
                            <input type="text" v-model="forms.area" class="form-control input-style" id="area" placeholder="Area">
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="subArea" class="input__label">Sub Area</label>
                            <input type="text" v-model="forms.sub_area" class="form-control input-style" id="subArea" placeholder="Sub Area">
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="village" class="input__label">{{$t('village')}}</label>
                            <input type="text" v-model="forms.village" class="form-control input-style" id="village" placeholder="Village">
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="postalCode" class="input__label">{{$t('postalCode')}}</label>
                            <input type="text" v-model="forms.postal_code" class="form-control input-style" id="postalCode" placeholder="Postal Code">
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="remarks" class="input__label">{{$t('remarks')}}</label>
                            <textarea v-model="forms.remarks" class="form-control input-style" id="remarks" placeholder="Remarks"></textarea>
                        </div>

                        

                </div>
                <div class="col-lg-6">
                   <h3 class="block__title mb-lg-4">PIC</h3>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('name')}}</label>
                        <div class="col-sm-8">
                            
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
  name: 'FulfillmentCreate',
    props: {
        
    },
    components: {
        'menu-component':menuComponent,
        'v-select':vSelect,
         
    },
    data () {
        return {
            options: [],
            company_id:'',
            maxToasts: 100,
            isLoading: false,  
            position: 'up right',
            closeBtn: true,  
            errors: [],
            langs: ['id', 'en'],
            forms: {fulfillment_code:'', company:'', fulfillment_name: '', address: '', address2: '', province: ''
                    , city: '', area: '', sub_area: '', village: '', postal_code: '', country: '', remarks: ''
                    , pic_name: '', pic_phone: '', pic_mobile: '', pic_fax: '', pic_email: '', status: ''
            },
        }
    },
    watch: { 

    },
    methods: {
        submitData(){
            console.log(this.forms)
        },


        searchCompany(val){
            const baseURI  =  this.$settings.endPoint+"/company/index";
            return this.$http.get(baseURI+`?name=${val}`).then((response) => {
                this.options = response.data.data
            })
        },
  
        backLink() {
            this.$router.go(-1);
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



    },
    events: {

    },
    created: function() { 
 
    },
	mounted() {
        document.body.classList.add("sidebar-menu-collapsed");
    }

}
</script>
<style scoped>
   
</style>