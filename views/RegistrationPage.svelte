<script>
  import { log } from 'console';
import Layout from './Layout.svelte';

</script>

<svelte:head>
  <title>Registration</title>
</svelte:head>

<Layout>
  <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
    <main class="mdl-layout__content">
      <div class="mdl-card mdl-shadow--6dp">
        <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
        </div>
        <div class="mdl-card__supporting-text">
          <form action="auth/register" method="post">
            <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" name="email" id="email" />
                <label class="mdl-textfield__label" for="email">Email</label>
              </div>
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" name="name" id="name" />
              <label class="mdl-textfield__label" for="name">Username</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="password" name="password" id="password" />
              <label class="mdl-textfield__label" for="password">Password</label>
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Register</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>

     
</Layout>

<style>
  h1 {
    color: purple;
  }  
</style>