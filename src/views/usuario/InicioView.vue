<template>
    <div v-if="$route.params.id = local">
        <NavbarUser />
        <Alojamiento />
        <VueFooter />
    </div>

    <div v-else>
        <LoginView />
    </div>

</template>

<script>
import NavbarUser from '@/components/usuario/NavbarUser.vue';
import VueFooter from '@/components/VueFooter.vue';
import Alojamiento from '@/components/Alojamiento.vue';
import LoginView from '../LoginView.vue';


export default {
    name: 'AlojamientoView',
    components: {
        NavbarUser,
        VueFooter,
        Alojamiento,
        LoginView,

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
