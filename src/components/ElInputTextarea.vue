<template>
	<b-form-textarea
		v-bind="$attrs"
		:value="value"
		:variant="variant"
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
		variant: {
			type: String,
			default: 'outline-primary'
		}
	},
	methods: {
		update(data) {
			this.$emit('input', data);
		}
	}
};
</script>
