<template>
	<b-form-select
	v-model="selected"
	:options="options" />
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
		}
	}
};
</script>
