<template >
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          src="../assets/logo.png"
          class="img-fluid"
          width="60px"
          height="60px"
          alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              >Alojamiento</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              >Experiencias</a
            >
          </li>
        </ul>
        <div class="btn-group" role="group">
          <a
            id="btnGroupDrop1"
            type="button"
            class="btn write"
            data-bs-toggle="dropdown"
          >
            <img src="../assets/linicio.png" class="img-fluid" alt="" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="">Registrarse</a>
            </li>
            <li>
              <a class="dropdown-item" href="">Hazte anfitrión</a>
            </li>
            <li>
              <a class="dropdown-item"> <router-link to="/login">Inicar sesion</router-link></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
  
<script>
export default {
  setup() {},
};
</script>

<style scoped>
img {
  width: 60px;
  height: 50px;
}
</style>