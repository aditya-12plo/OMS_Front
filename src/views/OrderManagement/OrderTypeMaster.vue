<template>
  <div>
    <section>
      <menu-component classMenu="OrderManagementOrderTypeMaster"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

          
          
          <div class="accordions">
      <div class="row">
        <!-- accordion style 1 -->
        <div class="col-lg-12 mb-4">
          <div class="card card_border">
            <div class="card-service chart-grid__header">
              <i class="fas fa-warehouse"></i> {{$t('OrderManagementOrderTypeMaster')}}
            </div>
            <div class="card-body">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-service bg-white p-0" id="headingOne" v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'">
                    <button class="btn btn-primary m-1" @click.prevent="createData"><i class="fa fa-plus"></i> {{$t('OrderManagementOrderTypeMasterCreate')}} </button>
                    <button class="btn btn-warning m-1" @click.prevent="downloadData"><i class="fa fa-download"></i> {{$t('download')}} .xlsx</button>
                    
                  </div>



                  <div class="collapse show">
                    <div class="card-body para__style">
                     
                     
<vue-good-table
    title="order-type-master"
    mode="remote"
    @on-page-change="onPageChange"
    @on-sort-change="onSortChange"
    @on-column-filter="onColumnFilter"
    @on-per-page-change="onPerPageChange"
    :totalRows="totalRecords"
    :line-numbers="true"
    :isLoading.sync="isLoading"
    :pagination-options="{
        enabled: true,
    }"
  :rows="rows"
  :columns="columns">
           <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'actions'">
          <button v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" class="btn btn-warning" style="margin-right: 5px;" @click.prevent="editData(props.index , props.row)">Edit</button>
          <button v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" class="btn btn-danger" style="margin-right: 5px;" @click.prevent="deleteData(props.index , props.row)">Delete</button>
        </span>
       
        <span v-else>
            {{props.formattedRow[props.column.field]}}
        </span>
      </template> 
</vue-good-table>


                    </div>
                  </div>
                </div>
                 
                 
              </div>
            </div>
          </div>
        </div>
        <!-- //accordion style 1 -->
      </div>
    </div>
          
          
           

            </div>
 
        </div>
        <!-- main content end-->


    </section>


    <modal name="create-new-OrderManagementOrderTypeMaster" @before-close="beforeCloseModal" height="auto" width="70%" :resizable="false" :adaptive="false" :scrollable="false">
        <h4 style="text-align: center;font-weight: bold;">{{$t('OrderManagementOrderTypeMasterCreate')}}</h4>

<div style="margin: 20px 0;max-height: calc(100vh - 210px);overflow-y: auto;">  
 
<form @submit.prevent="submitData" method="POST">     
     
                       

                        <div class="form-group col-md-12">
                            <label for="order_type_id" class="input__label">{{$t('order_type_id')}}</label>
                            <input type="text" v-model="forms.order_type_id" class="form-control input-style" id="order_type_id" placeholder="Order Type Code" required=""  maxlength="100" @input="forms.order_type_id = $event.target.value.toUpperCase()" @keydown.space.prevent>
                        
                            <div v-if="errors.order_type_id">
                                <div class="invalid-feedback" v-for="error in errors.order_type_id" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="order_type_description" class="input__label">{{$t('order_type_description')}}</label>
                            <input type="text" v-model="forms.order_type_description" class="form-control input-style" id="order_type_description" placeholder="Order Type Description" maxlength="255" required="">
                        
                            <div v-if="errors.order_type_description">
                                <div class="invalid-feedback" v-for="error in errors.order_type_description" :key="error">{{error}}</div>
                            </div>
                        </div>

                        
                        <div class="form-group col-md-12">
                          <button type="button" @click="hide()" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">{{$t('cancelled')}}</button>
                          
                          <button type="submit" class="btn btn-warning btn-style mt-4">Submit</button>

                        </div>
</form>
</div>
    </modal>





    <modal name="editOrderManagementOrderTypeMaster" @before-close="beforeCloseModal" height="auto" width="70%" :adaptive="true" :scrollable="true">
        <h4 style="text-align: center;font-weight: bold;">{{$t('OrderManagementOrderTypeMasterEdit')}}</h4>

 
