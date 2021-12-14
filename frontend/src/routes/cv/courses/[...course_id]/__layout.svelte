<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
		console.log('load', page);
		return {
			props: {
				course_id: page.params.course_id
			}
		};
	}
</script>

<script>
	export let course_id;
	let menus = [
		{
			name: 'Home',
			href: 'view'
		},
		{
			name: 'Assignments',
			href: 'assignments'
		},
		{
			name: 'Playlists',
			href: 'playlists'
		},
		{
			name: 'Web Resources',
			href: 'resources'
		},
		{
			name: 'Schedule',
			href: 'schedule'
		},
		{
			name: 'Discussions',
			href: 'discussions'
		},
		{
			name: 'Portfolio',
			href: 'portfolio'
		},
		{
			name: 'Student Group',
			href: 'student-group'
		},
		{
			name: 'About Course',
			href: 'about'
		}
	];
	import { courseId } from '../../../../stores/courseInfoStore.cjs';
	import { goto } from '$app/navigation';
	courseId.set(course_id);
</script>

<div class="grid grid-cols-12 gap-4 text-black pb-12">
	<div class="col-span-3 ">
		<div class="flex">
			<div>
				<img src="/subject-img-mock.png" class="h-20" alt="" />
				<div class="text-[0.5rem] mt-1 text-center">
					<p>2103106<br />(2021/1)</p>
				</div>
			</div>
			<div class="ml-2 mt-2">Engineering Drawing</div>
		</div>
		<div class="font-bold mt-1 border-b-2 border-primary">Course Menu</div>
		<div class="text-[0.7rem]">
			{#each menus as menu}
				<div
					on:click={() => goto(menu.href)}
					class="cursor-pointer hover:text-courseville px-2 pt-1 border-primary border-b border-dashed"
				>
					{menu.name}
				</div>
			{/each}
		</div>
	</div>
	<div class="col-span-9">
		<a href="#" class="text-primary hover:underline hover:text-courseville">Course Home</a>
		<slot />
	</div>
</div>
