<script>
	import { FontAwesomeIcon } from 'fontawesome-svelte';
	import { courseId } from '../../../../stores/courseInfoStore.cjs';
	let course_id;
	courseId.subscribe((v) => (course_id = v));
</script>

<div class="font-bold mt-1 border-b-2 border-primary">External Web Resources</div>

There are no external web resources for this course.
