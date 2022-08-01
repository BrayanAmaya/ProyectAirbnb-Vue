<template>
  <vue-app />
</template>
 

<script>
import VueApp from "./components/VueApp.vue";

export default {

  components: { VueApp },
  name: "App",

  mounted() {
    axios({
      method: 'post',
      url: 'http://api_airbnb.test/auth/login',
      data: {
        email: 'brayanantonio816@gmail.com',
        password: 'brayancito16'
      }
    }).then(response => llamar(response.data.access_token))

    const llamar = (token) => {
      axios.get('http://api_airbnb.test/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => console.log(response.data))
    }
  }

}

</script>

<style>
</style>
