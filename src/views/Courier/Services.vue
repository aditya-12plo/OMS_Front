<template>
  <div>
    <section>
      <menu-component classMenu="CourierServices"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

          
          
          <div class="accordions">
      <div class="row">
        <!-- accordion style 1 -->
        <div class="col-lg-12 mb-4">
          <div class="card card_border">
            <div class="card-service chart-grid__header">
              <i class="fas fa-warehouse"></i> {{$t('courierService')}}
            </div>
            <div class="card-body">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-service bg-white p-0" id="headingOne" v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'">
                    <button class="btn btn-primary m-1" @click.prevent="createData"><i class="fa fa-plus"></i> {{$t('CourierServiceCreate')}} </button>
                    <button class="btn btn-warning m-1" @click.prevent="downloadData"><i class="fa fa-download"></i> {{$t('download')}} .xlsx</button>
                    
                  </div>



                  <div class="collapse show">
                    <div class="card-body para__style">
                     
                     
<vue-good-table
    title="courier-services"
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
        </span>
        <span v-else-if="props.column.field == 'cod'">
              <div v-if="props.row.cod == '0'">
                ALL
              </div>
              <div v-else-if="props.row.cod == '1'">
                COD
              </div>
              <div v-else>
                NON COD
              </div>
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


    <modal name="create-new-CourierService" @before-close="beforeCloseModal" height="auto" width="100%" :adaptive="true" :scrollable="true">
        <h4 style="text-align: center;font-weight: bold;">{{$t('CourierServiceCreate')}}</h4>

 
<form @submit.prevent="submitData" method="POST">       
  
                        <div class="form-group col-md-12">
                            <label for="courier_id" class="input__label">{{$t('CourierHeaderId')}}</label>
                            
                            <v-select :options="optionsCourierHeader" label="name" placeholder="Choose a Courier Header" v-model="forms.courier_id" @search="onSearchCourierHeader">
                            <slot name="spinner">
                                <div class="spinner">Loading...</div>
                            </slot>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.courier_id"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>
  

                            <div v-if="errors.courier_id">
                                <div class="invalid-feedback" v-for="error in errors.courier_id" :key="error">{{error}}</div>
                            </div>
                        </div>  
  
                        <div class="form-group col-md-12">
                            <label for="courier_service_id" class="input__label">{{$t('courierServiceId')}}</label>
                            <input type="text" v-model="forms.courier_service_id" class="form-control input-style" id="courier_service_id" placeholder="Courier Service Code" maxlength="255" required="" @input="forms.courier_service_id = $event.target.value.toUpperCase()" @keydown.space.prevent>
                        
                            <div v-if="errors.courier_service_id">
                                <div class="invalid-feedback" v-for="error in errors.courier_service_id" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="courier_service_code" class="input__label">{{$t('courierServiceCode')}}</label>
                            <input type="text" v-model="forms.courier_service_code" class="form-control input-style" id="courier_service_code" placeholder="Courier Service Code" maxlength="255" required="" @input="forms.courier_service_code = $event.target.value.toUpperCase()" @keydown.space.prevent>
                        
                            <div v-if="errors.courier_service_code">
                                <div class="invalid-feedback" v-for="error in errors.courier_service_code" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="courier_service_name" class="input__label">{{$t('courierServiceName')}}</label>
                            <input type="text" v-model="forms.courier_service_name" class="form-control input-style" id="courier_service_name" placeholder="Courier Service Name" maxlength="255" required="">
                        
                            <div v-if="errors.courier_service_name">
                                <div class="invalid-feedback" v-for="error in errors.courier_service_name" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="cod" class="input__label">{{$t('courierServiceCod')}}</label>
                          
                            <v-select :options="optionscod"  placeholder="Choose a COD Type" v-model="forms.cod">
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.cod"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>


                            <div v-if="errors.cod">
                                <div class="invalid-feedback" v-for="error in errors.cod" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="type" class="input__label">{{$t('courierServiceType')}}</label>
                                 
                            <v-select :options="optionsType" label="label" placeholder="Choose a Service Type" v-model="forms.type">
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.type"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>

                            <div v-if="errors.type">
                                <div class="invalid-feedback" v-for="error in errors.type" :key="error">{{error}}</div>
                            </div>
                        </div>
  

                        <div class="form-group col-md-12">
                            <label for="status" class="input__label">{{$t('courierServiceStatus')}}</label>
                                 
                            <v-select :options="statuses"  placeholder="Choose a Service Status" v-model="forms.status">
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
  

                        
                        <div class="form-group col-md-12">
                          <button type="button" @click="hide()" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">{{$t('cancelled')}}</button>
                          
                          <button type="submit" class="btn btn-warning btn-style mt-4">Submit</button>

                        </div>
