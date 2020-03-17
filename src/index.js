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
