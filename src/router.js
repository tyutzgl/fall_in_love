import Vue from 'vue'
import Router from 'vue-router'
import OurHome from "@/components/OurHome";
import AddressBook from "@/components/AddressBook";
import ArticleList from "@/components/ArticleList";

Vue.use(Router); //这句别忘记了
export default new Router({
  mode: 'history',  //使用history防止url中出现#
  routes: [
    {
      path: '/',
      name: 'OurHome',
      component: OurHome
    },
    {
      path: '/addressBook',
      name: 'addressBook',
      component: AddressBook
    },
    {
      path: '/articleList',
      name: 'addressBook',
      component: ArticleList
    }
  ]
})