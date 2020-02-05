import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
// export const constantRoutes1 = [{
//     path: '/redirect',
//     component: Layout,
//     hidden: true,
//     children: [{
//       path: '/redirect/:path*',
//       component: () => import('@/views/redirect/index')
//     }]
//   },
//   {
//     path: '/login',
//     component: () => import('@/views/login/index'),
//     hidden: true
//   },
//   {
//     path: '/auth-redirect',
//     component: () => import('@/views/login/auth-redirect'),
//     hidden: true
//   },
//   {
//     path: '/404',
//     component: () => import('@/views/error-page/404'),
//     hidden: true
//   },
//   {
//     path: '/401',
//     component: () => import('@/views/error-page/401'),
//     hidden: true
//   },
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [{
//       path: 'dashboard',
//       component: () => import('@/views/dashboard/index'),
//       name: 'Dashboard',
//       meta: {
//         title: 'Dashboard',
//         icon: 'dashboard',
//         affix: true
//       }
//     }]
//   },
//   {
//     path: '/documentation',
//     component: Layout,
//     children: [{
//       path: 'index',
//       component: () => import('@/views/documentation/index'),
//       name: 'Documentation',
//       meta: {
//         title: 'Documentation',
//         icon: 'documentation',
//         affix: true
//       }
//     }]
//   },
//   {
//     path: '/guide',
//     component: Layout,
//     redirect: '/guide/index',
//     children: [{
//       path: 'index',
//       component: () => import('@/views/guide/index'),
//       name: 'Guide',
//       meta: {
//         title: 'Guide',
//         icon: 'guide',
//         noCache: true
//       }
//     }]
//   },
//   {
//     path: '/profile',
//     component: Layout,
//     redirect: '/profile/index',
//     hidden: true,
//     children: [{
//       path: 'index',
//       component: () => import('@/views/profile/index'),
//       name: 'Profile',
//       meta: {
//         title: 'Profile',
//         icon: 'user',
//         noCache: true
//       }
//     }]
//   }
// ]

// /**
//  * asyncRoutes
//  * the routes that need to be dynamically loaded based on user roles
//  */
// export const asyncRoutes1 = [{
//     path: '/permission',
//     component: Layout,
//     redirect: '/permission/page',
//     alwaysShow: true, // will always show the root menu
//     name: 'Permission',
//     meta: {
//       title: 'Permission',
//       icon: 'lock',
//       roles: ['admin', 'editor'] // you can set roles in root nav
//     },
//     children: [{
//         path: 'page',
//         component: () => import('@/views/permission/page'),
//         name: 'PagePermission',
//         meta: {
//           title: 'Page Permission',
//           roles: ['admin'] // or you can only set roles in sub nav
//         }
//       },
//       {
//         path: 'directive',
//         component: () => import('@/views/permission/directive'),
//         name: 'DirectivePermission',
//         meta: {
//           title: 'Directive Permission'
//           // if do not set roles, means: this page does not require permission
//         }
//       },
//       {
//         path: 'role',
//         component: () => import('@/views/permission/role'),
//         name: 'RolePermission',
//         meta: {
//           title: 'Role Permission',
//           roles: ['admin']
//         }
//       }
//     ]
//   },

//   {
//     path: '/icon',
//     component: Layout,
//     children: [{
//       path: 'index',
//       component: () => import('@/views/icons/index'),
//       name: 'Icons',
//       meta: {
//         title: 'Icons',
//         icon: 'icon',
//         noCache: true
//       }
//     }]
//   },

//   /** when your routing map is too long, you can split it into small modules **/
//   componentsRouter,
//   chartsRouter,
//   nestedRouter,
//   tableRouter,

//   {
//     path: '/example',
//     component: Layout,
//     redirect: '/example/list',
//     name: 'Example',
//     meta: {
//       title: 'Example',
//       icon: 'example'
//     },
//     children: [{
//         path: 'create',
//         component: () => import('@/views/example/create'),
//         name: 'CreateArticle',
//         meta: {
//           title: 'Create Article',
//           icon: 'edit'
//         }
//       },
//       {
//         path: 'edit/:id(\\d+)',
//         component: () => import('@/views/example/edit'),
//         name: 'EditArticle',
//         meta: {
//           title: 'Edit Article',
//           noCache: true,
//           activeMenu: '/example/list'
//         },
//         hidden: true
//       },
//       {
//         path: 'list',
//         component: () => import('@/views/example/list'),
//         name: 'ArticleList',
//         meta: {
//           title: 'Article List',
//           icon: 'list'
//         }
//       }
//     ]
//   },

//   {
//     path: '/tab',
//     component: Layout,
//     children: [{
//       path: 'index',
//       component: () => import('@/views/tab/index'),
//       name: 'Tab',
//       meta: {
//         title: 'Tab',
//         icon: 'tab'
//       }
//     }]
//   },

//   {
//     path: '/error',
//     component: Layout,
//     redirect: 'noRedirect',
//     name: 'ErrorPages',
//     meta: {
//       title: 'Error Pages',
//       icon: '404'
//     },
//     children: [{
//         path: '401',
//         component: () => import('@/views/error-page/401'),
//         name: 'Page401',
//         meta: {
//           title: '401',
//           noCache: true
//         }
//       },
//       {
//         path: '404',
//         component: () => import('@/views/error-page/404'),
//         name: 'Page404',
//         meta: {
//           title: '404',
//           noCache: true
//         }
//       }
//     ]
//   },

//   {
//     path: '/error-log',
//     component: Layout,
//     children: [{
//       path: 'log',
//       component: () => import('@/views/error-log/index'),
//       name: 'ErrorLog',
//       meta: {
//         title: 'Error Log',
//         icon: 'bug'
//       }
//     }]
//   },

//   {
//     path: '/excel',
//     component: Layout,
//     redirect: '/excel/export-excel',
//     name: 'Excel',
//     meta: {
//       title: 'Excel',
//       icon: 'excel'
//     },
//     children: [{
//         path: 'export-excel',
//         component: () => import('@/views/excel/export-excel'),
//         name: 'ExportExcel',
//         meta: {
//           title: 'Export Excel'
//         }
//       },
//       {
//         path: 'export-selected-excel',
//         component: () => import('@/views/excel/select-excel'),
//         name: 'SelectExcel',
//         meta: {
//           title: 'Export Selected'
//         }
//       },
//       {
//         path: 'export-merge-header',
//         component: () => import('@/views/excel/merge-header'),
//         name: 'MergeHeader',
//         meta: {
//           title: 'Merge Header'
//         }
//       },
//       {
//         path: 'upload-excel',
//         component: () => import('@/views/excel/upload-excel'),
//         name: 'UploadExcel',
//         meta: {
//           title: 'Upload Excel'
//         }
//       }
//     ]
//   },

//   {
//     path: '/zip',
//     component: Layout,
//     redirect: '/zip/download',
//     alwaysShow: true,
//     name: 'Zip',
//     meta: {
//       title: 'Zip',
//       icon: 'zip'
//     },
//     children: [{
//       path: 'download',
//       component: () => import('@/views/zip/index'),
//       name: 'ExportZip',
//       meta: {
//         title: 'Export Zip'
//       }
//     }]
//   },

//   {
//     path: '/pdf',
//     component: Layout,
//     redirect: '/pdf/index',
//     children: [{
//       path: 'index',
//       component: () => import('@/views/pdf/index'),
//       name: 'PDF',
//       meta: {
//         title: 'PDF',
//         icon: 'pdf'
//       }
//     }]
//   },
//   {
//     path: '/pdf/download',
//     component: () => import('@/views/pdf/download'),
//     hidden: true
//   },

//   {
//     path: '/theme',
//     component: Layout,
//     children: [{
//       path: 'index',
//       component: () => import('@/views/theme/index'),
//       name: 'Theme',
//       meta: {
//         title: 'Theme',
//         icon: 'theme'
//       }
//     }]
//   },

//   {
//     path: '/clipboard',
//     component: Layout,
//     children: [{
//       path: 'index',
//       component: () => import('@/views/clipboard/index'),
//       name: 'ClipboardDemo',
//       meta: {
//         title: 'Clipboard',
//         icon: 'clipboard'
//       }
//     }]
//   },

//   {
//     path: 'external-link',
//     component: Layout,
//     children: [{
//       path: 'https://github.com/PanJiaChen/vue-element-admin',
//       meta: {
//         title: 'External Link',
//         icon: 'link'
//       }
//     }]
//   },

//   // 404 page must be placed at the end !!!
//   {
//     path: '*',
//     redirect: '/404',
//     hidden: true
//   }
// ]



export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/house/dashboard/index'),
      meta: {
        title: '首页展示',
        icon: 'dashboard'
      }
    }]
  }

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]


