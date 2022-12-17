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
    acquirements:() => site.pages.find(page => page.type == "home").children.find(child => child.type == "acquirements"),
    projects:() => site.pages.find(page => page.type == "home").children.find(child => child.type == "projects"),
    contact:() => site.pages.find(page => page.type == "home").children.find(child => child.type == "contact"),
    socialMedia:() => site.socialMedia,
    menu:() => site.menu,
    project(){
      return (proj) => site.projects.find(p => p.name == proj)
    }

  },
  actions: {
   async getData() {
      this.data = site;
    },
  },
})
