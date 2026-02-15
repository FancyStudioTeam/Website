import type { TeamMemberProps } from '../team/TeamMember.js';
import { TeamMembersGroup } from '../team/TeamMembersGroup.js';

const TEAM_MEMBERS: TeamMemberProps[] = [
	{
		avatar: '/images/team/Death.avif',
		id: '945029082314338407',
		projects: [
			'Vanguard',
		],
		role: 'CEO',
		social: {},
		username: 'Death ❦',
	},
	{
		avatar: '/images/team/GHod.avif',
		id: '893660659382882345',
		projects: [
			'Vanguard',
		],
		role: 'COO',
		social: {},
		username: '⌥G 人 Hod™',
	},
];

export function SeniorManagementGroup() {
	return (
		<TeamMembersGroup
			members={TEAM_MEMBERS}
			title='Senior Management'
		/>
	);
}
