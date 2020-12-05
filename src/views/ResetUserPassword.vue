<template>
  <div class="home">
    
    <div v-if="isLoading" class="se-pre-con"></div>
    
  <section>

    <!-- content -->
    <div class="">
        <!-- login form -->
        <section class="login-form py-md-5 py-3">
            <div class="card card_border p-md-4">
                <div class="card-body">
                  
                    <!-- form -->
                    <form @submit.prevent="submitData" method="POST">
                        <div class="login__header text-center mb-lg-5 mb-4">
                            <h3 class="login__title mb-2"> TokoPusat <br> Order Management System (OMS)</h3>
                            <p>{{ $t('resetMsg') }}</p>
                        </div>
                        <div class="form-group">
                            <label for="Language" class="input__label">Language / Bahasa</label>
                            
                              <select v-model="locale" @change="langChanged($i18n.locale)" class="form-control input-style">
                                <option>Language / Bahasa</option>
                                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
                              </select>
                        </div>
                        <div class="form-group">
                            <label for="companyId" class="input__label">{{ $t('companyId') }}</label>
                            <input type="text" class="form-control login_text_field_bg input-style" v-model="forms.company_id" placeholder="" required="" autofocus>
                        </div>
                        <div class="form-group">
                            <label for="Email" class="input__label">Email</label>
                            <input type="email" class="form-control login_text_field_bg input-style" v-model="forms.email" aria-describedby="emailHelp" placeholder="" required=""
                                autofocus>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword" class="input__label">{{ $t('loginPassword') }}</label>
                            <input type="password" class="form-control login_text_field_bg input-style" v-model="forms.password" placeholder="" required>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword" class="input__label">{{ $t('confirmPassword') }}</label>
                            <input type="password" class="form-control login_text_field_bg input-style" v-model="forms.password_confirmation" placeholder="" required>
                        </div>
                        <div class="form-check check-remember check-me-out">
                            <input type="checkbox" class="form-check-input checkbox" id="Captcha">
                            <label class="form-check-label checkmark" for="Captcha"> For Google Captcha</label>
                        </div>
                        <div class="d-flex align-items-center flex-wrap justify-content-between">
                          <div class="form-row">
                              <button type="submit" class="btn btn-primary btn-style mt-6">{{ $t('sendBtn') }}</button>
                          </div>
                        </div>
                        <div class="form-group" style="text-align: right;">
                            <label class="form-check-label checkmark" for="forgotPassword"><a href="/"> {{$t('rememberPass')}}</a></label>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </div>
    <!-- //content -->

</section>
  </div>
</template>

<script>

export default {
  name: 'ResetPassword',
  components: {

  },
  data () {
    return {
        locale:'',
        token:'',
        maxToasts: 100,
        position: 'up right',
        closeBtn: true,  
        isLoading: false,  
        errors: [],
        langs: ['id', 'en'],
        forms: {company_id:'', email:'', password:'', password_confirmation:''},
    }
  },
   watch: { 

  },
  methods: { 
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
          
          if (this.forms.email.trim() && this.forms.company_id.trim()) {

            if(this.forms.password === this.forms.password_confirmation){

              let formData = new FormData();
              formData.append("company_id", this.forms.company_id.trim());
              formData.append("email", this.forms.email.trim());
              formData.append("password", this.forms.password);
              formData.append("password_confirmation", this.forms.password_confirmation);
              
              const baseURI  =  this.$settings.endPoint+"/password/reset/"+this.$route.params.token;
              
              this.$http.post(baseURI,formData)
                .then((response) => {
                  this.loading();
                  if(response.data.status === 200) {
                  this.success(response.data.datas.message);
                  this.$router.push('/');
                  }else{
                    this.error(response.data.errors.message);
                  }
              }).catch(error => {
                this.loading();
                if (error.response) {
                  if(error.response.status === 422) {
                    this.error(error.response.data.errors.message);
                  }else if (error.response.status === 500) {
                    this.$router.push('/server-error');
                  }else{
                    this.$router.push('/page-not-found');
                  }
                }
              });

            }else{
              this.fade(false);
              this.error('password confirmation not match');
            }
          }
        }
      })            
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

    langChanged(lang){
      if(this.locale == ''){
        this.locale = lang;
      }else{
        this.$i18n.locale = this.locale;
        localStorage.Lang = this.locale;
      }
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
      
    },

  },
  events: {

  },
  created: function() { 
    
  },
	mounted() {
    this.fade(true);
    this.loading();
    this.langChanged(this.$i18n.locale);
  }

}
</script>
<style scoped>

</style>