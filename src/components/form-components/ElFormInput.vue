<template>
	<b-form-input
	:value="value"
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
		}
	},
	methods: {
		update(data) {
			this.$emit('input', data);
		}
	}
};
</script>
