import { DefaultState } from '../common/common-types';
import { UserResult, UsersListResult } from './users-api';

export const LOAD_USERS = 'USERS/LOAD';
export type LOAD_USERS = typeof LOAD_USERS;
export const LOAD_USERS_SUCCESS = 'USERS/LOAD_SUCCESS';
export type LOAD_USERS_SUCCESS = typeof LOAD_USERS_SUCCESS;
export const LOAD_USERS_ERROR = 'USERS/LOAD_ERROR';
export type LOAD_USERS_ERROR = typeof LOAD_USERS_ERROR;

export const LOAD_USER = 'USER/LOAD';
export type LOAD_USER = typeof LOAD_USER;
export const LOAD_USER_SUCCESS = 'USER/LOAD_SUCCESS';
export type LOAD_USER_SUCCESS = typeof LOAD_USER_SUCCESS;
export const LOAD_USER_ERROR = 'USER/LOAD_ERROR';
export type LOAD_USER_ERROR = typeof LOAD_USER_ERROR;

export type ContributionDay = {
    contributionCount: number;
    date: string;
};
export type ContributionWeek = {
    firstDay: string;
    contributionDays: ContributionDay[];
};

export type ContributionCalendar = {
    totalContributions: number;
    weeks: ContributionWeek[];
};

export type ContributionsCollection = {
    startedAt: Date;
    endedAt: Date;
    totalCommitContributions: number;
    totalRepositoryContributions: number;
    contributionCalendar: ContributionCalendar;
};

export type User = {
    id: string;
    bio: string;
    avatarUrl: string;
    email: string;
    name: string;
    login: string;
    contributionsCollection?: ContributionsCollection;
};

type UsersListOwnState = {
    login?: string;
};
export type UsersListState = DefaultState<UsersListResult> & UsersListOwnState;

export type UserState = DefaultState<UserResult>;
