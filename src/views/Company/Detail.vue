<template>
  <div>
    <section>
      <menu-component classMenu="Company"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

        
        <div class="cards__heading">
            <h3><i class="fas fa-building"></i> Detail Company</h3>
        </div>


        <div class="card card_border p-lg-5 p-3 mb-4">
            <div class="card-body py-3 p-0">
                <div class="row">
                <div class="col-lg-6">
                    <h3 class="block__title mb-lg-4">{{$t('company')}}</h3>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('companyCode')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.company_id}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('companyName')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.name}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('companyAddress')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.address}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('companyAddress2')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.address2}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('country')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.country}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('province')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.province}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('city')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.city}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Area</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.area}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Sub Area</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.sub_area}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('village')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.village}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('postalCode')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.postal_code}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('remarks')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.remarks}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Status</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.status}}</b>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">
                   <h3 class="block__title mb-lg-4">PIC</h3>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">{{$t('name')}}</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.pic}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Email</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.email}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Phone</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.phone}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Mobile</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.mobile}}</b>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label input__label">Fax</label>
                        <div class="col-sm-8">
                            <b>{{this.datasCompanyDetail.fax}}</b>
                        </div>
                    </div>

                    <br>
                    <br>
                   <h3 class="block__title mb-lg-4">Fulfillment</h3>
                    
                    <div v-if="fulfillments.length > 0" >
                        <div v-for="fulfil in fulfillments" :key="fulfil.company_fulfillment_id">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label input__label">{{$t('fulfillmentCode')}}</label>
                                <div class="col-sm-8">
                                    <b>{{fulfil.fulfillment.code}}</b>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label input__label">{{$t('fulfillmentName')}}</label>
                                <div class="col-sm-8">
                                    <b>{{fulfil.fulfillment.name}}</b>
                                </div>
                            </div>
                            <div class="form-group row">
                                <button type="button" @click="show(fulfil.fulfillment)" class="btn btn-primary btn-style mt-4">Detail Fulfillment {{fulfil.fulfillment.code}}</button>
                            </div>

                            <hr>
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


<modal name="detail-fulfillment" :min-width="200" :min-height="200" :scrollable="true" :resizable="true" height="auto">
     <div slot="top-right">
      <button @click="$modal.hide('detail-fulfillment')">
        ❌
      </button>
    </div>

<div class="size-modal-content">
    <div class="col-lg-12">
       <h3 class="block__title mb-lg-12" style="margin-bottom: 1.5rem !important;text-align:center;">Fulfillment</h3>

<table class="table inbox-messages">
    <tbody>
        <tr>
            <td>{{$t('fulfillmentCode')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.code}}</td>
        </tr>
        <tr>
            <td>{{$t('fulfillmentName')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.name}}</td>
        </tr>
        <tr>
            <td>{{$t('fulfillmentAddress')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.address}}</td>
        </tr>
        <tr>
            <td>{{$t('fulfillmentAddress2')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.address2}}</td>
        </tr>
        <tr>
            <td>{{$t('country')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.country}}</td>
        </tr>
        <tr>
            <td>{{$t('province')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.province}}</td>
        </tr>
        <tr>
            <td>{{$t('city')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.city}}</td>
        </tr>
        <tr>
            <td>Area</td>
            <td>:</td>
            <td>{{this.detailFulfillment.area}}</td>
        </tr>
        <tr>
            <td>Sub Area</td>
            <td>:</td>
            <td>{{this.detailFulfillment.sub_area}}</td>
        </tr>
        <tr>
            <td>{{$t('village')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.village}}</td>
        </tr>
        <tr>
            <td>{{$t('postalCode')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.postal_code}}</td>
        </tr>
        <tr>
            <td>Longitude / Latitude</td>
            <td>:</td>
            <td>{{this.detailFulfillment.longitude+' / '+this.detailFulfillment.latitude}}</td>
        </tr>
        <tr>
            <td>{{$t('remarks')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.remarks}}</td>
        </tr>
        <tr>
            <td>Status</td>
            <td>:</td>
            <td>{{this.detailFulfillment.status}}</td>
        </tr>
        <tr>
            <td>{{$t('fulfillmentType')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.fulfillment_center_type_id}}</td>
        </tr>
    </tbody>
</table>


       <h3 class="block__title mb-lg-12" style="margin-bottom: 1.5rem !important;text-align:center;">PIC Fulfillment</h3>

<table class="table inbox-messages">
    <tbody>
        <tr>
            <td>{{$t('name')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.pic}}</td>
        </tr>
        <tr>
            <td>{{$t('phone')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.phone}}</td>
        </tr>
        <tr>
            <td>{{$t('handphone')}}</td>
            <td>:</td>
            <td>{{this.detailFulfillment.mobile}}</td>
        </tr>
        <tr>
            <td>Fax.</td>
            <td>:</td>
            <td>{{this.detailFulfillment.fax}}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>:</td>
            <td>{{this.detailFulfillment.email}}</td>
        </tr>
    </tbody>
</table>


    </div>
</div>
<div class="vue-dialog-buttons"><button type="button" @click="$modal.hide('detail-fulfillment')" class="vue-dialog-button" style="flex: 1 1 100%;color: #fff;background-color: #4755AB;border-color: #4755AB;">CLOSE</button></div>

</modal>



  </div>
</template>
<script>
import menuComponent from '@/views/Menu/Index'

export default {
  name: 'CompanyDetail',
    props: {},
    components: {
        'menu-component':menuComponent,
    },
    data () {
        return {
            detailFulfillment:'',
            datasCompanyDetail:[],
            fulfillments:[],
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

        
        show(datas) {
            this.detailFulfillment  = '';
            this.detailFulfillment  = datas;
            this.$modal.show('detail-fulfillment', {
                dynamicDefaults: {
                    draggable: true,
                    resizable: true,
                    height: 'auto'
                }
            });
        },
        hide () {
            this.detailFulfillment  = ''
            this.$modal.hide('detail-fulfillment');
        },

        fetchIt() {
            const baseURI  =  this.$settings.endPoint+"/company/detail/"+this.$route.params.id;
            
            return this.$http.get(baseURI).then((response) => {
                this.datasCompanyDetail = response.data.datas
                this.fulfillments       = response.data.datas.fulfillments
            })
            
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
 .size-modal-content {
  padding: 10px;
  font-style: 13px;
}
.v--modal-overlay[data-modal='size-modal'] {
  background: rgba(0, 0, 0, 0.5);
}
.demo-modal-class {
  border-radius: 5px;
  background: #f7f7f7;
  box-shadow: 5px 5px 30px 0px rgba(46, 61, 73, 0.6);
}
</style>