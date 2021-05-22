<template>
  <div>
    <section>
      <menu-component classMenu="CourierChannel"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

          
          
          <div class="accordions">
      <div class="row">
        <!-- accordion style 1 -->
        <div class="col-lg-12 mb-4">
          <div class="card card_border">
            <div class="card-service chart-grid__header">
              <i class="fas fa-warehouse"></i> {{$t('CourierChannel')}}
            </div>
            <div class="card-body">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-service bg-white p-0" id="headingOne" v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'">
                    <button class="btn btn-primary m-1" @click.prevent="createData"><i class="fa fa-plus"></i> {{$t('CourierChannelCreate')}} </button>
                    <button class="btn btn-warning m-1" @click.prevent="downloadData"><i class="fa fa-download"></i> {{$t('download')}} .xlsx</button>
                    
                  </div>



                  <div class="collapse show">
                    <div class="card-body para__style">
                     
                     
<vue-good-table
    title="courier-channel"
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


    <modal name="create-new-CourierChannel" @before-close="beforeCloseModal" height="auto" width="70%" :resizable="false" :adaptive="false" :scrollable="false">
        <h4 style="text-align: center;font-weight: bold;">{{$t('CourierChannelCreate')}}</h4>

<div style="margin: 20px 0;max-height: calc(100vh - 210px);overflow-y: auto;">  
 
<form @submit.prevent="submitData" method="POST">     
     
                        <div class="form-group col-md-12">
                            <label for="courier_service_id" class="input__label">{{$t('courierServiceId')}}</label>
                             
                            <v-select :options="optionsCourierService" label="courier_service_id" placeholder="Choose a Courier Service ID" v-model="forms.courier_service_id" @search="onSearchCourierHeader">
                            <slot name="spinner">
                                <div class="spinner">Loading...</div>
                            </slot>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.courier_service_id"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>

                            <div v-if="errors.courier_service_id">
                                <div class="invalid-feedback" v-for="error in errors.courier_service_id" :key="error">{{error}}</div>
                            </div>
                        </div>  
  
      
  
                        <div class="form-group col-md-12">
                            <label for="company_id" class="input__label">{{$t('companyId')}}</label>
                             
                            <v-select :options="optionsCompany" label="name" placeholder="Choose a Company" v-model="forms.company_id" @search="onSearchCompany">
                            <slot name="spinner">
                                <div class="spinner">Loading...</div>
                            </slot>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.company_id"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>

                            <div v-if="errors.company_id">
                                <div class="invalid-feedback" v-for="error in errors.company_id" :key="error">{{error}}</div>
                            </div>
                        </div>  

                        <div class="form-group col-md-12">
                            <label for="username" class="input__label">{{$t('usernameAPI')}}</label>
                            <input type="text" v-model="forms.username" class="form-control input-style" id="username" placeholder="Username API" maxlength="255">
                        
                            <div v-if="errors.username">
                                <div class="invalid-feedback" v-for="error in errors.username" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="password" class="input__label">{{$t('passwordAPI')}}</label>
                            <input type="text" v-model="forms.password" class="form-control input-style" id="password" placeholder="Password API" maxlength="255">
                        
                            <div v-if="errors.password">
                                <div class="invalid-feedback" v-for="error in errors.password" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="key" class="input__label">{{$t('keyAPI')}}</label>
                            <input type="text" v-model="forms.key" class="form-control input-style" id="key" placeholder="Key API" maxlength="255">
                        
                            <div v-if="errors.key">
                                <div class="invalid-feedback" v-for="error in errors.key" :key="error">{{error}}</div>
                            </div>
                        </div>


                        <div class="form-group col-md-12">
                            <label for="partnercode" class="input__label">{{$t('partnercodeAPI')}}</label>
                            <input type="text" v-model="forms.partnercode" class="form-control input-style" id="partnercode" placeholder="Partner Code API" maxlength="255">
                        
                            <div v-if="errors.partnercode">
                                <div class="invalid-feedback" v-for="error in errors.partnercode" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="cod" class="input__label">{{$t('CourierChannelCod')}}</label>
                          
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
                            <label for="access_token" class="input__label">{{$t('access_tokenAPI')}}</label>
                            <input type="text" v-model="forms.access_token" class="form-control input-style" id="access_token" placeholder="Access Token API" maxlength="255">
                        
                            <div v-if="errors.access_token">
                                <div class="invalid-feedback" v-for="error in errors.access_token" :key="error">{{error}}</div>
                            </div>
                        </div>
  

                        <div class="form-group col-md-12">
                            <label for="refresh_token" class="input__label">{{$t('refresh_tokenAPI')}}</label>
                            <input type="text" v-model="forms.refresh_token" class="form-control input-style" id="refresh_token" placeholder="Refresh Token API" maxlength="255">
                        
                            <div v-if="errors.refresh_token">
                                <div class="invalid-feedback" v-for="error in errors.refresh_token" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add1" class="input__label">{{$t('add1')}}</label>
                            <input type="text" v-model="forms.add1" class="form-control input-style" id="add1" placeholder="Addtional String" maxlength="255">
                        
                            <div v-if="errors.add1">
                                <div class="invalid-feedback" v-for="error in errors.add1" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add2" class="input__label">{{$t('add2')}}</label>
                            <input type="text" v-model="forms.add2" class="form-control input-style" id="add2" placeholder="Addtional String" maxlength="255">
                        
                            <div v-if="errors.add2">
                                <div class="invalid-feedback" v-for="error in errors.add2" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add3" class="input__label">{{$t('add3')}}</label>
                            <input type="text" v-model="forms.add3" class="form-control input-style" id="add3" placeholder="Addtional String" maxlength="255">
                        
                            <div v-if="errors.add3">
                                <div class="invalid-feedback" v-for="error in errors.add3" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add4" class="input__label">{{$t('add4')}}</label>
                            <input type="text" v-model="forms.add4" class="form-control input-style" id="add4" placeholder="Addtional String">
                        
                            <div v-if="errors.add4">
                                <div class="invalid-feedback" v-for="error in errors.add4" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add5" class="input__label">{{$t('add5')}}</label>
                            <input type="text" v-model="forms.add5" class="form-control input-style" id="add5" placeholder="Addtional String">
                        
                            <div v-if="errors.add5">
                                <div class="invalid-feedback" v-for="error in errors.add5" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="endpoint" class="input__label">{{$t('endpointAPI')}}</label>
                            <input type="text" v-model="forms.endpoint" class="form-control input-style" id="endpoint" placeholder="Endpoint API" maxlength="255">
                        
                            <div v-if="errors.endpoint">
                                <div class="invalid-feedback" v-for="error in errors.endpoint" :key="error">{{error}}</div>
                            </div>
                        </div>

                        
                        <div class="form-group col-md-12">
                          <button type="button" @click="hide()" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">{{$t('cancelled')}}</button>
                          
                          <button type="submit" class="btn btn-warning btn-style mt-4">Submit</button>

                        </div>
