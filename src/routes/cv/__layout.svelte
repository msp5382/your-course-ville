<script>
	import { library } from '@fortawesome/fontawesome-svg-core';
	import { faSignOutAlt, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from 'fontawesome-svelte';
	import NavButton from '../../components/cv/NavButton.svelte';
	import Button from '../../components/Button.svelte';
	import { goto } from '$app/navigation';
	library.add(faSignOutAlt);
	library.add(faChevronCircleDown);

	let menus = [
		{
			name: 'My Courses',
			isSelected: true,
			href: '/'
		},
		{
			name: 'Online Courses',
			isSelected: false,
			href: '/mooc'
		},
		{
			name: 'Evaluation Center',
			isSelected: false,
			href: '/evaluation'
		},
		{
			name: 'Activity Feeds',
			isSelected: false,
			href: '/activity'
		},
		{
			name: 'Register',
			isSelected: false,
			href: '/register'
		},
		{
			name: 'Account',
			isSelected: false,
			href: '/account'
		}
	];

	const handleMenuSelect = (menu) => {
		goto(`/cv${menu.href}`);
		menus = menus.map((_menu) => {
			if (_menu.name == menu.name) {
				return {
					..._menu,
					isSelected: true
				};
			} else {
				return {
					..._menu,
					isSelected: false
				};
			}
		});
	};
</script>

<div class="min-h-screen text-xs ">
	<div class="container mx-auto pt-8">
		<div class="flex justify-between my-2">
			<div class="flex items-end">
				<a href="/cv"><img src="/cv-logo.png" class="h-12" alt="logo" /></a>

				<img src="/default_platform_portrait.svg" class="ml-5 h-10 rounded-lg" alt="logo" />
				<div class="ml-1 text-black">
					<div class="">6430250021 6430250021</div>
					<div class="">6430250021 6430250021</div>
				</div>
			</div>
			<div class="">
				<Button>
					<FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
					Logout
				</Button>
			</div>
		</div>
		<div
			class="w-[calc(100%-5px)] bg-primary mx-auto rounded-t-lg -mb-3 z-40 shadow border border-gray-300 p-2 px-5 pb-5 flex items-center text-white"
		>
			{#each menus as menu}
				<NavButton click={() => handleMenuSelect(menu)} isSelected={menu.isSelected}
					>{menu.name}</NavButton
				>
			{/each}
		</div>
		<div class="mb-5 w-full rounded-lg z-50 shadow border border-gray-300 p-3 bg-white">
			<slot />
		</div>

		<div class="text-center text-xs">
			<p>1.13.2.0 | Privacy Policy updated on Oct 13th, 2021</p>
			<p class="text-[0.7rem]">
				mycourseville lms and online course platform are operated by Learning Innovation Center,
				Chulalongkorn University
			</p>
		</div>
	</div>
</div>
