<template>
	<div class="ElLayout">

		<slot name="header">
			<el-header
				class="ElLayout__header"
				:title="title"
				:subtitle="subtitle"
				:baseUrl="baseUrl"/>
		</slot>

		<section class="ElLayout__wrapper">
			<slot>Hello World!</slot>
		</section>

	</div>
</template>
<script>
import ElHeader from './ElHeader.vue';

export default {
	props: {
		title: { type: String },
		subtitle: { type: String },
		baseUrl: { type: String, default: '/' }
	},
	components: {
		ElHeader
	}
};
</script>

<style lang="scss">
@import '../styles/theme';

.ElLayout {
	background-color: $background;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;

	&__header {
		flex-grow: 0;
	}

	&__wrapper {
		flex-grow: 1;
		overflow: auto;

		> * {
			height: 100%;
			overflow: auto;
			display: flex;
			flex-direction: column;
		}
	}
}
</style>
