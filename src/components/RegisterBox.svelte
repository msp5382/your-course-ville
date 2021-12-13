<script>
	import TextBox from '../components/TextBox.svelte';
	export let placeholder;
	export let label;
	export let hint;
</script>

<div class="pt-5">{label}</div>
<TextBox {placeholder} classExtensions="mt-2" />
<p class="text-[0.7rem] mt-1 text-courseville">
	{hint}
</p>
