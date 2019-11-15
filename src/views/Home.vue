<template>
  <div class="home">

    <div class="home__menu" v-if="menu == 0">
      <header class="menu__logo">
        <h1 class="menu__logoText">Clicking Town</h1>
      </header>
      <GameTextButton v-on:click="changeMenu(1)">
        New Game
      </GameTextButton>
      <GameTextButton v-on:click="changeMenu(2)">
        Load Game
      </GameTextButton>
      <GameTextButton v-on:click="changeMenu(3)">
        About
      </GameTextButton>
    </div>

    <div class="home__menu" v-if="menu == 1">
      <header class="menu__logo">
        <h1 class="menu__logoText">New Game</h1>
      </header>
      <label for="saveName">Save Name</label>
      <input type="text" name="saveName" id="saveName">
      <GameTextButton>
        Start New Game
      </GameTextButton>
    </div>

    <div class="home__menu" v-if="menu == 2">
      <header class="menu__logo">
        <h1 class="menu__logoText">Load Game</h1>
      </header>
      <div class="saveGame" v-for="(save, key) in saves" v-bind:key="key">
        <span class="saveGame__name">
          {{ save.name || 'Empty' }}
        </span>
        <ul class="saveGame__resources">
          <li class="resourcesItem" v-for="(value, name) in save.resources" v-bind:key="name">
            <span class="resourcesItem__name">
              {{ name }}
            </span>
            <span class="resourcesItem__value">
              {{ value }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="home__menu" v-if="menu == 3">
      <header class="menu__logo">
        <h1 class="menu__logoText">About</h1>
      </header>
      <article class="credits">
        <section>
          <header>
            License
          </header>
        </section>
      </article>
    </div>

    <footer class="game__footer">
      <small>
        Made by Eryk Miszczuk
      </small>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import GameTextButton from "@/components/GameTextButton.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    GameTextButton
  },
  data() {
    return {
      menu: 0,
      saves: [
        {
          name: undefined,
          resources: {
            food: 0,
            materials: 0,
            weapons: 0,
            culture: 0,
            knowledge: 0,
          }
        }
      ]
    }
  },
  methods: {
    changeMenu(pageNuber) {
      this.menu = pageNuber
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 240px;
  max-width: 100%;
  height: 100vh;
  min-height: 360px;
  max-height: 100vh;
  background-color: #0C1122;
  background-image: url("../assets/menu_background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
  background-position: bottom;
}

.home__menu {
  display: flex;
  flex-direction: column;
  max-width: 60rem;
}

.menu__logoText {
  color: aliceblue;
  font-family: 'Rubik', sans-serif;
  font-size: 3rem;
}

.game__footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  max-height: 2rem;
  background-color: hsl(226, 48%, 8%);
  text-align: center;
  color: whitesmoke;
  font-family: 'Open Sans'
}
</style>
