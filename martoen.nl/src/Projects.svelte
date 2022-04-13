<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  let visible = false;
  onMount(() => (visible = true));
</script>

<div id="projects" class="projects container">
  <h1>Projecten</h1>
  {#if visible}
    <div transition:fly={{ y: 200, duration: 2000 }} class="card">
      <h2>Schooster</h2>

      <p>
        Dit project is een website gemaakt met het Django framework. Deze
        website laat de roosters zien van mij en mijn naasten.
      </p>
      <a href="https://schooster.nl/"><i class="fa fa-link" /> Website</a>
    </div>

    <div transition:fly={{ y: 200, duration: 2000 }} class="card">
      <h2>JavaScript API</h2>

      <p>
        Door dit kleine project ben ik meer te weten gekomen over werken met
        API's. In dit geval ging het over een REST API die JSON data teruggaf.
        Ik heb deze API ook verwerkt in deze website.
      </p>
      <a href="https://github.com/martijnschermers/javascript-api"
        ><i class="fa fa-link" /> Github</a
      >
    </div>
  {/if}
</div>

<style>
</style>