<template>
    <div v-if="$route.params.id = local">
        <NavbarUser />
       <MisReservasUser />
        <VueFooter />
    </div>

    <div v-else>
        <LoginView />
    </div>

</template>

<script>
import MisReservasUser from '@/components/usuario/MisReservasUser.vue';
import NavbarUser from '@/components/usuario/NavbarUser.vue';
import VueFooter from '@/components/VueFooter.vue';
import LoginView from '../LoginView.vue';


export default {
    name: 'AlojamientoView',
    components: {
    NavbarUser,
    VueFooter,
    LoginView,
    MisReservasUser
},
    data: () => ({
        local: ''
    }),
    created() {
        let claves = Object.keys(localStorage)

        claves.forEach(clave => {
            localStorage.getItem(clave)
            this.local = clave
        });
    },
}

</script>