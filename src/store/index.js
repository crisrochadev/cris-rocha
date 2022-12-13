import site from '@/model/site'
import { defineStore } from 'pinia'

export const useSite = defineStore('site', {
  state: () => ({ data: {}}),
  getters: {
    site: state => ({
      title:state.data.title,
      description:state.data.description
    }),
    hero:() => site.pages.find(page => page.type == "home").children.find(child => child.type == "hero"),
    about:() => site.pages.find(page => page.type == "home").children.find(child => child.type == "about"),
    socialMedia:() => site.socialMedia,
    menu:() => site.menu,

  },
  actions: {
   async getData() {
      this.data = site;
    },
  },
})
