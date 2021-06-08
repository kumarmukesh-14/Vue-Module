const Module = () => import("./Module.vue")
// const Home = () => import("./views/Home.vue")

//const moduleRoute = {
  //  path: "/my-order",
   // component: Module,
    // beforeEnter: (to, from, next) => {
    //  console.log('Some logic')
    // },
    // children: [
    //     {
    //         path: "/",
    //         component: Home
    //     }
    // ]
//}

// export default router => {
//     router.addRoute([moduleRoute])
// }

export default [
    {
      path: '/my-order',
     // name: 'people',
      component: Module,
   //   title: 'People',
     // redirect: { name: 'people-welcome' },
      children: [],
    },
  ];