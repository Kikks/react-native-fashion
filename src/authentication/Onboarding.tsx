import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

// Components
import Slide, { SLIDE_HEIGHT } from "./components/Slide";
import SubSlide from "./components/SubSlide";
import Dot from "./components/Dot";
import { makeStyles, useTheme } from "../components";
import { Theme } from "../components/Theme";
import { Routes, StackNavigationProps } from "../components/Navigation";

const { width } = Dimensions.get("window");

const slides = [
  {
    label: "Relaxed",
    color: "#BFEAF5",
    title: "Find Your Outfits",
    description:
      "Confused about your outfits? Don't worry! Find the bes outfits here!",
    picture: {
      src: require("./assets/1.png"),
      height: 1800,
      width: 882.88,
    },
  },
  {
    label: "Playful",
    color: "#BEECC4",
    title: "Hear it First, Hear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas.",
    picture: {
      src: require("./assets/2.png"),
      height: 1800,
      width: 809.81,
    },
  },
  {
    label: "Excentric",
    color: "#FFE4D9",
    title: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday. ",
    picture: {
      src: require("./assets/3.png"),
      height: 1800,
      width: 748.66,
    },
  },
  {
    label: "Funky",
    color: "#FFDDDD",
    title: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality.",
    picture: {
      src: require("./assets/4.png"),
      height: 1846.25,
      width: 1500,
    },
  },
];

export const assets = slides.map((slide) => slide.picture.src);

const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, "Onboarding">) => {
  const styles = useStyles();
  const theme = useTheme();
  const scrollRef = useRef<Animated.ScrollView>(null);

  const { scrollHandler, x } = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map(({ color }) => color),
  });

  const onPress = (index: number) => {
    if (index + 1 < slides.length) {
      if (scrollRef.current) {
        scrollRef.current
          .getNode()
          .scrollTo({ x: width * (index + 1), animated: true });
      }
    } else {
      navigation.navigate("Welcome");
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map((slide, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View
              style={[
                styles.imageContainer,
                { borderBottomRightRadius: theme.borderRadii.xl, opacity },
              ]}
              key={index}
            >
              <Image
                source={slide.picture.src}
                style={[
                  {
                    width: width - theme.borderRadii.xl,
                    height:
                      ((width - theme.borderRadii.xl) * slide.picture.height) /
                      slide.picture.width,
                  },
                ]}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ label, picture }, index) => (
            <Slide
              key={label}
              {...{ label, picture }}
              right={index % 2 !== 0}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[styles.footerUnderlay, { backgroundColor }]} />
        <View style={styles.footerContent}>
          <View style={[styles.pagination]}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={[
              {
                flexDirection: "row",
                width: width * slides.length,
                transform: [{ translateX: multiply(x, -1) }],
              },
            ]}
          >
            {slides.map(({ title, description }, index) => (
              <SubSlide
                key={title}
                {...{ title, description }}
                last={index === slides.length - 1}
                onPress={() => onPress(index)}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
    backgroundColor: "cyan",
  },
  footer: {
    flex: 1,
  },
  footerUnderlay: {
    ...StyleSheet.absoluteFillObject,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    borderTopLeftRadius: theme.borderRadii.xl,
    backgroundColor: "#fff",
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    overflow: "hidden",
  },
}));

export default Onboarding;
