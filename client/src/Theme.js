import { createTheme } from "@mui/material/styles";
import {blue, purple} from "@mui/material/colors"

export const theme = createTheme({
    palette:{
        primary:{
            main: purple[400]
        },
        secondary: {
            main: purple[100]
        }
    },
    myButton:{
        color: blue[500],
        boder: "1px solid black",
        backgroundColor:"red"
    },
    
})
