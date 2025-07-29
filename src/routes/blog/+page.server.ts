import type { Post } from '$lib';
import type { PageServerLoad } from './$types';

async function getPosts() {
	const posts: Post[] = [];

	const paths = import.meta.glob('/src/blogs/*.svx', { eager: true });
	// console.log(paths);
	Object.keys(paths).forEach((path) => {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			posts.push(post);
		}
	});
	return posts.sort((a, b) => {
		const postA = Date.parse(a.createdAt);
		const postB = Date.parse(b.createdAt);
		return postB - postA;
	});
}

export const load: PageServerLoad = async () => {
	const posts = await getPosts();

	return { posts };
};
