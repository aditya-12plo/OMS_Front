<template>
  <div>
    <section>
      <menu-component classMenu="FulfillmentTypeMaster"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

          
          
          <div class="accordions">
      <div class="row">
        <!-- accordion style 1 -->
        <div class="col-lg-12 mb-4">
          <div class="card card_border">
            <div class="card-header chart-grid__header">
              <i class="fas fa-warehouse"></i> {{$t('fulfillmentTypeMaster')}}
            </div>
            <div class="card-body">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header bg-white p-0" id="headingOne" v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'">
                    <button class="btn btn-primary m-1" @click.prevent="createData"><i class="fa fa-plus"></i> {{$t('fulfillmentTypeMasterCreate')}} </button>
                    <button class="btn btn-warning m-1" @click.prevent="downloadData"><i class="fa fa-download"></i> {{$t('download')}} .xlsx</button>
                    
                  </div>



                  <div class="collapse show">
                    <div class="card-body para__style">
                     
                     
<vue-good-table
    title="fulfillment-type-master"
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
          <button v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" class="btn btn-danger" @click.prevent="deleteData(props.index , props.row)">Delete</button>
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


    <modal name="create-new-fulfillmentType" @before-close="beforeCloseModal" height="auto">
        <h4 style="text-align: center;font-weight: bold;">{{$t('fulfillmentTypeMasterCreate')}}</h4>

 
<form @submit.prevent="submitData" method="POST">       
                        <div class="form-group col-md-12">
                            <label for="fulfillment_center_type_id" class="input__label">{{$t('fulfillmentType')}}</label>
                            <input type="text" v-model="forms.fulfillment_center_type_id" class="form-control input-style" id="fulfillment_center_type_id" placeholder="Fulfillment Center Type Code" maxlength="255" required="" @input="forms.fulfillment_center_type_id = $event.target.value.toUpperCase()" @keydown.space.prevent>
                        
                            <div v-if="errors.fulfillment_center_type_id">
                                <div class="invalid-feedback" v-for="error in errors.fulfillment_center_type_id" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="fulfillment_center_type_description" class="input__label">{{$t('fulfillmentTypeDesc')}}</label>
                            <input type="text" v-model="forms.fulfillment_center_type_description" class="form-control input-style" id="fulfillment_center_type_description" placeholder="Fulfillment Center Type Description" maxlength="255" required="">
                        
                            <div v-if="errors.fulfillment_center_type_description">
                                <div class="invalid-feedback" v-for="error in errors.fulfillment_center_type_description" :key="error">{{error}}</div>
                            </div>
                        </div>

                        
                        <div class="form-group col-md-12">
                          <button type="button" @click="hide()" class="btn btn-primary btn-style mt-4" style="margin-right:15px;">{{$t('cancelled')}}</button>
                          
                          <button type="submit" class="btn btn-warning btn-style mt-4">Submit</button>

                        </div>
</form>
    </modal>



    <modal name="edit-fulfillmentType" @before-close="beforeCloseModal" height="auto">
        <h4 style="text-align: center;font-weight: bold;">{{$t('fulfillmentTypeMasterEdit')}}</h4>

 
<form @submit.prevent="submitEditData" method="POST">       
                        <div class="form-group col-md-12">
                            <label for="fulfillment_center_type_id" class="input__label">{{$t('fulfillmentType')}}</label>
                            <input type="text" v-model="forms.fulfillment_center_type_id" class="form-control input-style" id="fulfillment_center_type_id" placeholder="Fulfillment Center Type Code" maxlength="255" required="" @input="forms.fulfillment_center_type_id = $event.target.value.toUpperCase()" @keydown.space.prevent>
                        
                            <div v-if="errors.fulfillment_center_type_id">
                                <div class="invalid-feedback" v-for="error in errors.fulfillment_center_type_id" :key="error">{{error}}</div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="fulfillment_center_type_description" class="input__label">{{$t('fulfillmentTypeDesc')}}</label>
                            <input type="text" v-model="forms.fulfillment_center_type_description" class="form-control input-style" id="fulfillment_center_type_description" placeholder="Fulfillment Center Type Description" maxlength="255" required="">
                        
                            <div v-if="errors.fulfillment_center_type_description">
                                <div class="invalid-feedback" v-for="error in errors.fulfillment_center_type_description" :key="error">{{error}}</div>
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

