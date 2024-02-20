import { RouteRecordRaw } from "vue-router";
import { Layout } from "../constant";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: Layout,
    meta: {
      title: "父级",
      sort: 1,
      key: "parent",
      requiresAuth: false,
    },
    redirect: "/children1",
    children: [
      {
        path: "/children1",
        name: "children1",
        meta: {
          keepAlive: true,
          requiresAuth: false,
          title: "子级1",
          key: "children1",
          icon: "fa-solid fa-house",
        },
        children: [
          {
            path: "/children11",
            name: "children11",
            component: () => import("@/views/index/index.vue"),
            meta: {
              keepAlive: true,
              requiresAuth: false,
              title: "子级1-1",
              key: "children11",
              icon: "fa-solid fa-house",
            },
          },
          {
            path: "/children12",
            name: "children12",
            component: () => import("@/views/index/index.vue"),
            meta: {
              keepAlive: true,
              requiresAuth: false,
              title: "子级1-2",
              key: "children12",
              icon: "fa-solid fa-house",
            },
          },
        ],
      },
      {
        path: "/children2",
        name: "children2",
        component: () => import("@/views/index/index.vue"),
        meta: {
          keepAlive: true,
          requiresAuth: false,
          title: "子级2",
          key: "children2",
          icon: "fa-solid fa-house",
        },
      },
    ],
  },
];

export default routes;
