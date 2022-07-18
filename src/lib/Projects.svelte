<script>
  import ProjectCard from "./components/ProjectCard.svelte";

  let projects = [];

  projects.push({
    title: "Schooster",
    description: `Dit project is een website gemaakt met het Django framework. Deze website laat de roosters zien van mij en mijn naasten.`,
    type: "Website",
    link: "https://schooster.nl",
    badges: [
      {
        name: "Django",
        link: "https://www.djangoproject.com/",
        color: "var(--primary)",
      },
      {
        name: "Sass",
        link: "https://sass-lang.com/",
        color: "var(--primary)",
      },
      {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        color: "var(--primary)",
      },
    ],
  });

  projects.push({
    title: "Schooster",
    description: `Dit project is een website gemaakt met het Django framework. Deze website laat de roosters zien van mij en mijn naasten.`,
    type: "Website",
    link: "https://schooster.nl",
    badges: [
      {
        name: "Django",
        link: "https://www.djangoproject.com/",
        color: "var(--primary)",
      },
      {
        name: "Sass",
        link: "https://sass-lang.com/",
        color: "var(--primary)",
      },
      {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        color: "var(--primary)",
      },
    ],
  });

  projects.push({
    title: "Schooster",
    description: `Dit project is een website gemaakt met het Django framework. Deze website laat de roosters zien van mij en mijn naasten.`,
    type: "Website",
    link: "https://schooster.nl",
    badges: [
      {
        name: "Django",
        link: "https://www.djangoproject.com/",
        color: "var(--primary)",
      },
      {
        name: "Sass",
        link: "https://sass-lang.com/",
        color: "var(--primary)",
      },
      {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        color: "var(--primary)",
      },
    ],
  });
</script>

<div id="projects" class="container">
  <h1>Projecten</h1>

  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</div>

<style>
</style>
