const Module = () => import("./Module.vue")
// const Home = () => import("./views/Home.vue")

const moduleRoute = {
    path: "/subscription",
    component: Module,
    // beforeEnter: (to, from, next) => {
    //  console.log('Some logic')
    // },
    // children: [
    //     {
    //         path: "/",
    //         component: Home
    //     }
    // ]
}

export default router => {
    router.addRoute([moduleRoute])
}
