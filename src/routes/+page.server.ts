import type { Project } from '$lib';
import { json } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const projects: Project[] = [];
	const paths = import.meta.glob('/src/projects/*.md', { eager: true });
	Object.keys(paths).forEach((path) => {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Project, 'slug'>;
			const project = { ...metadata, slug } satisfies Project;
			projects.push(project);
		}
	});
  console.log(projects)
  return {projects}
};
