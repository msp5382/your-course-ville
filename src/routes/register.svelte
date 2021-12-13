<script>
	import RegisterBox from '../components/RegisterBox.svelte';
	import DateBox from '../components/DateBox.svelte';
	import Button from '../components/Button.svelte';
</script>

<div class="bg-gradient flex-col min-h-screen font-sarabun pb-12">
	<nav class="sticky top-0 bg-white p-3">
		<a href="/login/cv-login"
			><img src="/logo-mycourseville-platform.svg" class="h-8" alt="cv-platform" /></a
		>
	</nav>
	<div class="pt-8">
		<div class="container m-auto w-full bg-white">
			<div class="w-full text-lg font-bold text-white bg-primary px-5 py-1">
				ลงทะเบียนเพื่อสร้างบัญชีใหม่
			</div>
			<div class="px-5 py-3">
				<div class="bg-gray-200 rounded py-2 px-3">
					กรุณาระบุข้อมูลที่จำเป็นในการสร้างบัญชีใหม่ตามแบบฟอร์มต่อไปนี้
				</div>
				<RegisterBox
					label="ชื่อบัญชี (Username)"
					placeholder="ชื่อบัญชี (Username)"
					hint="ชื่อบัญชีใช้ได้แค่อักขระ a-z, A-Z ตัวเลข 0-9 เท่านั้น"
				/>
				<RegisterBox
					label="รหัสผ่าน"
					placeholder="รหัสผ่าน"
					hint="รหัสผ่านต้องยาวอย่างน้อย 8 ตัว`อักษร"
				/>
				<RegisterBox
					label="ยืนยันรหัสผ่าน"
					placeholder="ยืนยันรหัสผ่าน"
					hint="ยืนยันรหัสผ่านที่คุณตั้งอีกครั้ง"
				/>
				<RegisterBox
					label="อีเมลที่ติดต่อได้"
					placeholder="อีเมลที่ติดต่อได้"
					hint="สำคัญมาก! ใช้เพื่อยืนยันการสร้างบัญชีใหม่และใช้เมื่อคุณลืมรหัสผ่าน"
				/>
				<RegisterBox
					label="คำนำหน้าชื่อเป็นภาษาไทย"
					placeholder="คำนำหน้าชื่อเป็นภาษาไทย"
					hint="คำนำหน้าชื่อนี้จะถูกใช้แสดงในแอปต่าง ๆ บนแพลตฟอร์ม"
				/>
				<RegisterBox
					label="ชื่อจริงเป็นภาษาไทย"
					placeholder="ชื่อจริงเป็นภาษาไทย"
					hint="ชื่อจริงนี้จะถูกใช้แสดงในแอปต่าง ๆ บนแพลตฟอร์ม"
				/>
				<RegisterBox
					label="นามสกุลเป็นภาษาไทย"
					placeholder="นามสกุลเป็นภาษาไทย"
					hint="นามสกุลนี้จะถูกใช้แสดงในแอปต่าง ๆ บนแพลตฟอร์ม"
				/>
				<RegisterBox
					label="คำนำหน้าชื่อเป็นภาษาอังกฤษ"
					placeholder="คำนำหน้าชื่อเป็นภาษาอังกฤษ"
					hint="คำนำหน้าชื่อนี้จะถูกใช้แสดงในแอปต่าง ๆ บนแพลตฟอร์ม"
				/>
				<RegisterBox
					label="ชื่อจริงเป็นภาษาอังกฤษ"
					placeholder="ชื่อจริงเป็นภาษาอังกฤษ"
					hint="ชื่อจริงนี้จะถูกใช้แสดงในแอปต่าง ๆ บนแพลตฟอร์ม"
				/>
				<RegisterBox
					label="นามสกุลเป็นอังกฤษ"
					placeholder="นามสกุลเป็นอังกฤษ"
					hint="นามสกุลนี้จะถูกใช้แสดงในแอปต่าง ๆ บนแพลตฟอร์ม"
				/>
				<div class="pt-5">วัน/เดือน/ปีเกิด (ค.ศ.)</div>
				<DateBox placeholder="dd/mm/yy" classExtensions="mt-2" />
				<p class="text-[0.7rem] mt-1 text-courseville">
					ใช้เพื่อยืนยันอายุของคุณในแอปต่าง ๆ บนแพลตฟอร์ม
				</p>
				<Button classExtensions="mt-2">ลงทะเบียน</Button>
			</div>
		</div>
	</div>
</div>
