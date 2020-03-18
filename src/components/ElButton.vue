<template>
	<b-btn
		class="ElButton"
		:variant="variant"
		v-bind="$attrs">
		<slot/>
	</template>
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
