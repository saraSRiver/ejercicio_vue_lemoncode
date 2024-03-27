import {Member} from '../types/Member';
import SearchCorp from "./SearchCorp.vue";
import { Corporation } from '../types/Corporation';
import { ref } from 'vue';

export const memberService = {
  async get(corps: string) {
    const members = await fetch(`https://api.github.com/orgs/${corps}/members`).then(response => response.json());
    return members as unknown as Member[];
  },
};