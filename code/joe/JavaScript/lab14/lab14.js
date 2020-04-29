/*
    the api is refusing to convert currencies a lot more often today, despite the fact I know it's done some of the exact ones I'm asking for
    Update: alright, so it just works whenever it wants to, with no rhyme or reason.
*/
Vue.component("history", {
    props: ["exchange"],
    template: `<div class="result">
        <span @click="$emit('get', exchange)">
            {{ exchange.from_value }} {{ exchange.from_currency }} = {{ exchange.to_value }} {{ exchange.to_currency }}
        </span>
        <button @click="$emit('remove', exchange)">Remove</button>
    </div>`
})

let vm = new Vue({
    el: "#app",
    data: {
        from_currency: "USD",
        to_currency: "EUR",
        exchange_value: "1.0",
        cached_results: [],
        loading_text: "",
        currencies: [
            { id: "AED", name: "United Arab Emirates Dirham"},
            { id: "AFN", name: "Afghan Afghani"},
            { id: "ALL", name: "Albanian Lek"},
            { id: "AMD", name: "Armenian Dram"},
            { id: "ANG", name: "Netherlands Antillean Guilder"},
            { id: "AOA", name: "Angolan Kwanza"},
            { id: "ARS", name: "Argentine Peso"},
            { id: "AUD", name: "Australian Dollar"},
            { id: "AWG", name: "Aruban Florin"},
            { id: "AZN", name: "Azerbaijani manat"},
            { id: "BAM", name: "Bosnia and Herzegovina Convertible Mark"},
            { id: "BBD", name: "Barbadian Dollar"},
            { id: "BDT", name: "Bangladeshi Taka"},
            { id: "BGN", name: "Bulgarian Lev"},
            { id: "BHD", name: "Bahraini Dinar"},
            { id: "BIF", name: "Burundian Franc"},
            { id: "BMD", name: "Bermudian Dollar"},
            { id: "BND", name: "Brunei Dollar"},
            { id: "BOB", name: "Bolivian Boliviano"},
            { id: "BRL", name: "Brazilian Real"},
            { id: "BSD", name: "Bahamian Dollar"},
            { id: "BTN", name: "Bhutanese Ngultrum"},
            { id: "BWP", name: "Botswana Pula"},
            { id: "BYN", name: "Belarusian Ruble"},
            { id: "BZD", name: "Belize Dollar"},
            { id: "CAD", name: "Canadian Dollar"},
            { id: "CDF", name: "Congolese Franc"},
            { id: "CHF", name: "Swiss Franc"},
            { id: "CKD", name: "Cook Islands Dollar"},
            { id: "CLP", name: "Chilean Peso"},
            { id: "CNY", name: "Chinese Yuan"},
            { id: "COP", name: "Colombian Peso"},
            { id: "CRC", name: "Costa Rican Colón"},
            { id: "CUC", name: "Cuban Convertible Peso"},
            { id: "CUP", name: "Cuban Peso"},
            { id: "CVE", name: "Cape Verdean Escudo"},
            { id: "CZK", name: "Czech Koruna"},
            { id: "DJF", name: "Djiboutian Franc"},
            { id: "DKK", name: "Danish Krone"},
            { id: "DOP", name: "Dominican Peso"},
            { id: "DZD", name: "Algerian Dinar"},
            { id: "EGP", name: "Egyptian Pound"},
            { id: "ERN", name: "Eritrean Nakfa"},
            { id: "ETB", name: "Ethiopian Birr"},
            { id: "EUR", name: "Euro"},
            { id: "FJD", name: "Fijian Dollar"},
            { id: "FKP", name: "Falkland Islands Pound"},
            { id: "FOK", name: "Faroese Króna"},
            { id: "GBP", name: "British Pound"},
            { id: "GEL", name: "Georgian Lari"},
            { id: "GGP", name: "Guernsey Pound"},
            { id: "GHS", name: "Ghanaian Cedi"},
            { id: "GIP", name: "Gibraltar Pound"},
            { id: "GMD", name: "Gambian Dalasi"},
            { id: "GNF", name: "Guinean Franc"},
            { id: "GTQ", name: "Guatemalan Quetzal"},
            { id: "GYD", name: "Guyanese Dollar"},
            { id: "HKD", name: "Hong Kong Dollar"},
            { id: "HNL", name: "Honduran Lempira"},
            { id: "HRK", name: "Croatian Kuna"},
            { id: "HTG", name: "Haitian Gourde"},
            { id: "HUF", name: "Hungarian Forint"},
            { id: "IDR", name: "Indonesian Rupiah"},
            { id: "ILS", name: "Israeli New Shekel"},
            { id: "IMP", name: "Manx Pound"},
            { id: "INR", name: "Indian Rupee"},
            { id: "IQD", name: "Iraqi Dinar"},
            { id: "IRR", name: "Iranian Rial"},
            { id: "ISK", name: "Icelandic Króna"},
            { id: "JEP", name: "Jersey Pound"},
            { id: "JMD", name: "Jamaican Dollar"},
            { id: "JOD", name: "Jordanian Dinar"},
            { id: "JPY", name: "Japanese Yen"},
            { id: "KES", name: "Kenyan Shilling"},
            { id: "KGS", name: "Kyrgyzstani Som"},
            { id: "KHR", name: "Cambodian Riel"},
            { id: "KID", name: "Kiribati Dollar"},
            { id: "KMF", name: "Comorian Franc"},
            { id: "KPW", name: "North Korean Won"},
            { id: "KRW", name: "South Korean Won"},
            { id: "KWD", name: "Kuwaiti Dinar"},
            { id: "KYD", name: "Cayman Islands dollar"},
            { id: "KZT", name: "Kazakhstani Tenge"},
            { id: "LAK", name: "Lao Kip"},
            { id: "LBP", name: "Lebanese Pound"},
            { id: "LKR", name: "Sri Lankan Rupee"},
            { id: "LRD", name: "Liberian Dollar"},
            { id: "LSL", name: "Lesotho Loti"},
            { id: "LYD", name: "Libyan Dinar"},
            { id: "MAD", name: "Moroccan Dirham"},
            { id: "MDL", name: "Moldovan Leu"},
            { id: "MGA", name: "Malagasy Ariary"},
            { id: "MKD", name: "Macedonian Denar"},
            { id: "MMK", name: "Burmese Kyat"},
            { id: "MNT", name: "Mongolian Tögrög"},
            { id: "MOP", name: "Macanese Pataca"},
            { id: "MRU", name: "Mauritanian Ouguiya"},
            { id: "MUR", name: "Mauritian Rupee"},
            { id: "MVR", name: "Maldivian Rufiyaa"},
            { id: "MWK", name: "Malawian Kwacha"},
            { id: "MXN", name: "Mexican Peso"},
            { id: "MYR", name: "Malaysian Ringgit"},
            { id: "MZN", name: "Mozambican Metical"},
            { id: "NAD", name: "Namibian Dollar"},
            { id: "NGN", name: "Nigerian Naira"},
            { id: "NIO", name: "Nicaraguan Córdoba"},
            { id: "NOK", name: "Norwegian Krone"},
            { id: "NPR", name: "Nepalese Rupee"},
            { id: "NZD", name: "New Zealand Dollar"},
            { id: "OMR", name: "Omani Rial"},
            { id: "PAB", name: "Panamanian Balboa"},
            { id: "PEN", name: "Peruvian Sol"},
            { id: "PGK", name: "Papua New Guinean Kina"},
            { id: "PHP", name: "Philippine Peso"},
            { id: "PKR", name: "Pakistani Rupee"},
            { id: "PLN", name: "Polish Złoty"},
            { id: "PND", name: "Pitcairn Islands Dollar"},
            { id: "PRB", name: "Transnistrian Ruble"},
            { id: "PYG", name: "Paraguayan Guaraní"},
            { id: "QAR", name: "Qatari Riyal"},
            { id: "RON", name: "Romanian Leu"},
            { id: "RSD", name: "Serbian Dinar"},
            { id: "RUB", name: "Russian Ruble"},
            { id: "RWF", name: "Rwandan Franc"},
            { id: "SAR", name: "Saudi Riyal"},
            { id: "SBD", name: "Solomon Islands Dollar"},
            { id: "SCR", name: "Seychellois Rupee"},
            { id: "SDG", name: "Sudanese Pound"},
            { id: "SEK", name: "Swedish Krona"},
            { id: "SGD", name: "Singapore Dollar"},
            { id: "SHP", name: "Saint Helena Pound"},
            { id: "SLL", name: "Sierra Leonean Leone"},
            { id: "SLS", name: "Somaliland Shilling"},
            { id: "SOS", name: "Somali Shilling"},
            { id: "SRD", name: "Surinamese Dollar"},
            { id: "SSP", name: "South Sudanese Pound"},
            { id: "STN", name: "São Tomé and Príncipe Dobra"},
            { id: "SYP", name: "Syrian Pound"},
            { id: "SZL", name: "Swazi Lilangeni"},
            { id: "THB", name: "Thai Baht"},
            { id: "TJS", name: "Tajikistani Somoni"},
            { id: "TMT", name: "Turkmenistan Manat"},
            { id: "TND", name: "Tunisian Dinar"},
            { id: "TOP", name: "Tongan Paʻanga"},
            { id: "TRY", name: "Turkish Lira"},
            { id: "TTD", name: "Trinidad and Tobago Dollar"},
            { id: "TVD", name: "Tuvaluan Dollar"},
            { id: "TWD", name: "New Taiwan Dollar"},
            { id: "TZS", name: "Tanzanian Shilling"},
            { id: "UAH", name: "Ukrainian Hryvnia"},
            { id: "UGX", name: "Ugandan Shilling"},
            { id: "USD", name: "United States Dollar"},
            { id: "UYU", name: "Uruguayan Peso"},
            { id: "UZS", name: "Uzbekistani Soʻm"},
            { id: "VES", name: "Venezuelan Bolívar Soberano"},
            { id: "VND", name: "Vietnamese Dồng"},
            { id: "VUV", name: "Vanuatu Vatu"},
            { id: "WST", name: "Samoan Tālā"},
            { id: "XAF", name: "Central African CFA Franc"},
            { id: "XCD", name: "Eastern Caribbean Dollar"},
            { id: "XOF", name: "West African CFA Franc"},
            { id: "XPF", name: "CFP Franc"},
            { id: "YER", name: "Yemeni Rial"},
            { id: "ZAR", name: "South African Rand"},
            { id: "ZMW", name: "Zambian Kwacha"}
        ]
    },
    methods: {
        getRate : function() {
            this.loading_text = "Please Wait...";
            axios({
                // https://rapidapi.com/fyhao/api/currency-exchange/endpoints
                "method": "GET",
                "url": "https://currency-exchange.p.rapidapi.com/exchange",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
                    "x-rapidapi-key": "666b5b2c8fmsh20f533fe87c23ddp1ed0cajsna0d1db16b77f"
                }, "params": {
                "q": "1.0",
                "from": this.from_currency,
                "to": this.to_currency
                }
                })
                .then((response)=>{
                    if(response.data !== 0){
                        this.loading_text = "";
                        this.cached_results.unshift({
                            from_currency: this.from_currency,
                            to_currency: this.to_currency,
                            from_value: Number(this.exchange_value),
                            to_value: response.data * Number(this.exchange_value)
                        });
                        if(this.cached_results.length > 16){
                            this.cached_results.pop();
                        }
                    } else {
                        this.loading_text = "Uh-oh! Couldn't convert!";
                    }
                })
                .catch((error)=>{
                    this.loading_text = "Oops! Something went wrong!";
                    console.log(error);
                })
        },
        sort : function() {
            this.cached_results.sort(function(a, b) {
                return a.to_value / a.from_value - b.to_value / b.from_value;
            });
        },
        remove_all : function() {
            this.cached_results = [];
        },
        get : function(exchange) {
            this.from_currency = exchange.from_currency;
            this.to_currency = exchange.to_currency;
        },
        remove : function(to_remove) {
            let i = this.cached_results.indexOf(to_remove);
            if(i >= 0){
                this.cached_results.splice(i, 1);
            }
        },
        reverse : function() { this.cached_results.reverse(); },
        switch_c : function() {
            let temp = this.from_currency;
            this.from_currency = this.to_currency;
            this.to_currency = temp;
        }
    }
});