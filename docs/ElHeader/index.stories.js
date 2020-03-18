import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ElHeader from '../../src/components/ElHeader.vue';
import Doc from './doc.md';

export default {
	title: 'ElHeader',
	component: ElHeader,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

// Keep standard story in sync with example in the readme!
export const Standard = () => ({
	components: { ElHeader },
	props: {
		title: { default: text('title', 'Example App') }
	},
	template: `
		<el-header :title="title"/>
	`
});

export const Minimal = () => ({
	components: { ElHeader },
	template: `
		<el-header/>
	`
});

export const WithSubtitle = () => ({
	components: { ElHeader },
	props: {
		title: { default: text('title', 'Accounts CO') },
		subtitle: { default: text('subtitle', 'Daily Planner') }
	},
	template: `
			<el-header :title="title" :subtitle="subtitle"/>
		`
});

export const withSlots = () => ({
	components: { ElHeader },
	template: `
			<el-header>
				<template v-slot:left>
					<marquee v-text="'left slot content...'"/>
				</template>

				<template v-slot:right>
					<marquee v-text="'right slot content...'"/>
				</template>
			</el-header>
		`
});
