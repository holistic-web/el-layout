<template>
	<div class="ElError" v-text="message"/>
</template>

<script>
export default {
	props: {
		message: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="scss">
@import '../styles/theme';

.ElError {
	background-color: $danger;
	color: $light;
	padding: 1rem;
	border-radius: $el-border-radius;
	height: fit-content;
}
</style>
