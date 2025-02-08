import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

export default function VerticalMenu() {
    return (
        <List sx={{ width: 250, bgcolor: "background.paper" }}>
            <ListItemButton
                component={Link}
                to='/'
            >
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home' />
            </ListItemButton>

            <ListItemButton
                component={Link}
                to='/about'
            >
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary='About' />
            </ListItemButton>

            <ListItemButton
                component={Link}
                to='/sign-in'
            >
                <ListItemIcon>
                    <LoginIcon />
                </ListItemIcon>
                <ListItemText primary='Sign In' />
            </ListItemButton>

            <ListItemButton
                component={Link}
                to='/sign-up'
            >
                <ListItemIcon>
                    <AppRegistrationIcon />
                </ListItemIcon>
                <ListItemText primary='Sign Up' />
            </ListItemButton>

            <Divider />

            <ListItemButton
                component={Link}
                to='/settings'
            >
                <ListItemText primary='Settings' />
            </ListItemButton>
        </List>
    );
}
