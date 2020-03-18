<template>
	<header class="ElHeader">
		<b-navbar class="ElHeader__navbar">

			<!-- left partition -->
			<b-navbar-nav class="ElHeader__section">
				<slot name="left">
					<b-link class="ElHeader__branding" :href="baseUrl">
						<h2
							class="ElHeader__branding__text"
							v-text="title"/>
					</b-link>
				</slot>
			</b-navbar-nav>

			<!-- right partition-->
			<b-navbar-nav class="ElHeader__section ElHeader__section--right">
					<slot name="right">
						<h1 class="ElHeader__subTitle" v-text="subtitle"/>
					</slot>
			</b-navbar-nav>

		</b-navbar>
	</header>
</template>

<script>

export default {
	props: {
		title: { type: String, default: 'Welcome' },
		subtitle: { type: String },
		baseUrl: { type: String, default: '/' }
	},
	data() {
		return {
			animationOptions: {
				autoplay: true,
				loop: true,
				width: '55px'
			}
		};
	}
};
</script>

<style lang="scss">
@import '../styles/theme';

.ElHeader {
	background-color: $dark;
	padding: ($el-padding-mobile / 2) $el-padding-mobile;

	@media all and (min-width: $breakpoint-tablet) {
		padding: ($el-padding-tablet / 2) $el-padding-tablet;
	}
	@media all and (min-width: $breakpoint-desktop) {
		padding: ($el-padding-desktop / 2) $el-padding-desktop;
	}

	&__navbar {
		padding: 0 !important;
	}

	&__section {
		display: flex;
		align-items: center;

		&--right {
			margin-left: auto;
		}
	}

	&__branding {
		color: $success;
		display: flex;
		height: fit-content;
		margin-right: 1rem;

		&:hover {
			color: $success;
			text-decoration: none;
			animation-name: wiggle;
			animation-duration: 500ms;
			animation-timing-function: ease-in-out;
			animation-iteration-count: 1;
		}

		&__text {
			font-size: $el-text-large;
			font-weight: lighter;
			letter-spacing: 1.5px;
			text-transform: uppercase;
			text-align: right;
		}
	}


	&__subTitle {
		color: $highlight;
		font-size: $el-text-larger;
	}
}

// wiggle animation: https://codepen.io/theDeanH/pen/zBZXLN
@keyframes wiggle {
	0% {transform: rotate(1deg);}
	25% {transform: rotate(-2deg);}
	50% {transform: rotate(5deg);}
	75% {transform: rotate(-1deg);}
	100% {transform: rotate(0deg);}
}
</style>
