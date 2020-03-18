import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ElLayout from '../../src/components/ElLayout.vue';
import ElError from '../../src/components/ElError.vue';
import Doc from './doc.md';

export default {
	title: 'ElError',
	component: ElError,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

// Keep standard story in sync with example in the readme!
export const Standard = () => ({
	components: { ElError, ElLayout },
	props: {
		message: { default: text('message', 'Failed to add user.') }
	},
	methods: { onChange: action('updated') },
	template: `
		<el-layout title="ElError" subtitle="Standard">
			<el-error :message="message"/>
		</el-layout>
	`
});
