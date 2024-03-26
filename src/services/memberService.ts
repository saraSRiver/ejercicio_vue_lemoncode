import {Member} from '../types/Member';

export const memberService = {
    async get() {
      const members = await fetch('https://api.github.com/orgs/lemoncode/members').then((m) => m.json);
      return members as Member[];
    },
  };