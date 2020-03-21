<template>
	<codemirror
		ref="ElInputCode"
		class="ElInputCode"
		:class="{ 'ElInputCode--autoSize': autoSize }"
		:value="value"
		:options="optionsWithDefaults"
		@input="onInput"/>
</template>

<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/cobalt.css';

export default {
	components: {
		codemirror
	},
	props: {
		value: {
			type: String,
			required: true
		},
		options: {
			type: Object,
			default: () => {}
		},
		autoSize: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		optionsWithDefaults() {
			const defaults = {
				theme: 'cobalt'
			};
			if (this.autoSize) defaults.viewportMargin = Infinity;
			return {
				...defaults,
				...this.options
			};
		},
		codemirror() {
			return this.$refs.ElInputCode.codemirror;
		}
	},
	methods: {
		onInput(data) {
			this.$emit('input', data);
		},
		focus() {
			this.codemirror.focus();
		}
	}
};
</script>

<style lang="scss">
.ElInputCode {
	width: 100%;

	&--autoSize {
		.CodeMirror { // to allow the editor to grow with entered text
			height: auto;
		}
	}
}
</style>
