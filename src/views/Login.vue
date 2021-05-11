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
                            <h3 class="login__title mb-2"> JualPraktis <br> Order Management System (OMS)</h3>
                            <p>{{ $t('loginMsg') }}</p>
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
                        <div class="form-check check-remember check-me-out">
                          <div class="row">
                            <div class="col">
                                <vue-captcha 
                                    ref="captcha" 
                                    :captcha.sync="code"
                                    @on-change="handleChange">
                                  </vue-captcha>
                            </div>
                            <div class="col">
<button @click="refreshCaptchaCode"><i class="fa fa-refresh" aria-hidden="true"></i></button>
                            </div>

                               

                          </div>
                        </div>

                        <div class="form-group">
                            <label for="captchaCode" class="input__label">{{ $t('captchaCode') }}</label>
                            <input type="text" class="form-control login_text_field_bg input-style" v-model="forms.captchaCode" placeholder="" required>
                        </div>

                        <div class="d-flex align-items-center flex-wrap justify-content-between">
                          <div class="form-row">
                              <button type="submit" class="btn btn-primary btn-style mt-6">{{ $t('loginBtn') }}</button>
                          </div>
                        </div>
                        <div class="form-group" style="text-align: right;">
                            <label class="form-check-label checkmark" for="forgotPassword"><a href="/forgot-password"> {{$t('forgotPass')}}</a></label>
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
import { setAuthToken } from '@/config/auth'
import VueCaptcha from 'vue-captcha-code';

export default {
  name: 'Login',
  components: {
    VueCaptcha
  },
  data () {
    return {
        code: '',
        locale:'',
        maxToasts: 100,
        position: 'up right',
        closeBtn: true,  
        isLoading: false,  
        errors: [],
        langs: ['id', 'en'],
        forms: {company_id:'', email:'', password: '', captchaCode:''},
    }
  },
   watch: { 

  },
  methods: { 
    handleChange(code) {
      this.code = code;
    },
    refreshCaptchaCode() {
      this.$refs.captcha.refreshCaptcha();
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
          
          if (this.forms.captchaCode == this.code) {
            this.fade(true);
          
            if (this.forms.email.trim() && this.forms.company_id.trim()) {
              let formData = new FormData();
              formData.append("company_id", this.forms.company_id.trim());
              formData.append("email", this.forms.email.trim());
              formData.append("password", this.forms.password);
              
              const baseURI  =  this.$settings.endPoint+"/login";
              
              this.$http.post(baseURI,formData)
                .then((response) => {
                  this.loading();
                  if(response.data.status === 200) {
                    setAuthToken(response.data.datas.token);
                    // this.$router.push('/dashboard');
                    window.location.href = '/dashboard';
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
              this.error("email / company_id required");
            }
          }else{
            this.refreshCaptchaCode();
            this.error("wrong Captcha Code");
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