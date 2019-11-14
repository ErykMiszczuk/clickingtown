<template>
  <div class="home">
    <div class="home__menu">
      <header class="menu__logo">
        <h1 class="menu__logoText">Clicking Town</h1>
      </header>
      <GameTextButton>
        New Game
      </GameTextButton>
      <GameTextButton>
        Load Game
      </GameTextButton>
      <GameTextButton>
        About
      </GameTextButton>
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
