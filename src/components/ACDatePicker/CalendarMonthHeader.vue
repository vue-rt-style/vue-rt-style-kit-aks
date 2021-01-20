<template>
  <div class="single-date-picker__calendar-month-header">
    <div class="single-date-picker__arrow left" @click="toggleMonth(-1)">
      <<
    </div>
    <div class="single-date-picker__year">
      {{ fullMonth }} {{ year }}
    </div>
    <div class="single-date-picker__arrow right" @click="toggleMonth(1)">
      >>
    </div>
  </div>
</template>

<script>
const MONTHS = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
export default {
  name: "CalendarMonthHeader",
  props: {
    year: {
      type: Number,
      default: () => 1970
    },
    month: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    fullMonth() {
      return MONTHS[this.month];
    }
  },
  methods: {
    toggleMonth(direction) {
      this.$emit('toggleMonth', direction)
    }
  }
};
</script>
