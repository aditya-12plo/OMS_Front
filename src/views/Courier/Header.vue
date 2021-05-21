<template>
  <div>
    <section>
      <menu-component classMenu="CourierHeader"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

          
          
          <div class="accordions">
      <div class="row">
        <!-- accordion style 1 -->
        <div class="col-lg-12 mb-4">
          <div class="card card_border">
            <div class="card-header chart-grid__header">
              <i class="fas fa-warehouse"></i> Courier Header
            </div>
            <div class="card-body">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header bg-white p-0" id="headingOne" v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'">
                    <button class="btn btn-primary m-1" @click.prevent="createData"><i class="fa fa-plus"></i> {{$t('CourierHeaderCreate')}} </button>
                    <button class="btn btn-warning m-1" @click.prevent="downloadData"><i class="fa fa-download"></i> {{$t('download')}} .xlsx</button>
                    
                  </div>



                  <div class="collapse show">
                    <div class="card-body para__style">
                     
                     
<vue-good-table
    title="courier-header"
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
          <button v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" class="btn btn-primary" style="margin-right: 5px;" @click.prevent="detailData(props.index , props.row)">Detail</button>
          <button v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" class="btn btn-warning" style="margin-right: 5px;" @click.prevent="editData(props.index , props.row)">Edit</button>
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


    <modal name="create-new-courierHeader" @before-close="beforeCloseModal" height="auto" width="100%" :adaptive="true" :scrollable="true">
        <h4 style="text-align: center;font-weight: bold;">{{$t('CourierHeaderCreate')}}</h4>

 
<form @submit.prevent="submitData" method="POST">       
  
                        <div class="form-group col-md-12">
                            <label for="courier_id" class="input__label">{{$t('CourierHeaderId')}}</label>
                            <input type="text" v-model="forms.courier_id" class="form-control input-style" id="courier_id" placeholder="Courier Header Code" maxlength="255" required="" @input="forms.courier_id = $event.target.value.toUpperCase()" @keydown.space.prevent>
                        
                            <div v-if="errors.courier_id">
                                <div class="invalid-feedback" v-for="error in errors.courier_id" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="name" class="input__label">{{$t('courierHeaderDesc')}}</label>
                            <input type="text" v-model="forms.name" class="form-control input-style" id="name" placeholder="Courier Name" maxlength="255" required="">
                        
                            <div v-if="errors.name">
                                <div class="invalid-feedback" v-for="error in errors.name" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="pic" class="input__label">{{$t('courierHeaderPIC')}}</label>
                            <input type="text" v-model="forms.pic" class="form-control input-style" id="pic" placeholder="Courier PIC Name Description" maxlength="255" required="">
                        
                            <div v-if="errors.pic">
                                <div class="invalid-feedback" v-for="error in errors.pic" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="phone" class="input__label">{{$t('courierHeaderPhone')}}</label>
                            <input type="text" v-model="forms.phone" class="form-control input-style" id="phone" placeholder="Courier PIC Phone" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.phone">
                                <div class="invalid-feedback" v-for="error in errors.phone" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="mobile" class="input__label">{{$t('courierHeaderMobile')}}</label>
                            <input type="text" v-model="forms.mobile" class="form-control input-style" id="mobile" placeholder="Courier PIC Mobile" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.mobile">
                                <div class="invalid-feedback" v-for="error in errors.mobile" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="email" class="input__label">{{$t('courierHeaderEmail')}}</label>
                            <input type="email" v-model="forms.email" class="form-control input-style" id="email" placeholder="Courier PIC Email" maxlength="255">
                        
                            <div v-if="errors.email">
                                <div class="invalid-feedback" v-for="error in errors.email" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="website" class="input__label">{{$t('courierHeaderWebsiteTracking')}}</label>
                            <input type="text" v-model="forms.website" class="form-control input-style" id="website" placeholder="Courier Website Tracking" maxlength="255" required="">
                        
                            <div v-if="errors.website">
                                <div class="invalid-feedback" v-for="error in errors.website" :key="error">{{error}}</div>
                            </div>
                        </div>

                        
                        <div class="form-group col-md-12">
                          <button type="button" @click="hide()" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">{{$t('cancelled')}}</button>
                          
                          <button type="submit" class="btn btn-warning btn-style mt-4">Submit</button>

                        </div>
</form>
    </modal>



    <modal name="edit-courierHeader" @before-close="beforeCloseModal" height="auto" width="100%" :adaptive="true" :scrollable="true">
        <h4 style="text-align: center;font-weight: bold;">{{$t('CourierHeaderEdit')}}</h4>

 
