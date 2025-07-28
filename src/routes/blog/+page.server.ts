import type { PageServerLoad } from "./$types";

type Post = {
    title:string,
    createdAt: string,
    description: string,
    durationReadInMins:number,
    imageURL:string,
    slug:string
}

async function getPosts() {
    const posts: Post[] = [];

    const paths = import.meta.glob('/src/blogs/*.svx', {eager:true});
	// console.log(paths);
    Object.keys(paths).forEach(path => {

        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.svx', '');
    
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            const post = { ...metadata, slug } satisfies Post;
            posts.push(post);
        }
    })
    return posts
}

export const load: PageServerLoad = async () => {
  const posts = await getPosts();
  posts.map
  return {posts: posts.map(post => ({
    title: post.title,
    description:post.description,
    date:post.createdAt,
    readTime: `${post.durationReadInMins} min`,
    imageURL: post.imageURL,
    imageAlt: post.description,
    slug:post.slug
  }))}
};