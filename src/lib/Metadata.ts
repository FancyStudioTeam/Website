export enum MetadataPage {
	Home = 'HOME',
	NotFound = 'NOT_FOUND',
}

export const METADATA_PAGE_TITLE: Record<MetadataPage, string> = {
	[MetadataPage.Home]: 'Home',
	[MetadataPage.NotFound]: 'Not Found',
};

export const METADATA_PAGE_DESCRIPTION: Record<MetadataPage, string> = {
	[MetadataPage.Home]:
		'Welcome to FancyStudio! FancyStudio is a team of people who love to create and develop projects for everyone to use.',
	[MetadataPage.NotFound]: 'This page has not been found or is currently unavailable.',
};
