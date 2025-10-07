class MenuStore {
	current = $state(false);

	open() {
		this.current = true;
	}
	close() {
		this.current = false;
	}
}

class ProjectStore {
	slug: string | null = $state(null);
	isOpen: boolean = $state(false);

	open(slug:string) {
		this.slug = slug;
		this.isOpen = true;
	}
	close() {
		this.slug = null;
		this.isOpen = false;
	}
}

export const menu = new MenuStore();

export const project = new ProjectStore();