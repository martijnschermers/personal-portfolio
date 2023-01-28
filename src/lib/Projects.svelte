<script>
    import ProjectCard from "./components/ProjectCard.svelte";

    let projects = [];

    projects.push({
        title: "Lean",
        description:
            "Eenvoudige workout tracker met de mogelijkheid tot het bijhouden van je workouts, volgen van andere gebruikers en het toevoegen van custom oefeningen. Geschreven in Angular en NestJS met behulp van TypeScript.",
        type: "Github",
        link: "https://github.com/martijnschermers/lean",
        badges: [
            {
                name: "Angular",
                link: "https://angular.io/",
                color: "var(--primary)",
            },
            {
                name: "NestJS",
                link: "https://nestjs.com/",
                color: "var(--primary)",
            },
        ],
    });

    projects.push({
        title: "Playful Learning",
        description:
            "Project voor school, geschreven in C# door middel van ASP.NET. Het doel van de website is de Nederlandse taalvaardigheid verbeteren door de mogelijkheid te bieden om je in te schrijven voor spelavonden waar verschillende bordspellen gespeeld zullen worden.",
        type: "Github",
        link: "https://github.com/martijnschermers/playful-learning",
        badges: [
            {
                name: "ASP.NET",
                link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
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
        title: "Share a Meal",
        description:
            "Een API geschreven met Node.js en Express als opdracht voor school die het mogelijk maakt om maaltijden te delen. Het doel van het project is om mensen die een maaltijd over hebben te koppelen aan mensen die een maaltijd nodig hebben.",
        type: "Github",
        link: "https://github.com/martijnschermers/share-a-meal",
        badges: [
            {
                name: "Node.js",
                link: "https://nodejs.org/",
                color: "var(--primary)",
            },
            {
                name: "Express",
                link: "https://expressjs.com/",
                color: "var(--primary)",
            },
        ],
    });
</script>

<div id="projects" class="container">
    <h2>Projecten</h2>

    {#each projects as project}
        <ProjectCard {project} />
    {/each}
</div>
