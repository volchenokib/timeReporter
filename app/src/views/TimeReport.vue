<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="4">
				<v-card class="pa-4 mb-12">
					<v-form
						class="text-right"
						ref="form"
						v-model="valid"
						lazy-validation
					>
						<date-picker />

						<v-select
							v-model="weeklyHours"
							:items="items"
							item-text="label"
							item-value="value"
							:rules="[(v) => !!v || 'Hours is required']"
							label="weekly hours"
							return-object
							outlined
							required
							dense
						></v-select>

						<v-btn :disabled="!valid" @click="validate">
							Submit
						</v-btn>
					</v-form>
				</v-card>
			</v-col>

			<v-col cols="12" md="6">
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
							<tr
								class="total-row error"
								:class="{ success: isPlanCompleted }"
							>
								<td>Total</td>
								<td></td>
								<td>{{ total }}</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import DatePicker from "@/components/DatePicker";
export default {
	components: { DatePicker },
	data() {
		return {
			valid: true,
			weeklyHours: { value: 40, label: "40 hours" },
			items: [
				{ value: 20, label: "20 hours" },
				{ value: 40, label: "40 hours" }
			],
			hours: [
				{
					day: "Monday",
					date: "10.05.2001",
					hours: "8"
				},
				{
					day: "Tuesday",
					date: "10.05.2001",
					hours: "8"
				},
				{
					day: "Wednesday",
					date: "10.05.2001",
					hours: "8"
				},
				{
					day: "Thursday",
					date: "10.05.2001",
					hours: "8"
				},
				{
					day: "Friday",
					date: "10.05.2001",
					hours: "7"
				},
				{
					day: "Saturday",
					date: "10.05.2001",
					hours: "0"
				},
				{
					day: "Sunday",
					date: "10.05.2001",
					hours: "0"
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
		},
		total() {
			return 39;
		},
		isPlanCompleted() {
			return this.weeklyHours.value <= this.total ? true : false;
		}
	},

	methods: {
		validate() {
			this.$refs.form.validate();
		}
	}
};
</script>

<style lang="scss" scoped>
.total-row {
	background: #eeeeee;
	color: white;
}
</style>
