import type {
	TeamMemberProject,
	TeamMemberRole,
	TeamMemberSocial,
} from './Types.js';

export interface TeamMemberProps {
	avatar: string;
	id: string;
	managed_projects: TeamMemberProject[];
	role: TeamMemberRole;
	social: TeamMemberSocial;
	username: string;
}