<div style="margin: 20px 0;max-height: calc(100vh - 210px);overflow-y: auto;"> 
<form @submit.prevent="submitEditData" method="POST">       
           

                        <div class="form-group col-md-12">
                            <label for="order_type_id" class="input__label">{{$t('order_type_id')}}</label>
                            <input type="text" v-model="forms.order_type_id" class="form-control input-style" id="order_type_id" maxlength="100" placeholder="Order Type Code" required="" @input="forms.order_type_id = $event.target.value.toUpperCase()" @keydown.space.prevent>
                        
                            <div v-if="errors.order_type_id">
                                <div class="invalid-feedback" v-for="error in errors.order_type_id" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="order_type_description" class="input__label">{{$t('order_type_description')}}</label>
                            <input type="text" v-model="forms.order_type_description" class="form-control input-style" id="order_type_description" placeholder="Order Type Description" maxlength="255" required="">
                        
                            <div v-if="errors.order_type_description">
                                <div class="invalid-feedback" v-for="error in errors.order_type_description" :key="error">{{error}}</div>
                            </div>
                        </div>
  

                        
                        <div class="form-group col-md-12">
                          <button type="button" @click="hide()" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">{{$t('cancelled')}}</button>
                          
                          <button type="submit" class="btn btn-warning btn-style mt-4">Submit</button>

                        </div>
    </form>
</div>
    </modal>


  </div>
</template>
<script>
import DateRangePicker from 'vue2-daterange-picker';
import menuComponent from '@/views/Menu/Index'
import moment from 'moment';
import vSelect from 'vue-select'
import Autocomplete from '@trevoreyre/autocomplete-vue'

