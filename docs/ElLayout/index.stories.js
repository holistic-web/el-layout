import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ElLayout from '../../src/components/ElLayout.vue';
import Doc from './doc.md';

export default {
	title: 'ElLayout',
	component: ElLayout,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

// Keep standard story in sync with example in the readme!
export const Standard = () => ({
	components: { ElLayout },
	props: {
		content: { default: text('content', 'Check out this ElLayout component!') },
		name: { default: text('name', 'Demo') }
	},
	methods: { onChange: action('updated') },
	template: `
		<el-layout title="Demo">
			{{ content }}
		</el-layout>
	`
});

// #TODO: add usage with taskbar
