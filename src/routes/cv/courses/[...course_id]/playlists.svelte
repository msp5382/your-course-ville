<script>
	import { FontAwesomeIcon } from 'fontawesome-svelte';
	import { courseId } from '../../../../stores/courseInfoStore.cjs';
	let course_id;
	courseId.subscribe((v) => (course_id = v));
</script>

<div class="font-bold mt-1 border-b-2 border-primary">Video Playlists</div>
<div class="py-1 px-2 rounded my-1.5 bg-gray-300">
	<div class="flex">
		<img src="/thumbnails/default_playlist_thumb.gif" class="h-16 rounded" alt="playlists" />
		<div class="ml-3 w-full">
			<div class="text-sm">Engineering Drawing: Week 1</div>
			<div>Course Playlist</div>
			<div class="flex text-primary text-base items-center pt-2">
				<div class=" text-gray-400 text-xs flex items-center mr-1">
					<FontAwesomeIcon icon={['fa', 'video']} />
					<div class="ml-1">5</div>
				</div>
				<button class="outline-none">
					<FontAwesomeIcon icon={['fas', 'chevron-circle-right']} />
				</button>
			</div>
		</div>
		<div class="flex-none text-center my-auto">
			<div class="text-[0.5rem]">Your progress</div>
			<div class="-mt-1.5 text-lg">7%</div>
		</div>
	</div>
	<div class="flex bg-primary-light2 p-0.5 rounded mt-1">
		<div
			class="hover:shadow w-16 h-12 rounded flex items-center justify-center bg-primary text-white"
		>
			<FontAwesomeIcon icon={['fa', 'play']} />
		</div>
		<div class="ml-3 w-full">
			<a href="#" class="text-primary hover:underline hover:text-courseville">Overview</a>
		</div>
		<div class="flex-none text-center my-auto">
			<div class="text-lg">10%</div>
		</div>
	</div>
	<div class="flex bg-primary-light2 p-0.5 rounded mt-1">
		<div
			class="hover:shadow w-16 h-12 rounded flex items-center justify-center bg-primary text-white"
		>
			<FontAwesomeIcon icon={['fa', 'play']} />
		</div>
		<div class="ml-3 w-full">
			<a href="#" class="text-primary hover:underline hover:text-courseville">Overview</a>
		</div>
		<div class="flex-none text-center my-auto">
			<div class="text-lg">10%</div>
		</div>
	</div>
	<div class="flex bg-primary-light2 p-0.5 rounded mt-1">
		<div
			class="hover:shadow w-16 h-12 rounded flex items-center justify-center bg-primary text-white"
		>
			<FontAwesomeIcon icon={['fa', 'play']} />
		</div>
		<div class="ml-3 w-full">
			<a href="#" class="text-primary hover:underline hover:text-courseville">Overview</a>
		</div>
		<div class="flex-none text-center my-auto">
			<div class="text-lg">10%</div>
		</div>
	</div>
	<div class="flex bg-primary-light2 p-0.5 rounded mt-1">
		<div
			class="hover:shadow w-16 h-12 rounded flex items-center justify-center bg-primary text-white"
		>
			<FontAwesomeIcon icon={['fa', 'play']} />
		</div>
		<div class="ml-3 w-full">
			<a href="#" class="text-primary hover:underline hover:text-courseville">Overview</a>
		</div>
		<div class="flex-none text-center my-auto">
			<div class="text-lg">10%</div>
		</div>
	</div>
</div>
