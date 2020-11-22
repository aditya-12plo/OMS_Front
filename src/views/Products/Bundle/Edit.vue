<template>
  <div>
    <section>
      <menu-component classMenu="ProductsBundleEdit"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-barcode"></i> {{$t('editProducts')}}</h3>
        </div>

<form @submit.prevent="submitData" method="POST">

        <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">{{$t('product')}}</h3>

                        <div class="form-group col-md-12">
                            <label for="companyName" class="input__label">{{$t('companyName')}}</label>
                            <v-select :options="options" label="name" placeholder="Choose a Company" v-model="forms.company" :reduce="companyDatas => `${companyDatas.company_id}`" @search="searchCompany" autocomplete>
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
                            <label for="sku" class="input__label">{{$t('sku')}}</label>
                            <input type="text" v-model="forms.product_code" class="form-control input-style" id="sku" @keydown="removeSpecial($event)" placeholder="Product Code / SKU Code" required="" maxlength="255" @input="forms.product_code = $event.target.value.toUpperCase()">
                        
                            <div v-if="errors.product_code">
                                <div class="invalid-feedback" v-for="error in errors.product_code" :key="error">{{error}}</div>
                            </div>
                        </div>

                        
                        <div class="form-group col-md-12">
                            <label for="productName" class="input__label">{{$t('productName')}}</label>
                            <input type="text" v-model="forms.product_name" class="form-control input-style" id="productName" placeholder="Product Name" required="" maxlength="255">
                        
                            <div v-if="errors.product_name">
                                <div class="invalid-feedback" v-for="error in errors.product_name" :key="error">{{error}}</div>
                            </div>
                        </div>

                        
                        <div class="form-group col-md-12">
                            <label for="productComponents" class="input__label">{{$t('productComponents')}}</label>
                            <br>
                            <div class="form-group col-md-12" v-for="(input, index) in inputs " :key="index">
                                <div class="form-group row">
                                    <div class="form-group col-md-5">
                                        <label for="sku" class="input__label">{{$t('sku')}}</label>
                                        <v-select :options="optionsNormalProducts" label="product_code" :reduce="product => `${product.product_id}`" placeholder="Choose a Product Code" v-model="input.product_id" @search="searchNormalProducts" autocomplete>
                                        <template #search="{attributes, events}">
                                            <input
                                            class="vs__search"
                                            :required="!input.product_id"
                                            v-bind="attributes"
                                            v-on="events"
                                            />
                                        </template>
                                        <template slot="option" slot-scope="option">
                                        {{ option.product_code}} - {{option.product_description}}
                                        </template>
                                        </v-select>
                                    </div>
                                    <div class="form-group col-md-5">
                                        <label for="qty" class="input__label">QTY</label>
                                        <input type="text" v-model="input.product_qty" class="form-control input-style" placeholder="QTY" required="" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                                    
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="qty" class="input__label"> 	&nbsp; </label>
                                        <button @click="deleteRow(index)" class="btn btn-danger btn-style mt-4" type="button">Delete</button>
                                    </div>

                                </div>
                            </div>

                            <button @click="addRow" class="btn btn-primary btn-style mt-4" type="button">Add row</button>


                            <div v-if="errors.product_components">
                                <div class="invalid-feedback" v-for="error in errors.product_components" :key="error">{{error}}</div>
                            </div>
                        </div>
                        
                        
                        <div class="form-group col-md-12">
                            <label for="uom" class="input__label">{{$t('uom')}}</label>
                            <v-select :options="optionsUom" label="uom_description" placeholder="Choose a Uom" v-model="forms.uom_code" :reduce="uom => `${uom.uom_code}`" @search="searchUom" autocomplete>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.uom_code"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>
                            
                            <div v-if="errors.uom_code">
                                <div class="invalid-feedback" v-for="error in errors.uom_code" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="currency" class="input__label">{{$t('currency')}}</label>
                            <input type="text" v-model="forms.currency" class="form-control input-style" id="currency" placeholder="Currency" required="" maxlength="255">
                        
                            <div v-if="errors.currency">
                                <div class="invalid-feedback" v-for="error in errors.currency" :key="error">{{error}}</div>
                            </div>
                        </div>
 
                        <div class="form-group col-md-12">
                            <label for="priceProduct" class="input__label">{{$t('priceProduct')}}</label>
                            <money v-model="forms.price" v-bind="money" class="form-control input-style" required=""></money>
                            <div v-if="errors.price">
                                <div class="invalid-feedback" v-for="error in errors.price" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="width" class="input__label">{{$t('width')}}</label>
                            <money v-model="forms.width" v-bind="money" class="form-control input-style" required=""></money>
                            <div v-if="errors.width">
                                <div class="invalid-feedback" v-for="error in errors.width" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="height" class="input__label">{{$t('height')}}</label>
                            <money v-model="forms.height" v-bind="money" class="form-control input-style" required=""></money>
                            <div v-if="errors.height">
                                <div class="invalid-feedback" v-for="error in errors.height" :key="error">{{error}}</div>
                            </div>
                        </div>
                    


                        <div class="form-group col-md-12">
                            <label for="weight" class="input__label">{{$t('weight')}}</label>
                            <money v-model="forms.weight" v-bind="money" class="form-control input-style" required=""></money>
                            <div v-if="errors.weight">
                                <div class="invalid-feedback" v-for="error in errors.weight" :key="error">{{error}}</div>
                            </div>
                        </div>


                        <div class="form-group col-md-12">
                            <label for="net_weight" class="input__label">{{$t('net_weight')}}</label>
                            <money v-model="forms.net_weight" v-bind="money" class="form-control input-style" required=""></money>
                            <div v-if="errors.net_weight">
                                <div class="invalid-feedback" v-for="error in errors.net_weight" :key="error">{{error}}</div>
                            </div>
                        </div>


                        <div class="form-group col-md-12">
                            <label for="gross_weight" class="input__label">{{$t('gross_weight')}}</label>
                            <money v-model="forms.gross_weight" v-bind="money" class="form-control input-style" required=""></money>
                            <div v-if="errors.gross_weight">
                                <div class="invalid-feedback" v-for="error in errors.gross_weight" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="qty_per_carton" class="input__label">{{$t('qty_per_carton')}}</label>
                            <input type="text" v-model="forms.qty_per_carton" class="form-control input-style" id="postalCode" placeholder="Qty Per Carton" required="" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                            <div v-if="errors.qty_per_carton">
                                <div class="invalid-feedback" v-for="error in errors.qty_per_carton" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="carton_per_pallet" class="input__label">{{$t('carton_per_pallet')}}</label>
                            <input type="text" v-model="forms.carton_per_pallet" class="form-control input-style" id="postalCode" placeholder="Carton Per Pallet" required="" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                            <div v-if="errors.carton_per_pallet">
                                <div class="invalid-feedback" v-for="error in errors.carton_per_pallet" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="cube" class="input__label">{{$t('cube')}}</label>
                            <money v-model="forms.cube" v-bind="money" class="form-control input-style" required=""></money>
                            <div v-if="errors.cube">
                                <div class="invalid-feedback" v-for="error in errors.cube" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="Barcode" class="input__label">Barcode</label>
                            <input type="text" v-model="forms.barcode" class="form-control input-style" id="Barcode" placeholder="Barcode" maxlength="255">
                            <div v-if="errors.barcode">
                                <div class="invalid-feedback" v-for="error in errors.barcode" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="time_to_live" class="input__label">{{$t('time_to_live')}}</label>
                            <br>
                            <label class="radio-inline"><input type="radio" value="1" v-model.number="forms.time_to_live"> TRUE </label>
                             <br>
                            <label class="radio-inline"><input type="radio" value="0" v-model.number="forms.time_to_live"> FALSE</label>
                             <br>
                            <div v-if="errors.time_to_live">
                                <div class="invalid-feedback" v-for="error in errors.barcode" :key="error">{{error}}</div>
                            </div>
                        </div>

                </div>
                <div class="col-lg-6">
                   <h3 class="block__title mb-lg-4">{{$t('inventory')}}</h3>

                    <div v-for="stock in this.datasProductBundleEdit.inventory" :key="stock.inventory_id">
                        
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
  name: 'ProductsBundleDetail',
  props:{},
    // props: {
    //   datasProductBundleEdit: {
    //     type: Object,
    //     required: true
    //   }
    // },
    components: {
        'menu-component':menuComponent,
        'v-select':vSelect,
    },
    data () {
        return {
            datasProductBundleEdit:[],
            maxToasts: 100,
            isLoading: false,  
            inputs: [],
            optionsNormalProducts: [],
            position: 'up right',
            closeBtn: true,  
            errors: [],
            forms: {product_id:'',company:'', product_code:'', product_name: '', uom_code: '', price: '', width: ''
                    , height: '', weight: '', net_weight: '', gross_weight: '', qty_per_carton: '', carton_per_pallet: '', cube: ''
                    , currency: '', barcode: '', time_to_live: '', type: '' , product_components:[]
            },
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
        searchNormalProducts(val){
            this.optionsNormalProducts = [];
            var company = '';
            if(this.forms.company){
                company = this.forms.company;
            }
            const baseURI  =  this.$settings.endPoint+"/products/normal/index";
            return this.$http.get(baseURI+`?company_id=${company}&product_code=${val}`).then((response) => {
                this.optionsNormalProducts = response.data.data
            })
        },
        addRow() {
            this.inputs.push({
                product_id: '',
                product_qty: ''
            })
        },
        deleteRow(index) {
            this.inputs.splice(index,1)
        },

        checkComponents(array){
            var arrResult = [];
            for(var x=0;x < array.length; x++){
                if(typeof array[x].product_id === 'string' || array[x].product_id instanceof String){
                    arrResult[x] = array[x];
                }else{
                    arrResult[x] = {product_id:array[x].product_id.product_id , product_qty:array[x].product_qty};
                }
            }

            return arrResult;
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
                     if(this.inputs.length > 0){
                        this.fade(true);
                        
                        if (this.forms.product_code.trim()) {
                            
                            var components = this.checkComponents(this.inputs);
                            var formData = {
                                                product_code        : this.forms.product_code.trim(),
                                                company             : this.forms.company,
                                                product_name        : this.forms.product_name,
                                                uom_code            : this.forms.uom_code,
                                                price               : this.forms.price,
                                                width               : this.forms.width,
                                                height              : this.forms.height,
                                                weight              : this.forms.weight,
                                                net_weight          : this.forms.net_weight,
                                                gross_weight        : this.forms.gross_weight,
                                                qty_per_carton      : this.forms.qty_per_carton,
                                                carton_per_pallet   : this.forms.carton_per_pallet,
                                                cube                : this.forms.cube,
                                                currency            : this.forms.currency,
                                                barcode             : this.forms.barcode,
                                                time_to_live        : this.forms.time_to_live,
                                                product_components  : JSON.stringify(components)
                                            };
                            
                            const baseURI  =  this.$settings.endPoint+"/products/bundle/update/"+this.forms.product_id;
                            
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
                     }else{
                        this.errors = {product_components:['Product Components Required']};
                        this.error('Product Components Required');
                     }
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
        
        
        getUom(){
            const baseURI  =  this.$settings.endPoint+"/uom/index";
            return this.$http.get(baseURI).then((response) => {
                this.optionsUom = response.data.data
            })
        },

        searchUom(val){
            const baseURI  =  this.$settings.endPoint+"/uom/index";
            return this.$http.get(baseURI+`?uom_description=${val}`).then((response) => {
                this.optionsUom = response.data.data
            })
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
            window.location.href = '/products/Bundle';
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
            
            var id  = this.$onBehind(this.$route.params.id);
            const baseURI  =  this.$settings.endPoint+"/products/bundle/detail/"+id;
            
            return this.$http.get(baseURI).then((response) => {
                this.options                        = [response.data.datas.company]
                this.optionsUom                     = [response.data.datas.uom_description]
                this.datasProductBundleEdit         = response.data.datas;
                this.forms.product_id               = response.data.datas.product_id
                this.forms.product_code             = response.data.datas.product_code
                this.forms.company                  = response.data.datas.company_id
                this.forms.product_name             = response.data.datas.product_description
                this.forms.uom_code                 = response.data.datas.uom_code
                this.forms.price                    = response.data.datas.price
                this.forms.width                    = response.data.datas.width
                this.forms.height                   = response.data.datas.height
                this.forms.weight                   = response.data.datas.weight
                this.forms.net_weight               = response.data.datas.net_weight
                this.forms.gross_weight             = response.data.datas.gross_weight
                this.forms.qty_per_carton           = response.data.datas.qty_per_carton
                this.forms.carton_per_pallet        = response.data.datas.carton_per_pallet
                this.forms.cube                     = response.data.datas.cube
                this.forms.currency                 = response.data.datas.currency
                this.forms.barcode                  = response.data.datas.barcode
                this.forms.time_to_live             = response.data.datas.time_to_live
                this.forms.type                     = response.data.datas.type
                this.forms.product_components       = []
                this.inputs                         = this.functionInputs(response.data.datas.bundle)
                this.optionsNormalProducts          = this.functionProductInputs(response.data.datas.bundle)
            })
            
        },

        functionInputs(datas){
            var index;
            var array = [];
            for (index = 0; index < datas.length; ++index) {
                array[index]    = {product_id:datas[index].product , product_qty:datas[index].qty};
            }
            return array;
        },

        functionProductInputs(datas){
            var index;
            var array = [];
            for (index = 0; index < datas.length; ++index) {
                array[index]    = datas[index].product;
            }
            return array;
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