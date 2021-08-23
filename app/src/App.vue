<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
				<h1>Time Reporter</h1>
			</div>

			<v-spacer></v-spacer>
			<div class="mr-4">
				<v-icon class="pr-1">mdi-account</v-icon>
				<span>User Name</span>
			</div>

			<v-btn text @click="logout">
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

	data: () => ({
		//
	}),

	methods: {
		logout() {
			this.$router.replace("/");
		}
	}
};
</script>
