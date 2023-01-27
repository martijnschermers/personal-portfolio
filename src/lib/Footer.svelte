<script>
    let icons = [];

    icons.push({
        class: "fa-brands fa-github",
        link: "https://github.com/martijnschermers",
        label: "Github profile link",
    });

    icons.push({
        class: "fa-brands fa-discord",
        link: "https://discord.com/users/377152005719719936",
        label: "Discord profile link",
    });

    icons.push({
        class: "fa-brands fa-linkedin-in",
        link: "https://www.linkedin.com/in/martijn-schermers/",
        label: "LinkedIn profile link",
    });

    icons.push({
        class: "fa-brands fa-medium",
        link: "https://medium.com/@martijnschermers",
        label: "Medium profile link",
    });
</script>

<footer>
    <div>
        {#each icons as icon}
            <a href={icon.link} aria-label={icon.label}>
                <i class={icon.class} />
            </a>
        {/each}
    </div>

    <p>
        Gemaakt met <span>❤</span> en
        <a href="https://svelte.dev" aria-label="Link to Svelte website">
            Svelte
        </a>!
    </p>
</footer>

<style>
    footer {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: var(--base-300);
        border-radius: 2rem 2rem 0 0;
        padding: 0.5rem;
    }

    i {
        font-size: 2rem;
        margin: 1rem;
    }

    p,
    a {
        font-size: 1.4rem;
        text-align: center;
    }

    p span {
        color: var(--error);
    }
</style>
