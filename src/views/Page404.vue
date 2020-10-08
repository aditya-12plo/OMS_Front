<template>
  <div class="page404">
    
    <section>
 
   <!-- content -->
    <div class="error-bg">
        <!-- error -->
        <section class="error py-md-5 py-3">
            <div class="card-body">
                <div class='error-info'>
                    <div class='error__404'>404</div>
                    <div class='not__found'>{{ $t('page404') }}</div>
                    <p class="error-text my-3 mb-4">{{ $t('oops404') }}</p>
                    <a class="btn btn-style btn-primary" href='/'>{{ $t('backMsg') }}</a>
                </div>
            </div>
        </section>
        <!-- //error -->
    </div>
    <!-- //content -->

    </section>
  </div>
</template>

<script>

export default {
  name: 'PageNotFound',
  components: {

  },
  data () {
    return {  
        
    }
  },
    watch: { 

    },
    methods: { 	

    },
    events: {

    },
    created: function() { 
    
    },
	mounted() {

    }

}
</script>
<style scoped>
  @import '../assets/css/style-starter.css';
  @import '//fonts.googleapis.com/css?family=Nunito:300,400,600,700,800,900&display=swap';

</style>