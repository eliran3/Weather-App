<template>
  <div id="home" :class="typeof this.weather.main != 'undefined' && this.weather.weather[0].main == 'Clouds' ? 'night' : ''">
    <main>
        <ul class="list-links">
            <li class="links"><router-link :to="'/contact'">CONTACT</router-link></li>
            <li style="display: inline"><router-link :to="'/login'">LOGIN</router-link></li>
        </ul>
        <div class="search-box" v-if="!this.register">
            <input type="text" v-model="query"
            class="search-bar" placeholder="search..."
            @keypress="fetch_weather"/>
        </div>
        <div class="weather-warp"
            v-if="typeof this.weather.main != 'undefined' && !this.register">
            <div class="location-box">
            <div class="location">
                {{ this.weather.name }}, {{ this.weather.sys.country }} 
            </div>
            <div class="date">Wednesday 17</div>
            </div>
            <div class="weather-box">
            <div class="temp">{{ Math.round(this.weather.main.temp) }}°C</div>
            <div class="weather">{{ weather.weather[0].main }}</div>
            </div>
        </div>
        <div v-else-if="!this.register && this.query && typeof this.weather.main == 'undefined'">
            <div class="error">No weather for you sir!</div>
        </div>
        <div id="weather-list" v-if="!this.register" :class="!this.query && typeof this.weather.main == 'undefined' ? 'no_weather' : ''">
            <ol>
            <li v-for="item in weather_cart" :key="item">
                {{ item }}
            </li>
            </ol>
        </div>

        <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Contact from '@/views/Contact.vue'
import Login from '@/views/Login.vue'

export default {
  name: 'Home',
  components: {
    Contact,
    Login
  },
  data () {
    return {
      api_key: '5350f438cde3d0721a040bdffea36873',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      weather_cart: []
    }
  },
  methods: {
    fetch_weather(e) {
      fetch(`${this.url_base}weather?q=${this.query}
        &units=metric&appid=${this.api_key}`)
        .then(res => {
          return res.json();
        })
        .then(this.setResults);
      
      if (e.key == "Enter") {
        this.weather_cart.push(`${this.weather.name}, ${this.weather.sys.country}`);
      }
    },
    setResults(results) {
      this.weather = results;
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#home {
  background-image: url('../assets/day.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#home.night {
  background-image: url('../assets/night.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}

.search-box {
  padding-top: 5%;
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  
  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px, 16px, 0px, 16px;
  transition: 0.4s;
}

.search-box .search-bar:hover {
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  border-radius: 8px 0px 8px 0px;
}

.search-box .search-bar:focus {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  color: white;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.date {
  color: rgb(8, 119, 216);
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  font-style: italic;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.weather-box {
  background-color: purple;
  padding: 30px;
  width: 100px;
  text-align: center;
  text-justify: auto;
  margin-left: 43%;
  margin-top: 10%;
}

.weather-box .temp {
  font-size: 20px;
  text-align: justify;
  box-shadow: #313131;
}

.error {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  font-family: 'montserrat', sans-serif;
  color: rgba(255, 255, 255, 0.444);
}

#weather-list {
  color: white;
  padding: 10%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

#weather-list.no_weather {
  color: white;
  padding: 10%;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.links {
    display: inline;
    padding-right: 10px;
}

.list-links {
    text-align: center;
}

</style>
