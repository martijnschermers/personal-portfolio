<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let visible = false;
  onMount(() => (visible = true));
</script>

<div id="header" class="header container">
  <nav>
    <h1 class="cut-text">Martijn Schermers</h1>

    <div class="middle-nav">
      <ul>
        <li>
          <a href="#updates" class="underline"> Updates </a>
        </li>
        <li>
          <a href="#projects" class="underline"> Projecten </a>
        </li>
        <li>
          <a href="#about" class="underline"> Over Mij </a>
        </li>
      </ul>
    </div>
  </nav>

  {#if visible}
    <div transition:fly={{ y: 500, duration: 2000 }} class="welcome">
      <h2>Welkom op mijn website!</h2>
      <p>Hier vind je mijn recente werk, projecten en informatie over mij.</p>
    </div>
  {/if}
</div>

<style>
  nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
  }

  a {
    font-size: 1.6rem;
  }

  a:hover {
    color: var(--white);
  }

  h2 {
    font-size: 2.5rem;
    text-align: center;
  }

  p {
    text-align: center;
  }

  .header {
    display: flex;
    background-image: url("/images/bg.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .welcome {
    padding: 1rem;
  }

  @media (max-width: 810px) {
    h2 {
      font-size: 1.75rem;
    }

    li {
      opacity: 1;
    }

    .middle-nav {
      display: none;
    }
  }
</style>
