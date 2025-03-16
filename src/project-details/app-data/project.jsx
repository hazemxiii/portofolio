import "./feature";

export default class Project {
  static data = {};
  constructor(
    id,
    title,
    brief,
    description,
    gitHubLink,
    features,
    otherFeatures,
    tags,
    platforms
  ) {
    this.id = id;
    this.title = title;
    this.brief = brief;
    this.img = `/screenshots/${title}/icon.png`;
    this.description = description;
    this.gitHubLink = gitHubLink;
    for (let i = 0; i < features.length; i++) {
      features[i].appName = title;
    }
    this.otherFeatures = otherFeatures;
    this.features = features;
    this.tags = tags;
    this.platforms = platforms;
    Project.data[id] = this;
  }
}