</form>
</div>
    </modal>



    <modal name="editCourierChannel" @before-close="beforeCloseModal" height="auto" width="100%" :adaptive="true" :scrollable="true">
        <h4 style="text-align: center;font-weight: bold;">{{$t('CourierChannelEdit')}}</h4>

 
<div style="margin: 20px 0;max-height: calc(100vh - 210px);overflow-y: auto;"> 
<form @submit.prevent="submitEditData" method="POST">       
           
           
           
                        <div class="form-group col-md-12">
                            <label for="courier_service_id" class="input__label">{{$t('courierServiceId')}}</label>
                             
                            <v-select :options="optionsCourierService" label="courier_service_id" placeholder="Choose a Courier Service ID" v-model="forms.courier_service_id" @search="onSearchCourierHeader">
                            <slot name="spinner">
                                <div class="spinner">Loading...</div>
                            </slot>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.courier_service_id"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>

                            <div v-if="errors.courier_service_id">
                                <div class="invalid-feedback" v-for="error in errors.courier_service_id" :key="error">{{error}}</div>
                            </div>
                        </div>  
  
      
  
                        <div class="form-group col-md-12">
                            <label for="company_id" class="input__label">{{$t('companyId')}}</label>
                             
                            <v-select :options="optionsCompany" label="name" placeholder="Choose a Company" v-model="forms.company_id" @search="onSearchCompany">
                            <slot name="spinner">
                                <div class="spinner">Loading...</div>
                            </slot>
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!forms.company_id"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                            </v-select>

                            <div v-if="errors.company_id">
                                <div class="invalid-feedback" v-for="error in errors.company_id" :key="error">{{error}}</div>
                            </div>
                        </div>  

                        <div class="form-group col-md-12">
                            <label for="username" class="input__label">{{$t('usernameAPI')}}</label>
                            <input type="text" v-model="forms.username" class="form-control input-style" id="username" placeholder="Username API" maxlength="255">
                        
                            <div v-if="errors.username">
                                <div class="invalid-feedback" v-for="error in errors.username" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="password" class="input__label">{{$t('passwordAPI')}}</label>
                            <input type="text" v-model="forms.password" class="form-control input-style" id="password" placeholder="Password API" maxlength="255">
                        
                            <div v-if="errors.password">
                                <div class="invalid-feedback" v-for="error in errors.password" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="key" class="input__label">{{$t('keyAPI')}}</label>
                            <input type="text" v-model="forms.key" class="form-control input-style" id="key" placeholder="Key API" maxlength="255">
                        
                            <div v-if="errors.key">
                                <div class="invalid-feedback" v-for="error in errors.key" :key="error">{{error}}</div>
                            </div>
                        </div>


                        <div class="form-group col-md-12">
                            <label for="partnercode" class="input__label">{{$t('partnercodeAPI')}}</label>
                            <input type="text" v-model="forms.partnercode" class="form-control input-style" id="partnercode" placeholder="Partner Code API" maxlength="255">
                        
                            <div v-if="errors.partnercode">
                                <div class="invalid-feedback" v-for="error in errors.partnercode" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="cod" class="input__label">{{$t('CourierChannelCod')}}</label>
                          
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
                            <label for="access_token" class="input__label">{{$t('access_tokenAPI')}}</label>
                            <input type="text" v-model="forms.access_token" class="form-control input-style" id="access_token" placeholder="Access Token API" maxlength="255">
                        
                            <div v-if="errors.access_token">
                                <div class="invalid-feedback" v-for="error in errors.access_token" :key="error">{{error}}</div>
                            </div>
                        </div>
  

                        <div class="form-group col-md-12">
                            <label for="refresh_token" class="input__label">{{$t('refresh_tokenAPI')}}</label>
                            <input type="text" v-model="forms.refresh_token" class="form-control input-style" id="refresh_token" placeholder="Refresh Token API" maxlength="255">
                        
                            <div v-if="errors.refresh_token">
                                <div class="invalid-feedback" v-for="error in errors.refresh_token" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add1" class="input__label">{{$t('add1')}}</label>
                            <input type="text" v-model="forms.add1" class="form-control input-style" id="add1" placeholder="Addtional String" maxlength="255">
                        
                            <div v-if="errors.add1">
                                <div class="invalid-feedback" v-for="error in errors.add1" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add2" class="input__label">{{$t('add2')}}</label>
                            <input type="text" v-model="forms.add2" class="form-control input-style" id="add2" placeholder="Addtional String" maxlength="255">
                        
                            <div v-if="errors.add2">
                                <div class="invalid-feedback" v-for="error in errors.add2" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add3" class="input__label">{{$t('add3')}}</label>
                            <input type="text" v-model="forms.add3" class="form-control input-style" id="add3" placeholder="Addtional String" maxlength="255">
                        
                            <div v-if="errors.add3">
                                <div class="invalid-feedback" v-for="error in errors.add3" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add4" class="input__label">{{$t('add4')}}</label>
                            <input type="text" v-model="forms.add4" class="form-control input-style" id="add4" placeholder="Addtional String">
                        
                            <div v-if="errors.add4">
                                <div class="invalid-feedback" v-for="error in errors.add4" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="add5" class="input__label">{{$t('add5')}}</label>
                            <input type="text" v-model="forms.add5" class="form-control input-style" id="add5" placeholder="Addtional String">
                        
                            <div v-if="errors.add5">
                                <div class="invalid-feedback" v-for="error in errors.add5" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="endpoint" class="input__label">{{$t('endpointAPI')}}</label>
                            <input type="text" v-model="forms.endpoint" class="form-control input-style" id="endpoint" placeholder="Endpoint API" maxlength="255">
                        
                            <div v-if="errors.endpoint">
                                <div class="invalid-feedback" v-for="error in errors.endpoint" :key="error">{{error}}</div>
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
  name: 'CourierChannel',
  components: {
    'menu-component':menuComponent,
    DateRangePicker,
         Autocomplete,
        'v-select':vSelect,
  },
  data () {
    return {
        optionsCourierService:[],
        optionsCompany:[],
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
      courier_desc:[],
      forms: {courier_channel_id:'',courier_service_id:'', company_id:'' , username:'', password:'' , key:'', partnercode:'', cod:'', access_token:'', refresh_token:'', endpoint:'',add1:'',add2:'',add3:'',add4:'',add5:''},
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
          label: 'Company ID',
          field: 'company_id',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Company ID", // placeholder for filter input
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
      
        onSearchCompany(search, loading) {
            if(search.length > 1) {
                loading(true);
                 this.searchCompany(search,loading);        
            }
        }, 

        searchCompany(val,loading){

                const baseURI  =  this.$settings.endPoint+"/company/index";
                return this.$http.get(baseURI+`?name=${val}`).then((response) => {
                    var datas   = response.data.datas.data
                    if(datas.length <= 0){
                        this.optionsCompany =  []
                    }else{
                        this.optionsCompany = datas
                    }
                    loading(false);
                })
        },


        onSearchCourierHeader(search, loading) {
            if(search.length > 2) {
                loading(true);
                 this.searchCourierHeader(search,loading);
            }
        }, 


        searchCourierHeader(val,loading){

            const baseURI  =  this.$settings.endPoint+"/courier-service/index";
            return this.$http.get(baseURI+`?courier_service_id=${val}`).then((response) => {
                var datas   = response.data.datas.data
                if(datas.length <= 0){
                    this.optionsCourierService =  []
                }else{
                    this.optionsCourierService = datas
                }
                loading(false);
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
                  courier_service_id    : this.forms.courier_service_id.courier_service_id,
                  company_id            : this.forms.company_id.company_id,
                  username              : this.forms.username,
                  password              : this.forms.password,
                  key                   : this.forms.key,
                  partnercode           : this.forms.partnercode,
                  cod                   : this.forms.cod.code,
                  access_token          : this.forms.access_token,
                  refresh_token         : this.forms.refresh_token,
                  endpoint              : this.forms.endpoint,
                  add1                  : this.forms.add1,
                  add2                  : this.forms.add2,
                  add3                  : this.forms.add3,
                  add4                  : this.forms.add4,
                  add5                  : this.forms.add5
                };

              const baseURI  =  this.$settings.endPoint+"/courier-channel/update/"+this.forms.courier_channel_id;
                    
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
              formData.append("courier_service_id", this.forms.courier_service_id.courier_service_id);
              formData.append("company_id", this.forms.company_id.company_id);
              formData.append("username", this.forms.username);
              formData.append("password", this.forms.password);
              formData.append("cod", this.forms.cod.code);
              formData.append("key", this.forms.key);
              formData.append("partnercode", this.forms.partnercode);
              formData.append("access_token", this.forms.access_token);
              formData.append("refresh_token", this.forms.refresh_token);
              formData.append("add1", this.forms.add1);
              formData.append("add2", this.forms.add2);
              formData.append("add3", this.forms.add3);
              formData.append("add4", this.forms.add4);
              formData.append("add5", this.forms.add5);
              formData.append("endpoint", this.forms.endpoint);
                    
              const baseURI  =  this.$settings.endPoint+"/courier-channel/add";
                    
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

        const baseURI  =  this.$settings.endPoint+"/courier-channel/download";
        this.$http.post(baseURI,formData,{responseType: 'blob'})
          .then((response) => {
              this.loading();
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));

            var fileLink = document.createElement('a');
            fileLink.href = fileURL;

            fileLink.setAttribute('download', 'courier-channel-datas.xls');

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
        this.$modal.show('create-new-CourierChannel');
      },

      hide() {
        this.beforeCloseModal();
        this.errors     = [];
        this.services   = [];
        this.$modal.hide('create-new-CourierChannel');
        this.$modal.hide('editCourierChannel');
      },

      beforeCloseModal(){
        this.forms.courier_channel_id   = ''
        this.forms.courier_service_id   = ''
        this.forms.company_id           = ''
        this.forms.username             = ''
        this.forms.password             = ''
        this.forms.key                  = ''
        this.forms.partnercode          = ''
        this.forms.cod                  = ''
        this.forms.access_token         = ''
        this.forms.refresh_token        = ''
        this.forms.endpoint             = ''
        this.forms.add1                 = ''
        this.forms.add2                 = ''
        this.forms.add3                 = ''
        this.forms.add4                 = ''
        this.forms.add5                 = ''
      },
      

      editData(index , row){
        if(row.cod == 0){
            this.forms.cod                = { code: '0', label: 'ALL' }
        }else if(row.cod == 1){
            this.forms.cod                = { code: '1', label: 'COD' }
        }else{
            this.forms.cod                = { code: '2', label: 'NON COD' }
        }
        
        this.forms.courier_channel_id   = row.courier_channel_id
        this.forms.courier_service_id   = row.courier_dec 
        this.forms.company_id           = row.company_desc
        this.forms.username             = row.username
        this.forms.password             = row.password
        this.forms.key                  = row.key
        this.forms.partnercode          = row.partnercode
        this.forms.access_token         = row.access_token
        this.forms.refresh_token        = row.refresh_token
        this.forms.endpoint             = row.endpoint
        this.forms.add1                 = row.add1
        this.forms.add2                 = row.add2
        this.forms.add3                 = row.add3
        this.forms.add4                 = row.add4
        this.forms.add5                 = row.add5
        this.$modal.show('editCourierChannel');
      },
      


      // load items is what brings back the rows from server
      loadItems() {
        const baseURI   =  this.$settings.endPoint+"/courier-channel/index";
        return this.$http.get(baseURI+`?per_page=${this.serverParams.per_page}&page=${this.serverParams.page}&sort_field=${this.serverParams.sort.field}&sort_type=${this.serverParams.sort.type}&courier_service_id=${this.serverParams.columnFilters.courier_service_id}&company_id=${this.serverParams.columnFilters.company_id}&cod=${this.serverParams.columnFilters.cod}`).then((response) => {
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