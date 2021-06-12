<template>
  <div>
    <section>
      <menu-component classMenu="UserProfile"></menu-component>
      

<form @submit.prevent="submitData" method="POST">

        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-user"></i> Detail User</h3>
        </div>

   <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-6">

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('userRole')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.user_role_id}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('name')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.name}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Email</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.email}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('phone')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.phone}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('handphone')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.mobile}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Fax</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.fax}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('loginPassword')}}</label>
                        <div class="col-sm-8">
                            <input type="password" v-model="new_password" class="form-control input-style" id="Password" placeholder="Password" maxlength="255" required="">
                        
                            <div v-if="errors.password">
                                <div class="invalid-feedback" v-for="error in errors.password" :key="error">{{error}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Status</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.status}}</b>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('companyCode')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.company_id}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('companyName')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserCompany.name}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('companyAddress')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserCompany.address}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('companyAddress2')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserCompany.address2}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('country')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserCompany.country}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('province')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserCompany.province}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('city')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserCompany.city}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('area')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserCompany.area}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('sub_area')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserCompany.sub_area}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('village')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserCompany.village}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('postalCode')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserCompany.postal_code}}</b>
                        </div>
                    </div>


                </div>
           
 
                <button type="submit" class="btn btn-primary btn-style mt-4">Submit</button>


                </div>
            </div>
            </div>

           

            </div>
 
        </div>
        <!-- main content end-->
</form>

    </section>


  </div>
</template>
<script>
import menuComponent from './Menu/Index'

export default {
  name: 'UserProfile',
  components: {
    'menu-component':menuComponent,
  },
  data () {
    return {  
        maxToasts: 100,
        isLoading: false,  
        position: 'up right',
        closeBtn: true,  
        datasUserDetail:[],
        datasUserCompany:[],
        maxToasts: 100,
        position: 'up right',
        closeBtn: true,  
        errors: [],
        langs: ['id', 'en'],
        new_password:'',
    }
  },
    watch: { 

    },
    methods: { 	

        loading(){
            setTimeout(() => {
            this.isLoading = false;
            }, 1000); // hide the message after 3 seconds
        },
        fade(sType){  	
            this.isLoading = sType;
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
                
                const baseURI  =  this.$settings.endPoint+"/user/change-password/"+this.datasUserDetail.user_id;
                        
              let formData = new FormData();
              formData.append("password", this.new_password);

                this.$http.post(baseURI,formData)
                        .then((response) => {
                            this.loading();
                            if(response.data.status === 200) {
                                this.success(response.data.datas.message);
                                this.new_password = ""
                            }else{
                                this.errors = response.data.errors.message;
                                this.resultError(response.data.errors.message);
                            }
                        }).catch(error => {
                        this.loading();
                            if (error.response) {
                                if(error.response.status === 422) {
                                    this.errors = error.response.data.errors;
                                    this.resultError(error.response.data.errors);
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
      fetchIt() {
        const userDatas         = this.$getUserInfo();
        this.datasUserDetail    = userDatas.sub;
        this.datasUserCompany   = userDatas.sub.company;
        
      },

      logout(){
        this.$logoutUser();
        this.$router.push('/');
      },

    },
    events: {

    },
    created: function() { 

     
    },
	mounted() {
      document.body.classList.add("sidebar-menu-collapsed");
      this.fetchIt();
    }

}
</script>
<style scoped>
 
</style>