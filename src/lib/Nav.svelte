<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let visible = false;
  onMount(() => (visible = true));
</script>

<div id="header" class="header container">
  <nav>
    <h1>Martijn Schermers</h1>

    <div class="side-nav">
      <ul>
        <li>
          <a href="#updates" class="underline"> Updates </a>
        </li>
        <li>
          <a href="#projects" class="underline"> Projecten </a>
        </li>
        <li>
          <a href="#about" class="underline"> About </a>
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
    margin-block: 1em;
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
  }

  li {
    all: unset;
    margin-inline: 0.8em;
    font-size: 1.6rem;
    opacity: 0.75;
    transition: linear 0.3s;
  }

  li:hover {
    opacity: 1;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    text-align: center;
  }

  a {
    font-size: 1.6rem;
  }

  a:hover {
    color: var(--white);
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

  .side-nav {
    display: none;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 2.5rem; 
    }

    h2 {
      font-size: 1.75rem;
    }
  }

  @media (min-width: 1100px) {
    h1 {
      margin-left: 3rem;
      font-size: 3rem;
      text-align: left;
    }

    h2 {
      font-size: 2rem;
    }

    .side-nav {
      display: flex;
    }
  }
</style>
