<script>
  import { log } from 'console';
import Layout from './Layout.svelte';
import Nav from './MainPageNav.svelte';
</script>

<svelte:head>
  <title>Main Page</title>
</svelte:head>

<Layout>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button" href='/logout'>Log Out</a>
          </div>
      
</Layout>

<style> 
  div {
    color: blue;
  }  
</style>