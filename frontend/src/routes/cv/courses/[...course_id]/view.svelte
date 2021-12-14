<script>
	import { FontAwesomeIcon } from 'fontawesome-svelte';
	import { courseId } from '../../../../stores/courseInfoStore.cjs';
	let course_id;
	courseId.subscribe((v) => (course_id = v));
</script>

<div class="flex justify-end my-3">
	<button
		class="outline-none border text-[0.5rem] hover:bg-courseville hover:text-white px-1 py-0.5 flex items-center rounded-lg"
	>
		<div class="text-[0.7rem] mr-1">
			<FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
		</div>
		On-Air
	</button>
</div>
<div class="font-bold mt-1 border-b-2 border-primary">Announcements</div>
<div class="max-h-52 pt-3 overflow-scroll">
	<div class="bg-gray-200 flex">
		<div class="flex-none font-bold">07 Dec 21</div>
		<a href="/" class="hover:underline hover:text-courseville w-full px-4 text-primary"
			>เกณฑ์การให้คะแนน Project</a
		>
	</div>
	<div class="bg-gray-100 flex">
		<div class="flex-none font-bold">07 Dec 21</div>
		<a href="/" class="hover:underline hover:text-courseville w-full px-4 text-primary"
			>เกณฑ์การให้คะแนน Project 2</a
		>
	</div>
</div>
<div class="font-bold mt-5 border-b-2 border-primary">Course Materials</div>
<button
	class="hover:text-courseville w-full outline-none bg-primary-light border-b border-primary flex items-center"
>
	<img src="/thumbnails/folder.png" class="h-9" alt="" />
	<div class="ml-1">Course Detail</div>
	<div class="ml-1 text-gray-500">(Containing 2 items)</div>
</button>
<!--subfolder mock-->
<div class="border-b border-primary">
	<button class="hover:text-courseville w-full outline-none bg-primary-light flex items-center">
		<img src="/thumbnails/folder.png" class="h-9" alt="" />
		<div class="ml-1">Subfolder</div>
		<div class="ml-1 text-gray-500">(Containing 2 items)</div>
	</button>
	<button class="hover:text-courseville w-full outline-none bg-primary-light2 flex items-center">
		<img src="/thumbnails/word.png" class="h-9" alt="" />
		<div class="ml-1">Course Detail</div>
	</button><button
		class="hover:text-courseville w-full outline-none bg-primary-light flex items-center"
	>
		<img src="/thumbnails/cv.png" class="h-9" alt="" />
		<div class="ml-1">Course Detail</div>
	</button><button
		class="hover:text-courseville w-full outline-none bg-primary-light2 flex items-center"
	>
		<img src="/thumbnails/pdf.png" class="h-9" alt="" />
		<div class="ml-1">Course Detail</div>
	</button>
</div>

<button
	class="hover:text-courseville w-full outline-none bg-primary-light2 border-b border-primary flex items-center"
>
	<img src="/thumbnails/folder.png" class="h-9" alt="" />
	<div class="ml-1">Course Data</div>
	<div class="ml-1 text-gray-500">(Containing 2 items)</div>
</button>
