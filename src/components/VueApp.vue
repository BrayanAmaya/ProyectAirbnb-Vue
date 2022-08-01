<template >
  <div id="fondo">
    <div id="contenido">
      <div >
          <h1>Consumiendo API de CodeIgniter-Airbnb</h1>
      </div>
    </div>
  </div>

</template>
  
<script>
export default {
  setup() {

  }
}
</script>

<style>
#contenido {
  justify-content: center;
  width: 500px;
  height: 500px;
  position: absolute;
  top: 35%;
  left: 60%;
}

#fondo {
  width: 50%;
  height: 830px;
  background-image: url(https://a.storyblok.com/f/87002/1280x720/c23d81e2d2/escuela-vue-curso-vue-router.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

h1 {
  color: white;
}
#color {
  color: white;
}
</style>