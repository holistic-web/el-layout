import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ElLayout from '../../src/components/ElLayout.vue';
import ElButton from '../../src/components/ElButton.vue';
import Doc from './doc.md';

export default {
	title: 'ElButton',
	component: ElButton,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

// Keep standard story in sync with example in the readme!
export const Standard = () => ({
	components: { ElButton, ElLayout },
	props: {
		text: {
			default: text('text', 'Demo Button')
		}
	},
	methods: { action: action('clicked') },
	template: `
		<el-layout name="Demo">
			<el-button
				v-text="text"
				@click.native="action"/>
		</el-layout>
	`
});

export const Secondary = () => ({
	components: { ElButton, ElLayout },
	props: {
		text: {
			default: text('text', 'Demo Button')
		},
		size: {
			default: text('size', 'sm')
		},
		variant: {
			default: text('variant', 'secondary')
		}
	},
	methods: { action: action('clicked') },
	template: `
		<el-layout name="Demo">
			<el-button
				v-text="text"
				:size="size"
				:variant="variant"
				@click.native="action"/>
		</el-layout>
	`
});

export const LinkToNewTab = () => ({
	components: { ElButton, ElLayout },
	props: {
		text: { default: text('text', 'Demo Button') },
		href: { default: text('href', 'http://google.com') },
		target: { default: text('target', '_blank') }
	},
	methods: { action: action('clicked') },
	template: `
		<el-layout name="Demo">
			<el-button
				v-text="text"
				:href="href"
				:target="target"
				@click.native="action"/>
		</el-layout>
	`
});
