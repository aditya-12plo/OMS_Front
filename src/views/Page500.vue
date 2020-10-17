<template>
  <div class="page404">
    
    <section>
 
   <!-- content -->
    <div class="error-bg">
        <!-- error -->
        <section class="error py-md-5 py-3">
            <div class="card-body">
                <div class='error-info'>
                    <div class='error__404'>500</div>
                    <div class='not__found'>{{ $t('page500') }}</div>
                    <p class="error-text my-3 mb-4">{{ $t('oops500') }}</p>
                    <a class="btn btn-style btn-primary" @click="backLink()">{{ $t('backMsg') }}</a>
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
  name: 'ServerErrorPage',
  components: {

  },
  data () {
    return {  
        
    }
  },
    watch: { 

    },
    methods: {
        backLink() {
			this.$router.go(-1);
        } ,
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

</style>