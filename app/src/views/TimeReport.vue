<template>
	<v-container>
		<v-row>
			<v-col cols="5">
				<v-card class="pa-4 mb-12">
					<v-form ref="form" v-model="valid" lazy-validation>
						<v-select
							v-model="select"
							:items="items"
							:rules="[(v) => !!v || 'Hours is required']"
							label="weekly hours"
							dense
							outlined
							required
						></v-select>

						<v-btn :disabled="!valid" @click="validate">
							Submit
						</v-btn>
					</v-form>
				</v-card>
			</v-col>

			<v-col cols="6">
				<v-simple-table class="elevation-2">
					<template v-slot:default>
						<thead>
							<tr>
								<th class="text-left">
									Day of the week
								</th>
								<th class="text-left">
									Date
								</th>
								<th class="text-left">
									Hours
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in hours" :key="item.day">
								<td>{{ item.day }}</td>
								<td>{{ item.date }}</td>
								<td>{{ item.hours }}</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			valid: true,
			select: "10 hours",
			items: ["10 hours", "20 hours", "30 hours", "40 hours"],
			hours: [
				{
					day: "Monday",
					date: "10.05.2001",
					hours: 10
				},
				{
					day: "Tuesday",
					date: "10.05.2001",
					hours: 20
				},
				{
					day: "Wednesday",
					date: "10.05.2001",
					hours: 30
				},
				{
					day: "Thursday",
					date: "10.05.2001",
					hours: 40
				},
				{
					day: "Friday",
					date: "10.05.2001",
					hours: 20
				},
				{
					day: "Saturday",
					date: "10.05.2001",
					hours: 30
				},
				{
					day: "Sunday",
					date: "10.05.2001",
					hours: 20
				}
			]
		};
	},

	computed: {
		formWidth() {
			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return "100%";
				case "sm":
					return "50%";
				case "md":
					return "30%";
				case "lg":
					return "30%";
				case "xl":
					return "30%";
			}
		}
	},

	methods: {
		validate() {
			this.$refs.form.validate();
		}
	}
};
</script>
