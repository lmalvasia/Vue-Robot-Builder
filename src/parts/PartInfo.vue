<template>
  <div>
    <h1>
      {{part.title}}
    </h1>
    <div>
      {{part.description}}
    </div>
  </div>
</template>

<script>
import mixin from './mixin';

export default {
  name: 'PartInfo',
  mixins: [mixin],
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator: value => (Number.isInteger(Number(value))),
    },
  },
  computed: {
    part() {
      const { partType, id } = this; // this props
      return this.parts[partType].find(part => part.id === +id);
    },
  },
};
</script>
