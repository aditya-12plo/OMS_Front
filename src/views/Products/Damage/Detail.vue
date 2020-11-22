<template>
  <div>
    <section>
      <menu-component classMenu="ProductsDamageDetail"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-barcode"></i> {{$t('detailDamageProducts')}}</h3>
        </div>


        <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">{{$t('product')}}</h3>


                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('sku')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProduct.product_code}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('productName')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProduct.product_description}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('reason')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductDamageDetail.reason}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('addReason')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductDamageDetail.addReason}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Qty</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductDamageDetail.qty}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Status</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductDamageDetail.status}}</b>
                        </div>
                    </div>


                </div>
                 <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">{{$t('controller')}}</h3>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('holdBy')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductDamageDetail.hold_by}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('holdDate')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductDamageDetail.hold_date}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('saleBy')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductDamageDetail.sale_by}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('saleDate')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductDamageDetail.sale_date}}</b>
                        </div>
                    </div>


                    <h3 class="block__title mb-lg-4">Fulfillment</h3>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('fulfillmentName')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasFulfillment.name}} ({{this.datasFulfillment.code}})</b>
                        </div>
                    </div>
                    
                    <div v-if="this.datasLocations">
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label input__label">{{$t('locations')}}</label>
                            <div class="col-sm-8">
                                <b>{{this.datasLocations.location_description.location_descriptions}} ({{this.datasLocations.location_description.location_code}})</b>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label input__label">Qty</label>
                            <div class="col-sm-8">
                                    <b>{{this.datasLocations.qty}}</b>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label input__label">{{$t('capacityMax')}}</label>
                            <div class="col-sm-8">
                                <b>{{this.datasLocations.location_description.max_qty}}</b>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label input__label">{{$t('capacityMin')}}</label>
                            <div class="col-sm-8">
                                <b>{{this.datasLocations.location_description.min_qty}}</b>
                            </div>
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
  name: 'ProductsDamageDetail',
    props: {},
    components: {
        'menu-component':menuComponent,
    },
    data () {
        return {  
        datasProductDamageDetail:[],
        datasProduct:[],
        datasFulfillment:[],
        datasLocations:[],
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
        
        fetchIt() {
            
            var id  = this.$onBehind(this.$route.params.id);
            const baseURI  =  this.$settings.endPoint+"/products/damage/detail/"+id;
            
            return this.$http.get(baseURI).then((response) => {
                this.datasProductDamageDetail   = response.data.datas
                this.datasProduct               = response.data.datas.product
                this.datasFulfillment           = response.data.datas.fulfillment
                this.datasLocations             = response.data.datas.location_damage
            })
            
        },

        formatDate (value, fmt = 'DD-MM-YYYY HH:mm:ss') {
            return (value == null) ? '' : this.$moment(value, 'DD-MM-YYYY HH:mm:ss').format(fmt)
        },
        
        formatMoney (value) {
            return this.$accounting.formatNumber(value, 2)
        },

        timetolive(value){
            if(value > 0){
                return 'true';
            }else{
                return 'false';
            }
        },

        backLink() {
            // this.$router.go(-1);
            window.location.href = '/products/damage';
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
        this.fetchIt();
    }

}
</script>
<style scoped>
 
</style>