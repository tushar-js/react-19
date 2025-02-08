import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
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
                to='/contact'
            >
                <ListItemIcon>
                    <ContactMailIcon />
                </ListItemIcon>
                <ListItemText primary='Contact' />
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
