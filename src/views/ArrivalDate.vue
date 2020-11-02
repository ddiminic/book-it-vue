<template>
  <div class="container has-text-centered">
    <div class="is-size-1">Select arrival date:</div>
    <b-datepicker
      inline
      v-model="date"
      :min-date="new Date()"
      indicators="bars"
      :events="events"
      @input="dateSelected"
    ></b-datepicker>
    <button class="button is-warning" @click="toDepartureDate()">
      Select departure date
    </button>
  </div>
</template>

<script>
import { http } from "../httpRequests";
export default {
  data() {
    return {
      date: new Date(),
      selectedDate: new Date(),
      events: []
    };
  },
  methods: {
    toDepartureDate() {
      const selected = new Date(this.selectedDate);
      let sameDateSelected = false;
      this.events.forEach(element => {
        if (element.date.getTime() === selected.getTime()) {
          this.$buefy.dialog.alert(
            "The selected date is not available, please select another"
          );
          sameDateSelected = true;
        }
      });
      if (!sameDateSelected) {
        this.$store.dispatch("setArrivalDate", this.selectedDate);
        this.$router.push("/departureDate");
      }
    },
    dateSelected(data) {
      this.selectedDate = data;
    },
    getBooked() {
      http("getBookedDates", "GET", {}).then(result => {
        result.data.bookedDates.forEach(date => {
          let changedDate = new Date(date);
          changedDate.setHours(0, 0, 0, 0);
          this.events.push({ date: new Date(changedDate), type: "is-danger" });
        });
      }).catch(() => this.$router.push("login"));
    }
  },
  mounted() {
    this.getBooked();
  }
};
</script>

<style scoped>
button {
  margin-top: 50px;
}
</style>
