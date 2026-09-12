import { Button } from '@/components/ui/common/Button'

export default async function HomePage() {
	return (
		<div className='space-y-10'>
			Home
			<Button variant='default'>Button</Button>
			<Button variant='ghost'>Button</Button>
			<Button variant='outline'>Button</Button>
			<Button variant='secondary'>Button</Button>
		</div>
	)
}
