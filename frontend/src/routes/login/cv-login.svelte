<script>
	import TextBox from '../../components/TextBox.svelte';
	import Button from '../../components/Button.svelte';

	import { goto } from '$app/navigation';
</script>

ล็อกอินด้วยบัญชี
<img src="/cv-logo.png" class="h-8 my-3" alt="it-cu-logo" />
<form class="mt-3 mb-2">
	ล็อกอินโดยใช้
	<input name="select_login_type" class="ml-3 mr-1" type="radio" />ชื่อบัญชี (Username)
	<input name="select_login_type" class="ml-3 mr-1" type="radio" />อีเมล (Email)
</form>
<form on:submit|preventDefault={() => {}} class="grid grid-cols-1 gap-2">
	<TextBox placeholder="ชื่อบัญชี (Username)" />
	<TextBox placeholder="รหัสผ่าน" />

	<div class="flex items-center">
		<input id="is-remember" type="checkbox" class="mr-2" />
		<label for="is-remember">จดจำการล็อกอินนี้ไว้</label>
	</div>
	<div class="flex mb-10">
		<Button>เข้าสู่ระบบ</Button>
		<Button
			click={() => goto('/')}
			bgHoverColorClass=""
			bgColorClass=""
			textColorClass="text-primary">ย้อนกลับ</Button
		>
		<Button
			click={() => goto('/register')}
			bgHoverColorClass=""
			bgColorClass=""
			textColorClass="text-primary">ลงทะเบียนบัญชีใหม่</Button
		>
	</div>
	หรือ ล็อกอินด้วยทางเลือกอื่น ๆ
	<div class="flex flex-col items-start">
		<button class="hover:border-primary border rounded-lg p-2">
			<img src="/logo-itchula.png" class="h-6" alt="" />
		</button>
		<button class="hover:border-primary border rounded-lg p-2 mt-2">
			<img src="/login-logo/google_g_logo.svg" class="h-6 inline mr-2" alt="" />
			Sign in with Google
		</button>
	</div>
</form>
