import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ElHeader from '../../src/components/ElHeader.vue';
import ElLayout from '../../src/components/ElLayout.vue';
import Doc from './doc.md';

export default {
	title: 'ElHeader',
	component: ElHeader,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

// Keep standard story in sync with example in the readme!
export const Standard = () => ({
	components: { ElHeader, ElLayout },
	props: {
		title: { default: text('title', 'ElLayout') },
		subtitle: { default: text('subtitle', 'Standard') }
	},
	template: `
		<el-layout>
			<template v-slot:header>
				<el-header :title="title" :subtitle="subtitle"/>
			</template>
		</el-layout>
	`
});

export const Minimal = () => ({
	components: { ElHeader, ElLayout },
	template: `
	<el-layout>
		<template v-slot:header>
			<el-header/>
		</template>
	</el-layout>
	`
});

export const withSlots = () => ({
	components: { ElHeader, ElLayout },
	template: `
		<el-layout>
			<template v-slot:header>
				<el-header>
					<template v-slot:left>
						<marquee v-text="'left slot content...'"/>
					</template>

					<template v-slot:right>
						<marquee v-text="'right slot content...'"/>
					</template>
				</el-header>
			</template>
		</el-layout>
	`
});