</form>
    </modal>



    <modal name="editCourierService" @before-close="beforeCloseModal" height="auto" width="100%" :adaptive="true" :scrollable="true">
        <h4 style="text-align: center;font-weight: bold;">{{$t('CourierServiceEdit')}}</h4>

 
<form @submit.prevent="submitEditData" method="POST">       
           
           
                        <div class="form-group col-md-12">
                            <label for="courier_id" class="input__label">{{$t('CourierHeaderId')}}</label>
                            
                            <v-select :options="optionsCourierHeader" label="name" placeholder="Choose a Courier Header" v-model="forms.courier_id" @search="onSearchCourierHeader">
                            <slot name="spinner">
                                <div class="spinner">Loading...</div>
                            </slot>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.courier_id"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>
  

                            <div v-if="errors.courier_id">
                                <div class="invalid-feedback" v-for="error in errors.courier_id" :key="error">{{error}}</div>
                            </div>
                        </div>  
  
                        <div class="form-group col-md-12">
                            <label for="courier_service_id" class="input__label">{{$t('courierServiceId')}}</label>
                            <input type="text" v-model="forms.courier_service_id" class="form-control input-style" id="courier_service_id" placeholder="Courier Service Code" maxlength="255" required="" @input="forms.courier_service_id = $event.target.value.toUpperCase()" @keydown.space.prevent>
                        
                            <div v-if="errors.courier_service_id">
                                <div class="invalid-feedback" v-for="error in errors.courier_service_id" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="courier_service_code" class="input__label">{{$t('courierServiceCode')}}</label>
                            <input type="text" v-model="forms.courier_service_code" class="form-control input-style" id="courier_service_code" placeholder="Courier Service Code" maxlength="255" required="" @input="forms.courier_service_code = $event.target.value.toUpperCase()" @keydown.space.prevent>
                        
                            <div v-if="errors.courier_service_code">
                                <div class="invalid-feedback" v-for="error in errors.courier_service_code" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="courier_service_name" class="input__label">{{$t('courierServiceName')}}</label>
                            <input type="text" v-model="forms.courier_service_name" class="form-control input-style" id="courier_service_name" placeholder="Courier Service Name" maxlength="255" required="">
                        
                            <div v-if="errors.courier_service_name">
                                <div class="invalid-feedback" v-for="error in errors.courier_service_name" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="cod" class="input__label">{{$t('courierServiceCod')}}</label>
                          
                            <v-select :options="optionscod" label="label" placeholder="Choose a COD Type" v-model="forms.cod">
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.cod"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>


                            <div v-if="errors.cod">
                                <div class="invalid-feedback" v-for="error in errors.cod" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="type" class="input__label">{{$t('courierServiceType')}}</label>
                                 
                            <v-select :options="optionsType"  placeholder="Choose a Service Type" v-model="forms.type">
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.type"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>

                            <div v-if="errors.type">
                                <div class="invalid-feedback" v-for="error in errors.type" :key="error">{{error}}</div>
                            </div>
                        </div>
  

                        <div class="form-group col-md-12">
                            <label for="status" class="input__label">{{$t('courierServiceStatus')}}</label>
                                 
                            <v-select :options="statuses"  placeholder="Choose a Service Status" v-model="forms.status">
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
  

                        
                        <div class="form-group col-md-12">
                          <button type="button" @click="hide()" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">{{$t('cancelled')}}</button>
                          
                          <button type="submit" class="btn btn-warning btn-style mt-4">Submit</button>

                        </div>
