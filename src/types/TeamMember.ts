export interface TeamMember {
	avatar: string;
	display_name: string;
	id: string;
	managed_projects: TeamMemberProject[];
	position: TeamMemberPosition;
	social: TeamMemberSocial;
	username: string;
}
export type TeamMemberSocial = Partial<
	Record<TeamMemberSocialConnection, string>
>;

export enum TeamMemberPosition {
	ChiefExecutiveOfficer = 'CEO',
	ChiefOperatingOfficer = 'COO',
}

export enum TeamMemberProject {
	Vanguard = 'Vanguard',
}

export enum TeamMemberSocialConnection {
	Discord = 'Discord',
	GitHub = 'GitHub',
	YouTube = 'YouTube',
}
