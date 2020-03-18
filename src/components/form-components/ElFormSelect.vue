<template>
	<b-form-select
	:value="value"
	:options="options"
	@input="update($event.target.value)" />
</template>

<script>
import { FormMixin } from 'formvuelatte';

export default {
	mixins: [FormMixin],
	props: {
		value: {
			type: String,
			required: true
		},
		options: {
			type: Array,
			required: true
		}
	},
	methods: {
		update(data) {
			this.$emit('input', data);
		}
	}
};
</script>
