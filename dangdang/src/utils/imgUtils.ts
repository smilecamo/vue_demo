type ImgMap = {
  [key: string]: {
    default: string;
  };
};
import goodStorage from "good-storage";
export class LmgUtil {
  static imgList: Record<string, string> = {};
  // 存储img到本地
  static storageImgList() {
    this.loadAllImg();
    this.imgList = goodStorage.get("imgList") || {};
    if (this.isEmpty()) {
      this.loadAllImg();
      goodStorage.set("imgList", this.imgList);
    }
  }
  // 判断是否为空
  static isEmpty() {
    return !Object.getOwnPropertyNames(this.imgList).length;
  }
  static getImg(imgName: string) {
    return LmgUtil.imgList[imgName];
  }
  // 加载所有图片
  static async loadAllImg() {
    // 获取到图片路径
    const imgMap = import.meta.glob("../assets/img/**/*.png");
    let absolutePath = ""; // 绝对路径
    let imgName = ""; // 图片名称

    for (const relativePath in imgMap) {
      imgMap[relativePath]().then((mod) => {
        console.log(absolutePath, mod.default);
      });
      // absolutePath = relativePath;
      // if (absolutePath) {
      //   imgName = absolutePath.substring(absolutePath.lastIndexOf("/") + 1);
      //   this.imgList[imgName] = absolutePath;
      // }
    }
  }
}

export default LmgUtil.getImg;
