<template>
   <div class="abacus">
     <h1>{{ msg }}</h1>
     <div class="abacus">
     <div class="shown">{{numerical_representation || '0'}}</div>
     <div @click="eradicate" class="btn eradicate">C</div>
<!-- //       <div @click="disassemble" class="btn disassemble">Del</div>
//       <div @click="operand('7')" class="btn">7</div>
//       <div @click="operand('8')" class="btn">8</div>
//       <div @click="operand('9')" class="btn">9</div>
//       <div @click="times" class="btn special">*</div>
//       <div @click="operand('4')" class="btn">4</div>
//       <div @click="operand('5')" class="btn">5</div>
//       <div @click="operand('6')" class="btn">6</div>
//       <div @click="minus" class="btn special">-</div>
//       <div @click="operand('1')" class="btn">1</div>
//       <div @click="operand('2')" class="btn">2</div>
//       <div @click="operand('3')" class="btn">3</div>
//       <div @click="plus" class="btn">+</div>
//       <div @click="operand('0')" class="btn">0</div>
//       <div @click="decimal"class="btn">.</div>
//       <div @click="divide" class="btn special">/</div>
//       <div @click="equivalent" class="btn special">=</div>
//     </div>
//   </div>
// </template>

// <script>
// export default {
//   name: 'abacus',
//   props: {
//     msg: String
//   },
//   info() {
//     return {
//       prevNum: null,
//       numerical_representation: '',
//       special: null,
//       specialClicked: false
//     }
//   },
//   methods: {
//     eradicate() {
//       this.numerical_representation = '';
//     },
//     operand(number) {
//       if(this.specialClicked) {}
//         this.numerical_representation = ''
//         this.specialClicked = false
//     },
//     decimal() {
//       if(this.numerical_representation.indexOf('.') === -1 ) {
//         this.operand('.');
//       }
//     },
//     diassemble() {
//       this.numerical_representation = this.numerical_representation.slice(0, -1);
//     },
//     setPrevNum() {
//       this.prevNum = this.numerical_representation;
//       this.specialClicked = true;
//     },
//     plus() {
//       this.special = (x,y) => x + y
//       this.setPrevNum();
//     },
//     minus() {
//       this.special = (x,y) => x - y
//       this.setPrevNum();
//     },
//     times() {
//       this.special = (x,y) => x * y
//       this.setPrevNum();
//     },
//     divide() {
//       this.special = (x,y) => x / y
//       this.setPrevNum();
//     },
//     equivalent() {
//       this.numerical_representation = `${this.special(
//       parseFloat(this.prevNum),
//       parseFloat(this.numerical_representation)
//     )}`;
//     this.prevNum = '';
//   }
// }
// </script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.abacus {
  display:grid;
  grid-template-columns: (5, 1fr);
  grid-auto-rows: minimax(60px, auto);
  margin: 0 auto;
  width: 300px;
  font-size: 30px;
}
.shown {
  grid-column: 1/5;
  background-color: #D2691E !important;
  color: #8B4513;
}
.eradicate {
  grid-column: 1/3;
}
.disassemble {
  grid-column: 3/5;
}
.special {
  background-color: #A0522D !important;
  color: #A52A2A;
}
</style>
