import faker from 'faker';
import { User } from '../../../business/users/users-types';

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
