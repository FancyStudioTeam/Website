export type MakeRequired<Object, RequiredKeys extends keyof Object> = Omit<
	Object,
	RequiredKeys
> &
	Required<Pick<Object, RequiredKeys>>;
