
Vue.component("num-button", {
    props: ["digit"],
    template: `<button v-bind:class="{'three columns': (digit !== '0'), 'six columns': (digit === '0') }">{{ digit }}</button>`
});

Vue.component("op-button", {
    props: ["operator"],
    template: `<button class="three columns">{{ operator }}</button>`
});




let vm = new Vue({
    el: "#app",
    data : {
        result: 0, // the previous number entered/the previous total
        display: "0", // what is being displayed
        func: "+", // +, -, *, /
        has_decimal: false, // will use to prevent multiple decimals from being entered at once
        entered_func: true // when true, will replace display with next number/decimal entered
    }

});