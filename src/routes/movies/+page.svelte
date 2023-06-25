<script>
	export let form;
	export let data;
	console.log(form);
</script>

<pre>{JSON.stringify(form, null, 2)}</pre>
<pre>{JSON.stringify(data, null, 2)}</pre>
<form method="POST" action="?/movies">
	<textarea name="prompt" placeholder="Test" />
	<button>Send</button>
</form>
