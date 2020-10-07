<template>
  <div class="home">
    
  <section>

    <!-- content -->
    <div class="">
        <!-- login form -->
        <section class="login-form py-md-5 py-3">
            <div class="card card_border p-md-4">
                <div class="card-body">
    

                    <!-- form -->
                    <form action="#" method="GET">
                        <div class="login__header text-center mb-lg-5 mb-4">
                            <h3 class="login__title mb-2"> TokoPusat <br> Order Management System (OMS)</h3>
                            <p>{{ $t('loginMsg') }}</p>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="input__label">Language / Bahasa</label>
                            
                              <select v-model="$i18n.locale" class="form-control input-style">
                                <option>Language / Bahasa</option>
                                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
                              </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="input__label">Email</label>
                            <input type="text" class="form-control login_text_field_bg input-style"
                                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required=""
                                autofocus>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" class="input__label">{{ $t('loginPassword') }}</label>
                            <input type="password" class="form-control login_text_field_bg input-style"
                                id="exampleInputPassword1" placeholder="" required>
                        </div>
                        <div class="form-check check-remember check-me-out">
                            <input type="checkbox" class="form-check-input checkbox" id="exampleCheck1">
                            <label class="form-check-label checkmark" for="exampleCheck1"> For Google Captcha</label>
                        </div>
                        <div class="d-flex align-items-center flex-wrap justify-content-between">
                          <div class="form-row">
                              <button type="submit" class="btn btn-primary btn-style mt-6">{{ $t('loginBtn') }}</button>
                          </div>
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
  name: 'locale-changer',
  data () {
    return { langs: ['id', 'en'] }
  }
}
</script>
<style scoped>
  @import '../assets/css/style-starter.css';
  @import '//fonts.googleapis.com/css?family=Nunito:300,400,600,700,800,900&display=swap';

</style>