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
          {#if visible}
            <a
              href="https://github.com/martijnschermers"
              aria-label="Github profile link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path
                  in:draw={{ duration: 1000 }}
                  d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                />
              </svg>
            </a>
          {/if}
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
    fill: var(--white);
    stroke: var(--base);
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
