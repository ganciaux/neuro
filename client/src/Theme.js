import { createTheme } from "@mui/material/styles";
import {blue} from "@mui/material/colors"

export const theme = createTheme({
    palette:{
        primary:{
            main: blue[100]
        },
    },
    myButton:{
        color: blue[500],
        boder: "1px solid black",
        backgroundColor:"red"
    }
})