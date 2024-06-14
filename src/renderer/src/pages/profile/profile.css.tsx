import { SPACING_UNIT, vars } from "../../theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  padding: "24px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: `${SPACING_UNIT * 3}px`,
});

export const profileContentBox = style({
  display: "flex",
  gap: `${SPACING_UNIT + SPACING_UNIT / 2}px`,
  alignItems: "center",
  borderRadius: "4px",
  border: `solid 1px ${vars.color.border}`,
  width: "100%",
});

export const profileAvatar = style({
  width: "96px",
  height: "96px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.color.background,
  position: "relative",
});

export const profileInformation = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const profileContent = style({
  display: "flex",
  flexDirection: "row",
  gap: `${SPACING_UNIT * 4}px`,
});

export const profileGameSection = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: `${SPACING_UNIT * 2}px`,
});

export const contentSidebar = style({
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      width: "100%",
      maxWidth: "200px",
    },
    "(min-width: 1024px)": {
      maxWidth: "300px",
      width: "100%",
    },
    "(min-width: 1280px)": {
      width: "100%",
      maxWidth: "400px",
    },
  },
});

export const feedGameIcon = style({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const libraryGameIcon = style({
  height: "100%",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const feedItem = style({
  display: "flex",
  flexDirection: "row",
  gap: `${SPACING_UNIT}px`,
  width: "100%",
  height: "72px",
});

export const gameListItem = style({
  display: "flex",
  flexDirection: "row",
  gap: `${SPACING_UNIT}px`,
  width: "100%",
  height: "60px",
});

export const gameInformation = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const profileHeaderSkeleton = style({
  height: "200px",
});
