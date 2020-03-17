<template>
	<b-button
		class="ToolButton"
		:variant="variant"
		v-bind="$attrs">
		<slot/>
	</b-button>
</template>

<script>
export default {
	props: {
		variant: {
			type: String,
			default: 'outline-primary'
		}
	}
};
</script>

<style lang="scss">
.ToolButton {
	height: fit-content;
}
</style>
