<template>
  <div>
    <section>
      <menu-component classMenu="ProductsNormal"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

          
          
          <div class="accordions">
      <div class="row">
        <!-- accordion style 1 -->
        <div class="col-lg-12 mb-4">
          <div class="card card_border">
            <div class="card-header chart-grid__header">
              <i class="fas fa-barcode"></i> {{$t('normalProducts')}}
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
    title="normal-products"
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
  name: 'ProductsNormal',
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
          label: 'Product Code',
          field: 'product_code',
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
          field: 'product_description',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Product Name", // placeholder for filter input
            filterValue: "", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          }
        },
        {
            label: 'Currency',
            field: 'currency',
            filterOptions: {
                enabled: false, // enable filter for this column
                placeholder: "Filter By Currency", // placeholder for filter input
                filterValue: "", // initial populated value for this filter
                filterDropdownItems: [], // dropdown (with selected values) instead of text input
                trigger: "enter", //only trigger on enter not on keyup
            }
        },
        {
          label: 'Product Price',
          field: 'price',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: "Filter By Price", // placeholder for filter input
            filterValue: ">=0", // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            trigger: "enter" //only trigger on enter not on keyup
          },
            formatFn: this.formatMoney
        },
        {
            label: 'UOM',
            field: 'uom_description',
            filterOptions: {
                enabled: false, // enable filter for this column
                placeholder: "Filter By Price", // placeholder for filter input
                filterValue: "", // initial populated value for this filter
                filterDropdownItems: [], // dropdown (with selected values) instead of text input
                trigger: "enter", //only trigger on enter not on keyup
            },
            formatFn: this.formatUom
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

        formatDate (value, fmt = 'DD-MM-YYYY HH:mm:ss') {
            return (value == null) ? '' : this.$moment(value, 'DD-MM-YYYY HH:mm:ss').format(fmt)
        },

        formatMoney (value) {
            return this.$accounting.formatNumber(value, 2)
        },

        formatUom (value) {
            return  value.uom_code+' ( '+value.uom_description+' )';
        },

      createData(){
          this.$router.push({name:'ProductNormalCreate'});       
      },

      detailData(index , row){
          this.$router.push({name:'ProductNormalDetail', params: {id: this.$onRandom(row.product_id),datasProductNormalDetail:row }});       
      },

      editData(index , row){
          this.$router.push({name:'ProductNormalEdit', params: {id: this.$onRandom(row.product_id),datasProductNormalEdit:row }});       
      },

      // load items is what brings back the rows from server
        loadItems() {
            const baseURI  =  this.$settings.endPoint+"/products/normal/index";
            
            return this.$http.get(baseURI+`?per_page=${this.serverParams.per_page}&page=${this.serverParams.page}&sort_field=${this.serverParams.sort.field}&sort_type=${this.serverParams.sort.type}&company_id=${this.serverParams.columnFilters.company_id}&product_code=${this.serverParams.columnFilters.product_code}&product_description=${this.serverParams.columnFilters.product_description}&price=${this.serverParams.columnFilters.price}`).then((response) => {
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
        const userDatas = this.$getUserInfo();
        this.name = userDatas.sub.name;
        
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