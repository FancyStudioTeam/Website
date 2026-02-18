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
