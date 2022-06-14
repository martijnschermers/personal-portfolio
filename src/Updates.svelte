<script>
	const URL = "https://api.github.com/users/martijnschermers/events/public";
	let commits = [];
	let count = 0;

	(async function () {
		let response = await fetch(URL, {
			method: "GET",
			headers: new Headers({
				"Content-Type": "application/json",
			}),
		});
		let data = await response.json();

		if (response.ok) {
			data.forEach(async function (i) {
				if ((data.type = "PushEvent" && count < 3)) {
					if (i.payload.commits !== undefined) {
						await Promise.all(
							i.payload.commits.map(async function (commit) {
								let placeholder = {};
								placeholder.commit = commit;
								placeholder.repo = i.repo.name.split("/")[1];

								(async function () {
									let response = await fetch(commit.url, {
										method: "GET",
										headers: new Headers({
											"Content-Type": "application/json",
										}),
									});
									let commitData = await response.json();

									let date = new Date(commitData.commit.committer.date);
									placeholder.date = date.toLocaleDateString("nl-NL");
									placeholder.html_url = commitData.html_url;
									placeholder.image = commitData.author.avatar_url;
									placeholder.profile = commitData.author.html_url;

									commits = [...commits, placeholder];
								})();
								count++;
							})
						);
					}
				}
			});
		} else {
			let errorMessage = document.querySelector(".section-info");
			errorMessage.textContent = data.message;
		}
	})();
</script>

<div id="updates" class="updates container">
	<h1>Updates</h1>
	<p class="section-info">Commits naar mijn openbare Github repositories:</p>

	<div class="wrapper">
		{#each commits as commit}
			<div class="card-normal w-96 bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">{commit.repo}</h2>
					<p>{commit.commit.message}</p>
					<div class="card-actions justify-between">
						<a href={commit.html_url} class="btn btn-primary">
							<i class="fa fa-link" />Github
						</a>
						<time>{commit.date}</time>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.section-info {
		text-align: center;
	}

	.wrapper {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 1rem;
		place-items: center;
	}

	.updates {
		margin-top: 2rem;
	}

	@media (min-width: 870px) {
		.wrapper {
			grid-template-columns: auto auto;
		}
	}
</style>
