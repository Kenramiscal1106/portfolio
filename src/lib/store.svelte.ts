export class MenuStore {
	current = $state(false);

	open() {
		this.current = true;
	}
	close() {
		this.current = false;
	}
}

export const menu = new MenuStore();