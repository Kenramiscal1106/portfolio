export type Post = {
	title: string;
	createdAt: string;
	description: string;
	readTime: number;
	imageURL: string;
	imageAlt: string;
	slug: string;
};
export type Project = {
	title: string;
	description: string;
	imageAlt: string;
	slug: string;
	link: string;
};

export type TechMeta = {
	name: string;
	iconFilename: string;
	hslaData: string;
}