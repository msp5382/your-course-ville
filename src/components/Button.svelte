<script>
	export let bgColorClass = 'bg-primary';
	export let bgHoverColorClass = 'hover:bg-courseville';
	export let textColorClass = 'text-white';
	export let classExtensions = '';
	export let type = 'submit';
	export let click = () => {};
</script>

<button
	{type}
	on:click={() => click()}
	class="{bgHoverColorClass} outline-none p-2 px-3 rounded-lg {bgColorClass} {textColorClass} {classExtensions}"
	><slot /></button
>
