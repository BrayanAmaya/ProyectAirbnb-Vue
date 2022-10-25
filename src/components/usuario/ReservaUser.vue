<template ><br><br><br><br>
    <div class="row">
        <div class="col-md-6 m-auto">
            <div class="card border-0 shadow">
                <div class="card-body">

                    <div class="col-md-12">
                        <img id="profile-img" class="profile-img-card" src="@/assets/img/logo.png" />
                    </div>
                    <div v-for="dataServicio in dataServicios" :key="dataServicio.idServicio">
                    <h1  class="title">Reservar en:{{dataServicio.nombre}}
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
                                    <label class="label has-text-centered">Tarifa/Noche</label>

                                    <div>
                                        <div>
                                            <div>
                                                <h6
                                                    class="subtitle is-6 has-text-centered">
                                                    ${{ dataTarifas[0].precio }} descuento {{dataTarifas[0].descuento}}%</h6>
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
                                    <h5 class="label has-text-centered">Dias
                                        de
                                        reserva: {{calcular(fechaSalida,fechaEntrada)}}</h5><br>
                                </div>
                                <div v-if="fechaSalida != null && fechaEntrada != null ">
                                <h1 class="label has-text-centered">Total a Pagar: ${{calcularTotal(diasReserva,dataTarifas[0].precio,dataTarifas[0].descuento)}}</h1><br><br>
                                </div>
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
        axios.get('http://api_airbnb.test/servicios/reservas/'+this.$route.params.idServicio).then(result => {
            this.dataServicios = result.data.servicio,
            this.dataTarifas = result.data.tarifa
            this.fechaActual = new Date().toISOString().slice(0, 10);
            this.idServicio = this.dataServicios[0].idServicio
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
            return this.diasReserva = moment.duration(fechaFinal.diff(fechaInicio)).asDays();
        },

        calcularTotal: function (diasReserva, precio, descuento) {
            var subTotal = diasReserva * precio;
            var obtenerDescuento = descuento / 100;
            var totalFinal = subTotal * obtenerDescuento;
            var total = subTotal - totalFinal;
            return this.totalAPagar = total;
        },

        enviarData: function () {
            axios({
                method: 'POST',
                url: 'http://api_airbnb.test/pagos',
                data: {
                    fechaEntrada: this.fechaEntrada,
                    fechaSalida: this.fechaSalida,
                    idServicio: this.idServicio,
                    idUsuario: this.idUsuario,
                    total: this.totalAPagar,
                    banco: this.banco,
                    cuenta: this.numeroDeBanco,
                    pin: this.pin

                }
            }).then(response => evaluar(response)).catch(function (error) {
                swal("¡Error!", "Ingresa los datos correctamente", "error");
            })
            const evaluar  = (response) => {
                console.log(response)
                if(response.data.errors != null){
                    if(response.data.errors.cuenta!=null){
                        swal("¡Error!",response.data.errors.cuenta, "error")
                    }else if(response.data.errors.pin!=null){
                        swal("¡Error!",response.data.errors.pin, "error")
                    }else if(swal("¡Error!",response.data.errors.banco, "error")){
                        swal("¡Error!",response.data.errors.banco, "error")
                    }
                }
                if(response.data.message != 'Pago realizado con exito'){
                    swal("¡Error!",response.data.message, "error")
                }else{
                    swal(response.data.message, "exito")
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
</style>