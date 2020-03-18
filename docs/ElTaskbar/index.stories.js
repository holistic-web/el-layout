import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import ElLayout from '../../src/components/ElLayout.vue';
import ElTaskbar from '../../src/components/ElTaskbar.vue';
import ElButton from '../../src/components/ElButton.vue';
import Doc from './doc.md';

export default {
	title: 'ElTaskbar',
	component: ElTaskbar,
	decorators: [withNotes, withKnobs],
	parameters: { notes: { markdown: Doc } }
};

export const Default = () => ({
	components: { ElTaskbar, ElLayout },
	template: `
		<el-layout class="ElTaskbarStory" title="ElTaskbar" subtitle="Standard">
			<el-taskbar>
				<p>Simple taskbar content.</p>
			</el-taskbar>
		</el-layout>
	`
});


export const withButtons = () => ({
	components: { ElTaskbar, ElLayout, ElButton },
	methods: {
		calculateButtonClick: action('calculateButtonClick'),
		resetButtonClick: action('resetButtonClick')
	},
	template: `
		<el-layout class="ElTaskbarStory" title="ElTaskbar" subtitle="With Buttons">
			<el-taskbar>
				<el-button
					class="ml-3"
					size="lg"
					v-text="'Calculate'"
					@click.native="calculateButtonClick"/>
				<el-button
					class="ml-3"
					size="sm"
					variant="secondary"
					v-text="'reset'"
					@click.native="resetButtonClick"/>
			</el-taskbar>
		</el-layout>
	`
});
