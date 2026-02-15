import type { TeamMemberProps } from './TeamMember.js';
import { TeamMembers } from './TeamMembers.js';

export function TeamMembersGroup({ members, title }: TeamMembersGroupProps) {
	return (
		<section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
			<h2 className='col-span-1 font-stardom text-2xl tracking-tighter md:col-span-2 lg:col-span-3'>
				{title}
			</h2>
			<TeamMembers members={members} />
		</section>
	);
}

export interface TeamMembersGroupProps {
	members: TeamMemberProps[];
	title: string;
}
