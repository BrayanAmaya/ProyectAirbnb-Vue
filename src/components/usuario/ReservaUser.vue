<template ><br><br><br><br>
    <div class="row">
        <div class="col-md-6 m-auto">
            <div class="card border-0 shadow">
                <div class="card-body">

                    <div class="col-md-12">
                        <img id="profile-img" class="profile-img-card" src="@/assets/img/logo.png" />
                    </div>

                    <h1 v-on="obtenerIdUsuario(this.$route.params.idServicio)" class="title">Reservar id:{{idServicio}}
                    </h1>
                    <h4 class="subtitle">
                        Llena los siguientes datos para poder reservar.
                    </h4><br>

                    <form>
                        <!-- primera fila -->
                        <div class="form-group">
                            <div class="row">

                                <!-- primera  -->
                                <div class="col-md-12">
                                    <label v-on:="Data()" class="label has-text-centered">Tarifa/Noche
                                        {{idUsuario}}</label>

                                    <div v-for="dataServicio in dataServicios" :key="dataServicio.idServicio">
                                        <div v-if="dataServicio.idServicio === this.$route.params.idServicio">

                                            <div v-for="dataTarifa in dataTarifas" :key="dataTarifa.idTarifa">
                                                <h6 v-on="calcularTotal(diasReserva, dataTarifa.precio,dataTarifa.descuento)"
                                                    class="subtitle is-6 has-text-centered"
                                                    v-if="dataServicio.idTarifa === dataTarifa.idTarifa">
                                                    ${{ dataTarifa.precio }} descuento {{dataTarifa.descuento}}%</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <!-- Segunda  -->
                                <div class="col-md-4">
                                    <label class="label has-text-centered">Fecha de Entrada</label>
                                    <div class="control">
                                        <input type="date" v-model="fechaEntrada" class="form-control"
                                            placeholder="2022-01-02" v-bind:min="fechaActual" max="2022-12-31" required
                                            autofocus>
                                    </div>
                                </div>


                                <!-- Tercera  -->
                                <div class="col-md-4">
                                    <label class="label has-text-centered">Fecha de Salida</label>
                                    <div class="control">
                                        <input type="date" v-model="fechaSalida" class="form-control"
                                            placeholder="2022-01-02" v-bind:min="fechaEntrada" max="2022-12-31" required
                                            autofocus>
                                    </div><br>
                                </div>


                                <div v-if="fechaSalida != null && fechaEntrada != null ">
                                    <h5 v-on="calcular(fechaSalida,fechaEntrada)" class="label has-text-centered">Dias
                                        de
                                        reserva: {{diasReserva}}</h5><br>
                                </div>

                                <h1 class="label has-text-centered">Total a Pagar: ${{totalAPagar}}</h1><br><br>

                                <!-- tercera fila -->
                                <div class="form-group">
                                    <div class="row">

                                        <!-- boton registro -->
                                        <div class="text-center mt-6">
                                            <div class="control">
                                                <button v-on:click="counter = 1" class="btn btn-primary">Confimar
                                                    pago</button><br><br>
                                            </div>
                                        </div><br>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>
                        <!-- primera fila -->
                        <div v-if="counter >= 1 && totalAPagar > 0" class="form-group">
                            <div class="row">

                                <!-- primera  -->
                                <div class="col-md-12">
                                    <img id="profile-img" class="profile-img-card" src="@/assets/img/logoPago.png" />
                                </div>

                                <!-- Segunda  -->
                                <div class="col-md-4">
                                    <label class="label has-text-centered">Banco</label>
                                    <div class="control">
                                        <input type="text" v-model="banco" class="form-control" placeholder="Banco Azul"
                                            required autofocus>
                                    </div>
                                </div>

                                <!-- tercera  -->
                                <div class="col-md-4">
                                    <label class="label has-text-centered">N° de cuenta</label>
                                    <div class="control">
                                        <input type="number" v-model="numeroDeBanco" class="form-control"
                                            placeholder="12345678" required autofocus>
                                    </div>
                                </div>

                                <!-- cuarta  -->
                                <div class="col-md-4">
                                    <label class="label has-text-centered">PIN</label>
                                    <div class="control">
                                        <input type="number" v-model="pin" class="form-control" placeholder="123"
                                            required autofocus>
                                    </div><br>
                                </div>


                                <!-- Quinta fila -->
                                <div class="form-group">
                                    <div class="row">

                                        <!-- boton registro -->
                                        <div class="text-center mt-6">
                                            <div class="control">
                                                <button @click.prevent="enviarData"
                                                    class="btn btn-primary">Pagar</button>
                                            </div>
                                        </div><br>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Fin de formulario -->
                    </form>
                </div>

            </div>
        </div>
    </div>

    <!-- /container -->

    <br><br><br>

