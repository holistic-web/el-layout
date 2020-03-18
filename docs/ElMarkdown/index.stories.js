import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ElLayout from '../../src/components/ElLayout.vue';
import ElMarkdown from '../../src/components/ElMarkdown.vue';
import Doc from './doc.md';
import exampleMarkdown from './example.md';

export default {
	title: 'ElMarkdown',
	component: ElMarkdown,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const Default = () => ({
	components: { ElMarkdown, ElLayout },
	props: {
		markdown: { default: text('markdown', exampleMarkdown) }
	},
	methods: { onChange: action('updated') },
	template: `
		<el-layout name="Demo">
			<tool-markdown :markdown="markdown"/>
		</el-layout>
	`
});
