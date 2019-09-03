<template>
  <div v-if="availableParts" class="content">
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.src"/>
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
            <img :src="selectedRobot.torso.src"/>
            <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.src"/>
          </div>
        </div>
      </CollapsibleSection>
      <CollapsibleSection></CollapsibleSection>
      <button class="add-to-cart" @click="addToCart()">Add to cart</button>
    </div>
    <div class="robot">
      <div class="top-row">
        <!-- <div class="top part" :style="headBorderStyle"> -->
        <!-- <div class="top part" :style="{border: this.selectedRobot.head.onSale ?
        '3px solid red' : '3px solid grey'}"> Es posible pasar el estilo de esta forma -->
        <!-- <div class="top part" :class="{'sale-border': selectedRobot.head.onSale}">
        Si selectedRobot.head.onSale es true, le paso sale border -->
        <!-- <div class="top part" :class="[saleBorderClass]"> Paso la propiedad saleBorderClass -->
        <!-- <div :class="[saleBorderClass, 'top', 'part']"> -->
          <!-- <div class="robot-name">
            {{selectedRobot.head.title}}
            <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
          </div> -->
        <partSelector
          :parts="availableParts.heads"
          position="top"
          @partSelected="part => selectedRobot.head=part"
        />
        <!-- </div> -->
      </div>
      <div class="middle-row">
        <partSelector
          :parts="availableParts.arms"
          :position="'left'"
          @partSelected="part => selectedRobot.leftArm=part"
        />
<!-- position no tiene : (binding) porque no lo necesita debido a que le pasamos un string derecho.
Si le pasamos un objeto, como en el caso de parts, es necesario el :
Podemos agregar el : y pasarlo como el anterior -->
        <partSelector
          :parts="availableParts.torsos"
          position="center"
          @partSelected="part => selectedRobot.torso=part"
        />
        <partSelector
          :parts="availableParts.arms"
          position="right"
          @partSelected="part => selectedRobot.rightArm=part"
        />
      </div>
      <div class="bottom-row">
        <partSelector
          :parts="availableParts.bases"
          position="bottom"
          @partSelected="part => selectedRobot.base=part"
        />
      </div>
    </div>
  </div>
</template>

<!-- @ is a shorthand for v-on: -->
<!-- : is a shorthand for v-bind: -->
<!-- v-once Render the element and component once only. (renderiza una sola vez).
Es usado para optimizacion y performance -->
<!-- We have v-if and v-show. El funcionamiento es el mismo, la diferencia es que
v-show agregar un display:none cuando no lo tiene que mostrar, y el v-if agrega o remueve
el elemento. Utilizar v-show cuando tenemos que renderizar mucho contenido, de esta forma, al no
agregar un nuevo elemento, performa mejor, anda mejor, etc. -->

<script>
import createdHookMixing from './created-hook-mixing';
import partSelector from './partSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

export default {
  name: 'RobotBuilder',
  created() {
    this.$store.dispatch('getParts');
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      /* eslint no-alert: 0 */
      /* eslint-disable-next-line no-restricted-globals */
      const response = confirm('You have not added your robot to your cart, are you sure you want to leave?');
      next(response);
    }
  },
  components: {
    partSelector,
    CollapsibleSection,
  },
  data() {
    return {
      cart: [],
      addedToCart: false,
      selectedRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      },
    };
  },
  mixins: [createdHookMixing],
  computed: { // We are using computed properties, so we can replace complex expression with them.
    availableParts() {
      return this.$store.state.parts;
    },
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
    headBorderStyle() {
      return { border: this.selectedRobot.head.onSale ? '3px solid red' : '3px solid grey' };
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost + robot.leftArm.cost + robot.rightArm.cost
      + robot.torso.cost + robot.base.cost;
      this.$store.dispatch('addRobotToCart', Object.assign({}, robot, { cost }));
      this.addedToCart = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color:red;
}
.content {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}
.add-to-cart {
  position: absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
.cost {
  color: red;
  text-align: right;
}
.sale-border {
  border: 3px solid red;
}
.preview {
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
.robot {
  display: flex;
  flex-direction: column;
}
</style>
