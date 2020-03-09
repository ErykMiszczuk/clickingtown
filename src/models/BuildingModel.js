export default class Building {
  constructor(name, produces, resourcesRequired, description, imgPath = '@/assets/tiles/medieval_ruins.png', posX = 0, posY = 0, level = 0) {
    this.name = name;
    this.produces = produces;
    this.resourcesRequired = resourcesRequired;
    this.level = level;
    this.description = description;
    this.imgPath = imgPath;
    this.position = {
      x: posX,
      y: posY
    }
  }
}
