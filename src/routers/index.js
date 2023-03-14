import {createWebHashHistory,createRouter} from "vue-router"
const routes = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        component: "Layout",
        children: [
            {
                component: "Index"
            }
        ]
    },
    {
        component: "login/Index"
    }
]

function generateRoutes(){
    buildRoutes(routes)
    return routes
}
let components = import.meta.glob("../views/**/*.vue")
function buildRoutes(arr){
    for(let i = 0; i< arr.length;i++){
        if(!arr[i].hasOwnProperty('component')) continue
        let path = buildPath(arr[i].component)
        arr[i].path = arr[i].path || "/"+path.toLowerCase()
        arr[i].name = arr[i].name || path.toLowerCase().replace(/\//g,"_")
        arr[i].component = components[`../views/${arr[i].component}.vue`]
        if(arr[i].children && arr[i].children.length > 0){
            buildRoutes(arr[i].children)
        }
    }
}

function buildPath(str){
    let index = str.lastIndexOf("/")
    let val = str.substring(index+1,str.length)
    if(val === "index"){
        return str.substring(index,-1)
    }
    return str
}


const router = createRouter({
    history: createWebHashHistory(),
    routes: generateRoutes()
})

export default router