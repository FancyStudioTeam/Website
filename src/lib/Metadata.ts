export enum MetadataPage {
	Home = 'HOME',
	OurProjects = 'OUR_PROJECTS',
	OurTeam = 'OUR_TEAM',
	NotFound = 'NOT_FOUND',
}

export const METADATA_PAGE_TITLE: Record<MetadataPage, string> = {
	[MetadataPage.Home]: 'Home',
	[MetadataPage.OurProjects]: 'Our Projects',
	[MetadataPage.OurTeam]: 'Our Team',
	[MetadataPage.NotFound]: 'Not Found',
};

export const METADATA_PAGE_DESCRIPTION: Record<MetadataPage, string> = {
	[MetadataPage.Home]: 'Welcome to the official FancyStudio website.',
	[MetadataPage.OurProjects]: 'Discover the projects we have created or contributed to.',
	[MetadataPage.OurTeam]: 'Meet the people who make up our FancyStudio team.',
	[MetadataPage.NotFound]: 'This page was not found or is currently unavailable.',
};
