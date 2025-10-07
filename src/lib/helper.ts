import type { Project } from '$lib/index';

export async function getProjectMeta(slug:string) {
	const page = await import(`../projects/${slug}.md`);
	return {
		content: page.default,
		meta: page.metadata as Project
	};
}