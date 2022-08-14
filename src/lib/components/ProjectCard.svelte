<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  export let project;

  let visible;

  onMount(() => (visible = true));
</script>

{#if visible}
  <div class="project" transition:fly={{ y: 200, duration: 2000 }}>
    <h3>{project.title}</h3>

    <p>
      {project.description}
    </p>

    <div class="links">
      <a href={project.link} class="underline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
        {project.type}
      </a>

      <div class="badges">
        {#each project.badges as badge}
          <div class="badge">
            <a href={badge.link} style="color: {badge.color}">{badge.name}</a>
          </div>
        {/each}
      </div>
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

  .badges {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .badge {
    padding: 0.5rem;
    background-color: var(--base);
    border-radius: 0.5rem;
    margin-inline: 0.15rem;
  }

  .badge a {
    font-size: 0.9rem;
  }

  @media (min-width: 800px) {
    .badge a {
      font-size: 1rem;
    }
  }
</style>
