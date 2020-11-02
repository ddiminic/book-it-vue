<template>
  <div class="container has-text-centered">
    <div class="is-size-1">Select departure date:</div>
    <b-datepicker
      inline
      :min-date="arrivalDate"
      indicators="bars"
      :events="events"
      @input="setDepartureDate"
    ></b-datepicker>
    <button class="button is-success" @click="confirmBooking()">
      Confirm booking
    </button>
  </div>
</template>

<script>
import { http } from "../httpRequests";
import { mapState } from "vuex";

export default {
  data() {
    return {
      selectedDate: new Date(),
      events: []
    };
  },
  computed: mapState({
    arrivalDate: function(state) {
      //   return state.arrivalDate;
      let date = state.arrivalDate;
      date.setDate(date.getDate() + 1);
      return date;
    },
    token: function(state) {
      return state.token;
    },
  }),
  methods: {
    confirmBooking() {
      this.$store.dispatch("setDepartureDate", this.selectedDate);
      http("bookDates", "post", {
        arrivalDate: this.arrivalDate,
        departureDate: this.selectedDate
      })
        .then(result => {
          console.log(result.data);
          if (
            result.data.status == "fail" &&
            result.data.message == "alreadyBooked"
          )
            this.$buefy.dialog.alert(
              "We are sorry, but selected dates are not available anymore"
            );
          if (result.data.status == "success") {
            this.getBooked();
            this.$buefy.dialog.alert(
              "Your booking has been confirmed, the confirmation has been sent to your email!"
            );
          }
        })
        .catch(() => {
          this.$buefy.dialog.alert("Error while booking the dates!");
        });
    },
    setDepartureDate(data) {
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
