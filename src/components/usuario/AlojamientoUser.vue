<template >
    <div class="container">
        <div class="card border-0 shadow">
            <div class="card-body">

                <form>
                    <!-- primera fila -->
                    <div class="form-group">
                        <div class="row">

                            <!-- primera  -->
                            <div class="col-md-2">
                                <label class="label has-text-centered">Desde:{{ fechaInicio }}</label>
                                <div class="slider-wrapper">
                                    <input type="date" min="0" class="form-control" v-model="fechaInicio" max="2022-12-31" >
                                </div>
                            </div>

                            <!-- Segunda  -->
                            <div class="col-md-2">
                                <label class="label has-text-centered">Desde:{{ fechaFinal }}</label>
                                <div class="slider-wrapper">
                                    <input type="date" :min="fechaInicio" class="form-control" v-model="fechaFinal" max="2022-12-31" >
                                </div>
                            </div>

                             <!-- Boton de filtrar -->
                            <div class="col-md-2">
                                <label class="label has-text-centered">.</label>
                                <div class="control">

                                    <button @click.prevent="enviarData" class="btn btn-primary">Filtrar</button>
                                </div>
                            </div>                        

                        </div>
                    </div>
                    <!-- Fin de formulario -->
                </form>
            </div>
        </div>

        <!-- comienza body de los servicios -->
        <div class="row g-4">
            <div class="row row-cols-1 row-cols-md-4 g-4">

                <div v-for="dataServicio in dataServicios" :key="dataServicio.idServicio">
                    <div class="card h-100 border-0 shadow">

                        <div v-for="dataImagen in dataImagenes" :key="dataImagen.idImagen">
                            <div v-if="dataServicio.idServicio === dataImagen.idServicio">
                                <div class="carousel-item active">
                                    <img class="mx-auto d-block card-img-top" v-bind:src="mostrarFoto(dataImagen.url)"
                                        alt="First slide">
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <h2> {{ dataServicio.nombre }} </h2>

                            <div v-for="dataAnfitrion in dataAnfitriones" :key="dataAnfitrion.idAnfitrion">
                                <div v-for="dataUsuario in dataUsuarios" :key="dataUsuario.idUsuario">
                                    <h5
                                        v-if="dataServicio.idAnfitrion === dataAnfitrion.idAnfitrion && dataAnfitrion.idUsuario === dataUsuario.idUsuario">
                                        @{{
                                                dataUsuario.nombre + ' ' + dataUsuario.apellido
                                        }}</h5>
                                </div>
                            </div>

                            <p> {{ dataServicio.descripcion }}</p>

                            <div v-for="dataMunicipio in dataMunicipios" :key="dataMunicipio.idMunicipio">
                                <p v-if="dataServicio.idMunicipio === dataMunicipio.idMunicipio">Municipio: {{
                                        dataMunicipio.municipio
                                }}</p>
                            </div>
                            <p> Publicada: {{ getDate(dataServicio.date_create) }}</p><br>

                            <div class="form-group">
                                <div class="row">

                                    <div class="col-md-6">
                                        <button class="btn btn-primary"
                                            @click.prevent="verServicio(dataServicio.idServicio)">Ver</button>
                                    </div>

                                    <div class="col-md-6">

                                        <button class="btn btn-info"
                                            @click="showModal(dataServicio.idServicio)">Preview</button>
                                    </div><br><br>

                                    <button v-if="dataServicio.disponibilidad == 0" class="btn btn-success"
                                        @click.prevent="reservar(dataServicio.idServicio)">Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Inicia el modal-->
                    <div v-bind:id="dataServicio.idServicio" class="modal" tabindex="-1" role="dialog"
                        aria-labelledby="myLargeModalLabel">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h3 class="title">{{ dataServicio.nombre }}</h3>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form class="row g-4" action="#" method="POST">
                                        <div v-for="dataImagen in dataImagenes" :key="dataImagen.idImagen"
                                            class="form-group col-md-12">
                                            <img v-if="dataServicio.idServicio === dataImagen.idServicio"
                                                class="mx-auto d-block" v-bind:src="mostrarFoto(dataImagen.url)"
                                                alt="First slide">
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Tarifa/Noche</label>
                                            <div v-for="dataTarifa in dataTarifas" :key="dataTarifa.idTarifa">
                                                <h6 class="subtitle is-6 has-text-centered"
                                                    v-if="dataServicio.idTarifa === dataTarifa.idTarifa">
                                                    ${{ dataTarifa.precio }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Tipo de Hospedaje</label>
                                            <div v-for="dataTipoHospedaje in dataTipoHospedajes"
                                                :key="dataTipoHospedaje.idTipoHospedaje">
                                                <h6 class="subtitle is-6 has-text-centered"
                                                    v-if="dataServicio.idTipoHospedaje === dataTipoHospedaje.idTipoHospedaje">
                                                    {{ dataTipoHospedaje.tipoHospedaje }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Disponibilidad</label>

                                            <div v-if="dataServicio.disponibilidad == 0">
                                                <h6 class="subtitle is-6 has-text-centered">Sin reservar</h6>
                                            </div>
                                            <div v-if="dataServicio.disponibilidad == 1">
                                                <h6 class="subtitle is-6 has-text-centered">Reservado</h6>
                                            </div>

                                        </div>

                                        <div class="form-group col-md-4">
                                            <label class="label has-text-centered">Municipio</label>
                                            <div v-for="dataMunicipio in dataMunicipios"
                                                :key="dataMunicipio.idMunicipio">
                                                <h6 class="subtitle is-6 has-text-centered"
                                                    v-if="dataServicio.idMunicipio === dataMunicipio.idMunicipio">
                                                    {{ dataMunicipio.municipio }}</h6>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label class="label has-text-centered">Direccion</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{ dataServicio.direccion }}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label class="label has-text-centered">Descripción del hospedaje</label>
                                            <h6 class="subtitle is-6 has-text-centered">{{ dataServicio.descripcion }}
                                            </h6>
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label class="label has-text-centered">Publicada por</label>
                                            <div v-for="dataAnfitrion in dataAnfitriones"
                                                :key="dataAnfitrion.idAnfitrion">
                                                <div v-if="dataServicio.idAnfitrion === dataAnfitrion.idAnfitrion">
                                                    <div v-for="dataUsuario in dataUsuarios"
                                                        :key="dataUsuario.idUsuario">
                                                        <h6 v-if="dataUsuario.idUsuario === dataAnfitrion.idUsuario">
                                                            <div></div>@{{
                                                                    dataUsuario.nombre + '.' + dataUsuario.apellido
                                                            }}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-3">
                                            <label class="label has-text-centered">Publicada: </label>
                                            <h6 class="subtitle is-6 has-text-centered">{{
                                                    getDate(dataServicio.date_create)
                                            }}
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

                </div>
            </div>
        </div>

    </div><br><br><br>

</template>
  
<script>

import moment from 'moment';
import 'moment/locale/es';
import { ref } from '@vue/reactivity';
export default {


    name: 'Alojamiento',

    
    data() {
        const fechaInicio = ref('')
        const fechaFinal = ref('')

        return {
            fechaInicio: fechaInicio.value,
            fechaFinal: fechaFinal.value,  
        }
    },

    data: () => ({
        dataServicios: null,
        dataAnfitriones: null,
        dataMunicipios: null,
        dataTarifas: null,
        dataTipoHospedajes: null,
        dataUsuarios: null,
        dataImagenes: null,
        rutaFotos: null,
        fotos: null

    }),
    created() {
        axios.get('http://api_airbnb.test/servicios').then(result => {
            this.dataServicios = result.data.servicios
            this.dataAnfitriones = result.data.anfitriones
            this.dataMunicipios = result.data.municipios
            this.dataTarifas = result.data.tarifas
            this.dataTipoHospedajes = result.data.tipoHospedaje
            this.dataUsuarios = result.data.usuarios
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

        getDate: function (fecha) {
            moment.locale('es')
            return this.fechaFinall = moment(fecha).fromNow()
        },

        mostrarFoto: function (url) {
            return url
        },

        //funcion para la peticion de filtro de servicios por fecha
        enviarData: function () {
            axios({
                method: 'post',
                url: '',
                data: {
                    fechaInicio: this.fechaInicio,
                    fechaFinal: this.fechaFinal,
            
                }
            }).then(response => console.log(response) ).catch(function (error) {
                swal("¡Error!", "Ingresa los datos correctamente", "error");
            })
        },
        

    }
};


</script>

<style scoped>
.container {
    margin-top: 10vh;
}
</style>