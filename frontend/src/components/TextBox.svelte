<script>
	export let placeholder;
	export let classExtensions = '';

	export let value = '';
</script>

<input
	{placeholder}
	bind:value
	type="text"
	class="text-primary text-sm p-1.5 rounded w-full outline-none border border-gray-300 {classExtensions}"
/>
