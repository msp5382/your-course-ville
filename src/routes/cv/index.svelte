<script>
	import { FontAwesomeIcon } from 'fontawesome-svelte';
	import { goto } from '$app/navigation';
</script>

<div class="border-b border-gray-500 border-dashed">Courses I have joined</div>
<div class="flex py-2">
	<div class="bg-gray-200 p-2 text-[0.6rem] rounded">
		<div class="flex items-center text-black">
			<p>2021/1</p>
			<div class="text-base text-primary ml-2">
				<FontAwesomeIcon icon={['fas', 'chevron-circle-down']} />
			</div>
		</div>
		<div class="flex flex-wrap">
			<button
				on:click={() => goto('/cv/courses/1/view')}
				class="hover:text-primary hover:bg-white m-1 bg-gray-100 text-black p-1.5 rounded flex flex-col items-center"
			>
				<img src="/subject-img-mock.png" class="h-16" alt="" />
				<p>2103106</p>
				<b>Engineering Drawing</b>
			</button>
		</div>
	</div>
</div>
