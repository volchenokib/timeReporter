<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<v-icon class="pr-2 d-none d-md-flex" large>mdi-calendar-clock</v-icon>
				<v-icon class="pr-2 d-flex d-md-none">mdi-calendar-clock</v-icon>
				<h1 class="font-weight-light text-h6 text-md-h4">Time Reporter</h1>
			</div>

			<v-spacer></v-spacer>

			<div class="mr-4" v-if="isAuth">
				<v-icon class="pr-1">mdi-account</v-icon>
				<span>User Name</span>
			</div>

			<v-btn text @click="logout" v-if="isAuth">
				<span class="mr-2">Logout</span>
				<v-icon>mdi-exit-to-app</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main class="ma-4">
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "App",

	data: () => ({}),

	computed: {
		isAuth() {
			return this.$store.state.isAuth;
		}
	},

	methods: {
		logout() {
			this.$router.replace("/");
			this.$store.commit("SET_AUTH", false);
		}
	}
};
</script>
