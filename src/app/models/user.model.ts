import { Table } from "../decorators/table.decorator";

@Table<User>([
  {
    title: 'ردیف',
    valueFn: (_, index) => index + 1
  },
  {
    title: 'کاربر',
    valueFn: user => `${user.firstName} ${user.lastName}`,
    sortFn: (a: User, b: User) =>
      `${a.firstName} ${a.lastName}`.localeCompare(
        `${b.firstName} ${b.lastName}`,
      ),
  },
  {
    title: 'ادمین',
    component: `<app-icon [user]="context"></app-icon>`,
    filters: [
      { text: 'ادمین', value: true },
      { text: 'کاربر', value: false }
    ],
    filterFn: (value: boolean, user) => !!user.isAdmin === value
  }
])
export class User {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  avatar: string;
  password: string;
  isAdmin: boolean;
  verified: boolean;
  verificationCode: string;
  sex: UserSexes;
  salt: string;
}

export enum UserSexes {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
