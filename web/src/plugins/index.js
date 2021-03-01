import MouseParallaxPlugin from './MouseParallax';
import MouseParallax from '../components/MouseParallax';

MouseParallaxPlugin.setup();

const Parallax = {
  install(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue;
    }
    Vue.component(MouseParallax.name, MouseParallax);
  },
};

export default Parallax;

export { MouseParallax };
