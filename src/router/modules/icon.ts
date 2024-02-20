import { RouteRecordRaw } from "vue-router";
import { Layout } from "../constant";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: Layout,
    meta: {
      title: "图标",
      sort: 2,
      key: "icon",
      requiresAuth: false,
    },
    redirect: "/icon",
    children: [
      {
        path: "/icon",
        name: "icon",
        component: () => import("@/views/icon/index.vue"),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          title: "图标",
          key: "icon",
          icon: "fa-solid fa-house",
        },
      },
    ],
  },
];

export default routes;
