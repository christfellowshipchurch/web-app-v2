import ReactGA from 'react-ga';

// In order to use GoogleAnalytics, you must ALWAYS first run init() before running any other method
// ie: run init() before pageView()

const initWithPageView = route => {
  if (route) {
    const gaCode = process.env.REACT_APP_GA_CODE;

    // initialize connection with Google Analytics
    ReactGA.initialize(gaCode);
    // trigger page view
    ReactGA.pageview(route);
  }
};

//Sends GoogleAnalytics ButtonClick event along with what button is being clicked
const trackEvent = ({ category, action, label }) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

const GoogleAnalytics = {
  initWithPageView,
  trackEvent,
};

export default GoogleAnalytics;