<form @submit.prevent="submitEditData" method="POST">       
                        <div class="form-group col-md-12">
                            <label for="courier_id" class="input__label">{{$t('CourierHeaderId')}}</label>
                            <input type="text" v-model="forms.courier_id" class="form-control input-style" id="courier_id" placeholder="Courier Header Code" maxlength="255" required="" @input="forms.courier_id = $event.target.value.toUpperCase()" @keydown.space.prevent>
                        
                            <div v-if="errors.courier_id">
                                <div class="invalid-feedback" v-for="error in errors.courier_id" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="name" class="input__label">{{$t('courierHeaderDesc')}}</label>
                            <input type="text" v-model="forms.name" class="form-control input-style" id="name" placeholder="Courier Name" maxlength="255" required="">
                        
                            <div v-if="errors.name">
                                <div class="invalid-feedback" v-for="error in errors.name" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="pic" class="input__label">{{$t('courierHeaderPIC')}}</label>
                            <input type="text" v-model="forms.pic" class="form-control input-style" id="pic" placeholder="Courier PIC Name Description" maxlength="255" required="">
                        
                            <div v-if="errors.pic">
                                <div class="invalid-feedback" v-for="error in errors.pic" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="phone" class="input__label">{{$t('courierHeaderPhone')}}</label>
                            <input type="text" v-model="forms.phone" class="form-control input-style" id="phone" placeholder="Courier PIC Phone" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.phone">
                                <div class="invalid-feedback" v-for="error in errors.phone" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="mobile" class="input__label">{{$t('courierHeaderMobile')}}</label>
                            <input type="text" v-model="forms.mobile" class="form-control input-style" id="mobile" placeholder="Courier PIC Mobile" maxlength="12" @keydown.space="(event) => event.preventDefault()" @keypress="isNumber($event)">
                        
                            <div v-if="errors.mobile">
                                <div class="invalid-feedback" v-for="error in errors.mobile" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="email" class="input__label">{{$t('courierHeaderEmail')}}</label>
                            <input type="email" v-model="forms.email" class="form-control input-style" id="email" placeholder="Courier PIC Email" maxlength="255">
                        
                            <div v-if="errors.email">
                                <div class="invalid-feedback" v-for="error in errors.email" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="website" class="input__label">{{$t('courierHeaderWebsiteTracking')}}</label>
                            <input type="text" v-model="forms.website" class="form-control input-style" id="website" placeholder="Courier Website Tracking" maxlength="255" required="">
                        
                            <div v-if="errors.website">
                                <div class="invalid-feedback" v-for="error in errors.website" :key="error">{{error}}</div>
                            </div>
                        </div>
                        
                        <div class="form-group col-md-12">
                          <button type="button" @click="hide()" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">{{$t('cancelled')}}</button>
                          
                          <button type="submit" class="btn btn-warning btn-style mt-4">Submit</button>

                        </div>
</form>
    </modal>



    <modal name="detail-courierHeader" @before-close="beforeCloseModal" height="auto" width="100%" :adaptive="true" :scrollable="true">
        <h4 style="text-align: center;font-weight: bold;">{{$t('CourierHeaderDetail')}}</h4>

 
                        <div class="form-group col-md-12">
                            <label for="courier_id" class="input__label">{{$t('CourierHeaderId')}}</label>
                            <br>
                            <label for="courier_id" class="input__label">{{this.forms.courier_id}}</label>                        
                        </div>

                        <div class="form-group col-md-12">
                            <label for="name" class="input__label">{{$t('courierHeaderDesc')}}</label>
                            <br>
                            <label for="courier_id" class="input__label">{{this.forms.name}}</label>   
                        </div>

                        <div class="form-group col-md-12">
                            <label for="pic" class="input__label">{{$t('courierHeaderPIC')}}</label>
                            <br>
                            <label for="courier_id" class="input__label">{{this.forms.pic}}</label> 
                        </div>

                        <div class="form-group col-md-12">
                            <label for="phone" class="input__label">{{$t('courierHeaderPhone')}}</label>
                            <br>
                            <label for="courier_id" class="input__label">{{this.forms.phone}}</label> 
                        </div>

                        <div class="form-group col-md-12">
                            <label for="mobile" class="input__label">{{$t('courierHeaderMobile')}}</label>
                            <br>
                            <label for="courier_id" class="input__label">{{this.forms.mobile}}</label> 
                        </div>

                        <div class="form-group col-md-12">
                            <label for="email" class="input__label">{{$t('courierHeaderEmail')}}</label>
                            <br>
                            <label for="courier_id" class="input__label">{{this.forms.email}}</label> 
                        </div>

                        <div class="form-group col-md-12">
                            <label for="website" class="input__label">{{$t('courierHeaderWebsiteTracking')}}</label>
                            <br>
                            <label for="courier_id" class="input__label">{{this.forms.website}}</label> 
                        </div>

                        <div class="form-group col-md-12">
                            <label for="website" class="input__label">{{$t('courierService')}}</label>
                            <br>
                            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{{$t('courierServiceId')}}</th>
      <th scope="col">{{$t('courierServiceCode')}}</th>
      <th scope="col">{{$t('courierServiceName')}}</th>
      <th scope="col">{{$t('courierServiceCod')}}</th>
      <th scope="col">{{$t('courierServiceType')}}</th>
      <th scope="col">{{$t('courierServiceStatus')}}</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="(det,index) in this.services" :key="index">
      <th scope="row">{{index+1}}</th>
      <td>{{det.courier_service_id}}</td>
      <td>{{det.courier_service_code}}</td>
      <td>{{det.courier_service_name}}</td>
      <td>{{det.cod}}</td>
      <td>{{det.type}}</td>
      <td>{{det.status}}</td>
    </tr>
    
  </tbody>
