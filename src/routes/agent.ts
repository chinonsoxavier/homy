import AgentMainView from "../views/agent/AgentMainView.vue";
import PropertyMainView from "../views/agent/property/PropertyMainView.vue";
export const agentRoutes = [
  {
    path: "/agent",
    name: "agent",
    meta: { requiresAuth: true },
    redirect: "/agent/dashboard",
    component: AgentMainView,
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
        component: PropertyMainView,
        meta: { requiresAuth: true },
        redirect: "/property/grid",
        children: [
          {
            path: "/agent/property/grid",
            name: "property-grid",
            component: () =>
              import(
                "../views/agent/property/sub-views/PropertyGridSubView.vue"
              ),
          },
          {
            path: "/agent/property/list",
            name: "property-list",
            component: () =>
              import(
                "../views/agent/property/sub-views/PropertyListSubView.vue"
              ),
          },
          {
            path: "/agent/property/details",
            name: "property-details",
            component: () =>
              import(
                "../views/agent/property/sub-views/PropertyDetailsSubView.vue"
              ),
          },
          {
            path: "/agent/property/edit",
            name: "property-edit",
            component: () =>
              import(
                "../views/agent/property/sub-views/PropertyEditSubView.vue"
              ),
          },
          {
            path: "/agent/property/create",
            name: "property-create",
            component: () =>
              import(
                "../views/agent/property/sub-views/PropertyCreateSubView.vue"
              ),
          },
        ],
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
        path: "/agent/orders",
        name: "agent-orders",
        component: () => import(".././views/agent/orders/OrdersMainView.vue"),
      },
      {
        path: "/agent/inbox",
        name: "agent-inbox",
        component: () => import(".././views/agent/inbox/InboxMainView.vue"),
      },
      {
        path: "/agent/profile",
        name: "agent-profile",
        component: () => import(".././views/agent/profile/ProfileMainView.vue"),
      },
    ],
  },
];
