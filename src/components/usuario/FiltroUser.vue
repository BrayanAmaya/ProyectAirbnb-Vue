<template>

    <main class="container">

        <div class="card  border-0 shadow">
            <div class="card-body">
                <h2 class="subtitle">
                    Filtros de Hospedajes
                </h2><br>

                <form>
                    <!-- primera fila -->
                    <div class="form-group">
                        <div class="row">

                            <!-- primera  -->
                            <div class="col-md-2">
                                <label class="label has-text-centered">Desde: ${{ precioInicio }}</label>
                                <div class="slider-wrapper">
                                    <input type="range" min="0" max="300" v-model="precioInicio" step="1">
                                </div>
                            </div>

                            <!-- Segunda  -->
                            <div class="col-md-2">
                                <label class="label has-text-centered">Hasta ${{ precioFinal }}</label>
                                <div class="slider-wrapper">

                                    <input type="range" v-bind:min="precioInicio" max="300" v-model="precioFinal"
                                        step="1">
                                </div>
                            </div>

                            <!-- tercera  -->
                            <div class="col-md-2">
                                <div class="control select is-link">
                                    <h4 for="exampleFormControlSelect1">Anfitriones:</h4>
                                    <select class="form-select" v-model="idAnfitrion" id="idAnfitrion">
                                        <option value="all">Todas</option>
                                        <option v-for="dataAnfitrion in dataAnfitriones"
                                            :key="dataAnfitrion.idAnfitrion" :value="dataAnfitrion.idAnfitrion">
                                            {{ dataAnfitrion.descripcion }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <!-- tercera  -->
                            <div class="col-md-2">
                                <div class="control select is-link">
                                    <h4 for="exampleFormControlSelect1">Categorias:</h4>
                                    <select class="form-select" v-model="idTipoHospedaje" id="idTipoHospedaje">
                                        <option value="all">Todas</option>
                                        <option v-for="dataTipoHospedaje in dataTipoHospedajes"
                                            :key="dataTipoHospedaje.idTipoHospedaje"
                                            :value="dataTipoHospedaje.idTipoHospedaje">
                                            {{ dataTipoHospedaje.tipoHospedaje }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <!-- Cuarta  -->
                            <div class="col-md-2">

                                <div class="control select is-link">
                                    <h4 for="exampleFormControlSelect1">Municipios:</h4>
                                    <select class="form-select" v-model="idMunicipio" id="idMunicipio">
                                        <option value="all">Todos</option>
                                        <option v-for="dataMunicipio in dataMunicipios" :key="dataMunicipio.idMunicipio"
                                            :value="dataMunicipio.idMunicipio">
                                            {{ dataMunicipio.municipio }}
                                        </option>
                                    </select><br>
                                </div>
                            </div>

                            <!-- Boton de filtrar -->
                            <div class="text-center mt-6">
                                <div class="control">
                                    <button v-if="precioInicio != null && precioFinal != null"
                                        @click.prevent="enviarData" class="btn btn-primary">Filtrar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- Fin de formulario -->
                </form>
            </div>
        </div>

        <div v-if="respuesta != null">
            <div>
                <h2 class="subtitle">
                    {{ respuesta }}
                </h2><br>
            </div>
        </div>

        <div>
            <div v-if="respuesta == null" class="row row-cols-1 row-cols-md-4 g-4">
                <div v-for="dataFiltro in dataFiltros" :key="dataFiltro.idServicio">
                    <div v-if="dataFiltro.estatus == 1" class="card border-0 shadow">

                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner rounded" style="width: 90%; margin: 0 auto">
                                <div v-for="dataImagen in dataImagenes" :key="dataImagen.idImagen">
                                    <div v-if="dataFiltro.idServicio === dataImagen.idServicio">
                                        <div class="carousel-item active">
                                            <img class="zoom mx-auto d-block card-img-top"
                                                v-bind:src="mostrarFoto(dataImagen.url)" alt="First slide">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <h2> {{ dataFiltro.nombre }} </h2>

                            <div v-for="dataAnfitrion in dataAnfitriones" :key="dataAnfitrion.idAnfitrion">
                                <h5 v-if="dataFiltro.idAnfitrion === dataAnfitrion.idAnfitrion">@{{
                                        dataAnfitrion.descripcion
                                }}</h5>
                            </div>


                            <div v-for="dataMunicipio in dataMunicipios" :key="dataMunicipio.idMunicipio">
                                <p v-if="dataFiltro.idMunicipio === dataMunicipio.idMunicipio">Municipio: {{
                                        dataMunicipio.municipio
                                }}</p>
                            </div>
                            <p> Publicada: {{ getDate(dataFiltro.date_create) }}</p>

                            <div class="form-group">
                                <div class="row">

                                    <div class="col-md-6">
                                        <button class="btn btn-primary"
                                            @click.prevent="verServicio(dataFiltro.idServicio)">Ver</button>
                                    </div>

                                    <div class="col-md-6">

                                        <button class="btn btn-info"
                                            @click="showModal(dataFiltro.idServicio)">Preview</button>
                                    </div><br><br>

                                    <button v-if="dataFiltro.disponibilidad == 0" class="btn btn-success"
                                        @click.prevent="reservar(dataFiltro.idServicio)">Reservar</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!--Inicia el modal-->
                    <div v-bind:id="dataFiltro.idServicio" class="modal" tabindex="-1" role="dialog"
                        aria-labelledby="myLargeModalLabel">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h3 class="title">{{ dataFiltro.nombre }}</h3>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form class="row g-4" action="#" method="POST">

                                        <div id="carouselExampleIndicators" class="carousel slide"
                                            data-bs-ride="carousel">
                                            <div class="carousel-inner rounded" style="width: 90%; margin: 0 auto">
                                                <div v-for="dataImagen in dataImagenes" :key="dataImagen.idImagen">
                                                    <div v-if="dataFiltro.idServicio === dataImagen.idServicio">
                                                        <div class="carousel-item active">
                                                            <img class="mx-auto zoom"
                                                                v-bind:src="mostrarFoto(dataImagen.url)"
                                                                alt="First slide">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Tarifa/Noche</label>
                                            <div v-for="dataTarifa in dataTarifas" :key="dataTarifa.idTarifa">
                                                <h6 class="subtitle is-6 has-text-centered"
                                                    v-if="dataFiltro.idTarifa === dataTarifa.idTarifa">
                                                    ${{ dataTarifa.precio }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Tipo de Hospedaje</label>
                                            <div v-for="dataTipoHospedaje in dataTipoHospedajes"
                                                :key="dataTipoHospedaje.idTipoHospedaje">
                                                <h6 class="subtitle is-6 has-text-centered"
                                                    v-if="dataFiltro.idTipoHospedaje === dataTipoHospedaje.idTipoHospedaje">
                                                    {{ dataTipoHospedaje.tipoHospedaje }}</h6>
                                            </div>
                                        </div>


                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Municipio</label>
                                            <div v-for="dataMunicipio in dataMunicipios"
                                                :key="dataMunicipio.idMunicipio">
                                                <h6 class="subtitle is-6 has-text-centered"
                                                    v-if="dataFiltro.idMunicipio === dataMunicipio.idMunicipio">
                                                    {{ dataMunicipio.municipio }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Direccion</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{ dataFiltro.direccion }}
                                            </h6>
                                        </div>

                                    

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Publicada por</label>
                                            <div v-for="dataAnfitrion in dataAnfitriones"
                                                :key="dataAnfitrion.idAnfitrion">
                                                <h6 v-if="dataFiltro.idAnfitrion === dataAnfitrion.idAnfitrion">@{{
                                                        dataAnfitrion.descripcion
                                                }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Publicada</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{ getDate(dataFiltro.date_create) }}
                                            </h6>
                                        </div>
                                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" aria-label="Close"
                                        data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <!-- /Fin de card Filtros -->

            </div>
            <br><br><br><br>
        </div>

    </main>

    <!-- /container -->

</template>
  
<script>
import moment from 'moment';
import 'moment/locale/es';
import { ref } from '@vue/reactivity';

export default {
    name: 'FiltroUser',

    data() {
        //const idUsuario = ref('')
        const precioInicio = ref('')
        const precioFinal = ref('')
        const idAnfitrion = ref('')
        const idMunicipio = ref('')
        const fechaSalida = ref('')

        return {
            precioInicio: precioInicio.value,
            precioFinal: precioFinal.value,
            idAnfitrion: idAnfitrion.value,
            idMunicipio: idMunicipio.value,
            idTipoHospedaje: idTipoHospedaje.value,
        }
    },

    data: () => ({
        dataAnfitriones: null,
        dataMunicipios: null,
        dataTipoHospedajes: null,
        dataFiltros: null,
        respuesta: null,
        dataImagenes: null,
        idUsuario: null,
    }),
    created() {
        let claves = Object.keys(localStorage)
        claves.forEach(clave => {
            localStorage.getItem(clave)
            this.idUsuario = clave
        });

        axios.get('http://api_airbnb.test/servicios').then(result => {
            this.dataAnfitriones = result.data.anfitriones,
                this.dataMunicipios = result.data.municipios,
                this.dataTipoHospedajes = result.data.tipoHospedaje,
                this.dataTarifas = result.data.tarifas,
                this.dataImagenes = result.data.imagenes
        })

    },

    methods: {

        showModal(id) {
            $("#" + id).modal('show');
        },

        reservar(idServicio) {
            this.$router.push('/reservar/' + idServicio)
        },

        verServicio(idServicio) {
            this.$router.push('/verServicio/' + idServicio)
        },

        mostrarFoto: function (url) {
            return url
        },
        getDate: function (fecha) {
            moment.locale('es')
            return this.fechaFinall = moment(fecha).fromNow()
        },

        enviarData: function () {
            axios({
                method: 'post',
                url: 'http://api_airbnb.test/filtros',
                data: {
                    precioInicio: this.precioInicio,
                    precioFinal: this.precioFinal,
                    idAnfitrion: this.idAnfitrion,
                    idMunicipio: this.idMunicipio,
                    idTipoHospedaje: this.idTipoHospedaje,
                    nombre: '',
                    idUsuario: this.idUsuario,

                }
            }).then(response => getData(response.data.servicios)).catch(function (error) {
                swal("¡Error!", "Ingresa los datos correctamente", "error");
            })

            const getData = (data) => {
                if (data == null) {
                    this.respuesta = 'No se encontraron resultados.'
                }
                else {
                    this.dataFiltros = data,
                        this.respuesta = null;
                }

            }
        },

    },

};

</script>

<style scoped>
.container {
    margin-top: 10vh;
}
.zoom:hover {
    transform: scale(1.5); 
    opacity:5;
}
.zoom {
    transition: transform .2s; 
}
</style>