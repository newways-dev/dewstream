import { Markup } from 'telegraf'

export const BUTTONS = {
	authSuccess: Markup.inlineKeyboard([
		[
			Markup.button.callback('📜 My subscriptions', 'follows'),
			Markup.button.callback('👤 View profile', 'me')
		],
		[Markup.button.url('🌐 Visit website', 'https://dewstream.com')]
	]),
	profile: Markup.inlineKeyboard([
		Markup.button.url(
			'⚙️ Account settings',
			'https://dewstream.com/dashboard/settings'
		)
	])
}
