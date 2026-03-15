import {
	DiscordLogoIcon,
	GithubLogoIcon,
	type Icon,
	PenNibIcon,
	UsersIcon,
	WrenchIcon,
} from '@phosphor-icons/react';
import type { HTMLAttributeAnchorTarget } from 'react';

export const NAVBAR_SOCIAL_MEDIA_LINKS: NavbarLink[] = [
	{
		href: 'https://discord.gg/yWjeDA6ewJ',
		icon: DiscordLogoIcon,
		target: '_blank',
		text: 'Discord',
	},
	{
		href: 'https://github.com/FancyStudioTeam',
		icon: GithubLogoIcon,
		target: '_blank',
		text: 'GitHub',
	},
];

export const NAVBAR_USEFUL_LINKS: NavbarLink[] = [
	{
		href: '/blog',
		icon: PenNibIcon,
		text: 'Blog',
	},
	{
		href: '/projects',
		icon: WrenchIcon,
		text: 'Projects',
	},
	{
		href: '/team',
		icon: UsersIcon,
		text: 'Team',
	},
];

export interface NavbarLink {
	href: string;
	icon: Icon;
	target?: HTMLAttributeAnchorTarget;
	text: string;
}