export const asyncRoutes = [

  {
    path: '/user',
    component: Layout,
    redirect: '/user', //重定向地址，在面包屑中点击会重定向去的地址
    alwaysShow: true, //一直显示根路由
    name: 'user',
    meta: {
      title: '用户管理',
      icon: 'user',
      roles: ['admin', 'yechrom']
    }, //你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限
    children: [{
        path: 'show',
        component: () => import('@/views/house/usershow/index'),
        name: 'show-user',
        meta: {
          title: '查看用户信息',

          roles: ['admin', 'yechrom']
        }
      },
      {
        path: 'add',
        component: () => import('@/views/house/useradd/index'),
        name: 'show-add',
        meta: {
          title: '增加新用户',

          roles: ['admin', 'yechrom']
        }
      }
    ]
  },

  {
    path: '/house',
    component: Layout,
    redirect: '/house',
    alwaysShow: true,
    name: 'house',
    meta: {
      title: '房源查看',
      icon: 'search',
      roles: ['user', 'seller', 'yechrom']
    },
    children: [{
        path: 'showsell',
        component: () => import('@/views/house/houseshow/sell/index'),
        name: 'show-sell',
        meta: {
          title: '在租房源',

          roles: ['user', 'seller', 'yechrom']
        }
      },
      {
        path: 'showbuy',
        component: () => import('@/views/house/houseshow/buy/index'),
        name: 'show-buy',
        meta: {
          title: '求租房源',

          roles: ['user', 'seller', 'yechrom']
        }
      }
    ]
  },

  {
    path: '/order',
    component: Layout,
    redirect: '/order',
    alwaysShow: true,
    name: 'order',
    meta: {
      title: '发布订单',
      icon: 'table',
      roles: ['user', 'seller', 'yechrom']
    },
    children: [{
        path: 'orderseller',
        component: () => import('@/views/house/addhouse/seller/index'),
        name: 'order-seller',
        meta: {
          title: '我是房东',

          roles: ['seller', 'yechrom']
        }
      },
      {
        path: 'ordersbuy',
        component: () => import('@/views/house/addhouse/user/index'),
        name: 'order-buy',
        meta: {
          title: '我是顾客',

          roles: ['user', 'yechrom']
        }
      }
    ]
  },

  {
    path: '/after',
    component: Layout,
    redirect: '/after',
    alwaysShow: true,
    name: 'after',
    meta: {
      title: '售后服务',
      icon: 'bug',
      roles: ['user', 'yechrom']
    },
    children: [{
      path: 'addafterorder',
      component: () => import('@/views/house/afterorder/addorder/index'),
      name: 'after-add',
      meta: {
        title: '提交售后单',

        roles: ['user', 'yechrom']
      }
    }]
  },

  {
    path: '/me',
    component: Layout,
    redirect: '/me',
    alwaysShow: true,
    name: 'me',
    meta: {
      title: '我的',
      icon: 'qq',
      roles: ['user', 'seller', 'admin', 'yechrom']
    },
    children: [{
        path: 'buy',
        component: () => import('@/views/house/me/buy/index'),
        name: 'my-buy',
        meta: {
          title: '我发布的-buy',

          roles: ['user', 'yechrom']
        }
      },
      {
        path: 'sell',
        component: () => import('@/views/house/me/sell/index'),
        name: 'my-sell',
        meta: {
          title: '我发布的-sell',

          roles: ['seller', 'yechrom']
        }
      },
      {
        path: 'after',
        component: () => import('@/views/house/afterorder/showorder/index'),
        name: 'my-after',
        meta: {
          title: '售后单',

          roles: ['admin', 'yechrom']
        }
      }
    ]
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