export default {
  name: 'FulfillmentList',
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
      fulfillment_center_type_id:'',
      maxToasts: 100,
      isLoading: false,  
      position: 'up right',
      closeBtn: true,  
      errors: [],
      forms: {fulfillment_center_type_id:'', fulfillment_center_type_description:''},
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
      optionsFulfillmentType:[],
      columns: [
        {
          label: 'Fulfillment Type',
          field: 'fulfillment_center_type_id',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Fulfillment Type", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: this.filterType(), // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Fulfillment Type Description',
          field: 'fulfillment_center_type_description',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Fulfillment Type Description", // placeholder for filter input
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
                  fulfillment_center_type_id          : this.forms.fulfillment_center_type_id.trim(),
                  fulfillment_center_type_description : this.forms.fulfillment_center_type_description
                };

              const baseURI  =  this.$settings.endPoint+"/fulfillment-type/update/"+this.fulfillment_center_type_id;
                    
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
              formData.append("fulfillment_center_type_id", this.forms.fulfillment_center_type_id.trim());
              formData.append("fulfillment_center_type_description", this.forms.fulfillment_center_type_description);
                    
              const baseURI  =  this.$settings.endPoint+"/fulfillment-type/add";
                    
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

      filterType(){
        return this.optionsFulfillmentType;
      },

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
              this.loading();
              let formData = new FormData();
              const baseURI  =  this.$settings.endPoint+"/fulfillment-type/delete/"+row.fulfillment_center_type_id;
                    
              this.$http.delete(baseURI,formData)
                .then((response) => {
                  if(response.data.status === 200) {
                    this.hide();
                    this.loadItems();
                    this.success(response.data.datas.message);
                  }else{
                    this.resultError(response.data.errors);
                  }
              }).catch(error => {
                if (error.response) {
                  if(error.response.status === 422) {
                    this.resultError( error.response.data.errors);
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

      downloadData(){

        const columnFilters                     = this.serverParams;
        
        let formData = new FormData();
        formData.append("columnFilters", JSON.stringify(columnFilters));

        const baseURI  =  this.$settings.endPoint+"/fulfillment-type/download";
        this.$http.post(baseURI,formData,{responseType: 'blob'})
          .then((response) => {
              this.loading();
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));

            var fileLink = document.createElement('a');
            fileLink.href = fileURL;

            fileLink.setAttribute('download', 'Fulfillment-type-datas.xls');

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
        this.$modal.show('create-new-fulfillmentType');
      },

      hide () {
        this.beforeCloseModal();
        this.errors = [];
        this.$modal.hide('create-new-fulfillmentType');
        this.$modal.hide('edit-fulfillmentType');
      },

      beforeCloseModal(){
        this.fulfillment_center_type_id                 = ''
        this.forms.fulfillment_center_type_id           = ''
        this.forms.fulfillment_center_type_description  = ''
      },
      

      editData(index , row){
        this.fulfillment_center_type_id                 = row.fulfillment_center_type_id
        this.forms.fulfillment_center_type_id           = row.fulfillment_center_type_id
        this.forms.fulfillment_center_type_description  = row.fulfillment_center_type_description
        this.$modal.show('edit-fulfillmentType');
      },

      // load items is what brings back the rows from server
      loadItems() {
        const baseURI   =  this.$settings.endPoint+"/fulfillment-type/index";
        return this.$http.get(baseURI+`?per_page=${this.serverParams.per_page}&page=${this.serverParams.page}&sort_field=${this.serverParams.sort.field}&sort_type=${this.serverParams.sort.type}&fulfillment_center_type_id=${this.serverParams.columnFilters.fulfillment_center_type_id}&fulfillment_center_type_description=${this.serverParams.columnFilters.fulfillment_center_type_description}`).then((response) => {
          this.rows = response.data.datas.data
          this.totalRecords  = response.data.datas.data.total
        })
      },

      
      updateParams(newProps) {
        this.serverParams = Object.assign({}, this.serverParams, newProps);
        this.loadItems();
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