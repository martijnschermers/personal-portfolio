<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  export let project;

  let visible;

  onMount(() => (visible = true));
</script>

{#if visible}
  <div class="project" transition:fly={{ y: 200, duration: 2000 }}>
    <h2>{project.title}</h2>

    <p>
      {project.description}
    </p>

    <div class="links">
      <a href={project.link} class="underline">
        <i class="fa fa-link" />
        {project.type}
      </a>

      {#each project.badges as badge}
        <div class="badge">
          <a href={badge.link} style="color: {badge.color}">{badge.name}</a>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .underline {
    display: flex;
  }

  .project {
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--base-300);
    box-shadow: 0.25rem 0.25rem 0.25rem var(--primary);
    margin: 1rem;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .badge {
    padding: 0.25rem;
    background-color: var(--base-300);
  }

  .badge a {
    font-size: 0.75rem;
  }
</style>
