export default class Building {
  constructor(name, produces, resourcesRequired, level = 0) {
    this.name = name;
    this.produces = produces;
    this.resourcesRequired = resourcesRequired;
    this.level = level;
  }
}
