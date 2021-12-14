const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/register.svelte"),
	() => import("../../../src/routes/login/__layout.svelte"),
	() => import("../../../src/routes/login/cu-login.svelte"),
	() => import("../../../src/routes/login/cv-login.svelte"),
	() => import("../../../src/routes/cv/__layout.svelte"),
	() => import("../../../src/routes/cv/index.svelte"),
	() => import("../../../src/routes/cv/evaluation/index.svelte"),
	() => import("../../../src/routes/cv/activity/index.svelte"),
	() => import("../../../src/routes/cv/register/index.svelte"),
	() => import("../../../src/routes/cv/account/index.svelte"),
	() => import("../../../src/routes/cv/courses/[...course_id]/__layout.svelte"),
	() => import("../../../src/routes/cv/courses/[...course_id]/student-group.svelte"),
	() => import("../../../src/routes/cv/courses/[...course_id]/assignments.svelte"),
	() => import("../../../src/routes/cv/courses/[...course_id]/discussions.svelte"),
	() => import("../../../src/routes/cv/courses/[...course_id]/playlists.svelte"),
	() => import("../../../src/routes/cv/courses/[...course_id]/portfolio.svelte"),
	() => import("../../../src/routes/cv/courses/[...course_id]/resources.svelte"),
	() => import("../../../src/routes/cv/courses/[...course_id]/schedule.svelte"),
	() => import("../../../src/routes/cv/courses/[...course_id]/about.svelte"),
	() => import("../../../src/routes/cv/courses/[...course_id]/view.svelte"),
	() => import("../../../src/routes/cv/mooc/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/register.svelte
	[/^\/register\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/login/cu-login.svelte
	[/^\/login\/cu-login\/?$/, [c[0], c[4], c[5]], [c[1]]],

	// src/routes/login/cv-login.svelte
	[/^\/login\/cv-login\/?$/, [c[0], c[4], c[6]], [c[1]]],

	// src/routes/cv/index.svelte
	[/^\/cv\/?$/, [c[0], c[7], c[8]], [c[1]]],

	// src/routes/cv/evaluation/index.svelte
	[/^\/cv\/evaluation\/?$/, [c[0], c[7], c[9]], [c[1]]],

	// src/routes/cv/activity/index.svelte
	[/^\/cv\/activity\/?$/, [c[0], c[7], c[10]], [c[1]]],

	// src/routes/cv/register/index.svelte
	[/^\/cv\/register\/?$/, [c[0], c[7], c[11]], [c[1]]],

	// src/routes/cv/account/index.svelte
	[/^\/cv\/account\/?$/, [c[0], c[7], c[12]], [c[1]]],

	// src/routes/cv/courses/[...course_id]/student-group.svelte
	[/^\/cv\/courses(?:\/(.*))?\/student-group\/?$/, [c[0], c[7], c[13], c[14]], [c[1]], (m) => ({ course_id: d(m[1] || '')})],

	// src/routes/cv/courses/[...course_id]/assignments.svelte
	[/^\/cv\/courses(?:\/(.*))?\/assignments\/?$/, [c[0], c[7], c[13], c[15]], [c[1]], (m) => ({ course_id: d(m[1] || '')})],

	// src/routes/cv/courses/[...course_id]/discussions.svelte
	[/^\/cv\/courses(?:\/(.*))?\/discussions\/?$/, [c[0], c[7], c[13], c[16]], [c[1]], (m) => ({ course_id: d(m[1] || '')})],

	// src/routes/cv/courses/[...course_id]/playlists.svelte
	[/^\/cv\/courses(?:\/(.*))?\/playlists\/?$/, [c[0], c[7], c[13], c[17]], [c[1]], (m) => ({ course_id: d(m[1] || '')})],

	// src/routes/cv/courses/[...course_id]/portfolio.svelte
	[/^\/cv\/courses(?:\/(.*))?\/portfolio\/?$/, [c[0], c[7], c[13], c[18]], [c[1]], (m) => ({ course_id: d(m[1] || '')})],

	// src/routes/cv/courses/[...course_id]/resources.svelte
	[/^\/cv\/courses(?:\/(.*))?\/resources\/?$/, [c[0], c[7], c[13], c[19]], [c[1]], (m) => ({ course_id: d(m[1] || '')})],

	// src/routes/cv/courses/[...course_id]/schedule.svelte
	[/^\/cv\/courses(?:\/(.*))?\/schedule\/?$/, [c[0], c[7], c[13], c[20]], [c[1]], (m) => ({ course_id: d(m[1] || '')})],

	// src/routes/cv/courses/[...course_id]/about.svelte
	[/^\/cv\/courses(?:\/(.*))?\/about\/?$/, [c[0], c[7], c[13], c[21]], [c[1]], (m) => ({ course_id: d(m[1] || '')})],

	// src/routes/cv/courses/[...course_id]/view.svelte
	[/^\/cv\/courses(?:\/(.*))?\/view\/?$/, [c[0], c[7], c[13], c[22]], [c[1]], (m) => ({ course_id: d(m[1] || '')})],

	// src/routes/cv/mooc/index.svelte
	[/^\/cv\/mooc\/?$/, [c[0], c[7], c[23]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];