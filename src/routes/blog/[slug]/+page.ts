import type { Post } from '$lib';
import type { PageLoad } from './$types';

export const load = (async ({params}) => {
    const page = await import(`../../../blogs/${params.slug}.svx`);
    return {
        content: page.default,
        meta: page.metadata as Post
    };
}) satisfies PageLoad;