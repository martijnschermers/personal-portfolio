<script>
  import { onMount } from "svelte";
  import { draw, fly } from "svelte/transition";

  let visible = false;
  onMount(() => (visible = true));

  let theme = localStorage.getItem("theme");

  if (theme) {
    document.documentElement.setAttribute("color-mode", theme);
  } else {
    theme = document.documentElement.getAttribute("color-mode");
  }

  let icon = theme === "dark" ? "sun" : "moon";
  function toggle() {
    if (theme === "dark") {
      theme = "light";
      icon = "moon";
      document.documentElement.setAttribute("color-mode", theme);
      localStorage.setItem("theme", theme);
      return;
    }

    theme = "dark";
    icon = "sun";
    document.documentElement.setAttribute("color-mode", theme);
    localStorage.setItem("theme", theme);
  }
</script>

<div id="header" class="header container">
  <nav>
    <img src="./images/logo.svg" alt="Logo" />

    <div class="middle-nav">
      <ul>
        <li>
          <a href="#updates" class="underline"
            ><i class="fa fa-wrench" aria-hidden="true" /> Updates</a
          >
        </li>
        <li>
          <a href="#projects" class="underline"
            ><i class="fa fa-cog" aria-hidden="true" /> Projecten</a
          >
        </li>
        <li>
          <a href="#about" class="underline"
            ><i class="fa fa-info" aria-hidden="true" /> About</a
          >
        </li>
      </ul>
    </div>

    <div class="side-nav">
      <ul>
        <li>
          <a
            href="https://github.com/martijnschermers"
            aria-label="Github profile link"
          >
            <i class="fa fa-github" />
          </a>
        </li>
        <li>
          {#if visible}
            <button on:click={toggle} aria-label="Darkmode toggle">
              {#if icon === "moon"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    in:draw={{ duration: 1000 }}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              {:else}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    in:draw={{ duration: 1000 }}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              {/if}
            </button>
          {/if}
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

  img {
    width: 100px;
    height: 100px;
    padding: 1em;
  }

  svg {
    width: 32px;
    aspect-ratio: 1;
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
    li {
      opacity: 1;
    }

    .middle-nav {
      display: none;
    }
  }
</style>
