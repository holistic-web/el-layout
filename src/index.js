import Vue from 'vue';
import './styles/theme.scss';
import BootstrapVue from 'bootstrap-vue';
import scrollTo from 'vue-scrollto';

import ElButton from './components/ElButton.vue';
import ElError from './components/ElError.vue';
import ElForm from './components/ElForm.vue';
import ElHeader from './components/ElHeader.vue';
import ElInputCode from './components/ElInputCode.vue';
import ElInputSelect from './components/ElInputSelect.vue';
import ElInputText from './components/ElInputText.vue';
import ElInputTextarea from './components/ElInputTextarea.vue';
import ElLayout from './components/ElLayout.vue';
import ElMarkdown from './components/ElMarkdown.vue';
import ElTaskbar from './components/ElTaskbar.vue';

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
	ElInputCode,
	ElInputSelect,
	ElInputText,
	ElInputTextarea,
	ElLayout,
	ElMarkdown,
	ElTaskbar,
	ElForm
};

export default function install($Vue) {
	Object.keys(components).forEach(name => {
		$Vue.component(name, components[name]);
	});
}

export {
	ElButton,
	ElInputCode,
	ElError,
	ElHeader,
	ElLayout,
	ElMarkdown,
	ElTaskbar
};
