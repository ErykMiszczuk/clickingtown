<template>
  <div class="home">

    <div class="home__main">
      <div class="home__menu" v-if="menu == 0">
        <header class="menu__logo">
          <h1 class="menu__logoText">Clicking Town</h1>
        </header>
        <div class="menu">
          <GameTextButton @click="changeMenu(1)" class="--verticalDivide">
            New Game
          </GameTextButton>
          <GameTextButton @click="changeMenu(2)" class="--verticalDivide">
            Load Game
          </GameTextButton>
          <GameTextButton @click="changeMenu(3)" class="--verticalDivide">
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
            <input
              type="text"
              name="saveName"
              id="saveName"
              class="menu__input"
              v-model="saveName"
              placeholder="Give Me New Name!"
            />
          </div>
          <GameTextButton
            @click="handleStartNewGame"
            class="--verticalDivide"
          >
            Start New Game
          </GameTextButton>
          <GameTextButton @click="changeMenu(0)" class="--verticalDivide">
            Go back
          </GameTextButton>
        </div>
      </div>

      <div class="home__menu" v-if="menu == 2">
        <header class="menu__logo">
          <h1 class="menu__logoText">Load Game</h1>
        </header>
        <div class="menu">
          <ul class="list__saves">

            <li class="saveGame --verticalDivide" v-for="(save, key) in saves" :key="key">
              <span class="saveGame__name">
                {{ save.name || "Empty" }}
              </span>
              <ul class="saveGame__resources">
                <li
                  class="resourcesItem"
                  v-for="(value, name) in save.resources"
                  :key="name"
                >
                  <span class="resourcesItem__name">
                    {{ name }}
                  </span>
                  <span class="resourcesItem__value">
                    {{ value }}
                  </span>
                </li>
              </ul>
              <div class="saveGame__options">
                <GameTextButton accept @click="handleLoadGame(key)">
                  Load save
                </GameTextButton>
                <GameTextButton danger @click="handleDeleteSaveGame(save.name)">
                  Delete save
                </GameTextButton>
              </div>
            </li>

          </ul>
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
          <article class="credits --verticalDivide">
            <header class="credits__header">
              <h3> License for game MPL 2.0 </h3>
            </header>
            <section class="credits__elements_list">
              <header>
                <h3> Links to used resources and to their licenses </h3>
              </header>
              <article class="credits__element_list__item">
                Pixel art forest in main menu backround from <a href="https://edermunizz.itch.io/free-pixel-art-forest"> https://edermunizz.itch.io/free-pixel-art-forest </a>
              </article>
              <article class="credist__elements_list__item">
                Map tiles from <a href="https://kenney.nl/"> https://kenney.nl/ </a>
              </article>
              <article class="credist__elements_list__item">
                Fonts Open Sans and Rubik from <a href="https://fonts.google.com/?selection.family=Open+Sans:wght@400;700|Rubik:wght@400;500;700"> google fonts </a>.
              </article>
            </section>
          </article>
          <GameTextButton @click="changeMenu(0)" class="--verticalDivide">
            Go back
          </GameTextButton>
        </div>
      </div>
    </div>

    <footer class="home__footer">
      <small>
        Made by Eryk Miszczuk
      </small>
    </footer>
  </div>
</template>

<script>
import * as R from "ramda";
import GameTextButton from "@/components/GameTextButton.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    GameTextButton
  },
  data() {
    return {
      menu: 0,
      saveName: ""
    };
  },
  created() {
    this.getSavesFromLocalStorage();
  },
  methods: {
    changeMenu(pageNuber) {
      this.menu = pageNuber;
    },
    async handleStartNewGame() {
      await this.createNewSave({ name: this.saveName });
      let idOfSave = R.findIndex(R.propEq('name', this.saveName))(this.saves);
      this.setSaveAsCurrentGame({ saveId: idOfSave });
      this.$router.push('game');
    },
    handleLoadGame(saveId) {
      this.setSaveAsCurrentGame({ saveId });
      this.$router.push('game');
    },
    handleDeleteSaveGame(name) {
      this.deleteSaveGame({ name: name });
    },
    ...mapMutations(["newSave"]),
    ...mapActions([
      "createNewSave",
      "deleteSaveGame",
      "getSavesFromLocalStorage",
      "setSaveAsCurrentGame"
    ])
  },
  computed: mapState({
    saves: state => state.saves
  })
};
</script>

<style lang="scss">
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
  background-color: #0c1122;
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
  padding: 0.5em;
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
  border-radius: 0.5em;
  padding: 0.5em;
  margin-bottom: 0.5em;
}

.list__saves {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  max-height: 56vh;
}

.saveGame {
  @include basicTextMixin;
  @include borderUiMixin($interactiveBlueAccent, $interactiveBlueBackground);
  padding: 0.5em;
}

.saveGame__resources {
  @include borderUiMixin($inactiveGreyAccent, $noBackground);
  padding: 0.5em;
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.resourcesItem {
  margin-right: 0.5em;
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
  font-family: "Open Sans";
}

.credits {
  @include basicTextMixin;
  @include borderUiMixin($largeTextBackground, $largeTextAccent);
  padding: 0.5em;
}

.--verticalDivide {
  margin-bottom: 0.5em;
}

a {
  &:link, &:visited, &:hover, &:active {
    color: $linkColor;
  }
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