</template>
  
<script>
import { ref } from '@vue/reactivity';

export default {
    name: 'ReservaUser',

    data() {
        //const idUsuario = ref('')
        const banco = ref('')
        const numeroDeBanco = ref('')
        const pin = ref('')
        const fechaEntrada = ref('')
        const fechaSalida = ref('')

        return {
            //idUsuario: 1,
            fechaEntrada: fechaEntrada.value,
            fechaSalida: fechaSalida.value,
            banco: banco.value,
            numeroDeBanco: numeroDeBanco.value,
            pin: pin.value,
        }
    },

    data: () => ({
        dataServicios: null,
        idServicio: null,
        dataTarifas: null,
        fechaActual: null,
        diasReserva: null,
        totalAPagar: null,
        counter: 0,
        idUsuario: null,

    }),
    created() {
        axios.get('http://api_airbnb.test/servicios').then(result => {
            this.dataServicios = result.data.clients,
                this.fechaActual = new Date().toISOString().slice(0, 10);
        })
        axios.get('http://api_airbnb.test/tarifas').then(result => {
            this.dataTarifas = result.data.clients
        })

        let claves = Object.keys(localStorage)

        claves.forEach(clave => {
            localStorage.getItem(clave)
            this.idUsuario = clave
        });

    },
    methods: {

        obtenerIdUsuario: function (id) {
            this.idServicio = id;
        },

        calcular: function (fechaS, fechaI) {
            var fechaFinal = moment(fechaS);
            var fechaInicio = moment(fechaI);
            //console.log(moment.duration(fechaFinal.diff(fechaInicio)).asDays());
            this.diasReserva = moment.duration(fechaFinal.diff(fechaInicio)).asDays();
        },

        calcularTotal: function (diasReserva, precio, descuento) {
            var subTotal = diasReserva * precio;
            var obtenerDescuento = descuento / 100;
            var totalFinal = subTotal * obtenerDescuento;
            var total = subTotal - totalFinal;
            //console.log(total);
            this.totalAPagar = total;
        },

        enviarData: function () {
            axios({
                method: 'post',
                url: 'http://api_airbnb.test/pagos',
                data: {
                    fechaEntrada: this.fechaEntrada,
                    fechaSalida: this.fechaSalida,
                    idServicio: this.idServicio,
                    idUsuario: this.idUsuario,
                    total: this.totalAPagar,
                    banco: this.banco,
                    numeroDeBanco: this.numeroDeBanco,
                    pin: this.pin

                }
            }).then(response => swal(" correctamente", "exito")).catch(function (error) {
                swal("¡Error!", "Ingresa los datos correctamente", "error");

            }
            )
        },

        //metodo de prueba para recoger y ver los datos a enviar
        Data: function () {
            /*  console.log(this.totalAPagar);
              console.log(this.idServicio);
              console.log(this.fechaEntrada);
              console.log(this.fechaSalida);
              console.log(this.banco);
              console.log(this.numeroDeBanco);
              console.log(this.pin);*/

            /*    for (let i = 0; i <= localStorage.length; i++) {
                    let key = localStorage.key(i);
                    alert(`${key}: ${localStorage.getItem(key)}`);
                }*/


        },

    },

};

</script>

<style scoped>
.container {
    margin-top: 10vh;
}
</style>