import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

type Post = {
    title:string,
    createdAt: string,
    description: string,
    durationReadInMin:number,
    imageURL:string,
    slug:string
}

async function getPost() {
    const posts: Post[] = [];

    const paths = import.meta.glob('/src/blogs/*.svx', {eager:true});
	// console.log(paths);
    Object.keys(paths).forEach(path => {

        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');
    
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            const post = { ...metadata, slug } satisfies Post;
            posts.push(post);
        }
    })
    return posts
}

export const GET: RequestHandler = async () => {
	const posts = await getPost()
    console.log(posts)
    return json(posts)
};
