import router from "./router";
// import store from './store'
import { getToken } from "@/utils/auth"; // getToken from cookie
const whiteList = ["/login", "/forgetPassword"];
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  let token = localStorage.getItem("xxx-info");
  if (token) {
    next();
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next(`/login?redirect=${to.path}`); // 否则全部重定向到登录页
    }
  }
});

router.afterEach(() => {});
