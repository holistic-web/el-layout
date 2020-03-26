import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ElLayout from '../../src/components/ElLayout.vue';
import ElInputSelect from '../../src/components/ElInputSelect.vue';
import Doc from './doc.md';

export default {
	title: 'ElInputSelect',
	component: ElInputSelect,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const Standard = () => ({
	components: { ElInputSelect, ElLayout },
	data() {
		return { selected: '' };
	},
	props: {
		options: {
			default: [
				{ value: '', text: 'Check out this ElInputSelect component!' },
				{ value: '1', text: 'Option 1' },
				{ value: '2', text: 'Option 2' },
				{ value: '3', text: 'Option 3' }
			]
		}
	},
	template: `
		<el-layout title="ElInputSelect" subtitle="Standard">
			<el-input-select
				v-model="selected"
				:options="options"/>
		</el-layout>
	`
});
