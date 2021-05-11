<template>
  <div>
    <section>
      <menu-component classMenu="User"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-building"></i> {{$t('userCreate')}}</h3>
        </div>

<form @submit.prevent="submitData" method="POST">
        <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-12">
                    <h3 class="block__title mb-lg-4">Form</h3>
                    
                     
                        <div class="form-group col-md-12">
                            <label for="company_id" class="input__label">{{$t('companyCode')}}</label>
                            <autocomplete
                                :search="searchcompanyCode"
                                placeholder="Search for a Company ID"
                                aria-label="Search for a Company ID"
                                @submit="submitcompanyCode"
                                :get-result-value="getcompanyCodeValue"
                            ></autocomplete>
                            <div v-if="errors.company_id">
                                <div class="invalid-feedback" v-for="error in errors.company_id" :key="error">{{error}}</div>
                            </div>
                        </div>
                    
                     
                        <div class="form-group col-md-12">
                            <label for="user_role_id" class="input__label">{{$t('userRole')}}</label>
                            <autocomplete
                                :search="searchuserRole"
                                placeholder="Search for a User Role"
                                aria-label="Search for a User Role"
                                @submit="submituserRole"
                                :get-result-value="getuserRoleValue"
                            ></autocomplete>
                            <div v-if="errors.user_role_id">
                                <div class="invalid-feedback" v-for="error in errors.user_role_id" :key="error">{{error}}</div>
                            </div>
                        </div>
 
 
                        <div class="form-group col-md-12">
                            <label for="name" class="input__label">{{$t('name')}}</label>
                            <input type="text" v-model="forms.name" class="form-control input-style" id="name" placeholder="Name" required="" maxlength="255">
                        
                            <div v-if="errors.name">
                                <div class="invalid-feedback" v-for="error in errors.name" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="Email" class="input__label">Email</label>
                            <input type="email" v-model="forms.email" class="form-control input-style" id="Email" placeholder="PIC Email" maxlength="255">
                        
                            <div v-if="errors.email">
                                <div class="invalid-feedback" v-for="error in errors.email" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="Password" class="input__label">{{$t('loginPassword')}}</label>
                            <input type="password" v-model="forms.password" class="form-control input-style" id="Password" placeholder="Password" maxlength="255">
                        
                            <div v-if="errors.password">
                                <div class="invalid-feedback" v-for="error in errors.password" :key="error">{{error}}</div>
                            </div>
                        </div>

                    
                        <div class="form-group col-md-12">
                            <label for="phone" class="input__label">{{$t('phone')}}</label>
                            <input type="text" v-model="forms.phone" class="form-control input-style" id="phone" placeholder="Phone" required="" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.phone">
                                <div class="invalid-feedback" v-for="error in errors.phone" :key="error">{{error}}</div>
                            </div>
                        </div>

                    
                        <div class="form-group col-md-12">
                            <label for="mobile" class="input__label">{{$t('handphone')}}</label>
                            <input type="text" v-model="forms.mobile" class="form-control input-style" id="mobile" placeholder="Mobile" required="" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.mobile">
                                <div class="invalid-feedback" v-for="error in errors.mobile" :key="error">{{error}}</div>
                            </div>
                        </div>
                    
                        <div class="form-group col-md-12">
                            <label for="fax" class="input__label">Fax</label>
                            <input type="text" v-model="forms.fax" class="form-control input-style" id="fax" placeholder="Fax" required="" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.fax">
                                <div class="invalid-feedback" v-for="error in errors.fax" :key="error">{{error}}</div>
                            </div>
                        </div>
                    
                        <div class="form-group col-md-12">
                            <label for="add1" class="input__label">Add1</label>
                            <input type="text" v-model="forms.add1" class="form-control input-style" id="add1" placeholder="Add1" maxlength="255">
                        
                            <div v-if="errors.add1">
                                <div class="invalid-feedback" v-for="error in errors.add1" :key="error">{{error}}</div>
                            </div>
                        </div>
                    
                        <div class="form-group col-md-12">
                            <label for="add2" class="input__label">add2</label>
                            <input type="text" v-model="forms.add2" class="form-control input-style" id="add2" placeholder="Add2" maxlength="255">
                        
                            <div v-if="errors.add2">
                                <div class="invalid-feedback" v-for="error in errors.add2" :key="error">{{error}}</div>
                            </div>
                        </div>
                    
                        <div class="form-group col-md-12">
                            <label for="add3" class="input__label">add3</label>
                            <input type="text" v-model="forms.add3" class="form-control input-style" id="add3" placeholder="Add3" maxlength="255">
                        
                            <div v-if="errors.add3">
                                <div class="invalid-feedback" v-for="error in errors.add3" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add4" class="input__label">add4</label>
                            <input type="text" v-model="forms.add4" class="form-control input-style" id="add4" placeholder="add4">
                        
                            <div v-if="errors.add4">
                                <div class="invalid-feedback" v-for="error in errors.add4" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add5" class="input__label">add5</label>
                            <input type="text" v-model="forms.add5" class="form-control input-style" id="add5" placeholder="add5">
                        
                            <div v-if="errors.add5">
                                <div class="invalid-feedback" v-for="error in errors.add5" :key="error">{{error}}</div>
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
import Autocomplete from '@trevoreyre/autocomplete-vue'

export default {
  name: 'CompanyCreate',
    props: {
        
    },
    components: {
        'menu-component':menuComponent,
        'v-select':vSelect,
         Autocomplete,
         
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
            forms: {company_id:'', user_role_id: '', email: '', password: '', name: ''
                    , phone: '', mobile: '', fax: '', add1: '', add2: '', add3: '', add4: ''
                    , add5: '',status:''
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
                
                    if (this.forms.company_id.trim() && this.forms.user_role_id.trim()) {
                        const baseURI  =  this.$settings.endPoint+"/user/add";
                        
                        this.$http.post(baseURI,this.forms)
                        .then((response) => {
                            this.loading();
                            if(response.data.status === 200) {
                                this.success(response.data.datas.message);
                                window.location.href = '/user/list';
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
                    }else{
                        this.errors = {company_id:["company id required"] , user_role_id:["user role id required"]};
                        this.error("company id / user role id required");
                    }
                }
            })
        },
        
        removeSpecial(e) {
            if (/^\W$/.test(e.key)) {
                e.preventDefault();
            }
        },


        
        submitcompanyCode(result) {
            this.forms.company_id = result.company_id
        },
        
        
        submituserRole(result) {
            this.forms.user_role_id = result.user_role_id
        },

        
        
        getcompanyCodeValue(result){
            return result.company_id
        },
        
        
        getuserRoleValue(result){
            return result.user_role_id
        },

        searchcompanyCode(val){

            if (val.length < 1) { return [] }

            const baseURI  =  this.$settings.endPoint+"/company/index";
            return this.$http.get(baseURI+`?company_id=${val}&name=${val}`).then((response) => {
                var datas   = response.data.datas.data
                if(datas.length <= 0){
                    return [{"company_id":val}]
                }else{
                    return response.data.datas.data
                }
            })
        },

        searchuserRole(val){

            if (val.length < 1) { return [] }

            const baseURI  =  this.$settings.endPoint+"/role/index";
            return this.$http.get(baseURI+`?user_role_id=${val}&user_role_description=${val}`).then((response) => {
                var datas   = response.data.datas.data
                if(datas.length <= 0){
                    return [{"user_role_id":val}]
                }else{
                    return response.data.datas.data
                }
            })
        },

  
        backLink() {
            window.location.href = '/user/list';
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