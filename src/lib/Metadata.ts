export enum MetadataPage {
	Home = 'HOME',
}

const HOME_DESCRIPTION =
	'Welcome to FancyStudio! FancyStudio is a team of people who love to create and develop projects for everyone to use.';
const HOME_TITLE = 'Home';

export const METADATA_PAGE_INFORMATION: Record<
	MetadataPage,
	MetadataPageInformation
> = {
	[MetadataPage.Home]: {
		description: HOME_DESCRIPTION,
		title: HOME_TITLE,
	},
};

interface MetadataPageInformation {
	description: string;
	title: string;
}
