<template>
  <th>
    <div class="single-date-picker__calendar-week-header">
      {{ day }}
    </div>
  </th>
</template>

<script>
export default {
  name: "CalendarWeekHeader",
  props: {
    day: {
      type: String,
      default: () => ''
    }
  }
}
</script>
