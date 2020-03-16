import * as firebase from 'firebase/app';
import 'firebase/analytics';

import Vue from 'vue';
import './styles/theme.scss';
import BootstrapVue from 'bootstrap-vue';
import scrollTo from 'vue-scrollto';

import ToolButton from './components/ToolButton.vue';
import ToolCode from './components/ToolCode.vue';
import ToolError from './components/ToolError.vue';
import ToolHeader from './components/ToolHeader.vue';
import ToolLayout from './components/ToolLayout.vue';
import ToolMarkdown from './components/ToolMarkdown.vue';
import ToolTaskbar from './components/ToolTaskbar.vue';

firebase.initializeApp({
	apiKey: 'AIzaSyCYyxjgL9YGvKnzax2EBxEI_bl6KxB2nK8',
	authDomain: 'holistic-toolbox.firebaseapp.com',
	databaseURL: 'https://holistic-toolbox.firebaseio.com',
	projectId: 'holistic-toolbox',
	storageBucket: 'holistic-toolbox.appspot.com',
	messagingSenderId: '94330098957',
	appId: '1:94330098957:web:c87c654651186a555e0c44',
	measurementId: 'G-J32Q7R91JH'
});
firebase.analytics();

Vue.use(BootstrapVue);
Vue.use(scrollTo, {
	container: '.ToolWrapper',
	duration: 300
});

const components = {
	ToolButton,
	ToolCode,
	ToolError,
	ToolHeader,
	ToolLayout,
	ToolMarkdown,
	ToolTaskbar
};

export default function install($Vue) {
	Object.keys(components).forEach(name => {
		$Vue.component(name, components[name]);
	});
}

export {
	ToolButton,
	ToolCode,
	ToolError,
	ToolHeader,
	ToolLayout,
	ToolMarkdown,
	ToolTaskbar
};
