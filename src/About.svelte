<script>
	let contributions = [];
	let year = new Date().getFullYear();

	(async function () {
		let page = 1;

		console.log(page);

		do {
			const URL = `https://api.github.com/users/martijnschermers/events?page=${page}`;
			var body = await fetch(URL).then((res) => res.json());
			console.log(body);
			page++;
			contributions.push(...body);
		} while (!body.length);
	})();

	console.log(contributions);
</script>

<div id="about" class="container">
	<h1>About Me</h1>

	<div class="stats shadow">
		<div class="stat">
			<div class="stat-title">Github Contributions</div>
			<div class="stat-value">{contributions.length}</div>
			<div class="stat-desc">Afgelopen jaar: {year}</div>
		</div>
	</div>

	<div class="card">
		<p>
			Hallo daar! Leuk dat je op mijn site terecht bent gekomen. Ik hoop dat je 't
			wat vindt. Mijn naam is Martijn en in het dagelijks leven ben ik regelmatig
			bezig met verschillende technieken. Ik zit momenteel in het eerste jaar van
			Informatica op HBO niveau. Vandaar mijn interesse in programmeren in mijn
			vrije tijd. Als ik een leuk ideetje heb, probeer ik dat uit te werken. Een
			aantal voorbeelden hiervan zijn ook te zien op deze website.
		</p>
	</div>
</div>

<style></style>
