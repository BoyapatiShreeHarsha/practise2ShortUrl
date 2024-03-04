import { AppBar, Button, TextField, styled } from "@mui/material";

export const StyledAppbar = styled(AppBar)(({ theme })=>({
    '&.MuiAppBar-root': {
        width: "100%",
        margin: "0 auto",
        background:"transparent",
        color: "black",
        fontSize: "18px",
        fontFamily: "poppins",
        boxShadow:"none",
        [theme.breakpoints.up("sm")]:{
            width:"80%",
        }
    },
    '& .MuiContainer-root':{
        padding:"0px",
    }

}))


export const StyledButtons = styled(Button)({
    '&.MuiButton-root':{
        borderRadius:"50px",
        fontSize: "18px",
        fontFamily: "poppins",
        fontWeight:500,
        textDecoration:"none",
    }
});

export const StyledForm = styled(TextField)({
    '&.MuiTextField-root':{
        backgroundColor:"white",
        borderRadius:"9px"
    },
    '& .MuiOutlinedInput-root.Mui-focused':{
        borderColor:"hsl(180, 66%, 49%)",
        borderRadius:"9px"
    },
    '& .MuiInputBase-input':{
        fontFamily:"poppins",
        fontSize:"larger",
        fontWeight:500,
    },
    '& .MuiOutlinedInput-root:hover':{
        borderRadius:"9px",
        border:"none"
    },
    
    
})