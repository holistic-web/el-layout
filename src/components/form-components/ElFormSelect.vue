<template>
	<b-form-select
	:value="value"
	:options="options" />
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
	}
};
</script>