</table> 
                        </div>
                        
                        <div class="form-group col-md-12">
                            <label for="cod" class="input__label">0 = all , 1 = cod , 2 = non cod</label> 
                        </div>

                        <div class="form-group col-md-12">
                          <button type="button" @click="hide()" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">{{$t('cancelled')}}</button>
                          
                          <button type="submit" class="btn btn-warning btn-style mt-4">Submit</button>

                        </div>

    </modal>


  </div>
</template>
<script>
import DateRangePicker from 'vue2-daterange-picker';
import menuComponent from '@/views/Menu/Index'
import moment from 'moment';

export default {
  name: 'CourierHeader',
  components: {
    'menu-component':menuComponent,
    DateRangePicker,
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
      userDatas:[],
      courier_id:'',
      maxToasts: 100,
      isLoading: false,  
      position: 'up right',
      closeBtn: true,  
      errors: [],
      services:[],
      forms: {courier_id:'', name:'' , pic:'', phone:'' , mobile:'', email:'' , website:''},
      langs: ['id', 'en'],
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
          label: 'Courier Header Description',
          field: 'name',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Courier Header Description", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Courier Website Link',
          field: 'website',
          filterOptions: {
            enabled: false, // enable filter for this column
            placeholder: "Filter By Courier Website", // placeholder for filter input
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
                  courier_id            : this.forms.courier_id.trim(),
                  name                  : this.forms.name,
                  pic                   : this.forms.pic,
                  phone                 : this.forms.phone,
                  mobile                : this.forms.mobile,
                  email                 : this.forms.email.trim(),
                  website               : this.forms.website.trim()
                };

              const baseURI  =  this.$settings.endPoint+"/courier-header/update/"+this.courier_id;
                    
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
              formData.append("courier_id", this.forms.courier_id.trim());
              formData.append("name", this.forms.name);
              formData.append("pic", this.forms.pic);
              formData.append("phone", this.forms.phone);
              formData.append("mobile", this.forms.mobile);
              formData.append("email", this.forms.email.trim());
              formData.append("website", this.forms.website.trim());
                    
              const baseURI  =  this.$settings.endPoint+"/courier-header/add";
                    
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

        const baseURI  =  this.$settings.endPoint+"/courier-header/download";
        this.$http.post(baseURI,formData,{responseType: 'blob'})
          .then((response) => {
              this.loading();
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));

            var fileLink = document.createElement('a');
            fileLink.href = fileURL;

            fileLink.setAttribute('download', 'courier-header-datas.xls');

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
        this.$modal.show('create-new-courierHeader');
      },

      hide() {
        this.beforeCloseModal();
        this.errors     = [];
        this.services   = [];
        this.$modal.hide('create-new-courierHeader');
        this.$modal.hide('edit-courierHeader');
        this.$modal.hide('detail-courierHeader');
      },

      beforeCloseModal(){
        this.courier_id                 = ''
        this.forms.courier_id           = ''
        this.forms.name                 = ''
        this.forms.pic                  = ''
        this.forms.phone                = ''
        this.forms.mobile               = ''
        this.forms.email                = ''
        this.forms.website              = ''
      },
      

      editData(index , row){
        this.courier_id                 = row.courier_id
        this.forms.courier_id           = row.courier_id
        this.forms.name                 = row.name
        this.forms.pic                  = row.pic
        this.forms.phone                = row.phone
        this.forms.mobile               = row.mobile
        this.forms.email                = row.email
        this.forms.website              = row.website
        this.$modal.show('edit-courierHeader');
      },
      

      detailData(index , row){
        this.forms.courier_id           = row.courier_id
        this.forms.name                 = row.name
        this.forms.pic                  = row.pic
        this.forms.phone                = row.phone
        this.forms.mobile               = row.mobile
        this.forms.email                = row.email
        this.forms.website              = row.website
        this.services                   = row.services
        this.$modal.show('detail-courierHeader');
      },

      // load items is what brings back the rows from server
      loadItems() {
        const baseURI   =  this.$settings.endPoint+"/courier-header/index";
        return this.$http.get(baseURI+`?per_page=${this.serverParams.per_page}&page=${this.serverParams.page}&sort_field=${this.serverParams.sort.field}&sort_type=${this.serverParams.sort.type}&courier_id=${this.serverParams.columnFilters.courier_id}&name=${this.serverParams.columnFilters.name}`).then((response) => {
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