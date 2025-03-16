export default class Feature {
  constructor(title, desc, ico) {
    this.title = title;
    this.desc = desc;
    this.appName = "";
    this.ico = ico;
  }

  getImageSrc() {
    return `/screenshots/${this.appName}/${this.title}.png`;
  }
}
