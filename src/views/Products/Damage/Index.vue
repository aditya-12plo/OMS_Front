<template>
  <div>
    <section>
      <menu-component classMenu="ProductsDamage"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

          
          
          <div class="accordions">
      <div class="row">
        <!-- accordion style 1 -->
        <div class="col-lg-12 mb-4">
          <div class="card card_border">
            <div class="card-header chart-grid__header">
              <i class="fas fa-barcode"></i> {{$t('damageProducts')}}
            </div>
            <div class="card-body">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header bg-white p-0" id="headingOne">
                    <button class="btn btn-primary m-1" @click.prevent="createData"><i class="fa fa-plus"></i> {{$t('createProducts')}} </button>
                    <button class="btn btn-success m-1" @click.prevent="uploadData"><i class="fa fa-upload"></i> {{$t('uploadProducts')}} </button>
                    <button class="btn btn-warning m-1" @click.prevent="downloadData"><i class="fa fa-file-excel-o"></i> Download Data </button>
                  
                  </div>

                  <div class="collapse show">
                    <div class="card-body para__style">
                     
                     
<vue-good-table
    title="damage-products"
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
          <button class="btn btn-warning" style="margin-right: 5px;" @click.prevent="editData(props.index , props.row)">Edit</button>
          <button class="btn btn-danger" v-if="props.row.status === 'HOLD' && userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" style="margin-right: 5px;" @click.prevent="updateStatusData(props.index , props.row , 'SALE')">Sale</button>
          <button class="btn btn-danger" v-if="props.row.status === 'SALE' && userDatas.company_id === 'OMS' && userDatas.user_role_id === 'ADMIN'" style="margin-right: 5px;" @click.prevent="updateStatusData(props.index , props.row, 'HOLD')">Hold</button>
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
import 'vue-good-table/dist/vue-good-table.css'
import menuComponent from '@/views/Menu/Index'

export default {
  name: 'ProductsDamage',
  components: {
    'menu-component':menuComponent,
  },
  data () {
    return {  
      maxToasts: 100,
      isLoading: false,  
      position: 'up right',
      closeBtn: true,  
      errors: [],
      langs: ['id', 'en'],
      userDatas:[],
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
          field: 'product.company_id',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Company Code", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Product Code',
          field: 'product.product_code',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Product Code", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Product Name',
          field: 'product.product_description',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Product Name", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Fulfillment',
          field: 'fulfillment.name',
          sortable: false,
        },
        {
          label: 'Hold date',
          field: 'hold_date',
          sortable: false,
        },
        {
          label: 'QTY',
          field: 'qty',
          sortable: false,
        },
        {
          label: 'Status',
          field: 'status',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Status", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: ['HOLD','SALE'], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
          label: 'Action',
          field: 'actions',
          sortable: false,
        }
        ],
        rows: [],
    }
  },
    watch: { 

    },
    methods: {
        downloadData(){
            var params  = this.serverParams.columnFilters;
            this.fade(true);
            var baseURI     =  this.$settings.endPoint+'/products/damage/download';
            var CurrentDate = this.$moment().format('DD_MM_YYYY_HH_mm_ss');
            var sendData    = {
                  company_id:params['product.company_id'],
                  product_code:params['product.product_code'],
                  product_description:params['product.product_description'],
                  status:this.serverParams.columnFilters.status,
                  file_name:'download_'+CurrentDate+'.xlsx'
                };	
            this.$http({
                url: baseURI,
                method: 'POST',
                data: sendData,
                responseType: 'blob',
            }).then((response) => {
                this.errors     = [];
                var filename    = sendData.file_name;

                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', filename);
                document.body.appendChild(fileLink);
                fileLink.click();
                this.fade(false);
            }).catch(error => {
                if (error.response) {
                    if(error.response.status === 422) {
                        this.errors =  {"message": ["File Not Found"]};
                        this.error("File Not Found");
                    }else if (error.response.status === 500) {
                        this.$router.push('/server-error');
                    }else{
                        this.$router.push('/page-not-found');
                    }
                }
            });
        },


        formatDate (value, fmt = 'DD-MM-YYYY HH:mm:ss') {
            return (value == null) ? '' : this.$moment(value, 'DD-MM-YYYY HH:mm:ss').format(fmt)
        },

        formatMoney (value) {
            return this.$accounting.formatNumber(value, 2)
        },

        formatUom (value) {
            return  value.uom_code+' ( '+value.uom_description+' )';
        },

      uploadData(){
          window.location.href = '/products/damage/upload';    
      },

      createData(){
          window.location.href = '/products/damage/create';       
      },

      detailData(index , row){
        var params  = this.$onRandom(row.products_demage_id);
        window.location.href = '/products/damage/detail/'+params;      
      },
      
      updateStatusData(index , row , status){
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
                    formData.append("products_demage_id", row.products_demage_id);
                    formData.append("status", status);

                        
                    const baseURI  =  this.$settings.endPoint+"/products/damage/update-status";
                        
                    this.$http.post(baseURI,formData)
                        .then((response) => {
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
                        
                }
            })
      },

      editData(index , row){
          var params  = this.$onRandom(row.products_demage_id);
          window.location.href = '/products/damage/edit/'+params;     
      },

      // load items is what brings back the rows from server
        loadItems() {
          var params  = this.serverParams.columnFilters;
          const baseURI  =  this.$settings.endPoint+"/products/damage/index";
            
            return this.$http.get(baseURI+`?per_page=${this.serverParams.per_page}&page=${this.serverParams.page}&sort_field=${this.serverParams.sort.field}&sort_type=${this.serverParams.sort.type}&company_id=${params['product.company_id']}&product_code=${params['product.product_code']}&status=${params.status}&product_description=${params['product.product_description']}`).then((response) => {
            this.rows = response.data.data
            this.totalRecords  = response.data.total
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