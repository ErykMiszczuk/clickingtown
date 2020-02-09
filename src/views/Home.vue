<template>
  <div class="home">

    <div class="home__panel"></div>

    <div class="home__main">

      <div class="home__menu" v-if="menu == 0">
        <header class="menu__logo">
          <h1 class="menu__logoText">Clicking Town</h1>
        </header>
        <div class="menu">
          <GameTextButton v-on:click="changeMenu(1)" class="--verticalDivide">
            New Game
          </GameTextButton>
          <GameTextButton v-on:click="changeMenu(2)" class="--verticalDivide">
            Load Game
          </GameTextButton>
          <GameTextButton v-on:click="changeMenu(3)" class="--verticalDivide">
            About
          </GameTextButton>
        </div>
      </div>

      <div class="home__menu" v-if="menu == 1">
        <header class="menu__logo">
          <h1 class="menu__logoText">New Game</h1>
        </header>
        <div class="menu">
          <div class="menu__form">
            <label for="saveName" class="menu__inputLabel">Save Name</label>
            <input type="text" name="saveName" id="saveName" class="menu__input" v-model="saveName" placeholder="Give Me New Name!">
          </div>
          <GameTextButton v-on:click="handleStartNewGame" class="--verticalDivide">
            Start New Game
          </GameTextButton>
          <GameTextButton v-on:click="changeMenu(0)" class="--verticalDivide">
            Go back
          </GameTextButton>
        </div>
      </div>

      <div class="home__menu" v-if="menu == 2">
        <header class="menu__logo">
          <h1 class="menu__logoText">Load Game</h1>
        </header>
        <div class="menu">
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
            <div class="saveGame__options">
              <GameTextButton>
                Load save
              </GameTextButton>
              <GameTextButton @click="handleDeleteSaveGame(save.name)">
                Delete save
              </GameTextButton>
            </div>
          </div>
          <GameTextButton @click="changeMenu(0)" class="--verticalDivide">
            Go back
          </GameTextButton>
        </div>
      </div>

      <div class="home__menu" v-if="menu == 3">
        <header class="menu__logo">
          <h1 class="menu__logoText">About</h1>
        </header>
        <div class="menu">
          <article class="credits">
            <section>
              <header>
                License
              </header>
            </section>
          </article>
          <GameTextButton v-on:click="changeMenu(0)" class="--verticalDivide">
            Go back
          </GameTextButton>
        </div>
      </div>

    </div>

    <div class="home__panel"></div>

    <footer class="home__footer">
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
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: "home",
  components: {
    HelloWorld,
    GameTextButton
  },
  data() {
    return {
      menu: 0,
      saveName: '',
    }
  },
  created() {
    this.getSavesFromLocalStorage();
  },
  methods: {
    changeMenu(pageNuber) {
      this.menu = pageNuber;
    },
    handleStartNewGame() {
      this.createNewSave({name: this.saveName});
    },
    handleDeleteSaveGame(name) {
      this.deleteSaveGame({name: name});
    },
    ...mapMutations([
      'newSave'
    ]),
    ...mapActions([
      'createNewSave',
      'deleteSaveGame',
      'getSavesFromLocalStorage'
    ])
  },
  computed: mapState({
    saves: state => state.saves,
  })
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.home {
  display: flex;
  justify-content: stretch;
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

.home__main {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: .5em
}

.menu {
  width: 50%;
}

.home__menu {
  display: flex;
  flex-direction: column;
  width: 700px;
  min-width: 240px;
  align-items: center;
}

.home__panel {
  flex: 1 1;
}

.menu__form {
  display: flex;
  flex-direction: column;
}

.menu__logoText {
  @include basicTextMixin;
  font-size: 3rem;
  text-align: center;
}

.menu__inputLabel {
  @include basicTextMixin;
}

.menu__input {
  background-color: aliceblue;
  border-style: solid;
  border-color: rgb(7, 33, 150);
  border-width: 3px;
  border-radius: .5em;
  padding: .5em;
  margin-bottom: .5em;
}

.saveGame {
  @include basicTextMixin;
  @include borderUiMixin($interactiveBlueAccent, $interactiveBlueBackground);
  padding: .5em;
}

.saveGame__resources {
  @include borderUiMixin($inactiveGreyAccent, $noBackground);
  padding: .5em;
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.saveGame__options {
  display: flex;
}

.home__footer {
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

@media screen and (max-width: 702px) {
  .home__panel {
    width: 0;
    display: none;
  }

  .home__menu {
    width: 100%;
  }
}

@media screen and (max-width: 570px) {
  .menu {
    width: 65%;
  }
}
</style>
