import {
    ResetPasswordComponent
} from './app/components/reset-password/reset-password.component';
import {
    ForgotPasswordComponent
} from './app/components/forgot-password/forgot-password.component';
import {
    LoginFormComponent
} from './app/components/login-form/login-form.component';
import {
    RegisterFormComponent
} from './app/components/register-form/register-form.component';
import {
    SocialIconsComponent
} from './app/components/social-icons/social-icons.component';
import {
    PortfolioIndexComponent
} from './app/components/portfolio-index/portfolio-index.component';

angular.module('app.components')
    .component('socialIcons', SocialIconsComponent)
    .component('portfolioIndex', PortfolioIndexComponent)
    .component('resetPassword', ResetPasswordComponent)
    .component('forgotPassword', ForgotPasswordComponent)
    .component('loginForm', LoginFormComponent)
    .component('registerForm', RegisterFormComponent);
