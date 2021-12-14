<script>
	import { FontAwesomeIcon } from 'fontawesome-svelte';
	import { courseId } from '../../../../stores/courseInfoStore.cjs';
	let course_id;
	courseId.subscribe((v) => (course_id = v));
</script>

<div class="font-bold mt-1 border-b-2 border-primary">Assignments</div>
<div class="py-1 px-2 rounded my-1.5 bg-gray-300">
	Assignments are sorted descendingly by due dates.
</div>
<div class="bg-gray-500 text-white rounded-t grid grid-cols-12">
	<div class="col-span-5 text-center">Title</div>
	<div class="col-span-2">Out Date</div>
	<div class="text-center">Due Date</div>
	<div class="text-center">Your Work</div>
	<div class="col-span-3 text-center">Feedbacks</div>
</div>
<div class="grid grid-cols-12 rounded">
	<!-- <div class="hover:text-courseville w-full outline-none bg-primary-light flex items-center">
		<div class="flex">
			<p class="text-base">HW</p>
			<img src="/thumbnails/icon_group_24.svg" class="h-7" alt="" />
		</div>
		<div class="ml-1">Course Detail</div>
	</div> -->
	<div class="flex bg-primary-light">
		<p class="text-base">HW</p>
		<img src="/thumbnails/icon_group_24.svg" class="h-7" alt="" />
	</div>
	<div class="col-span-4 bg-primary-light">Project 02 - Report</div>
	<div class="col-span-2 bg-primary-light">
		<img src="/thumbnails/icon_date_calendar_flat_cvblue_bg.png" class="h-10" alt="" />
	</div>
	<div class="bg-primary-light">
		<img src="/thumbnails/icon_date_calendar_flat_cvblue_bg.png" class="h-10" alt="" />
	</div>
	<div class="bg-primary-light">
		<img src="/thumbnails/icon_pencil.svg" class="h-5" alt="" />
	</div>
	<div class="col-span-3 text-[0.7rem] bg-primary-light">Submitted at 05 Dec 2021 20:52:08</div>
</div>

<div class="mt-2">All 1 published items are shown.</div>
