<template><br><br><br>
    <div class="container">
        <div class="card card-container">
            <h2 class="title">Airbnb</h2>
            <h5 class="subtitle">Inicia sesión en tu cuenta.</h5>
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="email" v-model="email" class="form-control" placeholder="Correo electronico" required
                    autofocus>
                <input type="password" v-model="password" class="form-control" placeholder="Contraseña" required>

                <button class="btn btn-primary" @click.prevent="evaluar">Ingresar</button>

            </form><!-- /form -->
            <a href="#" class="nav-link">¿Has olvidado tu contraseña?</a>
        </div><!-- /card-container -->
    </div><!-- /container -->
    <br><br>
</template>

<script>

import { ref } from '@vue/reactivity'

export default {
    name: "App",

    data() {
        const email = ref('')
        const password = ref('')
        return {
            email: email.value,
            password: password.value
        }
    },
    methods: {
        evaluar: function () {
            axios({
                method: 'post',
                url: 'http://api_airbnb.test/auth/login',
                data: {
                    email: this.email,
                    password: this.password
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
}

</script>


<style>
.card-container.card {
    max-width: 400px;
    padding: 60px 60px;
    margin-right: auto;
}

.card {
    background-color: #F7F7F7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.form-signin input[type=email],
.form-signin input[type=password],
.form-signin input[type=text],
.form-signin button {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    z-index: 1;
    position: relative;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>