import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ElLayout from '../../src/components/ElLayout.vue';
import ElInputCode from '../../src/components/ElInputCode.vue';
import Doc from './doc.md';
import jsonString from './jsonString';

export default {
	title: 'ElInputCode',
	component: ElInputCode,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

// Keep standard story in sync with example in the readme!
export const Standard = () => ({
	components: { ElInputCode, ElLayout },
	data() {
		return { value: 'Check out this ElInputCode component!' };
	},
	methods: { onInput: action('input') },
	template: `
		<el-layout title="ElInputCode" subtitle="Standard">
			<el-input-code
				v-model="value"
				@input="onInput"/>
		</el-layout>
	`
});

export const JSON = () => ({
	components: { ElInputCode, ElLayout },
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
		<el-layout title="ElInputCode" subtitle="JSON">
			<el-input-code
				v-model="value"
				:options="options"
				@input="onInput"/>
		</el-layout>
	`
});

export const AutoSize = () => ({
	components: { ElInputCode, ElLayout },
	props: {
		autoSize: { default: boolean('autoSize', true) }
	},
	data() {
		return { value: 'Check out this ElInputCode component!' };
	},
	methods: { onInput: action('input') },
	template: `
		<el-layout title="ElInputCode" subtitle="Auto Size">
			<el-input-code
				v-model="value"
				:autoSize="autoSize"
				@input="onInput"/>
		</el-layout>
	`
});
