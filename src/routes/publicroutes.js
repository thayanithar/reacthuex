import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Complete from '../pages/Complete';
import Faild from '../pages/Fail';
import Confirm from '../pages/Confirm';
import Profile from '../pages/Profile';
import Password from '../pages/PasswordReset';
import Test from '../pages/Test';

const publicRoutes = [
  {
    path: '/signup',
    component: Signup,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },

  {
    path: '/complete',
    component: Complete,
    exact: true,
  },
  {
    path: '/faild',
    component: Faild,
    exact: true,
  },
  {
    path: '/password',
    component: Password,
    exact: true,
  },
  {
    path: '/confirm',
    component: Confirm,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/test',
    component: Test,
    exact: true,
  },
];

export default publicRoutes;
