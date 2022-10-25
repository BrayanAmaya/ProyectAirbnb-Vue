<template>

    <div class="container">

        <div v-on="getIdServicio(this.$route.params.idServicio)" v-for="dataServicio in dataServicios"
            :key="dataServicio.idServicio" class="row">
            <div>
                <div class="col-md-12 m-auto">
                    <div class="card border-dark">

                        <form>

                            <div class="col-md-4">
                                <div>
                                    <div>
                                        <div class="h1 text-dark">
                                            <label class="h1">
                                                {{ dataServicios[0].nombre }} - ${{ dataTarifas[0].precio }}<label
                                                    class="h4">/Dia</label> </label>
                                        </div>

                                        <div class="col-md-4">
                                            <label v-if="dataTarifas[0].descuento > 0" style="color:red;"
                                                class="h6">descuento
                                                {{ dataTarifas[0].descuento }}%</label>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <p class="h2 text-warning">★★★★★</p>
                                </div>
                            </div>

                            <!-- imgagenes -->
                            <div class="row">
                                <div class="col-md-5">
                                    <img src="http://apitechhousing.test/img/capacitacionesGalerias/4/SyHkU3wTD7chv25x.jpg"
                                        class="w-100 shadow-1-strong rounded mb-2" alt="" />
                                </div>
                                <div class="col-md-3">
                                    <!-- Demás imagenes -->
                                </div>
                            </div>
                            <!-- fin Imagenes -->


                            <!-- Primera  -->
                            <div class="col-md-3">
                                <div>
                                    <div class="h4">
                                        <div>
                                            <div class="h4">
                                                <label class="h2 text-dark">Anfitrion:</label> @{{
                                                        dataUsuarios[0].nombre + '.' + dataUsuarios[0].apellido
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div class="col-md-4">
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div class="h4">
                                                            <label class="h2 text-dark">Tipo Hospedaje:</label>{{
                                                                    dataTipoHospedajes[0].tipoHospedaje
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-7">
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div class="h4">
                                                            <label class="h2 text-dark">Ubicacion:</label>
                                                            {{ dataPaises[0].pais }}, {{
                                                                    dataDepartamentos[0].departamento
                                                            }},
                                                            {{ dataMunicipios[0].municipio }} -
                                                            {{ dataServicios[0].direccion }}
                                                        </div><br>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-7">
                                <div>
                                    <div class="h4">
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div class="h4">
                                                            <label class="h5">{{ dataServicios[0].descripcion }}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr><br><br>

                            <div class="col-md-12">
                                <div class="text-center">
                                    <label class="h2">Cantidad de huespedes</label>
                                </div>
                            </div>

                            <div class="d-flex justify-content-center">
                                <div class="col-md-10 text-center ">
                                    <table class=" table table-hover">
                                        <caption class="text-center">Recepción de Huespedes</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col-md-3">Adultos</th>
                                                <th scope="col-md-3">Menores de Edad</th>
                                                <th scope="col-md-3">Bebes</th>
                                                <th scope="col-md-3">Mascotas</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{{ dataHuespedes[0].adulto }} </td>
                                                <td>{{ dataHuespedes[0].menores }} </td>
                                                <td>{{ dataHuespedes[0].bebes }} </td>
                                                <td>{{ dataHuespedes[0].mascotas }} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <br>
                            <hr><br>

                            <div class="col-md-10 justify-content-center mx-auto">
                                <div>
                                    <label class="h2 text-dark">Anfitrion:<label class="h4">@{{
                                            dataUsuarios[0].nombre + '.' +
                                            dataUsuarios[0].apellido
                                    }}</label></label><br>
                                    <!-- Imagen por defecto de anfitrion -->
                                    <img class="img-thumbnail" src="@/assets/img/publicaciones/default.jpg" alt=""><br>
                                    <label v-on="getDate(dataAnfitriones[0].date_create)" class="h6">Se registró:
                                        {{ fechaFinal }}</label><br><br>
                                </div>
                            </div>



                            <div class="d-flex justify-content-center">
                                <div class="col-md-10 ">
                                    <div class="text-center">
                                        <table class=" table table-hover">

                                            <caption class="text-center">Datos del Anfitrion</caption>
                                            <thead>
                                                <tr>
                                                    <th scope="col-md-3">Nombre</th>
                                                    <th scope="col-md-3">Apellido</th>
                                                    <th scope="col-md-3">Email</th>
                                                    <th scope="col-md-3">Numero de telefono </th>
                                                    <th scope="col-md-3">Puntuacion</th>
                                                    <th scope="col-md-3">Idioma Nativo</th>

                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>{{ dataUsuarios[0].nombre }}</td>
                                                    <td>{{ dataUsuarios[0].apellido }}</td>
                                                    <td>{{ dataUsuarios[0].email }}</td>
                                                    <td>{{ dataUsuarios[0].numeroTelefono }}</td>
                                                    <td>{{ dataAnfitriones[0].puntuacion }}</td>
                                                    <td>{{ dataIdiomas[0].idioma }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div><br>
                                </div>
                            </div>
                            <hr><br>

                            <div class="col-5 justify-content-center mx-auto">
                                <label class="h2 text-dark">Lo que este lugar ofrece</label><br><br>
                                <div class="row ">

                                    <div class="col-6 ">
                                        <div>
                                            <div>
                                                <div v-for="dataSubServicio in dataGuardarSubServicios"
                                                    :key="dataSubServicio.idSubServicio">

                                                    <li class="col-md-12">{{ dataSubServicio.subServicio }}</li>

                                                </div>
                                            </div>
                                        </div>
                                    </div><br>
                                </div>
                            </div>
                            <hr>

                            <div class="col-5 justify-content-center mx-auto">
                                <label class="h2 text-dark">Lo que debes saber</label><br><br>
                                <div class="row">

                                    <div class="col-6 border-right">
                                        <label class="text-dark">Reglas de la casa</label>
                                        <div>
                                            <div>

                                                <div v-for="dataReglaServicio in dataGuardarReglasServicios"
                                                    :key="dataReglaServicio.idReglaServicio">
                                                    <li class="col-md-12">{{ dataReglaServicio.reglaServicio }} </li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <label>Salud y seguridad</label>
                                        <div>
                                            <div>

                                                <div v-for="dataSaludSeguridad in dataGuardarSaludYSeguridad"
                                                    :key="dataSaludSeguridad.idSaludSeguridad">
                                                    <li class="col-md-12"> {{ dataSaludSeguridad.saludSeguridad }} </li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div><br><br>
                                <label class="label">Politicas de cancelacion</label>

                                <div>
                                    <div>
                                        <div v-for="dataPoliticaDeCancelacion in dataGuardarPoliticasDeCancelacion"
                                            :key="dataPoliticaDeCancelacion.idPoliticaCancelacion">

                                            <li class="col-md-12"> {{ dataPoliticaDeCancelacion.politicaCancelacion }}
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div><br><br><br><br><br><br>


    <!-- /container -->

</template>
  
<script>
import { ref } from '@vue/reactivity';
import moment from 'moment';
import 'moment/locale/es';



export default {
    name: 'VerServicioUser',

    data() {

        const fechaSalida = ref('')

        return {

            idTipoHospedaje: idTipoHospedaje.value,
        }
    },

    data: () => ({

        idServicio: null,
        dataServicios: null,
        dataTarifas: null,
        dataAnfitriones: null,
        dataTipoHospedajes: null,
        dataMunicipios: null,
        dataDepartamentos: null,
        dataPaises: null,
        dataHuespedes: null,
        fechaFinal: null,
        dataIdiomas: null,
        dataUsuarios: null,
        dataGuardarSubServicios: null,
        dataSubServicios: null,
        dataGuardarReglasServicios: null,
        dataReglasServicios: null,
        dataGuardarSaludYSeguridad: null,
        dataSaludYSeguridad: null,
        dataGuardarPoliticasDeCancelacion: null,
        dataPoliticasDeCancelacion: null,



    }),
    created() {

        axios.get('http://api_airbnb.test/servicios/' + this.$route.params.idServicio).then(result => {
            this.dataServicios = result.data.servicio
            this.dataTarifas = result.data.tarifa
            this.dataAnfitriones = result.data.anfitrion
            this.dataTipoHospedajes = result.data.tipoHospedaje
            this.dataMunicipios = result.data.municipio
            this.dataDepartamentos = result.data.departamento
            this.dataPaises = result.data.pais
            this.dataUsuarios = result.data.usuario
            this.dataHuespedes = result.data.huespedes
            this.dataIdiomas = result.data.idiomaPrimario
            this.dataGuardarSubServicios = result.data.subServicio
            this.dataGuardarSaludYSeguridad = result.data.saludSeguridad
            this.dataGuardarPoliticasDeCancelacion = result.data.politicaCancelacion
            this.dataGuardarReglasServicios = result.data.reglaServicio
            console.log(this.dataGuardarSubServicios)
        })

    },
    methods: {

        getIdServicio: function (id) {
            this.idServicio = id;
        },

        getDate: function (fecha) {
            moment.locale('es')
            this.fechaFinal = moment(fecha).fromNow()
        }

    }

};

</script>

<style scoped>
.container {
    margin-top: 10vh;
}
</style>