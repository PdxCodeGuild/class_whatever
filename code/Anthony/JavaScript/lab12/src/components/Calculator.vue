<template>
  <div class="calculator" onselectstart="return false">
    <div class="display">{{ result }}</div>
    <div @click="handleToggleSign" class="button specialSymbol">+/-</div>
    <div @click="handlePercentage" class="button specialSymbol">%</div>
    <div @click="handleClear" class="button specialSymbol">C</div>
    <div @click="handleDivide" class="button arithmeticSymbol">÷</div>
    <div @click="handleNumber(7)" class="button">7</div>
    <div @click="handleNumber(8)" class="button">8</div>
    <div @click="handleNumber(9)" class="button">9</div>
    <div @click="handleMultiply" class="button arithmeticSymbol">x</div>
    <div @click="handleNumber(4)" class="button">4</div>
    <div @click="handleNumber(5)" class="button">5</div>
    <div @click="handleNumber(6)" class="button">6</div>
    <div @click="handleSubtract" class="button arithmeticSymbol">-</div>
    <div @click="handleNumber(1)" class="button">1</div>
    <div @click="handleNumber(2)" class="button">2</div>
    <div @click="handleNumber(3)" class="button">3</div>
    <div @click="handleAdd" class="button arithmeticSymbol">+</div>
    <div @click="handleNumber(0)" class="button zero">0</div>
    <div @click="handleDecimalPoint" class="button specialSymbol">.</div>
    <div @click="handleResult" class="button arithmeticSymbol">=</div>
  </div>
</template>
<script>
export default {
  name: 'Calculator',
  data () {
    return {
      previous: null,
      result: 0,
      operatorSign: null,
      operatorClicked: false
    }
  },
  methods: {
    handleClear () {
      this.result = 0
    },
    handleToggleSign () {
      this.result =
        this.result < 0
          ? (this.result = this.result - this.result * 2)
          : (this.result = this.result - this.result * 2)
    },
    handlePercentage () {
      this.result = this.result / 100
    },
    handleNumber (digit) {
      if (this.operatorClicked === true) {
        this.result = ''
        this.operatorClicked = false
      }
      this.result =
        this.result === 0
          ? (this.result = digit)
          : '' + this.result + digit
    },
    handleDecimalPoint () {
      if (this.result.indexOf('.') === -1) {
        this.append('.')
      }
    },
    handleDivide () {
      this.operatorSign = (a, b) => a / b
      this.previous = this.result
      this.operatorClicked = true
    },
    handleMultiply () {
      this.operatorSign = (a, b) => a * b
      this.previous = this.result
      this.operatorClicked = true
    },
    handleSubtract () {
      this.operatorSign = (a, b) => a - b
      this.previous = this.result
      this.operatorClicked = true
    },
    handleAdd () {
      this.operatorSign = (a, b) => a + b
      this.previous = this.result
      this.operatorClicked = true
    },
    handleResult () {
      this.result = this.operatorSign(Number(this.previous), Number(this.result))
      this.previous = null
      this.operatorClicked = true
    }
  }
}
</script>
<style scoped>
.calculator {
  margin: 0 auto;
  width: 80vw;
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(10vh, auto);
  border: 5px solid  yellow;
  box-shadow: -3px 3px 15px rgba(17, 17, 17, 0.4);
  line-height: 10vh;
}

.display {
  grid-column: 1 / 5;
  background: #344963;
  border: 1px solid #111;
  font-size: 2.5rem;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 1rem;
  color: white;
}

.zero {
  grid-column: 1 / 3;
}

.button {
  background: #344963;
  border: 1px solid yellow;
  cursor: pointer;
  color: white;
}

.button:active {
  outline: none;
  box-shadow: inset 0px 0px 5px yellow;
}

.arithmeticSymbol {
  background: #A9A9A9;
}

.specialSymbol {
  background: gray;
}

@media only screen and (min-width: 1280px) {
  .calculator {
    width: 30vw;
  }
}

</style>
