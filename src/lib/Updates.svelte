<script>
    import { onMount } from "svelte";
    import UpdateCard from "./components/UpdateCard.svelte";
    import Error from "./components/Error.svelte";

    const URL = "https://api.github.com/users/martijnschermers/events/public";
    let commits = [];
    let mobile = false;
    let message;

    onMount(async () => {
        if (window.innerWidth < 800) {
            mobile = true;
        }

        let request = await fetch(URL, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        });
        let data = await request.json();

        if (!request.ok) {
            message = data.message;
            return;
        }

        data.forEach(async function (i) {
            if ((data.type = "PushEvent" && i.payload.commits !== undefined)) {
                i.payload.commits.forEach(async (commit) => {
                    let placeholder = {};

                    if (commit.message.includes("\n")) {
                        placeholder.message = commit.message.split("\n")[0];
                    } else {
                        placeholder.message = commit.message;
                    }

                    placeholder.repo = i.repo.name.split("/")[1];

                    let request = await fetch(commit.url, {
                        method: "GET",
                        headers: new Headers({
                            "Content-Type": "application/json",
                        }),
                    });
                    let commitData = await request.json();

                    placeholder.date = new Date(
                        commitData.commit.committer.date
                    );
                    placeholder.html_url = commitData.html_url;
                    placeholder.image = commitData.author
                        ? commitData.author.avatar_url
                        : "https://avatars.githubusercontent.com/u/70104745?v=4";
                    placeholder.profile = commitData.author
                        ? commitData.author.html_url
                        : "https://github.com/martijnschermers";

                    if (mobile ? commits.length < 3 : commits.length < 4) {
                        commits = [...commits, placeholder];
                        commits.sort((c) => c.date);
                    }
                });
            }
        });
    });
</script>

<div id="updates" class="updates container">
    <h2>Updates</h2>

    {#if message}
        <Error {message} />
    {/if}

    <div class="wrapper">
        {#each commits as commit}
            <UpdateCard {commit} />
        {/each}
    </div>
</div>

<style>
    .wrapper {
        display: grid;
        grid-template-columns: auto;
        grid-gap: 0.25rem;
        place-items: center;
    }

    .updates {
        margin-block: 5rem;
    }

    @media (min-width: 800px) {
        .wrapper {
            grid-template-columns: auto auto;
        }
    }
</style>
