// biome-ignore-start lint/style/useNamingConvention: (x)
const ROLE_NAMES: Record<TeamMemberRole, string> = {
	CEO: 'Chief Executive Officer',
	COO: 'Chief Operating Officer',
	Developer: 'Developer',
};
// biome-ignore-end lint/style/useNamingConvention: (x)

export function TeamMember({ avatar, id, role, username }: TeamMemberProps) {
	return (
		<a
			className='rounded-sm bg-light-secondary p-6 shadow-md dark:bg-dark-secondary'
			href={`https://discord.com/users/${id}`}
			target='_blank'
		>
			<header className='flex items-center gap-4'>
				<img
					alt={`Avatar of ${username}`}
					className='size-15 rounded-sm'
					src={avatar}
				/>
				<div className='flex flex-col gap-1 overflow-hidden'>
					<span className='truncate font-stardom text-2xl tracking-tighter'>
						{username}
					</span>
					<span className='w-fit rounded-full bg-light-tertiary px-2 py-0.5 text-foreground text-light-foreground text-xs dark:bg-dark-tertiary dark:text-dark-foreground'>
						{ROLE_NAMES[role]}
					</span>
				</div>
			</header>
		</a>
	);
}

export interface TeamMemberProps {
	avatar: string;
	id: string;
	projects: TeamMemberProject[];
	quote?: string;
	role: TeamMemberRole;
	social: Partial<TeamMemberSocialConnections>;
	username: string;
}

type TeamMemberProject = 'Vanguard';

type TeamMemberSocialConnection = 'GitHub' | 'YouTube';
type TeamMemberSocialConnections = Record<TeamMemberSocialConnection, string>;

type TeamMemberRole = 'CEO' | 'COO' | 'Developer';
