import { type ComponentProps, forwardRef } from 'react'

import { cn } from '@/utils/tw-merge'

const Textarea = forwardRef<HTMLTextAreaElement, ComponentProps<'textarea'>>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					'border-border bg-input ring-offset-background placeholder:text-muted-foreground focus:border-primary flex max-h-20 min-h-20 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Textarea.displayName = 'Textarea'

export { Textarea }
