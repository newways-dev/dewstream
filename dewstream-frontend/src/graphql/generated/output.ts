/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client/react';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  Upload: { input: unknown; output: unknown; }
};

export type AuthModel = {
  __typename?: 'AuthModel';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserModel>;
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  streams: Array<StreamModel>;
  thumbnailUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChangeChatSettingsInput = {
  isChatEnabled: Scalars['Boolean']['input'];
  isChatFollowersOnly: Scalars['Boolean']['input'];
  isChatPremiumFollowersOnly: Scalars['Boolean']['input'];
};

export type ChangeEmailInput = {
  email: Scalars['String']['input'];
};

export type ChangeNotificationsSettingsInput = {
  siteNotifications: Scalars['Boolean']['input'];
  telegramNotifications: Scalars['Boolean']['input'];
};

export type ChangeNotificationsSettingsResponse = {
  __typename?: 'ChangeNotificationsSettingsResponse';
  notificationSettings: NotificationSettingsModel;
  telegramAuthToken?: Maybe<Scalars['String']['output']>;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ChangeProfileInfoInput = {
  bio: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ChangeStreamInfoInput = {
  categoryId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ChatMessageModel = {
  __typename?: 'ChatMessageModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  stream: StreamModel;
  streamId: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type DeactivateAccountInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  pin?: InputMaybe<Scalars['String']['input']>;
};

export type DeviceModel = {
  __typename?: 'DeviceModel';
  browser: Scalars['String']['output'];
  os: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type EnableTotpInput = {
  pin: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type FiltersInput = {
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type FollowModel = {
  __typename?: 'FollowModel';
  createdAt: Scalars['DateTime']['output'];
  follower: UserModel;
  followerId: Scalars['String']['output'];
  following: UserModel;
  followingId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GenerateStreamTokenInput = {
  channelId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type GenerateStreamTokenModel = {
  __typename?: 'GenerateStreamTokenModel';
  token: Scalars['String']['output'];
};

export enum IngressInput {
  RtmpInput = 'RTMP_INPUT',
  Unrecognized = 'UNRECOGNIZED',
  UrlInput = 'URL_INPUT',
  WhipInput = 'WHIP_INPUT'
}

export type LocationModel = {
  __typename?: 'LocationModel';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  latidute: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type LoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeChatSettings: Scalars['Boolean']['output'];
  changeEmail: Scalars['Boolean']['output'];
  changeNotificationsSettings: ChangeNotificationsSettingsResponse;
  changePassword: Scalars['Boolean']['output'];
  changeProfileAvatar: Scalars['Boolean']['output'];
  changeProfileInfo: Scalars['Boolean']['output'];
  changeStreamInfo: Scalars['Boolean']['output'];
  changeStreamThumbnail: Scalars['Boolean']['output'];
  clearSessionCookie: Scalars['Boolean']['output'];
  createIngress: Scalars['Boolean']['output'];
  createSocialLink: Scalars['Boolean']['output'];
  createUser: Scalars['Boolean']['output'];
  deactivateAccount: AuthModel;
  disableTotp: Scalars['Boolean']['output'];
  enableTotp: Scalars['Boolean']['output'];
  followChannel: Scalars['Boolean']['output'];
  generateStreamToken: GenerateStreamTokenModel;
  loginUser: AuthModel;
  logoutUser: Scalars['Boolean']['output'];
  newPassword: Scalars['Boolean']['output'];
  removeProfileAvatar: Scalars['Boolean']['output'];
  removeSession: Scalars['Boolean']['output'];
  removeSocialLink: Scalars['Boolean']['output'];
  removeStreamThumbnail: Scalars['Boolean']['output'];
  reorderSocialLinks: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  sendChatMessage: ChatMessageModel;
  unfollowChannel: Scalars['Boolean']['output'];
  updateSocialLink: Scalars['Boolean']['output'];
  verifyAccount: AuthModel;
};


export type MutationChangeChatSettingsArgs = {
  data: ChangeChatSettingsInput;
};


export type MutationChangeEmailArgs = {
  data: ChangeEmailInput;
};


export type MutationChangeNotificationsSettingsArgs = {
  data: ChangeNotificationsSettingsInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationChangeProfileAvatarArgs = {
  avatar: Scalars['Upload']['input'];
};


export type MutationChangeProfileInfoArgs = {
  data: ChangeProfileInfoInput;
};


export type MutationChangeStreamInfoArgs = {
  data: ChangeStreamInfoInput;
};


export type MutationChangeStreamThumbnailArgs = {
  thumbnail: Scalars['Upload']['input'];
};


export type MutationCreateIngressArgs = {
  ingressType: IngressInput;
};


export type MutationCreateSocialLinkArgs = {
  data: SocialLinkInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeactivateAccountArgs = {
  data: DeactivateAccountInput;
};


export type MutationEnableTotpArgs = {
  data: EnableTotpInput;
};


export type MutationFollowChannelArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationGenerateStreamTokenArgs = {
  data: GenerateStreamTokenInput;
};


export type MutationLoginUserArgs = {
  data: LoginInput;
};


export type MutationNewPasswordArgs = {
  data: NewPasswordInput;
};


export type MutationRemoveSessionArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveSocialLinkArgs = {
  id: Scalars['String']['input'];
};


export type MutationReorderSocialLinksArgs = {
  list: Array<SocialLinkOrderInput>;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationSendChatMessageArgs = {
  data: SendMessageInput;
};


export type MutationUnfollowChannelArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationUpdateSocialLinkArgs = {
  data: SocialLinkInput;
  id: Scalars['String']['input'];
};


export type MutationVerifyAccountArgs = {
  data: VerificationInput;
};

export type NewPasswordInput = {
  password: Scalars['String']['input'];
  passwordRepeat: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type NotificationModel = {
  __typename?: 'NotificationModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isRead: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  type: NotificationType;
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type NotificationSettingsModel = {
  __typename?: 'NotificationSettingsModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  siteNotifications: Scalars['Boolean']['output'];
  telegramNotifications: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export enum NotificationType {
  EnableTwoFactor = 'ENABLE_TWO_FACTOR',
  NewFollower = 'NEW_FOLLOWER',
  NewSponsorship = 'NEW_SPONSORSHIP',
  StreamStart = 'STREAM_START',
  VerifiedChannel = 'VERIFIED_CHANNEL'
}

export type PlanModel = {
  __typename?: 'PlanModel';
  channel: UserModel;
  channelId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  stripePlanId: Scalars['String']['output'];
  stripeProductId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  findAllCategories: Array<CategoryModel>;
  findAllStreams: Array<StreamModel>;
  findCategoryBySlug: CategoryModel;
  findChannelByUsername: UserModel;
  findChatMessagesByStream: Array<ChatMessageModel>;
  findCurrentSession: SessionModel;
  findFollowersCountByChannel: Scalars['Float']['output'];
  findMyFollowers: Array<FollowModel>;
  findMyFollowings: Array<FollowModel>;
  findNotificationsByUser: Array<NotificationModel>;
  findNotificationsUnreadCount: Scalars['Float']['output'];
  findProfile: UserModel;
  findRandomCategories: Array<CategoryModel>;
  findRandomStreams: Array<StreamModel>;
  findRecommendedChannels: Array<UserModel>;
  findSessionsByUser: Array<SessionModel>;
  findSocialLinks: Array<SocialLinkModel>;
  findSponsorsByChannel: Array<SubscriptionModel>;
  generateTotpSecret: TotpModel;
};


export type QueryFindAllStreamsArgs = {
  filters: FiltersInput;
};


export type QueryFindCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindChannelByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryFindChatMessagesByStreamArgs = {
  streamId: Scalars['String']['input'];
};


export type QueryFindFollowersCountByChannelArgs = {
  channelId: Scalars['String']['input'];
};


export type QueryFindSponsorsByChannelArgs = {
  channelId: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  email: Scalars['String']['input'];
};

export type SendMessageInput = {
  streamId: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type SessionMetadataModel = {
  __typename?: 'SessionMetadataModel';
  device: DeviceModel;
  ip: Scalars['String']['output'];
  location: LocationModel;
};

export type SessionModel = {
  __typename?: 'SessionModel';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata: SessionMetadataModel;
  userId: Scalars['String']['output'];
};

export type SocialLinkInput = {
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type SocialLinkModel = {
  __typename?: 'SocialLinkModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  position: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type SocialLinkOrderInput = {
  id: Scalars['String']['input'];
  position: Scalars['Float']['input'];
};

export type StreamModel = {
  __typename?: 'StreamModel';
  category?: Maybe<CategoryModel>;
  categoryId?: Maybe<Scalars['String']['output']>;
  chatMessages: Array<ChatMessageModel>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ingressId?: Maybe<Scalars['String']['output']>;
  isChatEnabled: Scalars['Boolean']['output'];
  isChatFollowersOnly: Scalars['Boolean']['output'];
  isChatPremiumFollowersOnly: Scalars['Boolean']['output'];
  isLive: Scalars['Boolean']['output'];
  serverUrl?: Maybe<Scalars['String']['output']>;
  streamKey?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  chatMessageAdded: ChatMessageModel;
};


export type SubscriptionChatMessageAddedArgs = {
  streamId: Scalars['String']['input'];
};

export type SubscriptionModel = {
  __typename?: 'SubscriptionModel';
  channel: UserModel;
  channelId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  plan: PlanModel;
  planId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type TotpModel = {
  __typename?: 'TotpModel';
  qrcodeUrl: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

export type UserModel = {
  __typename?: 'UserModel';
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deactivatedAt?: Maybe<Scalars['DateTime']['output']>;
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  followings?: Maybe<Array<FollowModel>>;
  id: Scalars['ID']['output'];
  isDeactivated: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isTotpEnabled: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  notificationSettings: NotificationSettingsModel;
  password: Scalars['String']['output'];
  socialLinks: Array<SocialLinkModel>;
  sponsorshipPlans?: Maybe<Array<PlanModel>>;
  stream: StreamModel;
  telegramId?: Maybe<Scalars['String']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type VerificationInput = {
  token: Scalars['String']['input'];
};

export type ChangeChatSettingsInput = {
  isChatEnabled: boolean;
  isChatFollowersOnly: boolean;
  isChatPremiumFollowersOnly: boolean;
};

export type ChangeEmailInput = {
  email: string;
};

export type ChangeNotificationsSettingsInput = {
  siteNotifications: boolean;
  telegramNotifications: boolean;
};

export type ChangePasswordInput = {
  newPassword: string;
  oldPassword: string;
};

export type ChangeProfileInfoInput = {
  bio: string;
  displayName: string;
  username: string;
};

export type ChangeStreamInfoInput = {
  categoryId: string;
  title: string;
};

export type CreateUserInput = {
  email: string;
  password: string;
  username: string;
};

export type DeactivateAccountInput = {
  email: string;
  password: string;
  pin?: string | null | undefined;
};

export type EnableTotpInput = {
  pin: string;
  secret: string;
};

export type FiltersInput = {
  searchTerm?: string | null | undefined;
  skip?: number | null | undefined;
  take?: number | null | undefined;
};

export type GenerateStreamTokenInput = {
  channelId: string;
  userId: string;
};

export type IngressInput =
  | 'RTMP_INPUT'
  | 'UNRECOGNIZED'
  | 'URL_INPUT'
  | 'WHIP_INPUT';

export type LoginInput = {
  login: string;
  password: string;
};

export type NewPasswordInput = {
  password: string;
  passwordRepeat: string;
  token: string;
};

export type NotificationType =
  | 'ENABLE_TWO_FACTOR'
  | 'NEW_FOLLOWER'
  | 'NEW_SPONSORSHIP'
  | 'STREAM_START'
  | 'VERIFIED_CHANNEL';

export type ResetPasswordInput = {
  email: string;
};

export type SendMessageInput = {
  streamId: string;
  text: string;
};

export type SocialLinkInput = {
  title: string;
  url: string;
};

export type SocialLinkOrderInput = {
  id: string;
  position: number;
};

export type VerificationInput = {
  token: string;
};

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: boolean };

export type DeactivateAccountMutationVariables = Exact<{
  data: DeactivateAccountInput;
}>;


export type DeactivateAccountMutation = { deactivateAccount: { message: string | null, user: { isDeactivated: boolean } | null } };

export type LoginUserMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginUserMutation = { loginUser: { message: string | null, user: { username: string } | null } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { logoutUser: boolean };

export type NewPasswordMutationVariables = Exact<{
  data: NewPasswordInput;
}>;


export type NewPasswordMutation = { newPassword: boolean };

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { resetPassword: boolean };

export type VerifyAccountMutationVariables = Exact<{
  data: VerificationInput;
}>;


export type VerifyAccountMutation = { verifyAccount: { message: string | null, user: { isEmailVerified: boolean } | null } };

export type ChangeChatSettingsMutationVariables = Exact<{
  data: ChangeChatSettingsInput;
}>;


export type ChangeChatSettingsMutation = { changeChatSettings: boolean };

export type SendChatMessageMutationVariables = Exact<{
  data: SendMessageInput;
}>;


export type SendChatMessageMutation = { sendChatMessage: { streamId: string } };

export type ChangeStreamInfoMutationVariables = Exact<{
  data: ChangeStreamInfoInput;
}>;


export type ChangeStreamInfoMutation = { changeStreamInfo: boolean };

export type ChangeStreamThumbnailMutationVariables = Exact<{
  thumbnail: unknown;
}>;


export type ChangeStreamThumbnailMutation = { changeStreamThumbnail: boolean };

export type CreateIngressMutationVariables = Exact<{
  ingressType: IngressInput;
}>;


export type CreateIngressMutation = { createIngress: boolean };

export type GenerateStreamTokenMutationVariables = Exact<{
  data: GenerateStreamTokenInput;
}>;


export type GenerateStreamTokenMutation = { generateStreamToken: { token: string } };

export type RemoveStreamThumbnailMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveStreamThumbnailMutation = { removeStreamThumbnail: boolean };

export type ChangeEmailMutationVariables = Exact<{
  data: ChangeEmailInput;
}>;


export type ChangeEmailMutation = { changeEmail: boolean };

export type ChangeNotificationsSettingsMutationVariables = Exact<{
  data: ChangeNotificationsSettingsInput;
}>;


export type ChangeNotificationsSettingsMutation = { changeNotificationsSettings: { telegramAuthToken: string | null, notificationSettings: { siteNotifications: boolean, telegramNotifications: boolean } } };

export type ChangePasswordMutationVariables = Exact<{
  data: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { changePassword: boolean };

export type ChangeProfileAvatarMutationVariables = Exact<{
  avatar: unknown;
}>;


export type ChangeProfileAvatarMutation = { changeProfileAvatar: boolean };

export type ChangeProfileInfoMutationVariables = Exact<{
  data: ChangeProfileInfoInput;
}>;


export type ChangeProfileInfoMutation = { changeProfileInfo: boolean };

export type ClearSessionCookieMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearSessionCookieMutation = { clearSessionCookie: boolean };

export type CreateSocialLinkMutationVariables = Exact<{
  data: SocialLinkInput;
}>;


export type CreateSocialLinkMutation = { createSocialLink: boolean };

export type DisableTotpMutationVariables = Exact<{ [key: string]: never; }>;


export type DisableTotpMutation = { disableTotp: boolean };

export type EnableTotpMutationVariables = Exact<{
  data: EnableTotpInput;
}>;


export type EnableTotpMutation = { enableTotp: boolean };

export type RemoveProfileAvatarMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveProfileAvatarMutation = { removeProfileAvatar: boolean };

export type RemoveSessionMutationVariables = Exact<{
  id: string;
}>;


export type RemoveSessionMutation = { removeSession: boolean };

export type RemoveSocialLinkMutationVariables = Exact<{
  id: string;
}>;


export type RemoveSocialLinkMutation = { removeSocialLink: boolean };

export type ReorderSocialLinksMutationVariables = Exact<{
  list: Array<SocialLinkOrderInput> | SocialLinkOrderInput;
}>;


export type ReorderSocialLinksMutation = { reorderSocialLinks: boolean };

export type UpdateSocialLinkMutationVariables = Exact<{
  id: string;
  data: SocialLinkInput;
}>;


export type UpdateSocialLinkMutation = { updateSocialLink: boolean };

export type FindAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllCategoriesQuery = { findAllCategories: Array<{ id: string, updatedAt: string, title: string, slug: string, thumbnailUrl: string }> };

export type FindCategoryBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type FindCategoryBySlugQuery = { findCategoryBySlug: { title: string, thumbnailUrl: string, description: string | null, streams: Array<{ title: string, thumbnailUrl: string | null, isLive: boolean, user: { username: string, avatar: string | null, isVerified: boolean }, category: { title: string, slug: string } | null }> } };

export type FindRandomCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRandomCategoriesQuery = { findRandomCategories: Array<{ title: string, slug: string, thumbnailUrl: string }> };

export type FindChannelByUsernameQueryVariables = Exact<{
  username: string;
}>;


export type FindChannelByUsernameQuery = { findChannelByUsername: { id: string, username: string, displayName: string, avatar: string | null, bio: string | null, isVerified: boolean, socialLinks: Array<{ title: string, url: string }>, stream: { id: string, title: string, thumbnailUrl: string | null, isLive: boolean, isChatEnabled: boolean, isChatFollowersOnly: boolean, isChatPremiumFollowersOnly: boolean, category: { id: string, title: string } | null }, sponsorshipPlans: Array<{ id: string, title: string, description: string | null, price: number }> | null, followings: Array<{ id: string }> | null } };

export type FindRecommendedChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRecommendedChannelsQuery = { findRecommendedChannels: Array<{ username: string, avatar: string | null, isVerified: boolean, stream: { isLive: boolean } }> };

export type FindSponsorsByChannelQueryVariables = Exact<{
  channelId: string;
}>;


export type FindSponsorsByChannelQuery = { findSponsorsByChannel: Array<{ user: { id: string, username: string, avatar: string | null } }> };

export type FindChatMessagesByStreamQueryVariables = Exact<{
  streamId: string;
}>;


export type FindChatMessagesByStreamQuery = { findChatMessagesByStream: Array<{ createdAt: string, text: string, user: { id: string, username: string } }> };

export type FindMyFollowersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyFollowersQuery = { findMyFollowers: Array<{ createdAt: string, follower: { username: string, avatar: string | null, isVerified: boolean } }> };

export type FindMyFollowingsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindMyFollowingsQuery = { findMyFollowings: Array<{ createdAt: string, followingId: string }> };

export type FindAllStreamsQueryVariables = Exact<{
  filters: FiltersInput;
}>;


export type FindAllStreamsQuery = { findAllStreams: Array<{ title: string, thumbnailUrl: string | null, isLive: boolean, user: { username: string, avatar: string | null, isVerified: boolean }, category: { title: string, slug: string } | null }> };

export type FindRandomStreamsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRandomStreamsQuery = { findRandomStreams: Array<{ title: string, thumbnailUrl: string | null, isLive: boolean, user: { username: string, avatar: string | null, isVerified: boolean }, category: { title: string, slug: string } | null }> };

export type FindCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCurrentSessionQuery = { findCurrentSession: { id: string, createdAt: string, metadata: { ip: string, location: { country: string, city: string, latidute: number, longitude: number }, device: { browser: string, os: string } } } };

export type FindNotificationsByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindNotificationsByUserQuery = { findNotificationsByUser: Array<{ id: string, message: string, type: NotificationType }> };

export type FindNotificationsUnreadCountQueryVariables = Exact<{ [key: string]: never; }>;


export type FindNotificationsUnreadCountQuery = { findNotificationsUnreadCount: number };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { findProfile: { id: string, username: string, displayName: string, email: string, avatar: string | null, bio: string | null, isVerified: boolean, isTotpEnabled: boolean, notificationSettings: { siteNotifications: boolean, telegramNotifications: boolean }, stream: { serverUrl: string | null, streamKey: string | null, isChatEnabled: boolean, isChatFollowersOnly: boolean, isChatPremiumFollowersOnly: boolean } } };

export type FindSessionsByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSessionsByUserQuery = { findSessionsByUser: Array<{ id: string, createdAt: string, metadata: { ip: string, location: { country: string, city: string, latidute: number, longitude: number }, device: { browser: string, os: string } } }> };

export type FindSocialLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSocialLinksQuery = { findSocialLinks: Array<{ id: string, title: string, url: string, position: number }> };

export type GenerateTotpSecretQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateTotpSecretQuery = { generateTotpSecret: { qrcodeUrl: string, secret: string } };

export type ChatMessageAddedSubscriptionVariables = Exact<{
  streamId: string;
}>;


export type ChatMessageAddedSubscription = { chatMessageAdded: { createdAt: string, text: string, user: { id: string, username: string } } };


export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data)
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeactivateAccountDocument = gql`
    mutation DeactivateAccount($data: DeactivateAccountInput!) {
  deactivateAccount(data: $data) {
    user {
      isDeactivated
    }
    message
  }
}
    `;
export type DeactivateAccountMutationFn = ApolloReactCommon.MutationFunction<DeactivateAccountMutation, DeactivateAccountMutationVariables>;

/**
 * __useDeactivateAccountMutation__
 *
 * To run a mutation, you first call `useDeactivateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivateAccountMutation, { data, loading, error }] = useDeactivateAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeactivateAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeactivateAccountMutation, DeactivateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeactivateAccountMutation, DeactivateAccountMutationVariables>(DeactivateAccountDocument, options);
      }
export type DeactivateAccountMutationHookResult = ReturnType<typeof useDeactivateAccountMutation>;
export type DeactivateAccountMutationResult = ApolloReactCommon.MutationResult<DeactivateAccountMutation>;
export type DeactivateAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<DeactivateAccountMutation, DeactivateAccountMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($data: LoginInput!) {
  loginUser(data: $data) {
    user {
      username
    }
    message
  }
}
    `;
export type LoginUserMutationFn = ApolloReactCommon.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = ApolloReactCommon.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = ApolloReactCommon.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = ApolloReactCommon.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const NewPasswordDocument = gql`
    mutation NewPassword($data: NewPasswordInput!) {
  newPassword(data: $data)
}
    `;
export type NewPasswordMutationFn = ApolloReactCommon.MutationFunction<NewPasswordMutation, NewPasswordMutationVariables>;

/**
 * __useNewPasswordMutation__
 *
 * To run a mutation, you first call `useNewPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newPasswordMutation, { data, loading, error }] = useNewPasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useNewPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<NewPasswordMutation, NewPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<NewPasswordMutation, NewPasswordMutationVariables>(NewPasswordDocument, options);
      }
export type NewPasswordMutationHookResult = ReturnType<typeof useNewPasswordMutation>;
export type NewPasswordMutationResult = ApolloReactCommon.MutationResult<NewPasswordMutation>;
export type NewPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<NewPasswordMutation, NewPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($data: ResetPasswordInput!) {
  resetPassword(data: $data)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyAccountDocument = gql`
    mutation VerifyAccount($data: VerificationInput!) {
  verifyAccount(data: $data) {
    user {
      isEmailVerified
    }
    message
  }
}
    `;
export type VerifyAccountMutationFn = ApolloReactCommon.MutationFunction<VerifyAccountMutation, VerifyAccountMutationVariables>;

/**
 * __useVerifyAccountMutation__
 *
 * To run a mutation, you first call `useVerifyAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyAccountMutation, { data, loading, error }] = useVerifyAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useVerifyAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyAccountMutation, VerifyAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<VerifyAccountMutation, VerifyAccountMutationVariables>(VerifyAccountDocument, options);
      }
export type VerifyAccountMutationHookResult = ReturnType<typeof useVerifyAccountMutation>;
export type VerifyAccountMutationResult = ApolloReactCommon.MutationResult<VerifyAccountMutation>;
export type VerifyAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyAccountMutation, VerifyAccountMutationVariables>;
export const ChangeChatSettingsDocument = gql`
    mutation ChangeChatSettings($data: ChangeChatSettingsInput!) {
  changeChatSettings(data: $data)
}
    `;
export type ChangeChatSettingsMutationFn = ApolloReactCommon.MutationFunction<ChangeChatSettingsMutation, ChangeChatSettingsMutationVariables>;

/**
 * __useChangeChatSettingsMutation__
 *
 * To run a mutation, you first call `useChangeChatSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeChatSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeChatSettingsMutation, { data, loading, error }] = useChangeChatSettingsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeChatSettingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeChatSettingsMutation, ChangeChatSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangeChatSettingsMutation, ChangeChatSettingsMutationVariables>(ChangeChatSettingsDocument, options);
      }
export type ChangeChatSettingsMutationHookResult = ReturnType<typeof useChangeChatSettingsMutation>;
export type ChangeChatSettingsMutationResult = ApolloReactCommon.MutationResult<ChangeChatSettingsMutation>;
export type ChangeChatSettingsMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeChatSettingsMutation, ChangeChatSettingsMutationVariables>;
export const SendChatMessageDocument = gql`
    mutation SendChatMessage($data: SendMessageInput!) {
  sendChatMessage(data: $data) {
    streamId
  }
}
    `;
export type SendChatMessageMutationFn = ApolloReactCommon.MutationFunction<SendChatMessageMutation, SendChatMessageMutationVariables>;

/**
 * __useSendChatMessageMutation__
 *
 * To run a mutation, you first call `useSendChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendChatMessageMutation, { data, loading, error }] = useSendChatMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendChatMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendChatMessageMutation, SendChatMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SendChatMessageMutation, SendChatMessageMutationVariables>(SendChatMessageDocument, options);
      }
export type SendChatMessageMutationHookResult = ReturnType<typeof useSendChatMessageMutation>;
export type SendChatMessageMutationResult = ApolloReactCommon.MutationResult<SendChatMessageMutation>;
export type SendChatMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<SendChatMessageMutation, SendChatMessageMutationVariables>;
export const ChangeStreamInfoDocument = gql`
    mutation ChangeStreamInfo($data: ChangeStreamInfoInput!) {
  changeStreamInfo(data: $data)
}
    `;
export type ChangeStreamInfoMutationFn = ApolloReactCommon.MutationFunction<ChangeStreamInfoMutation, ChangeStreamInfoMutationVariables>;

/**
 * __useChangeStreamInfoMutation__
 *
 * To run a mutation, you first call `useChangeStreamInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeStreamInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeStreamInfoMutation, { data, loading, error }] = useChangeStreamInfoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeStreamInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeStreamInfoMutation, ChangeStreamInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangeStreamInfoMutation, ChangeStreamInfoMutationVariables>(ChangeStreamInfoDocument, options);
      }
export type ChangeStreamInfoMutationHookResult = ReturnType<typeof useChangeStreamInfoMutation>;
export type ChangeStreamInfoMutationResult = ApolloReactCommon.MutationResult<ChangeStreamInfoMutation>;
export type ChangeStreamInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeStreamInfoMutation, ChangeStreamInfoMutationVariables>;
export const ChangeStreamThumbnailDocument = gql`
    mutation ChangeStreamThumbnail($thumbnail: Upload!) {
  changeStreamThumbnail(thumbnail: $thumbnail)
}
    `;
export type ChangeStreamThumbnailMutationFn = ApolloReactCommon.MutationFunction<ChangeStreamThumbnailMutation, ChangeStreamThumbnailMutationVariables>;

/**
 * __useChangeStreamThumbnailMutation__
 *
 * To run a mutation, you first call `useChangeStreamThumbnailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeStreamThumbnailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeStreamThumbnailMutation, { data, loading, error }] = useChangeStreamThumbnailMutation({
 *   variables: {
 *      thumbnail: // value for 'thumbnail'
 *   },
 * });
 */
export function useChangeStreamThumbnailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeStreamThumbnailMutation, ChangeStreamThumbnailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangeStreamThumbnailMutation, ChangeStreamThumbnailMutationVariables>(ChangeStreamThumbnailDocument, options);
      }
export type ChangeStreamThumbnailMutationHookResult = ReturnType<typeof useChangeStreamThumbnailMutation>;
export type ChangeStreamThumbnailMutationResult = ApolloReactCommon.MutationResult<ChangeStreamThumbnailMutation>;
export type ChangeStreamThumbnailMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeStreamThumbnailMutation, ChangeStreamThumbnailMutationVariables>;
export const CreateIngressDocument = gql`
    mutation CreateIngress($ingressType: IngressInput!) {
  createIngress(ingressType: $ingressType)
}
    `;
export type CreateIngressMutationFn = ApolloReactCommon.MutationFunction<CreateIngressMutation, CreateIngressMutationVariables>;

/**
 * __useCreateIngressMutation__
 *
 * To run a mutation, you first call `useCreateIngressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIngressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIngressMutation, { data, loading, error }] = useCreateIngressMutation({
 *   variables: {
 *      ingressType: // value for 'ingressType'
 *   },
 * });
 */
export function useCreateIngressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateIngressMutation, CreateIngressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateIngressMutation, CreateIngressMutationVariables>(CreateIngressDocument, options);
      }
export type CreateIngressMutationHookResult = ReturnType<typeof useCreateIngressMutation>;
export type CreateIngressMutationResult = ApolloReactCommon.MutationResult<CreateIngressMutation>;
export type CreateIngressMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateIngressMutation, CreateIngressMutationVariables>;
export const GenerateStreamTokenDocument = gql`
    mutation GenerateStreamToken($data: GenerateStreamTokenInput!) {
  generateStreamToken(data: $data) {
    token
  }
}
    `;
export type GenerateStreamTokenMutationFn = ApolloReactCommon.MutationFunction<GenerateStreamTokenMutation, GenerateStreamTokenMutationVariables>;

/**
 * __useGenerateStreamTokenMutation__
 *
 * To run a mutation, you first call `useGenerateStreamTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateStreamTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateStreamTokenMutation, { data, loading, error }] = useGenerateStreamTokenMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGenerateStreamTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GenerateStreamTokenMutation, GenerateStreamTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<GenerateStreamTokenMutation, GenerateStreamTokenMutationVariables>(GenerateStreamTokenDocument, options);
      }
export type GenerateStreamTokenMutationHookResult = ReturnType<typeof useGenerateStreamTokenMutation>;
export type GenerateStreamTokenMutationResult = ApolloReactCommon.MutationResult<GenerateStreamTokenMutation>;
export type GenerateStreamTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<GenerateStreamTokenMutation, GenerateStreamTokenMutationVariables>;
export const RemoveStreamThumbnailDocument = gql`
    mutation RemoveStreamThumbnail {
  removeStreamThumbnail
}
    `;
export type RemoveStreamThumbnailMutationFn = ApolloReactCommon.MutationFunction<RemoveStreamThumbnailMutation, RemoveStreamThumbnailMutationVariables>;

/**
 * __useRemoveStreamThumbnailMutation__
 *
 * To run a mutation, you first call `useRemoveStreamThumbnailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveStreamThumbnailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeStreamThumbnailMutation, { data, loading, error }] = useRemoveStreamThumbnailMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveStreamThumbnailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveStreamThumbnailMutation, RemoveStreamThumbnailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveStreamThumbnailMutation, RemoveStreamThumbnailMutationVariables>(RemoveStreamThumbnailDocument, options);
      }
export type RemoveStreamThumbnailMutationHookResult = ReturnType<typeof useRemoveStreamThumbnailMutation>;
export type RemoveStreamThumbnailMutationResult = ApolloReactCommon.MutationResult<RemoveStreamThumbnailMutation>;
export type RemoveStreamThumbnailMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveStreamThumbnailMutation, RemoveStreamThumbnailMutationVariables>;
export const ChangeEmailDocument = gql`
    mutation ChangeEmail($data: ChangeEmailInput!) {
  changeEmail(data: $data)
}
    `;
export type ChangeEmailMutationFn = ApolloReactCommon.MutationFunction<ChangeEmailMutation, ChangeEmailMutationVariables>;

/**
 * __useChangeEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailMutation, { data, loading, error }] = useChangeEmailMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeEmailMutation, ChangeEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangeEmailMutation, ChangeEmailMutationVariables>(ChangeEmailDocument, options);
      }
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = ApolloReactCommon.MutationResult<ChangeEmailMutation>;
export type ChangeEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangeNotificationsSettingsDocument = gql`
    mutation ChangeNotificationsSettings($data: ChangeNotificationsSettingsInput!) {
  changeNotificationsSettings(data: $data) {
    notificationSettings {
      siteNotifications
      telegramNotifications
    }
    telegramAuthToken
  }
}
    `;
export type ChangeNotificationsSettingsMutationFn = ApolloReactCommon.MutationFunction<ChangeNotificationsSettingsMutation, ChangeNotificationsSettingsMutationVariables>;

/**
 * __useChangeNotificationsSettingsMutation__
 *
 * To run a mutation, you first call `useChangeNotificationsSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeNotificationsSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeNotificationsSettingsMutation, { data, loading, error }] = useChangeNotificationsSettingsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeNotificationsSettingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeNotificationsSettingsMutation, ChangeNotificationsSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangeNotificationsSettingsMutation, ChangeNotificationsSettingsMutationVariables>(ChangeNotificationsSettingsDocument, options);
      }
export type ChangeNotificationsSettingsMutationHookResult = ReturnType<typeof useChangeNotificationsSettingsMutation>;
export type ChangeNotificationsSettingsMutationResult = ApolloReactCommon.MutationResult<ChangeNotificationsSettingsMutation>;
export type ChangeNotificationsSettingsMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeNotificationsSettingsMutation, ChangeNotificationsSettingsMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data)
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeProfileAvatarDocument = gql`
    mutation ChangeProfileAvatar($avatar: Upload!) {
  changeProfileAvatar(avatar: $avatar)
}
    `;
export type ChangeProfileAvatarMutationFn = ApolloReactCommon.MutationFunction<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;

/**
 * __useChangeProfileAvatarMutation__
 *
 * To run a mutation, you first call `useChangeProfileAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProfileAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProfileAvatarMutation, { data, loading, error }] = useChangeProfileAvatarMutation({
 *   variables: {
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useChangeProfileAvatarMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>(ChangeProfileAvatarDocument, options);
      }
export type ChangeProfileAvatarMutationHookResult = ReturnType<typeof useChangeProfileAvatarMutation>;
export type ChangeProfileAvatarMutationResult = ApolloReactCommon.MutationResult<ChangeProfileAvatarMutation>;
export type ChangeProfileAvatarMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;
export const ChangeProfileInfoDocument = gql`
    mutation ChangeProfileInfo($data: ChangeProfileInfoInput!) {
  changeProfileInfo(data: $data)
}
    `;
export type ChangeProfileInfoMutationFn = ApolloReactCommon.MutationFunction<ChangeProfileInfoMutation, ChangeProfileInfoMutationVariables>;

/**
 * __useChangeProfileInfoMutation__
 *
 * To run a mutation, you first call `useChangeProfileInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProfileInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProfileInfoMutation, { data, loading, error }] = useChangeProfileInfoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeProfileInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeProfileInfoMutation, ChangeProfileInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangeProfileInfoMutation, ChangeProfileInfoMutationVariables>(ChangeProfileInfoDocument, options);
      }
export type ChangeProfileInfoMutationHookResult = ReturnType<typeof useChangeProfileInfoMutation>;
export type ChangeProfileInfoMutationResult = ApolloReactCommon.MutationResult<ChangeProfileInfoMutation>;
export type ChangeProfileInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeProfileInfoMutation, ChangeProfileInfoMutationVariables>;
export const ClearSessionCookieDocument = gql`
    mutation ClearSessionCookie {
  clearSessionCookie
}
    `;
export type ClearSessionCookieMutationFn = ApolloReactCommon.MutationFunction<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;

/**
 * __useClearSessionCookieMutation__
 *
 * To run a mutation, you first call `useClearSessionCookieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearSessionCookieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearSessionCookieMutation, { data, loading, error }] = useClearSessionCookieMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearSessionCookieMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>(ClearSessionCookieDocument, options);
      }
export type ClearSessionCookieMutationHookResult = ReturnType<typeof useClearSessionCookieMutation>;
export type ClearSessionCookieMutationResult = ApolloReactCommon.MutationResult<ClearSessionCookieMutation>;
export type ClearSessionCookieMutationOptions = ApolloReactCommon.BaseMutationOptions<ClearSessionCookieMutation, ClearSessionCookieMutationVariables>;
export const CreateSocialLinkDocument = gql`
    mutation CreateSocialLink($data: SocialLinkInput!) {
  createSocialLink(data: $data)
}
    `;
export type CreateSocialLinkMutationFn = ApolloReactCommon.MutationFunction<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>;

/**
 * __useCreateSocialLinkMutation__
 *
 * To run a mutation, you first call `useCreateSocialLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSocialLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSocialLinkMutation, { data, loading, error }] = useCreateSocialLinkMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSocialLinkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>(CreateSocialLinkDocument, options);
      }
export type CreateSocialLinkMutationHookResult = ReturnType<typeof useCreateSocialLinkMutation>;
export type CreateSocialLinkMutationResult = ApolloReactCommon.MutationResult<CreateSocialLinkMutation>;
export type CreateSocialLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>;
export const DisableTotpDocument = gql`
    mutation DisableTotp {
  disableTotp
}
    `;
export type DisableTotpMutationFn = ApolloReactCommon.MutationFunction<DisableTotpMutation, DisableTotpMutationVariables>;

/**
 * __useDisableTotpMutation__
 *
 * To run a mutation, you first call `useDisableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableTotpMutation, { data, loading, error }] = useDisableTotpMutation({
 *   variables: {
 *   },
 * });
 */
export function useDisableTotpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DisableTotpMutation, DisableTotpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DisableTotpMutation, DisableTotpMutationVariables>(DisableTotpDocument, options);
      }
export type DisableTotpMutationHookResult = ReturnType<typeof useDisableTotpMutation>;
export type DisableTotpMutationResult = ApolloReactCommon.MutationResult<DisableTotpMutation>;
export type DisableTotpMutationOptions = ApolloReactCommon.BaseMutationOptions<DisableTotpMutation, DisableTotpMutationVariables>;
export const EnableTotpDocument = gql`
    mutation EnableTotp($data: EnableTotpInput!) {
  enableTotp(data: $data)
}
    `;
export type EnableTotpMutationFn = ApolloReactCommon.MutationFunction<EnableTotpMutation, EnableTotpMutationVariables>;

/**
 * __useEnableTotpMutation__
 *
 * To run a mutation, you first call `useEnableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableTotpMutation, { data, loading, error }] = useEnableTotpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEnableTotpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EnableTotpMutation, EnableTotpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EnableTotpMutation, EnableTotpMutationVariables>(EnableTotpDocument, options);
      }
export type EnableTotpMutationHookResult = ReturnType<typeof useEnableTotpMutation>;
export type EnableTotpMutationResult = ApolloReactCommon.MutationResult<EnableTotpMutation>;
export type EnableTotpMutationOptions = ApolloReactCommon.BaseMutationOptions<EnableTotpMutation, EnableTotpMutationVariables>;
export const RemoveProfileAvatarDocument = gql`
    mutation RemoveProfileAvatar {
  removeProfileAvatar
}
    `;
export type RemoveProfileAvatarMutationFn = ApolloReactCommon.MutationFunction<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>;

/**
 * __useRemoveProfileAvatarMutation__
 *
 * To run a mutation, you first call `useRemoveProfileAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProfileAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProfileAvatarMutation, { data, loading, error }] = useRemoveProfileAvatarMutation({
 *   variables: {
 *   },
 * });
 */
export function useRemoveProfileAvatarMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>(RemoveProfileAvatarDocument, options);
      }
export type RemoveProfileAvatarMutationHookResult = ReturnType<typeof useRemoveProfileAvatarMutation>;
export type RemoveProfileAvatarMutationResult = ApolloReactCommon.MutationResult<RemoveProfileAvatarMutation>;
export type RemoveProfileAvatarMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveProfileAvatarMutation, RemoveProfileAvatarMutationVariables>;
export const RemoveSessionDocument = gql`
    mutation RemoveSession($id: String!) {
  removeSession(id: $id)
}
    `;
export type RemoveSessionMutationFn = ApolloReactCommon.MutationFunction<RemoveSessionMutation, RemoveSessionMutationVariables>;

/**
 * __useRemoveSessionMutation__
 *
 * To run a mutation, you first call `useRemoveSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSessionMutation, { data, loading, error }] = useRemoveSessionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSessionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveSessionMutation, RemoveSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveSessionMutation, RemoveSessionMutationVariables>(RemoveSessionDocument, options);
      }
export type RemoveSessionMutationHookResult = ReturnType<typeof useRemoveSessionMutation>;
export type RemoveSessionMutationResult = ApolloReactCommon.MutationResult<RemoveSessionMutation>;
export type RemoveSessionMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveSessionMutation, RemoveSessionMutationVariables>;
export const RemoveSocialLinkDocument = gql`
    mutation RemoveSocialLink($id: String!) {
  removeSocialLink(id: $id)
}
    `;
export type RemoveSocialLinkMutationFn = ApolloReactCommon.MutationFunction<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>;

/**
 * __useRemoveSocialLinkMutation__
 *
 * To run a mutation, you first call `useRemoveSocialLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSocialLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSocialLinkMutation, { data, loading, error }] = useRemoveSocialLinkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSocialLinkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>(RemoveSocialLinkDocument, options);
      }
export type RemoveSocialLinkMutationHookResult = ReturnType<typeof useRemoveSocialLinkMutation>;
export type RemoveSocialLinkMutationResult = ApolloReactCommon.MutationResult<RemoveSocialLinkMutation>;
export type RemoveSocialLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>;
export const ReorderSocialLinksDocument = gql`
    mutation ReorderSocialLinks($list: [SocialLinkOrderInput!]!) {
  reorderSocialLinks(list: $list)
}
    `;
export type ReorderSocialLinksMutationFn = ApolloReactCommon.MutationFunction<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>;

/**
 * __useReorderSocialLinksMutation__
 *
 * To run a mutation, you first call `useReorderSocialLinksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReorderSocialLinksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reorderSocialLinksMutation, { data, loading, error }] = useReorderSocialLinksMutation({
 *   variables: {
 *      list: // value for 'list'
 *   },
 * });
 */
export function useReorderSocialLinksMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>(ReorderSocialLinksDocument, options);
      }
export type ReorderSocialLinksMutationHookResult = ReturnType<typeof useReorderSocialLinksMutation>;
export type ReorderSocialLinksMutationResult = ApolloReactCommon.MutationResult<ReorderSocialLinksMutation>;
export type ReorderSocialLinksMutationOptions = ApolloReactCommon.BaseMutationOptions<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>;
export const UpdateSocialLinkDocument = gql`
    mutation UpdateSocialLink($id: String!, $data: SocialLinkInput!) {
  updateSocialLink(id: $id, data: $data)
}
    `;
export type UpdateSocialLinkMutationFn = ApolloReactCommon.MutationFunction<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>;

/**
 * __useUpdateSocialLinkMutation__
 *
 * To run a mutation, you first call `useUpdateSocialLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSocialLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSocialLinkMutation, { data, loading, error }] = useUpdateSocialLinkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSocialLinkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>(UpdateSocialLinkDocument, options);
      }
export type UpdateSocialLinkMutationHookResult = ReturnType<typeof useUpdateSocialLinkMutation>;
export type UpdateSocialLinkMutationResult = ApolloReactCommon.MutationResult<UpdateSocialLinkMutation>;
export type UpdateSocialLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>;
export const FindAllCategoriesDocument = gql`
    query FindAllCategories {
  findAllCategories {
    id
    updatedAt
    title
    slug
    thumbnailUrl
  }
}
    `;

/**
 * __useFindAllCategoriesQuery__
 *
 * To run a query within a React component, call `useFindAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
      }
export function useFindAllCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
        }
// @ts-ignore
export function useFindAllCategoriesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>;
export function useFindAllCategoriesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindAllCategoriesQuery | undefined, FindAllCategoriesQueryVariables>;
export function useFindAllCategoriesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
        }
export type FindAllCategoriesQueryHookResult = ReturnType<typeof useFindAllCategoriesQuery>;
export type FindAllCategoriesLazyQueryHookResult = ReturnType<typeof useFindAllCategoriesLazyQuery>;
export type FindAllCategoriesSuspenseQueryHookResult = ReturnType<typeof useFindAllCategoriesSuspenseQuery>;
export type FindAllCategoriesQueryResult = ApolloReactCommon.QueryResult<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>;
export const FindCategoryBySlugDocument = gql`
    query FindCategoryBySlug($slug: String!) {
  findCategoryBySlug(slug: $slug) {
    title
    thumbnailUrl
    description
    streams {
      title
      thumbnailUrl
      isLive
      user {
        username
        avatar
        isVerified
      }
      category {
        title
        slug
      }
    }
  }
}
    `;

/**
 * __useFindCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useFindCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCategoryBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindCategoryBySlugQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables> & ({ variables: FindCategoryBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>(FindCategoryBySlugDocument, options);
      }
export function useFindCategoryBySlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>(FindCategoryBySlugDocument, options);
        }
// @ts-ignore
export function useFindCategoryBySlugSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>;
export function useFindCategoryBySlugSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindCategoryBySlugQuery | undefined, FindCategoryBySlugQueryVariables>;
export function useFindCategoryBySlugSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>(FindCategoryBySlugDocument, options);
        }
export type FindCategoryBySlugQueryHookResult = ReturnType<typeof useFindCategoryBySlugQuery>;
export type FindCategoryBySlugLazyQueryHookResult = ReturnType<typeof useFindCategoryBySlugLazyQuery>;
export type FindCategoryBySlugSuspenseQueryHookResult = ReturnType<typeof useFindCategoryBySlugSuspenseQuery>;
export type FindCategoryBySlugQueryResult = ApolloReactCommon.QueryResult<FindCategoryBySlugQuery, FindCategoryBySlugQueryVariables>;
export const FindRandomCategoriesDocument = gql`
    query FindRandomCategories {
  findRandomCategories {
    title
    slug
    thumbnailUrl
  }
}
    `;

/**
 * __useFindRandomCategoriesQuery__
 *
 * To run a query within a React component, call `useFindRandomCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRandomCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRandomCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindRandomCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>(FindRandomCategoriesDocument, options);
      }
export function useFindRandomCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>(FindRandomCategoriesDocument, options);
        }
// @ts-ignore
export function useFindRandomCategoriesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>;
export function useFindRandomCategoriesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindRandomCategoriesQuery | undefined, FindRandomCategoriesQueryVariables>;
export function useFindRandomCategoriesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>(FindRandomCategoriesDocument, options);
        }
export type FindRandomCategoriesQueryHookResult = ReturnType<typeof useFindRandomCategoriesQuery>;
export type FindRandomCategoriesLazyQueryHookResult = ReturnType<typeof useFindRandomCategoriesLazyQuery>;
export type FindRandomCategoriesSuspenseQueryHookResult = ReturnType<typeof useFindRandomCategoriesSuspenseQuery>;
export type FindRandomCategoriesQueryResult = ApolloReactCommon.QueryResult<FindRandomCategoriesQuery, FindRandomCategoriesQueryVariables>;
export const FindChannelByUsernameDocument = gql`
    query FindChannelByUsername($username: String!) {
  findChannelByUsername(username: $username) {
    id
    username
    displayName
    avatar
    bio
    isVerified
    socialLinks {
      title
      url
    }
    stream {
      id
      title
      thumbnailUrl
      isLive
      isChatEnabled
      isChatFollowersOnly
      isChatPremiumFollowersOnly
      category {
        id
        title
      }
    }
    sponsorshipPlans {
      id
      title
      description
      price
    }
    followings {
      id
    }
  }
}
    `;

/**
 * __useFindChannelByUsernameQuery__
 *
 * To run a query within a React component, call `useFindChannelByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindChannelByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindChannelByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFindChannelByUsernameQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables> & ({ variables: FindChannelByUsernameQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>(FindChannelByUsernameDocument, options);
      }
export function useFindChannelByUsernameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>(FindChannelByUsernameDocument, options);
        }
// @ts-ignore
export function useFindChannelByUsernameSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>;
export function useFindChannelByUsernameSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindChannelByUsernameQuery | undefined, FindChannelByUsernameQueryVariables>;
export function useFindChannelByUsernameSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>(FindChannelByUsernameDocument, options);
        }
export type FindChannelByUsernameQueryHookResult = ReturnType<typeof useFindChannelByUsernameQuery>;
export type FindChannelByUsernameLazyQueryHookResult = ReturnType<typeof useFindChannelByUsernameLazyQuery>;
export type FindChannelByUsernameSuspenseQueryHookResult = ReturnType<typeof useFindChannelByUsernameSuspenseQuery>;
export type FindChannelByUsernameQueryResult = ApolloReactCommon.QueryResult<FindChannelByUsernameQuery, FindChannelByUsernameQueryVariables>;
export const FindRecommendedChannelsDocument = gql`
    query FindRecommendedChannels {
  findRecommendedChannels {
    username
    avatar
    isVerified
    stream {
      isLive
    }
  }
}
    `;

/**
 * __useFindRecommendedChannelsQuery__
 *
 * To run a query within a React component, call `useFindRecommendedChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRecommendedChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRecommendedChannelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindRecommendedChannelsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>(FindRecommendedChannelsDocument, options);
      }
export function useFindRecommendedChannelsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>(FindRecommendedChannelsDocument, options);
        }
// @ts-ignore
export function useFindRecommendedChannelsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>;
export function useFindRecommendedChannelsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindRecommendedChannelsQuery | undefined, FindRecommendedChannelsQueryVariables>;
export function useFindRecommendedChannelsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>(FindRecommendedChannelsDocument, options);
        }
export type FindRecommendedChannelsQueryHookResult = ReturnType<typeof useFindRecommendedChannelsQuery>;
export type FindRecommendedChannelsLazyQueryHookResult = ReturnType<typeof useFindRecommendedChannelsLazyQuery>;
export type FindRecommendedChannelsSuspenseQueryHookResult = ReturnType<typeof useFindRecommendedChannelsSuspenseQuery>;
export type FindRecommendedChannelsQueryResult = ApolloReactCommon.QueryResult<FindRecommendedChannelsQuery, FindRecommendedChannelsQueryVariables>;
export const FindSponsorsByChannelDocument = gql`
    query FindSponsorsByChannel($channelId: String!) {
  findSponsorsByChannel(channelId: $channelId) {
    user {
      id
      username
      avatar
    }
  }
}
    `;

/**
 * __useFindSponsorsByChannelQuery__
 *
 * To run a query within a React component, call `useFindSponsorsByChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSponsorsByChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSponsorsByChannelQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useFindSponsorsByChannelQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables> & ({ variables: FindSponsorsByChannelQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>(FindSponsorsByChannelDocument, options);
      }
export function useFindSponsorsByChannelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>(FindSponsorsByChannelDocument, options);
        }
// @ts-ignore
export function useFindSponsorsByChannelSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>;
export function useFindSponsorsByChannelSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindSponsorsByChannelQuery | undefined, FindSponsorsByChannelQueryVariables>;
export function useFindSponsorsByChannelSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>(FindSponsorsByChannelDocument, options);
        }
export type FindSponsorsByChannelQueryHookResult = ReturnType<typeof useFindSponsorsByChannelQuery>;
export type FindSponsorsByChannelLazyQueryHookResult = ReturnType<typeof useFindSponsorsByChannelLazyQuery>;
export type FindSponsorsByChannelSuspenseQueryHookResult = ReturnType<typeof useFindSponsorsByChannelSuspenseQuery>;
export type FindSponsorsByChannelQueryResult = ApolloReactCommon.QueryResult<FindSponsorsByChannelQuery, FindSponsorsByChannelQueryVariables>;
export const FindChatMessagesByStreamDocument = gql`
    query FindChatMessagesByStream($streamId: String!) {
  findChatMessagesByStream(streamId: $streamId) {
    createdAt
    text
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useFindChatMessagesByStreamQuery__
 *
 * To run a query within a React component, call `useFindChatMessagesByStreamQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindChatMessagesByStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindChatMessagesByStreamQuery({
 *   variables: {
 *      streamId: // value for 'streamId'
 *   },
 * });
 */
export function useFindChatMessagesByStreamQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables> & ({ variables: FindChatMessagesByStreamQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>(FindChatMessagesByStreamDocument, options);
      }
export function useFindChatMessagesByStreamLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>(FindChatMessagesByStreamDocument, options);
        }
// @ts-ignore
export function useFindChatMessagesByStreamSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>;
export function useFindChatMessagesByStreamSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindChatMessagesByStreamQuery | undefined, FindChatMessagesByStreamQueryVariables>;
export function useFindChatMessagesByStreamSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>(FindChatMessagesByStreamDocument, options);
        }
export type FindChatMessagesByStreamQueryHookResult = ReturnType<typeof useFindChatMessagesByStreamQuery>;
export type FindChatMessagesByStreamLazyQueryHookResult = ReturnType<typeof useFindChatMessagesByStreamLazyQuery>;
export type FindChatMessagesByStreamSuspenseQueryHookResult = ReturnType<typeof useFindChatMessagesByStreamSuspenseQuery>;
export type FindChatMessagesByStreamQueryResult = ApolloReactCommon.QueryResult<FindChatMessagesByStreamQuery, FindChatMessagesByStreamQueryVariables>;
export const FindMyFollowersDocument = gql`
    query FindMyFollowers {
  findMyFollowers {
    createdAt
    follower {
      username
      avatar
      isVerified
    }
  }
}
    `;

/**
 * __useFindMyFollowersQuery__
 *
 * To run a query within a React component, call `useFindMyFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyFollowersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMyFollowersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindMyFollowersQuery, FindMyFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindMyFollowersQuery, FindMyFollowersQueryVariables>(FindMyFollowersDocument, options);
      }
export function useFindMyFollowersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindMyFollowersQuery, FindMyFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindMyFollowersQuery, FindMyFollowersQueryVariables>(FindMyFollowersDocument, options);
        }
// @ts-ignore
export function useFindMyFollowersSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindMyFollowersQuery, FindMyFollowersQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindMyFollowersQuery, FindMyFollowersQueryVariables>;
export function useFindMyFollowersSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindMyFollowersQuery, FindMyFollowersQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindMyFollowersQuery | undefined, FindMyFollowersQueryVariables>;
export function useFindMyFollowersSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindMyFollowersQuery, FindMyFollowersQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindMyFollowersQuery, FindMyFollowersQueryVariables>(FindMyFollowersDocument, options);
        }
export type FindMyFollowersQueryHookResult = ReturnType<typeof useFindMyFollowersQuery>;
export type FindMyFollowersLazyQueryHookResult = ReturnType<typeof useFindMyFollowersLazyQuery>;
export type FindMyFollowersSuspenseQueryHookResult = ReturnType<typeof useFindMyFollowersSuspenseQuery>;
export type FindMyFollowersQueryResult = ApolloReactCommon.QueryResult<FindMyFollowersQuery, FindMyFollowersQueryVariables>;
export const FindMyFollowingsDocument = gql`
    query FindMyFollowings {
  findMyFollowings {
    createdAt
    followingId
  }
}
    `;

/**
 * __useFindMyFollowingsQuery__
 *
 * To run a query within a React component, call `useFindMyFollowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyFollowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyFollowingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindMyFollowingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>(FindMyFollowingsDocument, options);
      }
export function useFindMyFollowingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>(FindMyFollowingsDocument, options);
        }
// @ts-ignore
export function useFindMyFollowingsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>;
export function useFindMyFollowingsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindMyFollowingsQuery | undefined, FindMyFollowingsQueryVariables>;
export function useFindMyFollowingsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>(FindMyFollowingsDocument, options);
        }
export type FindMyFollowingsQueryHookResult = ReturnType<typeof useFindMyFollowingsQuery>;
export type FindMyFollowingsLazyQueryHookResult = ReturnType<typeof useFindMyFollowingsLazyQuery>;
export type FindMyFollowingsSuspenseQueryHookResult = ReturnType<typeof useFindMyFollowingsSuspenseQuery>;
export type FindMyFollowingsQueryResult = ApolloReactCommon.QueryResult<FindMyFollowingsQuery, FindMyFollowingsQueryVariables>;
export const FindAllStreamsDocument = gql`
    query FindAllStreams($filters: FiltersInput!) {
  findAllStreams(filters: $filters) {
    title
    thumbnailUrl
    isLive
    user {
      username
      avatar
      isVerified
    }
    category {
      title
      slug
    }
  }
}
    `;

/**
 * __useFindAllStreamsQuery__
 *
 * To run a query within a React component, call `useFindAllStreamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllStreamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllStreamsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useFindAllStreamsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindAllStreamsQuery, FindAllStreamsQueryVariables> & ({ variables: FindAllStreamsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindAllStreamsQuery, FindAllStreamsQueryVariables>(FindAllStreamsDocument, options);
      }
export function useFindAllStreamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindAllStreamsQuery, FindAllStreamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindAllStreamsQuery, FindAllStreamsQueryVariables>(FindAllStreamsDocument, options);
        }
// @ts-ignore
export function useFindAllStreamsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindAllStreamsQuery, FindAllStreamsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindAllStreamsQuery, FindAllStreamsQueryVariables>;
export function useFindAllStreamsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindAllStreamsQuery, FindAllStreamsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindAllStreamsQuery | undefined, FindAllStreamsQueryVariables>;
export function useFindAllStreamsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindAllStreamsQuery, FindAllStreamsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindAllStreamsQuery, FindAllStreamsQueryVariables>(FindAllStreamsDocument, options);
        }
export type FindAllStreamsQueryHookResult = ReturnType<typeof useFindAllStreamsQuery>;
export type FindAllStreamsLazyQueryHookResult = ReturnType<typeof useFindAllStreamsLazyQuery>;
export type FindAllStreamsSuspenseQueryHookResult = ReturnType<typeof useFindAllStreamsSuspenseQuery>;
export type FindAllStreamsQueryResult = ApolloReactCommon.QueryResult<FindAllStreamsQuery, FindAllStreamsQueryVariables>;
export const FindRandomStreamsDocument = gql`
    query FindRandomStreams {
  findRandomStreams {
    title
    thumbnailUrl
    isLive
    user {
      username
      avatar
      isVerified
    }
    category {
      title
      slug
    }
  }
}
    `;

/**
 * __useFindRandomStreamsQuery__
 *
 * To run a query within a React component, call `useFindRandomStreamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRandomStreamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRandomStreamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindRandomStreamsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>(FindRandomStreamsDocument, options);
      }
export function useFindRandomStreamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>(FindRandomStreamsDocument, options);
        }
// @ts-ignore
export function useFindRandomStreamsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>;
export function useFindRandomStreamsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindRandomStreamsQuery | undefined, FindRandomStreamsQueryVariables>;
export function useFindRandomStreamsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>(FindRandomStreamsDocument, options);
        }
export type FindRandomStreamsQueryHookResult = ReturnType<typeof useFindRandomStreamsQuery>;
export type FindRandomStreamsLazyQueryHookResult = ReturnType<typeof useFindRandomStreamsLazyQuery>;
export type FindRandomStreamsSuspenseQueryHookResult = ReturnType<typeof useFindRandomStreamsSuspenseQuery>;
export type FindRandomStreamsQueryResult = ApolloReactCommon.QueryResult<FindRandomStreamsQuery, FindRandomStreamsQueryVariables>;
export const FindCurrentSessionDocument = gql`
    query FindCurrentSession {
  findCurrentSession {
    id
    createdAt
    metadata {
      location {
        country
        city
        latidute
        longitude
      }
      device {
        browser
        os
      }
      ip
    }
  }
}
    `;

/**
 * __useFindCurrentSessionQuery__
 *
 * To run a query within a React component, call `useFindCurrentSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCurrentSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCurrentSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindCurrentSessionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
      }
export function useFindCurrentSessionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
// @ts-ignore
export function useFindCurrentSessionSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>;
export function useFindCurrentSessionSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindCurrentSessionQuery | undefined, FindCurrentSessionQueryVariables>;
export function useFindCurrentSessionSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export type FindCurrentSessionQueryHookResult = ReturnType<typeof useFindCurrentSessionQuery>;
export type FindCurrentSessionLazyQueryHookResult = ReturnType<typeof useFindCurrentSessionLazyQuery>;
export type FindCurrentSessionSuspenseQueryHookResult = ReturnType<typeof useFindCurrentSessionSuspenseQuery>;
export type FindCurrentSessionQueryResult = ApolloReactCommon.QueryResult<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>;
export const FindNotificationsByUserDocument = gql`
    query FindNotificationsByUser {
  findNotificationsByUser {
    id
    message
    type
  }
}
    `;

/**
 * __useFindNotificationsByUserQuery__
 *
 * To run a query within a React component, call `useFindNotificationsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindNotificationsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindNotificationsByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindNotificationsByUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>(FindNotificationsByUserDocument, options);
      }
export function useFindNotificationsByUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>(FindNotificationsByUserDocument, options);
        }
// @ts-ignore
export function useFindNotificationsByUserSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>;
export function useFindNotificationsByUserSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindNotificationsByUserQuery | undefined, FindNotificationsByUserQueryVariables>;
export function useFindNotificationsByUserSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>(FindNotificationsByUserDocument, options);
        }
export type FindNotificationsByUserQueryHookResult = ReturnType<typeof useFindNotificationsByUserQuery>;
export type FindNotificationsByUserLazyQueryHookResult = ReturnType<typeof useFindNotificationsByUserLazyQuery>;
export type FindNotificationsByUserSuspenseQueryHookResult = ReturnType<typeof useFindNotificationsByUserSuspenseQuery>;
export type FindNotificationsByUserQueryResult = ApolloReactCommon.QueryResult<FindNotificationsByUserQuery, FindNotificationsByUserQueryVariables>;
export const FindNotificationsUnreadCountDocument = gql`
    query FindNotificationsUnreadCount {
  findNotificationsUnreadCount
}
    `;

/**
 * __useFindNotificationsUnreadCountQuery__
 *
 * To run a query within a React component, call `useFindNotificationsUnreadCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindNotificationsUnreadCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindNotificationsUnreadCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindNotificationsUnreadCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindNotificationsUnreadCountQuery, FindNotificationsUnreadCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindNotificationsUnreadCountQuery, FindNotificationsUnreadCountQueryVariables>(FindNotificationsUnreadCountDocument, options);
      }
export function useFindNotificationsUnreadCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindNotificationsUnreadCountQuery, FindNotificationsUnreadCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindNotificationsUnreadCountQuery, FindNotificationsUnreadCountQueryVariables>(FindNotificationsUnreadCountDocument, options);
        }
// @ts-ignore
export function useFindNotificationsUnreadCountSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindNotificationsUnreadCountQuery, FindNotificationsUnreadCountQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindNotificationsUnreadCountQuery, FindNotificationsUnreadCountQueryVariables>;
export function useFindNotificationsUnreadCountSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindNotificationsUnreadCountQuery, FindNotificationsUnreadCountQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindNotificationsUnreadCountQuery | undefined, FindNotificationsUnreadCountQueryVariables>;
export function useFindNotificationsUnreadCountSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindNotificationsUnreadCountQuery, FindNotificationsUnreadCountQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindNotificationsUnreadCountQuery, FindNotificationsUnreadCountQueryVariables>(FindNotificationsUnreadCountDocument, options);
        }
export type FindNotificationsUnreadCountQueryHookResult = ReturnType<typeof useFindNotificationsUnreadCountQuery>;
export type FindNotificationsUnreadCountLazyQueryHookResult = ReturnType<typeof useFindNotificationsUnreadCountLazyQuery>;
export type FindNotificationsUnreadCountSuspenseQueryHookResult = ReturnType<typeof useFindNotificationsUnreadCountSuspenseQuery>;
export type FindNotificationsUnreadCountQueryResult = ApolloReactCommon.QueryResult<FindNotificationsUnreadCountQuery, FindNotificationsUnreadCountQueryVariables>;
export const FindProfileDocument = gql`
    query FindProfile {
  findProfile {
    id
    username
    displayName
    email
    avatar
    bio
    isVerified
    isTotpEnabled
    notificationSettings {
      siteNotifications
      telegramNotifications
    }
    stream {
      serverUrl
      streamKey
      isChatEnabled
      isChatFollowersOnly
      isChatPremiumFollowersOnly
    }
  }
}
    `;

/**
 * __useFindProfileQuery__
 *
 * To run a query within a React component, call `useFindProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
      }
export function useFindProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
// @ts-ignore
export function useFindProfileSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindProfileQuery, FindProfileQueryVariables>;
export function useFindProfileSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindProfileQuery | undefined, FindProfileQueryVariables>;
export function useFindProfileSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export type FindProfileQueryHookResult = ReturnType<typeof useFindProfileQuery>;
export type FindProfileLazyQueryHookResult = ReturnType<typeof useFindProfileLazyQuery>;
export type FindProfileSuspenseQueryHookResult = ReturnType<typeof useFindProfileSuspenseQuery>;
export type FindProfileQueryResult = ApolloReactCommon.QueryResult<FindProfileQuery, FindProfileQueryVariables>;
export const FindSessionsByUserDocument = gql`
    query FindSessionsByUser {
  findSessionsByUser {
    id
    createdAt
    metadata {
      location {
        country
        city
        latidute
        longitude
      }
      device {
        browser
        os
      }
      ip
    }
  }
}
    `;

/**
 * __useFindSessionsByUserQuery__
 *
 * To run a query within a React component, call `useFindSessionsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSessionsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSessionsByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindSessionsByUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>(FindSessionsByUserDocument, options);
      }
export function useFindSessionsByUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>(FindSessionsByUserDocument, options);
        }
// @ts-ignore
export function useFindSessionsByUserSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>;
export function useFindSessionsByUserSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindSessionsByUserQuery | undefined, FindSessionsByUserQueryVariables>;
export function useFindSessionsByUserSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>(FindSessionsByUserDocument, options);
        }
export type FindSessionsByUserQueryHookResult = ReturnType<typeof useFindSessionsByUserQuery>;
export type FindSessionsByUserLazyQueryHookResult = ReturnType<typeof useFindSessionsByUserLazyQuery>;
export type FindSessionsByUserSuspenseQueryHookResult = ReturnType<typeof useFindSessionsByUserSuspenseQuery>;
export type FindSessionsByUserQueryResult = ApolloReactCommon.QueryResult<FindSessionsByUserQuery, FindSessionsByUserQueryVariables>;
export const FindSocialLinksDocument = gql`
    query FindSocialLinks {
  findSocialLinks {
    id
    title
    url
    position
  }
}
    `;

/**
 * __useFindSocialLinksQuery__
 *
 * To run a query within a React component, call `useFindSocialLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSocialLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSocialLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindSocialLinksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindSocialLinksQuery, FindSocialLinksQueryVariables>(FindSocialLinksDocument, options);
      }
export function useFindSocialLinksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindSocialLinksQuery, FindSocialLinksQueryVariables>(FindSocialLinksDocument, options);
        }
// @ts-ignore
export function useFindSocialLinksSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindSocialLinksQuery, FindSocialLinksQueryVariables>;
export function useFindSocialLinksSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<FindSocialLinksQuery | undefined, FindSocialLinksQueryVariables>;
export function useFindSocialLinksSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindSocialLinksQuery, FindSocialLinksQueryVariables>(FindSocialLinksDocument, options);
        }
export type FindSocialLinksQueryHookResult = ReturnType<typeof useFindSocialLinksQuery>;
export type FindSocialLinksLazyQueryHookResult = ReturnType<typeof useFindSocialLinksLazyQuery>;
export type FindSocialLinksSuspenseQueryHookResult = ReturnType<typeof useFindSocialLinksSuspenseQuery>;
export type FindSocialLinksQueryResult = ApolloReactCommon.QueryResult<FindSocialLinksQuery, FindSocialLinksQueryVariables>;
export const GenerateTotpSecretDocument = gql`
    query GenerateTotpSecret {
  generateTotpSecret {
    qrcodeUrl
    secret
  }
}
    `;

/**
 * __useGenerateTotpSecretQuery__
 *
 * To run a query within a React component, call `useGenerateTotpSecretQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateTotpSecretQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateTotpSecretQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateTotpSecretQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
      }
export function useGenerateTotpSecretLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
        }
// @ts-ignore
export function useGenerateTotpSecretSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>;
export function useGenerateTotpSecretSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GenerateTotpSecretQuery | undefined, GenerateTotpSecretQueryVariables>;
export function useGenerateTotpSecretSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
        }
export type GenerateTotpSecretQueryHookResult = ReturnType<typeof useGenerateTotpSecretQuery>;
export type GenerateTotpSecretLazyQueryHookResult = ReturnType<typeof useGenerateTotpSecretLazyQuery>;
export type GenerateTotpSecretSuspenseQueryHookResult = ReturnType<typeof useGenerateTotpSecretSuspenseQuery>;
export type GenerateTotpSecretQueryResult = ApolloReactCommon.QueryResult<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>;
export const ChatMessageAddedDocument = gql`
    subscription ChatMessageAdded($streamId: String!) {
  chatMessageAdded(streamId: $streamId) {
    createdAt
    text
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useChatMessageAddedSubscription__
 *
 * To run a query within a React component, call `useChatMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessageAddedSubscription({
 *   variables: {
 *      streamId: // value for 'streamId'
 *   },
 * });
 */
export function useChatMessageAddedSubscription(baseOptions: ApolloReactHooks.SubscriptionHookOptions<ChatMessageAddedSubscription, ChatMessageAddedSubscriptionVariables> & ({ variables: ChatMessageAddedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<ChatMessageAddedSubscription, ChatMessageAddedSubscriptionVariables>(ChatMessageAddedDocument, options);
      }
export type ChatMessageAddedSubscriptionHookResult = ReturnType<typeof useChatMessageAddedSubscription>;
export type ChatMessageAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<ChatMessageAddedSubscription>;