</form>
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
  name: 'CourierServices',
  components: {
    'menu-component':menuComponent,
    DateRangePicker,
         Autocomplete,
        'v-select':vSelect,
  },
  data () {
    return {
        optionsCourierHeader:[],
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
      courier_service_id:'',
      maxToasts: 100,
      isLoading: false,  
      position: 'up right',
      closeBtn: true,  
      errors: [],
      services:[],
      forms: {courier_service_id:'',courier_id:'', courier_service_code:'' , courier_service_name:'', cod:'' , type:'', status:''},
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
          label: 'Courier Header Code',
          field: 'courier_id',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Courier Header", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Courier Service ID',
          field: 'courier_service_id',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Courier Service ID", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Courier Service Code',
          field: 'courier_service_code',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Courier Service Code", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Courier Service Description',
          field: 'courier_service_name',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Courier Service Description", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'COD Status',
          field: 'cod',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By COD Status", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: ['ALL' , 'COD' , 'NON COD'], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Courier Service Type',
          field: 'type',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Courier Service Type", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: ['CASHLESS','NON CASHLESS'], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Status',
          field: 'status',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Status", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: ['ACTIVATE','DEACTIVATE'], // dropdown (with selected values) instead of text input
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
      
        onSearchCourierHeader(search, loading) {
            if(search.length > 2) {
                loading(true);
                 this.searchCourierHeader(search,loading);
            }
        }, 


        searchCourierHeader(val,loading){

            const baseURI  =  this.$settings.endPoint+"/courier-header/index";
            return this.$http.get(baseURI+`?name=${val}`).then((response) => {
                var datas   = response.data.datas.data
                if(datas.length <= 0){
                    this.optionsCourierHeader =  []
                }else{
                    this.optionsCourierHeader = datas
                }
                loading(false);
            })
        },

        getCourierHeader(result){
            return result.courier_id
        },

        
        submitCourierHeader(result) {
            this.forms.courier_id = result.courier_id
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
                  courier_id            : this.forms.courier_id.courier_id.trim(),
                  courier_service_id    : this.forms.courier_service_id.trim(),
                  courier_service_code  : this.forms.courier_service_code.trim(),
                  courier_service_name  : this.forms.courier_service_name,
                  cod                   : this.forms.cod.code,
                  type                  : this.forms.type,
                  status                : this.forms.status
                };

              const baseURI  =  this.$settings.endPoint+"/courier-service/update/"+this.courier_service_id;
                    
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
              formData.append("courier_service_id", this.forms.courier_service_id.trim());
              formData.append("courier_id", this.forms.courier_id.courier_id.trim());
              formData.append("courier_service_code", this.forms.courier_service_code.trim());
              formData.append("courier_service_name", this.forms.courier_service_name);
              formData.append("cod", this.forms.cod.code);
              formData.append("type", this.forms.type);
              formData.append("status", this.forms.status);
                    
              const baseURI  =  this.$settings.endPoint+"/courier-service/add";
                    
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

        const baseURI  =  this.$settings.endPoint+"/courier-service/download";
        this.$http.post(baseURI,formData,{responseType: 'blob'})
          .then((response) => {
              this.loading();
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));

            var fileLink = document.createElement('a');
            fileLink.href = fileURL;

            fileLink.setAttribute('download', 'courier-service-datas.xls');

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
        this.$modal.show('create-new-CourierService');
      },

      hide() {
        this.beforeCloseModal();
        this.errors     = [];
        this.services   = [];
        this.$modal.hide('create-new-CourierService');
        this.$modal.hide('editCourierService');
      },

      beforeCloseModal(){
        this.courier_service_id         = ''
        this.forms.courier_id           = ''
        this.forms.courier_service_code = ''
        this.forms.courier_service_name = ''
        this.forms.cod                  = ''
        this.forms.type                 = ''
        this.forms.status               = ''
      },
      

      editData(index , row){
        if(row.cod == 0){
            this.forms.cod                = { code: '0', label: 'ALL' }
        }else if(row.cod == 1){
            this.forms.cod                = { code: '1', label: 'COD' }
        }else{
            this.forms.cod                = { code: '2', label: 'NON COD' }
        }
        
        this.courier_service_id         = row.courier_service_id
        this.forms.courier_service_id   = row.courier_service_id
        this.forms.courier_id           = row.courier
        this.forms.courier_service_code = row.courier_service_code
        this.forms.courier_service_name = row.courier_service_name
        this.forms.type                 = row.type
        this.forms.status               = row.status
        // this.$refs.Acourier_id.childMethod(row.courier_id)
        this.$modal.show('editCourierService');
      },
      
        
        myCourierHeader (value) {
            this.$refs.Acourier_id.setValue({"courier_id": value})
        },


      // load items is what brings back the rows from server
      loadItems() {
        const baseURI   =  this.$settings.endPoint+"/courier-service/index";
        return this.$http.get(baseURI+`?per_page=${this.serverParams.per_page}&page=${this.serverParams.page}&sort_field=${this.serverParams.sort.field}&sort_type=${this.serverParams.sort.type}&courier_id=${this.serverParams.columnFilters.courier_id}&courier_service_id=${this.serverParams.columnFilters.courier_service_id}&courier_service_code=${this.serverParams.columnFilters.courier_service_code}&courier_service_name=${this.serverParams.columnFilters.courier_service_name}&cod=${this.serverParams.columnFilters.cod}&type=${this.serverParams.columnFilters.type}&status=${this.serverParams.columnFilters.status}`).then((response) => {
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