export default {
  name: 'OrderManagementOrderTypeMaster',
  components: {
    'menu-component':menuComponent,
    DateRangePicker,
         Autocomplete,
        'v-select':vSelect,
  },
  data () {
    return {
      dateRange: {
          startDate: '',
          endDate: '',
        },
      localedateRange: {
        direction: 'ltr', //direction of text
        format: 'yyyy-mm-dd',
        separator: ' - ', //separator between the two ranges
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        weekLabel: 'W',
        customRangeLabel: 'Custom Range',
        daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        firstDay: 0
      },
      optionsType:['CASHLESS','NON CASHLESS'],
      optionscod:['ALL' , 'COD' , 'NON COD'],
      userDatas:[],
      maxToasts: 100,
      isLoading: false,  
      position: 'up right',
      closeBtn: true,  
      errors: [],
      services:[],
      order_type_id:"",
      forms: {order_type_id:'',order_type_description:'', created_at:'', updated_at:''},
      langs: ['id', 'en'],
      statuses: ['ACTIVATE','DEACTIVATE'],
      totalRecords: 0,
      serverParams: {
          columnFilters: {},
          sort: {
          field: '', 
          type: '',
        },
        page: 1, 
        per_page: 10
      },
      columns: [
        {
          label: 'Order Type Code',
          field: 'order_type_id',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Order Type Code", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Order Type Description',
          field: 'order_type_description',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Order Type Description", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Action',
          field: 'actions',
          sortable: false,
        },
        ],
        rows: [],
    }
  },
    watch: { 

    },
    filters: {

    },
    methods: {
      
      deleteData(index , row){

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
              
              const baseURI  =  this.$settings.endPoint+"/order-type-master/delete/"+row.order_type_id;
                    
              this.$http.delete(baseURI)
                .then((response) => {
                  if(response.data.status === 200) {
                    this.hide();
                    this.loadItems();
                    this.success(response.data.datas.message);
                  }else{
                    this.errors = response.data.errors;
                  }
              }).catch(error => {
                if (error.response) {
                  if(error.response.status === 422) {
                    this.errors = error.response.data.errors;
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


      submitEditData(){

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
              var formData = {
                  order_type_id             : this.forms.order_type_id,
                  order_type_description    : this.forms.order_type_description
                };

              const baseURI  =  this.$settings.endPoint+"/order-type-master/update/"+this.order_type_id;
                    
              this.$http.put(baseURI,formData)
                .then((response) => {
                  if(response.data.status === 200) {
                    this.hide();
                    this.loadItems();
                    this.success(response.data.datas.message);
                  }else{
                    this.errors = response.data.errors;
                  }
              }).catch(error => {
                if (error.response) {
                  if(error.response.status === 422) {
                    this.errors = error.response.data.errors;
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
              let formData = new FormData();
              formData.append("order_type_id", this.forms.order_type_id);
              formData.append("order_type_description", this.forms.order_type_description);
                    
              const baseURI  =  this.$settings.endPoint+"/order-type-master/add";
                    
              this.$http.post(baseURI,formData)
                .then((response) => {
                  if(response.data.status === 200) {
                    this.hide();
                    this.loadItems();
                    this.success(response.data.datas.message);
                  }else{
                    this.errors = response.data.errors;
                  }
              }).catch(error => {
                if (error.response) {
                  if(error.response.status === 422) {
                    this.errors = error.response.data.errors;
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
        
      dateFormat (value, fmt = 'YYYY-MM-DD') {
        return value ? moment(value).format("YYYY-MM-DD") : "";
      },
 

      downloadData(){

        const columnFilters                     = this.serverParams;
        
        let formData = new FormData();
        formData.append("columnFilters", JSON.stringify(columnFilters));

        const baseURI  =  this.$settings.endPoint+"/order-type-master/download";
        this.$http.post(baseURI,formData,{responseType: 'blob'})
          .then((response) => {
              this.loading();
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));

            var fileLink = document.createElement('a');
            fileLink.href = fileURL;

            fileLink.setAttribute('download', 'order-type-master-datas.xls');

            document.body.appendChild(fileLink);
            fileLink.click();

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
      },

      createData(){
        this.$modal.show('create-new-OrderManagementOrderTypeMaster');
      },

      hide() {
        this.beforeCloseModal();
        this.errors     = [];
        this.$modal.hide('create-new-OrderManagementOrderTypeMaster');
        this.$modal.hide('editOrderManagementOrderTypeMaster');
      },

      beforeCloseModal(){
        this.order_type_id                  = ''
        this.forms.order_type_id            = ''
        this.forms.order_type_description   = ''
        this.forms.created_at               = ''
        this.forms.updated_at               = ''
      },
      

      editData(index , row){
        this.order_type_id                  = row.order_type_id     
        this.forms.order_type_id            = row.order_type_id
        this.forms.order_type_description   = row.order_type_description 
        this.forms.created_at               = row.created_at
        this.forms.updated_at               = row.updated_at
        this.$modal.show('editOrderManagementOrderTypeMaster');
      },
      


      // load items is what brings back the rows from server
      loadItems() {
        const baseURI   =  this.$settings.endPoint+"/order-type-master/index";
        return this.$http.get(baseURI+`?per_page=${this.serverParams.per_page}&page=${this.serverParams.page}&sort_field=${this.serverParams.sort.field}&sort_type=${this.serverParams.sort.type}&order_type_id=${this.serverParams.columnFilters.order_type_id}&order_type_description=${this.serverParams.columnFilters.order_type_description}`).then((response) => {
          this.rows = response.data.datas.data
          this.totalRecords  = response.data.datas.data.total
        })
      },

      
      updateParams(newProps) {
        this.serverParams = Object.assign({}, this.serverParams, newProps);
        this.loadItems();
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

      onColumnFilter(params) {
        this.updateParams(params);
      },
      
      onPageChange(params) {
        this.updateParams({page: params.currentPage});
      },
      
      onSortChange(params) {
        this.updateParams({
          sort: {
            type: params[0].type,
            field: params[0].field,
          },
        });
      },

      onPerPageChange(params) {
        this.updateParams({per_page: params.currentPerPage});
      },

      resultError(data) {  
        const count = Object.keys(data).length;
          for(const x=0; x < count;x++){ 
            const nameOb      = Object.keys(data)[x];
            const objectData  = data[nameOb];
            for(const y=0; y < objectData.length;y++){ 
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
        const datasUser = this.$getUserInfo();
        this.userDatas = datasUser.sub;
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