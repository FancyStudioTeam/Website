export interface TeamMember {
	avatar: string;
	id: string;
	managed_projects: TeamMemberProject[];
	role: TeamMemberRole;
	social: TeamMemberSocial;
	username: string;
}
export type TeamMemberSocial = Partial<
	Record<TeamMemberSocialConnection, string>
>;

export enum TeamMemberProject {
	Vanguard = 'Vanguard',
}

export enum TeamMemberRole {
	ChiefExecutiveOfficer = 'CEO',
	ChiefOperatingOfficer = 'COO',
}

export enum TeamMemberSocialConnection {
	GitHub = 'GitHub',
	YouTube = 'YouTube',
}
