<template>
  <table class="single-date-picker__calendar-month">
    <thead>
      <CalendarWeekHeader
        v-for="(day, index) in daysInWeek"
        :key="index"
        :day="day"
      />
    </thead>
    <tbody>
      <CalendarWeek
        v-for="(week, index) in datesPerWeek"
        :key="index"
        :week="week"
        :is-today="isToday"
        :is-selected="isSelected"
        @selectDate="selectDate"
      />
    </tbody>
  </table>
</template>

<script>
import CalendarWeekHeader from './CalendarWeekHeader.vue';
import CalendarWeek from './CalendarWeek.vue';

export default {
  name: "CalendarMonth",
  components: {
    CalendarWeekHeader,
    CalendarWeek
  },
  props: {
    datesPerWeek: {
      type: Array,
      default: () => []
    },
    isToday: {
      type: Number,
      default: 0
    },
    isSelected: {
      type: Number,
      default: 0,
    },
    weekStartDay: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      daysInWeek: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
    }
  },
  created() {
    this.rotateDaysInWeek(this.daysInWeek, this.weekStartDay);
  },
  methods: {
    selectDate(date) {
      this.$emit('selectDate', date);
    },
    rotateDaysInWeek(daysInWeek, shifts) {
      while(shifts--) {
        var temp = daysInWeek.shift();
        daysInWeek.push(temp);
      }
    }
  }
}
</script>
