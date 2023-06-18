import {AuthNavProps, NavProps} from '../types';

export const authNav: AuthNavProps[] = [
  {
    position: 'first',
    type: 'register',
    text: 'Create your account',
  },

  {
    position: 'second',
    type: 'login',
    text: 'Login your account',
  },
];

export const homeNav: NavProps[] = [
  {position: 'first', type: 'get-started', text: 'Get started'},
  {position: 'second', type: 'prayer-tracker', text: 'My Prayer Tracker'},
];
