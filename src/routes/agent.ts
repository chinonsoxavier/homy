export const agentRoutes = [
  {
    path: "/agent",
    name: "agent",
    redirect: "/agent/dashboard",
    component:()=>import("../views/agent/AgentMainView.vue"),
    children: [
      {
        path: "/agent/dashboard",
        name: "agent-dashboard",
        component: () =>
          import("../views/agent/dashboard/DashboardMainView.vue"),
      },
      {
        path: "/agent/property",
        name: "agent-property",
        component: () => import("../views/agent/property/PropertyMainView.vue"),
      },
      {
        path: "/agent/customers",
        name: "agent-customers",
        component: () =>
          import(".././views/agent/customers/CustomersMainView.vue"),
      },
      {
        path: "/agent/reviews",
        name: "agent-reviews",
        component: () => import(".././views/agent/reviews/ReviewsMainView.vue"),
      },
      {
        path: "/agent/inbox",
        name: "agent-inbox",
        component: () =>
          import(".././views/agent/inbox/InboxMainView.vue"),
      },
      {
        path: "/agent/orders",
        name: "agent-orders",
        component: () =>
          import(".././views/agent/orders/OrdersMainView.vue"),
      },
    ],
  },
];
