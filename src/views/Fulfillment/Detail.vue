<template>
  <div>
    <section>
      <menu-component classMenu="Fulfillment"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-warehouse"></i> Detail Fulfillment Center</h3>
        </div>


        <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">Fulfillment</h3>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('fulfillmentCode')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.code}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('fulfillmentName')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.name}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('fulfillmentAddress')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.address}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('fulfillmentAddress2')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.address2}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('country')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.country}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('province')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.province}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('city')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.city}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Area</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.area}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Sub Area</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.sub_area}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('village')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.village}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('postalCode')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.postal_code}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('remarks')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.remarks}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Status</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.status}}</b>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">
                   <h3 class="block__title mb-lg-4">PIC</h3>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('name')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.pic}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Email</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.email}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Phone</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.phone}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Mobile</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.mobile}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Fax</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillmentDetail.fax}}</b>
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
  name: 'FulfillmentDetail',
    props: {
      datasFulfillmentDetail: {
        type: Object,
        required: true
      }
    },
    components: {
        'menu-component':menuComponent,
    },
    data () {
        return {  
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