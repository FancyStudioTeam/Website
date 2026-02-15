import { TeamMember, type TeamMemberProps } from './TeamMember.js';

export function TeamMembers({ members }: TeamMembersProps) {
	return members.map(({ username, ...rest }) => (
		<TeamMember
			key={username}
			username={username}
			{...rest}
		/>
	));
}

export interface TeamMembersProps {
	members: TeamMemberProps[];
}
