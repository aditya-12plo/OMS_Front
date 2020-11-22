<template>
  <div>
    <section>
      <menu-component classMenu="ProductsBundleDetail"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-barcode"></i> {{$t('detailProducts')}}</h3>
        </div>


        <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">{{$t('product')}}</h3>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('company')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleCompany.name+' ( '+this.datasProductBundleDetail.company_id+' )'}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('sku')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.product_code}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('productName')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.product_description}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('productComponents')}}</label>
                        <div class="col-sm-8">
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">{{$t('sku')}}</th>
                                <th scope="col">QTY</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(bundle, index) in datasProductBundle " :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td><b>{{bundle.product.product_description}} ({{bundle.product.product_code}})</b></td>
                                <td><b>{{bundle.qty}}</b></td>
                                </tr>
                            </tbody>
                            </table>

                            
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('uom')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.uom_code + ' ( ' +this.datasProductBundleUom.uom_description+' )'}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('currency')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.currency}}</b>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('priceProduct')}}</label>
                        <div class="col-sm-8">
                            <b>{{formatMoney(this.datasProductBundleDetail.price)}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('width')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.width}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('height')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.height}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('weight')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.weight}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('net_weight')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.net_weight}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('gross_weight')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.gross_weight}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('qty_per_carton')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.qty_per_carton}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('carton_per_pallet')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.carton_per_pallet}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('cube')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.cube}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Barcode</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.barcode}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('time_to_live')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.timetolive(this.datasProductBundleDetail.time_to_live)}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('type')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasProductBundleDetail.type}}</b>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">
                   <h3 class="block__title mb-lg-4">{{$t('inventory')}}</h3>

                    <div v-for="stock in this.datasProductBundleDetail.inventory" :key="stock.inventory_id">
                        
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label input__label">Fulfillment</label>
                            <div class="col-sm-8">
                                <b>{{stock.fulfillment.name +'( '+stock.fulfillment.code+' )'}}</b>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label input__label">{{$t('stock_on_hand')}}</label>
                            <div class="col-sm-8">
                                <b>{{stock.stock_on_hand}}</b>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label input__label">{{$t('stock_available')}}</label>
                            <div class="col-sm-8">
                                <b>{{stock.stock_available}}</b>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label input__label">{{$t('stock_hold')}}</label>
                            <div class="col-sm-8">
                                <b>{{stock.stock_hold}}</b>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label input__label">{{$t('stock_booked')}}</label>
                            <div class="col-sm-8">
                                <b>{{stock.stock_booked}}</b>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label input__label">{{$t('updated_at')}}</label>
                            <div class="col-sm-8">
                                <b>{{ formatDate(stock.updated_at, 'DD-MM-YYYY HH:mm:ss') }}</b>
                            </div>
                        </div>

                        <br>
                        <br>

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
  name: 'ProductsBundleDetail',
    props: {},
    components: {
        'menu-component':menuComponent,
    },
    data () {
        return {  
        datasProductBundleDetail:[],
        datasProductBundleCompany:[],
        datasProductBundleUom:[],
        datasProductBundleComponents:[],
        datasProductBundle:[],
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
            const baseURI  =  this.$settings.endPoint+"/products/bundle/detail/"+id;
            
            return this.$http.get(baseURI).then((response) => {
                this.datasProductBundleDetail   = response.data.datas
                this.datasProductBundleCompany  = response.data.datas.company
                this.datasProductBundleUom      = response.data.datas.uom_description
                this.datasProductBundle         = response.data.datas.bundle
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
            window.location.href = '/products/bundle';
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