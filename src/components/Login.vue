<template><br><br>
 <div class="container">
        <div class="card card-container">   
             <h2 class="title">Airbnb</h2>
             <h5 class="subtitle">Inicia sesión en tu cuenta.</h5>
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="email" id="inputEmail" class="form-control" placeholder="Correo electronico" required autofocus>
                <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>
                <div id="remember" class="checkbox">
                    
                </div>
                <button class="btn btn-primary" type="submit">Ingresar</button>
            </form><!-- /form -->
           <a href="#" class="nav-link">¿Has olvidado tu contraseña?</a>
        </div><!-- /card-container -->
    </div><!-- /container -->
</template>
<script>

export default {
  name: "App",
};
</script>


<style>

.card-container.card {
    max-width: 350px;
    padding: 40px 40px;
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