import { SponsorshipPlan, User } from '@/generated/prisma/client'
import { SessionMetadata } from '@/shared/types/session-metadata.types'

export const MESSAGES = {
	welcome:
		`<b>👋 Welcome to Dewstream Bot!</b>\n\n` +
		`To receive notifications and get the most out of the platform, let's connect your Telegram account to Dewstream.\n\n` +
		`Tap the button below and go to the <b>Notifications</b> section to complete the setup.`,
	authSuccess: `🎉 You've successfully signed in and your Telegram account is now linked to Dewstream!\n\n`,
	invalidToken: '❌ Invalid or expired token.',
	profile: (user: User, followersCount: number) =>
		`<b>👤 User profile:</b>\n\n` +
		`👤 Username: <b>${user.username}</b>\n` +
		`📧 Email: <b>${user.email}</b>\n` +
		`👥 Followers: <b>${followersCount}</b>\n` +
		`📝 Bio: <b>${user.bio || 'Not specified'}</b>\n\n` +
		`🔧 Tap the button below to go to your profile settings.`,
	follows: (user: User) =>
		`📺 <a href="https://dewstream.com/${user.username}">${user.username}</a>`,
	resetPassword: (token: string, metadata: SessionMetadata) =>
		`<b>🔒 Password reset</b>\n\n` +
		`You requested a password reset for your account on <b>Dewstream</b>.\n\n` +
		`To create a new password, please follow this link:\n\n` +
		`<b><a href="https://dewstream.com/account/recovery/${token}">Reset password</a></b>\n\n` +
		`📅 <b>Request date:</b> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}\n\n` +
		`🖥️ <b>Request details:</b>\n\n` +
		`🌍 <b>Location:</b> ${metadata.location.country}, ${metadata.location.city}\n` +
		`📱 <b>Operating system:</b> ${metadata.device.os}\n` +
		`🌐 <b>Browser:</b> ${metadata.device.browser}\n` +
		`💻 <b>IP address:</b> ${metadata.ip}\n\n` +
		`If you didn't make this request, simply ignore this message.\n\n` +
		`Thanks for using <b>Dewstream</b>! 🚀`,
	deactivate: (token: string, metadata: SessionMetadata) =>
		`<b>⚠️ Account deactivation request</b>\n\n` +
		`You've started the process of deactivating your account on <b>Dewstream</b>.\n\n` +
		`To complete this action, please confirm your request by entering the following confirmation code:\n\n` +
		`<b>Confirmation code: ${token}</b>\n\n` +
		`📅 <b>Request date:</b> ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}\n\n` +
		`🖥️ <b>Request details:</b>\n\n` +
		`• 🌍 <b>Location:</b> ${metadata.location.country}, ${metadata.location.city}\n` +
		`• 📱 <b>Operating system:</b> ${metadata.device.os}\n` +
		`• 🌐 <b>Browser:</b> ${metadata.device.browser}\n` +
		`• 💻 <b>IP address:</b> ${metadata.ip}\n\n` +
		`<b>What happens after deactivation?</b>\n\n` +
		`1. You'll be automatically logged out and lose access to your account.\n` +
		`2. If you don't cancel the deactivation within 7 days, your account will be <b>permanently deleted</b> along with all your information, data, and subscriptions.\n\n` +
		`<b>⏳ Please note:</b> If you change your mind within 7 days, you can contact our support team to restore access to your account before it's fully deleted.\n\n` +
		`Once your account is deleted, it cannot be restored, and all data will be permanently lost.\n\n` +
		`If you've changed your mind, simply ignore this message. Your account will remain active.\n\n` +
		`Thank you for using <b>Dewstream</b>! We're always happy to have you on our platform and hope you'll stay with us. 🚀\n\n` +
		`Best regards,\n` +
		`The Dewstream Team`,
	accountDeleted:
		`<b>⚠️ Your account has been permanently deleted.</b>\n\n` +
		`Your account has been completely erased from the Dewstream database. All your data and information have been permanently removed. ❌\n\n` +
		`🔒 You will no longer receive notifications via Telegram or email.\n\n` +
		`If you'd like to come back to the platform, you can sign up again using the link below:\n` +
		`<b><a href="https://dewstream.com/account/create">Sign up for Dewstream</a></b>\n\n` +
		`Thank you for being with us! We'll always be happy to see you on the platform. 🚀\n\n` +
		`Best regards,\n` +
		`The Dewstream Team`,
	streamStart: (channel: User) =>
		`<b>📡 ${channel.displayName}'s channel just went live!</b>\n\n` +
		`Watch here: <a href="https://dewstream.com/${channel.username}">Go to stream</a>`,
	newFollowing: (follower: User, followersCount: number) =>
		`<b>You have a new follower!</b>\n\nIt's <a href="https://dewstream.com/${follower.username}">${follower.displayName}</a>\n\nTotal followers on your channel: ${followersCount}`,
	newSponsorship: (plan: SponsorshipPlan, sponsor: User) =>
		`<b>🎉 New sponsor!</b>\n\n` +
		`You've received a new sponsorship on the <b>${plan.title}</b> plan.\n` +
		`💰 Amount: <b>$${plan.price}</b>\n` +
		`👤 Sponsor: <a href="https://dewstream.com/${sponsor.username}">${sponsor.displayName}</a>\n` +
		`📅 Date: <b>${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</b>`,
	enableTwoFactor:
		`🔐 Secure your account!\n\n` +
		`Enable two-factor authentication in your <a href="https://dewstream.com/dashboard/settings">account settings</a>.`,
	verifyChannel:
		`<b>🎉 Congratulations! Your channel has been verified</b>\n\n` +
		`We're happy to let you know that your channel is now verified and you've received an official badge.\n\n` +
		`The verification badge confirms your channel's authenticity and builds trust with your viewers.\n\n` +
		`Thank you for being with us and continuing to grow your channel with Dewstream!`
}
