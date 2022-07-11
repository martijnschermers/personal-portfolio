<script>
  import { onMount } from "svelte";
  import { draw, fly } from "svelte/transition";
  import { moon, sun } from "./svg.js";

  let visible = false;
  onMount(() => (visible = true));

  let theme = localStorage.getItem("theme");

  if (theme) {
    document.documentElement.setAttribute("color-mode", theme);
  } else {
    theme = document.documentElement.getAttribute("color-mode");
  }

  let icon = theme === "dark" ? sun : moon;
  function toggle() {
    if (theme === "dark") {
      theme = "light";
      icon = moon;
      document.documentElement.setAttribute("color-mode", theme);
      localStorage.setItem("theme", theme);
      return;
    }

    theme = "dark";
    icon = sun;
    document.documentElement.setAttribute("color-mode", theme);
    localStorage.setItem("theme", theme);
  }
</script>

<div id="header" class="header container">
  <nav>
    {#if visible}
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
      <g out:fade="{{duration: 200}}" opacity=0.2>
        <image
          in:draw="{{duration: 1000}}"
          style="stroke:#ff3e00; stroke-width: 1.5"
          xlink:href={shape}
        />
      </g>
    </svg> -->

      <img src="./images/logo.svg" alt="Logo" />
    {/if}

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path in:draw={{ duration: 1000 }} d={icon} />
              </svg>
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
