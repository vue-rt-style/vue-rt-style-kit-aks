<template>
  <td class="single-date-picker__cell">
    <div
      v-show="date"
      class="single-date-picker__date"
      :class="{'single-date-picker__today': isToday,
               'single-date-picker__selected': isSelected}"
      @click="selectDate"
    >
      {{ date }}
    </div>
  </td>
</template>

<script>
export default {
  name: "CalendarDate",
  props: {
    date: {
      type: Number,
      default: () => 1
    },
    isToday: {
      type: Boolean,
      default: false
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectDate() {
      this.$emit('selectDate', this.date);
    }
  }
}
</script>
