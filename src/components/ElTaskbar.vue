<template>
	<section class="ElTaskbar">
		<slot/>
	</section>
</template>s

<style lang="scss">
@import '../styles/theme';

.ElTaskbar {
	background-color: $dark;
	width: 100%;
	z-index: 10;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	border-top: 2px solid $primary;
	padding: ($el-padding-mobile / 2) $el-padding-mobile;
	height: fit-content;

	@media all and (min-width: $breakpoint-tablet) {
		padding: ($el-padding-tablet / 2) $el-padding-tablet;
	}
	@media all and (min-width: $breakpoint-desktop) {
		padding: ($el-padding-desktop / 2) $el-padding-desktop;
	}
}
</style>
