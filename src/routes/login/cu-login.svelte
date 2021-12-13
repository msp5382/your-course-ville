<script lang="ts">
	import TextBox from '../../components/TextBox.svelte';
	import Button from '../../components/Button.svelte';
	let username: string = '';
	let password: string = '';
	let isRemember: boolean = false;

	import { goto } from '$app/navigation';
</script>

ล็อกอินด้วยบัญชี
<img src="/logo-itchula.png" class="h-10 my-3" alt="it-cu-logo" />
<form on:submit|preventDefault={() => {}} class="grid grid-cols-1 gap-2">
	<TextBox bind:value={username} placeholder="ชื่อบัญชี (Username)" />
	<TextBox bind:value={password} placeholder="รหัสผ่าน" />
	<div class="flex items-center">
		<input bind:checked={isRemember} id="is-remember" type="checkbox" class="mr-2" />
		<label for="is-remember">จดจำการล็อกอินนี้ไว้</label>
	</div>
	<div class="flex">
		<Button click={() => goto('/cv')}>เข้าสู่ระบบ</Button>
		<Button
			click={() => goto('/')}
			bgHoverColorClass=""
			bgColorClass=""
			textColorClass="text-primary">ย้อนกลับ</Button
		>
	</div>
</form>
