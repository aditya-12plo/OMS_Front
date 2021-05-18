<template>
  <div>
    <section>
      <menu-component classMenu="Company"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

          
          
          <div class="accordions">
      <div class="row">
        <!-- accordion style 1 -->
        <div class="col-lg-12 mb-4">
          <div class="card card_border">
            <div class="card-header chart-grid__header">
              <i class="fas fa-building"></i> {{$t('companyCenter')}}
            </div>
            <div class="card-body">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header bg-white p-0" id="headingOne">
                    <button class="btn btn-primary m-1" v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" @click.prevent="createData"><i class="fa fa-plus"></i> {{$t('companyCreate')}} </button>
                    <button class="btn btn-warning m-1" @click.prevent="downloadData"><i class="fa fa-download"></i> {{$t('download')}} .xlsx</button>
                  </div>



 <br>
 <br>
 <div class="form-group row">
    <div class="col-sm-8">
         <date-range-picker
            ref="picker"
            opens="opens"
            :locale-data="localedateRange"
            :timePicker24Hour="false"
            :timePicker="false"
            v-model="dateRange"
            @update="updateValues"
    >
        <template v-slot:input="picker" ref="Apicker">
            {{ picker.startDate }} - {{ picker.endDate }}
        </template>

    </date-range-picker>
    </div>
    <div class="col-sm-2">
     <button class="btn btn-danger m-1" @click="clearDateRange">&times; Clear Date</button>
    </div>
  </div>


                  <div class="collapse show">
                    <div class="card-body para__style">
                     
<vue-good-table
    title="Company-center"
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
          <button class="btn btn-primary" style="margin-right: 5px;" @click.prevent="detailData(props.index , props.row)">detail</button>
          <button class="btn btn-warning" v-if="userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" style="margin-right: 5px;" @click.prevent="editData(props.index , props.row)">Edit</button>
          <button v-if="props.row.status === 'DEACTIVATE' && userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" class="btn btn-success" @click.prevent="deleteData(props.index , props.row, 'ACTIVATE')">Activate</button>
          <button v-if="props.row.status === 'ACTIVATE' && userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" class="btn btn-danger" @click.prevent="deleteData(props.index , props.row, 'DEACTIVATE')">Deactivate</button>
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


  </div>
</template>
<script>
import DateRangePicker from 'vue2-daterange-picker';
import menuComponent from '@/views/Menu/Index'
import moment from 'moment';

export default {
  name: 'CompanyList',
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
      maxToasts: 100,
      isLoading: false,  
      position: 'up right',
      closeBtn: true,  
      errors: [],
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
          label: 'Company Code',
          field: 'company_id',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Company Code", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Company Name',
          field: 'name',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Company Name", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: "Created At",
          field: "created_at",
          filterable: false,
          type: "date",
          dateInputFormat: "yyyy-MM-dd HH:mm:s",
          dateOutputFormat: "yyyy-MM-dd HH:mm:s",
          filterOptions: {
            enabled: false,
            placeholder: "Filter Created At"
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
    methods: {
 
      clearDateRange(){
        this.dateRange.startDate = null
        this.dateRange.endDate = null
            this.loadItems();
      },
      updateValues(){
            this.loadItems();
        // console.log(this.dateRange);
      },
      
      dateFormat (value, fmt = 'YYYY-MM-DD') {
        return value ? moment(value).format("YYYY-MM-DD") : "";
      },

      
      downloadData(){
        const endDate   = this.dateFormat(this.dateRange.endDate);
        const startDate = this.dateFormat(this.dateRange.startDate);

        const columnFilters                     = this.serverParams;
        columnFilters.startDate                 = startDate
        columnFilters.endDate                   = endDate
        
        let formData = new FormData();
        formData.append("columnFilters", JSON.stringify(columnFilters));

        const baseURI  =  this.$settings.endPoint+"/company/download";
        this.$http.post(baseURI,formData,{responseType: 'blob'})
          .then((response) => {
              this.loading();
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));

            var fileLink = document.createElement('a');
            fileLink.href = fileURL;

            fileLink.setAttribute('download', 'company-datas.xls');

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
      deleteData(index , row, status){
        var formData = {status  : status}
        const baseURI  =  this.$settings.endPoint+"/company/update-status/"+row.company_id;
        this.$http.put(baseURI,formData).then((response) => {
          this.loading();
          if(response.data.status === 200) {
            this.success(response.data.datas.message);
            this.loadItems();
          }else{
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
      },

      createData(){
          window.location.href = '/company/create';
          // this.$router.push({name:'CompanyCreate'});       
      },

      detailData(index , row){
        var params  = row.company_id;
        window.location.href = '/company/detail/'+params;
          // this.$router.push({name:'CompanyDetail', params: {id: this.$onRandom(index),datasCompanyDetail:row }});       
      },

      editData(index , row){
        var params  = row.company_id;
        window.location.href = '/company/edit/'+params;
          // this.$router.push({name:'CompanyEdit', params: {id: this.$onRandom(index),datasCompanyEdit:row }});       
      },

      // load items is what brings back the rows from server
      loadItems() {
        const baseURI  =  this.$settings.endPoint+"/company/index";
        const endDate   = this.dateFormat(this.dateRange.endDate);
        const startDate = this.dateFormat(this.dateRange.startDate);
        
        return this.$http.get(baseURI+`?per_page=${this.serverParams.per_page}&page=${this.serverParams.page}&sort_field=${this.serverParams.sort.field}&sort_type=${this.serverParams.sort.type}&company_id=${this.serverParams.columnFilters.company_id}&company_id=${this.serverParams.columnFilters.company_id}&name=${this.serverParams.columnFilters.name}&status=${this.serverParams.columnFilters.status}&endDate=${endDate}&startDate=${startDate}`).then((response) => {
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