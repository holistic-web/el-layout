import Vue from 'vue';
import './styles/theme.scss';
import BootstrapVue from 'bootstrap-vue';
import scrollTo from 'vue-scrollto';

import ElButton from './components/ElButton.vue';
import ElError from './components/ElError.vue';
import ElForm from './components/ElForm.vue';
import ElHeader from './components/ElHeader.vue';
import ElLayout from './components/ElLayout.vue';
import ElMarkdown from './components/ElMarkdown.vue';
import ElTaskbar from './components/ElTaskbar.vue';

import ElCodeInput from './components/inputs/ElCodeInput';
import ElSelectInput from './components/inputs/ElSelectInput';
import ElTextAreaInput from './components/inputs/ElTextAreaInput';
import ElTextInput from './components/inputs/ElTextInput';

Vue.use(BootstrapVue);
Vue.use(scrollTo, {
	container: '.ElWrapper',
	duration: 300
});

const components = {
	ElButton,
	ElError,
	ElForm,
	ElHeader,
	ElLayout,
	ElMarkdown,
	ElTaskbar,
	ElCodeInput,
	ElForm,
	ElSelectInput,
	ElTextAreaInput,
	ElTextInput
};

export default function install($Vue) {
	Object.keys(components).forEach(name => {
		$Vue.component(name, components[name]);
	});
}

export {
	ElButton,
	ElCodeInput,
	ElError,
	ElHeader,
	ElLayout,
	ElMarkdown,
	ElTaskbar
};
