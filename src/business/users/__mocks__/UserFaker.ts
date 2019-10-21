import faker from 'faker';
import { User } from '../../../business/users/users-types';
import { Edge } from '../../common/common-types';
import { UsersListResult } from '../users-api';

export const fakeUser = (defaults: Partial<User> = {}): User => {
    const fake: User = {
        id: faker.random.alphaNumeric(5),
        login: faker.internet.userName(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        bio: faker.random.alphaNumeric(),
        avatarUrl: faker.image.imageUrl(),
    };

    return { ...fake, ...defaults };
};

export const fakeUsersList = (size = 5): User[] => {
    const users = [];
    for (let i = 0; i < size; i++) {
        users.push(fakeUser());
    }
    return users;
};

export const fakeUsersListResult = (size = 5): UsersListResult => {
    const res: UsersListResult = {
        search: {
            edges: [],
            userCount: size,
            pageInfo: {
                endCursor: `${size}`,
                hasNextPage: true,
                hasPreviousPage: false,
                startCursor: '1',
            },
        },
    };
    if (res.search) {
        for (let i = 0; i < size; i++) {
            const edge: Edge<User> = {
                node: fakeUser(),
                cursor: '1',
            };
            res.search.edges.push(edge);
        }
    }

    return res;
};
