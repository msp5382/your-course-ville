<script>
	export let placeholder;
	export let classExtensions = '';
</script>

<input
	type="date"
	class="text-primary text-sm p-1.5 rounded w-full outline-none border border-gray-300 {classExtensions}"
	id="date_of_birth"
	name="date_of_birth"
	{placeholder}
/>
