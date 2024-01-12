import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Map1 = () => {
  return (
    <View style={styles.map}>
      <Image
        style={styles.mapIcon}
        contentFit="cover"
        source={require("../assets/map.png")}
      />
      <View style={[styles.deliverCard, styles.deliverCardLayout]}>
        <View style={[styles.deliverCardChild, styles.iconPosition]} />
        <View style={[styles.deliverCardItem, styles.deliverCardBorder]} />
        <Text style={[styles.text, styles.textFlexBox]}>$5.50</Text>
        <Text style={[styles.boxOfHeart, styles.estimatedTypo]}>
          01 Box of heart
        </Text>
        <View style={[styles.goods, styles.goodsLayout]}>
          <View style={styles.goodsChild} />
          <Image
            style={[styles.cValentinesGiftIcon, styles.goodsLayout]}
            contentFit="cover"
            source={require("../assets/0410cvalentinesgift.png")}
          />
        </View>
        <View style={[styles.deliverCardInner, styles.deliverCardBorder]} />
        <Image
          style={styles.contactsIcon}
          contentFit="cover"
          source={require("../assets/contacts-icon.png")}
        />
        <View style={[styles.deliver, styles.deliverLayout]}>
          <Text style={[styles.jeanDeon20Container, styles.textFlexBox]}>
            <Text style={styles.jeanDeon20Container1}>
              <Text style={styles.jeanDeon}>
                <Text style={styles.jeanDeon1}>{`Jean Deon
`}</Text>
              </Text>
              <Text style={styles.minsEstimated}>
                <Text style={styles.jeanDeon}>20 mins</Text>
                <Text style={styles.text1}>{` `}</Text>
                <Text style={styles.estimatedTypo}>estimated</Text>
              </Text>
            </Text>
          </Text>
          <Image
            style={[styles.avatarIcon, styles.deliverLayout]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
        </View>
      </View>
      <Image
        style={styles.mapChild}
        contentFit="cover"
        source={require("../assets/group-17.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  deliverCardLayout: {
    height: 243,
    width: 374,
    position: "absolute",
  },
  iconPosition: {
    top: 0,
    left: 0,
  },
  deliverCardBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
  },
  estimatedTypo: {
    fontWeight: "300",
    fontFamily: FontFamily.poppins,
  },
  goodsLayout: {
    height: 79,
    width: 79,
    position: "absolute",
  },
  deliverLayout: {
    height: 60,
    position: "absolute",
  },
  mapIcon: {
    top: -700,
    left: -215,
    width: 1686,
    height: 1788,
    position: "absolute",
  },
  deliverCardChild: {
    borderRadius: Border.br_xl,
    shadowColor: "rgba(68, 63, 137, 0.3)",
    shadowOffset: {
      width: 0,
      height: 40,
    },
    shadowRadius: 200,
    elevation: 200,
    shadowOpacity: 1,
    left: 0,
    height: 243,
    width: 374,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  deliverCardItem: {
    top: 15,
    left: 160,
    borderColor: Color.colorGainsboro,
    borderTopWidth: 4,
    width: 54,
    height: 4,
  },
  text: {
    top: 165,
    fontSize: FontSize.size_xl,
    width: 87,
    fontFamily: FontFamily.poppins,
    lineHeight: 34,
    left: 19,
  },
  boxOfHeart: {
    top: 199,
    lineHeight: 17,
    width: 117,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    position: "absolute",
    left: 19,
  },
  goodsChild: {
    top: 5,
    left: 5,
    borderRadius: 8,
    backgroundColor: Color.colorLavender_100,
    width: 69,
    height: 69,
    position: "absolute",
  },
  cValentinesGiftIcon: {
    left: 0,
    top: 0,
  },
  goods: {
    top: 151,
    left: 280,
  },
  deliverCardInner: {
    top: 138,
    borderColor: "#eaeaf1",
    borderTopWidth: 1,
    width: 336,
    height: 1,
    left: 19,
  },
  contactsIcon: {
    top: 60,
    left: 293,
    width: 61,
    height: 30,
    position: "absolute",
  },
  jeanDeon1: {
    fontSize: FontSize.size_sm,
    lineHeight: 34,
  },
  jeanDeon: {
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  text1: {
    fontFamily: FontFamily.poppins,
  },
  minsEstimated: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
  },
  jeanDeon20Container1: {
    width: "100%",
  },
  jeanDeon20Container: {
    top: 4,
    left: 70,
    display: "flex",
    alignItems: "center",
    width: 123,
  },
  avatarIcon: {
    width: 60,
    left: 0,
    top: 0,
  },
  deliver: {
    top: 45,
    width: 193,
    left: 19,
  },
  deliverCard: {
    top: 527,
    left: 20,
  },
  mapChild: {
    top: 790,
    width: 414,
    height: 106,
    left: 0,
    position: "absolute",
  },
  map: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default Map1;
