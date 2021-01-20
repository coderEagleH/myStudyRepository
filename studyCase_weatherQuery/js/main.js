/* 

    请求地址：http://wthrcdn.etouch.cn/weather_mini
    请求方式：get
    请求参数：city(城市名)
    相应内容：天气信息

*/
var app = new Vue({
    el: "#skyKnow",
    data: {
        cities: ['北京', '上海', '广州', '深圳', '重庆'],
        city: "",
        topCity: "",
        weatherList: []
    },
    methods: {
        searching: function () {
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(
                function (responce) {
                    that.weatherList = responce.data.data.forecast;
                    that.topCity = that.city;
                },
                function (err) {

                })
        },
        clickSearch: function (index) {
            this.city = this.cities[index];
            this.searching();
        },
        onFocus: function () {
            this.city = "";
        }
    }
})
