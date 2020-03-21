<template>
	<schema-form :schema="schema" />
</template>

<script>
import { SchemaForm } from 'formvuelatte';

export default {
	components: { SchemaForm },
	props: {
		schema: {
			type: Object,
			required: true
		}
	}
};
</script>
