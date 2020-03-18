import Form from './ElForm.vue';
import FormInput from './ElFormInput.vue';
import FormSelect from './ElFormSelect.vue';
import FormTextArea from './ElFormTextArea.vue';

const components = [
	{
		name: 'form',
		component: Form
	},
	{
		name: 'form-input',
		component: FormInput
	},
	{
		name: 'form-select',
		component: FormSelect
	},
	{
		name: 'form-text-area',
		component: FormTextArea
	}
];

export default components;
