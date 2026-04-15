<script>
	import favicon from '$lib/assets/favicon.svg';

	import "$lib/styles/reset.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Satoshi Font -->
	<link rel="preconnect" href="https://api.fontshare.com" />
	<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet">

	<!-- Inter Font -->
	<link rel="preconnect" href="https://fonts.bunny.net/" />
	<link rel="preconnect" href="https://fonts.bunny.net/" crossorigin>
	<link href="https://fonts.bunny.net/css2?family=Bowlby+One+SC&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&family=Staatliches&display=swap" rel="stylesheet">

</svelte:head>

{@render children()}
