<script>
let error = "";
import Layout from './Layout.svelte';

</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Layout>

        <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
        </div>
        <div class="mdl-card__supporting-text">
          <form action="auth/login" method="post">
            
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" name="name" id="name" />
              <label class="mdl-textfield__label" for="name">Username</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="password" name="password" id="password" />
              <label class="mdl-textfield__label" for="password">Password</label>
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log In</button>
            </div>
          </form>
          <button type="button" onClick="location.href='/registrationpage' ">Registration page</button>

        </div>

          <button type="button" onClick="location.href='/auth/google'">Google</button>
          <button type="button" onClick="location.href='/auth/facebook' ">Facebook</button>
        
          <div>{error}</div>
          
</Layout>

<style>
 
</style>