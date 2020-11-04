import Router from 'next/router';
import NProgress from 'nprogress';

function configureNProgress() {
  Router.onRouteChangeStart = () => {
    console.log('onRouteChangeStart triggered');
    NProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    console.log('onRouteChangeComplete triggered');
    NProgress.done();
  };

  Router.onRouteChangeError = () => {
    console.log('onRouteChangeError triggered');
    NProgress.done();
  };
}

export default configureNProgress;
