<template>
	<b-form-select
	v-bind="$attrs"
	v-model="selected"
	:options="options"
	:variant="variant" />
</template>

<script>
import { FormMixin } from 'formvuelatte';

export default {
	mixins: [FormMixin],
	data() {
		return {
			selected: ''
		};
	},
	props: {
		options: {
			type: Array,
			required: true
		},
		variant: {
			type: String,
			default: 'outline-primary'
		}
	}
};
</script>
