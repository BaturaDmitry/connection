<script>
  import { log } from 'console';
import Layout from './Layout.svelte';

</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Layout>
  <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
    <main class="mdl-layout__content">
      <div class="mdl-card mdl-shadow--6dp">
        <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
        </div>
        <div class="mdl-card__supporting-text">
          <form action="auth/login" method="post">
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" name="username" id="username" />
              <label class="mdl-textfield__label" for="username">Username</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="password" name="password" id="password" />
              <label class="mdl-textfield__label" for="password">Password</label>
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>

          <button type="button" onClick="location.href='/google' ">Google</button>
          <button type="button" onClick="location.href='/auth/facebook' ">Facebook</button>

     
</Layout>

<style>
  h1 {
    color: purple;
  }  
</style>