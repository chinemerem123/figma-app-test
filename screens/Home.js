import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Text style={[styles.hiVintory, styles.hiVintoryLayout]}>
        Hi, Vintory
      </Text>
      <Text style={[styles.enjoyShopping, styles.epayTypo]}>
        Enjoy shopping!
      </Text>
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={[styles.harpParent, styles.text1Position]}>
        <View style={[styles.harp, styles.harpLayout]}>
          <View style={[styles.harpChild, styles.harpLayout]} />
          <Image
            style={styles.cValentinesCloudIcon}
            contentFit="cover"
            source={require("../assets/1110cvalentinescloud.png")}
          />
        </View>
        <View style={[styles.discount, styles.discountLayout]}>
          <Text style={[styles.text, styles.textLayout]}>20%</Text>
          <Text style={styles.discountWithEpayContainer}>
            <Text style={styles.discountWith}>{`Discount with `}</Text>
            <Text style={styles.epayTypo}>ePay</Text>
            <Text style={styles.discountWith}> Payments</Text>
          </Text>
          <Text style={[styles.seeMore, styles.epayTypo]}>See more</Text>
          <View style={[styles.discountChild, styles.discountLayout]} />
          <Image
            style={styles.combinedShapeIcon}
            contentFit="cover"
            source={require("../assets/combined-shape1.png")}
          />
        </View>
        <View style={[styles.boxOfHeart, styles.boxLayout]}>
          <View style={[styles.boxOfHeartChild, styles.boxLayout]} />
          <Image
            style={[styles.maskGroupIcon, styles.boxLayout]}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
          <Text style={[styles.text1, styles.textLayout]}>$5.50</Text>
          <Text style={[styles.boxOfHeart1, styles.boxOfHeart1Typo]}>
            Box of heart
          </Text>
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/add-icon.png")}
          />
        </View>
        <View style={[styles.loverLocker, styles.loverLayout]}>
          <View style={[styles.loverLockerChild, styles.loverLayout]} />
          <Image
            style={[styles.maskGroupIcon1, styles.loverLayout]}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
          <Text style={[styles.text2, styles.textPosition]}>$19.9</Text>
          <Text style={[styles.loverLocker1, styles.textPosition]}>
            Lover locker
          </Text>
          <Image
            style={[styles.addIcon1, styles.addIconPosition]}
            contentFit="cover"
            source={require("../assets/add-icon.png")}
          />
        </View>
        <View style={[styles.mornningLove, styles.mornningLayout]}>
          <View style={[styles.mornningLoveChild, styles.mornningLayout]} />
          <Image
            style={[styles.maskGroupIcon2, styles.mornningLayout]}
            contentFit="cover"
            source={require("../assets/mask-group2.png")}
          />
          <Text style={[styles.text3, styles.textPosition]}>$19.9</Text>
          <Text style={[styles.morningLove, styles.textPosition]}>
            Morning love
          </Text>
          <Image
            style={[styles.addIcon2, styles.addIconPosition]}
            contentFit="cover"
            source={require("../assets/add-icon.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hiVintoryLayout: {
    width: 237,
    lineHeight: 34,
    left: 39,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  epayTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  text1Position: {
    left: 19,
    position: "absolute",
  },
  harpLayout: {
    height: 220,
    width: 178,
    position: "absolute",
  },
  discountLayout: {
    height: 180,
    width: 178,
    position: "absolute",
  },
  textLayout: {
    width: 87,
    lineHeight: 34,
  },
  boxLayout: {
    height: 210,
    position: "absolute",
  },
  boxOfHeart1Typo: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    width: 117,
    lineHeight: 17,
  },
  loverLayout: {
    height: 281,
    top: 0,
    width: 178,
    position: "absolute",
  },
  textPosition: {
    left: 18,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  addIconPosition: {
    left: 139,
    height: 25,
    width: 25,
    position: "absolute",
  },
  mornningLayout: {
    height: 200,
    top: 0,
    width: 178,
    position: "absolute",
  },
  hiVintory: {
    top: 68,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppins,
  },
  enjoyShopping: {
    top: 102,
    fontSize: FontSize.size_3xl,
    width: 237,
    lineHeight: 34,
    left: 39,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  menuIcon: {
    top: 75,
    left: 350,
    width: 24,
    height: 16,
    position: "absolute",
  },
  homeChild: {
    top: 830,
    left: 172,
    width: 6,
    height: 6,
    position: "absolute",
  },
  harpChild: {
    backgroundColor: "#ffe5e5",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  cValentinesCloudIcon: {
    top: 16,
    left: 15,
    width: 147,
    height: 147,
    position: "absolute",
  },
  harp: {
    top: 416,
    left: 197,
  },
  text: {
    top: 30,
    fontSize: FontSize.size_21xl,
    color: "#7c78ba",
    left: 20,
    width: 87,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  discountWith: {
    fontWeight: "300",
    fontFamily: FontFamily.poppins,
  },
  discountWithEpayContainer: {
    top: 74,
    fontSize: 13,
    width: 117,
    lineHeight: 17,
    left: 20,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  seeMore: {
    top: 150,
    left: 23,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    width: 99,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  discountChild: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 2,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  combinedShapeIcon: {
    height: "7.28%",
    width: "9.55%",
    top: "70.28%",
    right: "8.43%",
    bottom: "22.44%",
    left: "82.02%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  discount: {
    top: 218,
    left: 197,
  },
  boxOfHeartChild: {
    backgroundColor: Color.colorLavender_100,
    left: 1,
    borderRadius: Border.br_xl,
    top: 0,
    width: 178,
    height: 210,
  },
  maskGroupIcon: {
    left: 0,
    top: 0,
    width: 178,
    height: 210,
  },
  text1: {
    top: 147,
    left: 19,
    position: "absolute",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
  },
  boxOfHeart1: {
    top: 181,
    left: 19,
    position: "absolute",
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppins,
  },
  addIcon: {
    left: 140,
    height: 25,
    width: 25,
    top: 171,
    position: "absolute",
  },
  boxOfHeart: {
    top: 299,
    width: 179,
    left: 0,
  },
  loverLockerChild: {
    backgroundColor: "#ffe5ed",
    borderRadius: Border.br_xl,
    left: 0,
  },
  maskGroupIcon1: {
    left: 0,
  },
  text2: {
    width: 87,
    lineHeight: 34,
    top: 218,
    fontSize: FontSize.size_3xl,
  },
  loverLocker1: {
    top: 252,
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    width: 117,
    lineHeight: 17,
  },
  addIcon1: {
    top: 242,
  },
  loverLocker: {
    left: 1,
  },
  mornningLoveChild: {
    backgroundColor: "#ffebd6",
    borderRadius: Border.br_xl,
    left: 0,
  },
  maskGroupIcon2: {
    left: 0,
  },
  text3: {
    top: 137,
    width: 87,
    lineHeight: 34,
    fontSize: FontSize.size_3xl,
  },
  morningLove: {
    top: 171,
    left: 18,
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    width: 117,
    lineHeight: 17,
  },
  addIcon2: {
    top: 161,
  },
  mornningLove: {
    left: 197,
  },
  harpParent: {
    top: 197,
    width: 375,
    height: 593,
  },
  home: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Home;
