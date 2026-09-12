import { Bell } from 'lucide-react'

import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/common/Popover'

import { useFindNotificationsUnreadCountQuery } from '@/graphql/generated/output'

import { NotificationsList } from './NotificationsList'

export function Notifications() {
	const { data, loading: isLoadingCount } =
		useFindNotificationsUnreadCountQuery()
	const count = data?.findNotificationsUnreadCount ?? 0

	const displayCount = count > 10 ? '+9' : count

	if (isLoadingCount) return null

	return (
		<Popover>
			<PopoverTrigger>
				{count !== 0 && (
					<div className='bg-primary absolute top-5 right-18 rounded-full px-1.25 text-xs font-semibold text-white'>
						{displayCount}
					</div>
				)}
				<Bell className='text-foreground size-5' />
			</PopoverTrigger>
			<PopoverContent
				align='end'
				className='max-h-125 w-[320px] overflow-y-auto'
			>
				<NotificationsList />
			</PopoverContent>
		</Popover>
	)
}
