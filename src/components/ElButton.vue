<template>
	<b-btn
		class="ElButton"
		:variant="variant"
		v-bind="$attrs"
		@click="$emit('click', $event)">
		<slot/>
	</b-btn>
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
.ElButton {
	height: fit-content;
}
</style>
