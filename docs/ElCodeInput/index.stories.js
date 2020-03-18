import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ElLayout from '../../src/components/ElLayout.vue';
import ElCodeInput from '../../src/components/ElCodeInput.vue';
import Doc from './doc.md';
import jsonString from './jsonString';

export default {
	title: 'ElCodeInput',
	component: ElCodeInput,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

// Keep standard story in sync with example in the readme!
export const Standard = () => ({
	components: { ElCodeInput, ElLayout },
	data() {
		return { value: 'Check out this ElCodeInput component!' };
	},
	methods: { onInput: action('input') },
	template: `
		<el-layout title="ElCodeInput" subtitle="Standard">
			<el-code-input
				v-model="value"
				@input="onInput"/>
		</el-layout>
	`
});

export const JSON = () => ({
	components: { ElCodeInput, ElLayout },
	props: {
		lineNumbers: { default: boolean('options.lineNumbers', true) },
		mode: { default: text('options.mode', 'JSON') }
	},
	data() {
		return { value: jsonString };
	},
	computed: {
		options() {
			return { lineNumbers: this.lineNumbers, mode: this.mode };

		}
	},
	methods: { onInput: action('input') },
	template: `
		<el-layout title="ElCodeInput" subtitle="JSON">
			<el-code-input
				v-model="value"
				:options="options"
				@input="onInput"/>
		</el-layout>
	`
});

export const AutoSize = () => ({
	components: { ElCodeInput, ElLayout },
	props: {
		autoSize: { default: boolean('autoSize', true) }
	},
	data() {
		return { value: 'Check out this ElCodeInput component!' };
	},
	methods: { onInput: action('input') },
	template: `
		<el-layout title="ElCodeInput" subtitle="Auto Size">
			<el-code-input
				v-model="value"
				:autoSize="autoSize"
				@input="onInput"/>
		</el-layout>
	`
});
