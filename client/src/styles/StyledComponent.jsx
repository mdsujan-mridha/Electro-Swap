import { styled } from "@mui/material";


export const VisuallyHiddenInput = styled("input")({
    border: 0,
    height: 1,
    clip: "rect(0,0,0)",
    width: 1,
    margin: -1,
    padding: 0,
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
});