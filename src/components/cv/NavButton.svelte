<script>
	export let isSelected = false;
	export let click = () => {};
</script>

<button
	on:click={click}
	class="{isSelected && 'bg-[rgba(255,255,255,0.2)] py-[0.05rem] rounded'} px-3 outline-none"
	><slot /></button
>
