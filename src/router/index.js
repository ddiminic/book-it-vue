import Vue from "vue";
import VueRouter from "vue-router";
import BookingMain from "../views/BookingMain.vue";
import BookingLogin from "../views/BookingLogin.vue";
import BookingSignup from "../views/BookingSignup.vue";
import ArrivalDate from "../views/ArrivalDate.vue";
import DepartureDate from "../views/DepartureDate.vue";
import AccountConfirmation from "../views/AccountConfirmation";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: BookingMain
  },
  {
    path: "/login",
    name: "Login",
    component: BookingLogin
  },
  {
    path: "/signup",
    name: "Signup",
    component: BookingSignup
  },
  {
    path: "/arrivalDate",
    name: "ArrivalDate",
    component: ArrivalDate
  },
  {
    path: "/departureDate",
    name: "DepartureDate",
    component: DepartureDate
  },
  {
    path: "/activate/:activationToken",
    name: "AccountConfirmation",
    component: AccountConfirmation
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
