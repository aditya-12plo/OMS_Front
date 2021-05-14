<template>
  <div>
    <section>
      <menu-component classMenu="User"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-warehouse"></i> Detail User</h3>
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
                        <label class="col-sm-4 col-form-label input__label">Add 1</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.add1}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Add 1</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.add1}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Add 2</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.add2}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Add 3</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.add3}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Add 4</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.add4}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Add 5</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.add5}}</b>
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
                            <b>{{this.datasUserDetail.company.name}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('companyAddress')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.company.address}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('companyAddress2')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.company.address2}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('country')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.company.country}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('province')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.company.province}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('city')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.company.city}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('area')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.company.area}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('sub_area')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.company.sub_area}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('village')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.company.village}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('postalCode')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasUserDetail.company.postal_code}}</b>
                        </div>
                    </div>


                </div>
               
                <button type="button" @click="backLink()" class="btn btn-primary btn-style mt-4">{{$t('backMsg')}}</button>

                </div>
            </div>
            </div>


          
          
          
          
           

            </div>
 
        </div>
        <!-- main content end-->


    </section>


  </div>
</template>
<script>
import menuComponent from '@/views/Menu/Index'

export default {
  name: 'UserDetail',
    props: {},
    components: {
        'menu-component':menuComponent,
    },
    data () {
        return {
        datasUserDetail:[],
        maxToasts: 100,
        isLoading: false,  
        position: 'up right',
        closeBtn: true,  
        errors: [],
        langs: ['id', 'en'],
        }
    },
    watch: { 

    },
    methods: {
  
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

        fetchIt(){
            var id  = this.$onBehind(this.$route.params.id);
            const baseURI  =  this.$settings.endPoint+"/user/detail/"+id;
            
            return this.$http.get(baseURI).then((response) => {
                this.datasUserDetail = response.data.datas
            })
        }

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