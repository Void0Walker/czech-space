import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ArchiveIcon from "@material-ui/icons/Archive";
import Router, { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  // selectedItem: {
  //   borderBottom: "2px solid #1587C0",
  // },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function MobileList({ toggleDrawer, navigationPages }) {
  let path = useRouter();
  path = path.pathname;
  const classes = useStyles();
  console.log(path);

  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-label="main mailbox folders"
        style={{ padding: 0 }}
      >
        <ListItem button style={{ background: "#003F5F" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <div>
              <img src={"/logo.png"} alt="cso" style={{ width: "70%" }}></img>
            </div>
            <IconButton
              onClick={toggleDrawer("top", false)}
              style={{
                width: "35px",
                height: "35px",
                borderRadius: 0,
                marginTop: 4,
              }}
            >
              <CloseIcon
                style={{
                  width: "35px",
                  height: "auto",
                  color: "white",
                }}
              />
            </IconButton>
          </div>
        </ListItem>
        <Divider />
        <ListItem button onClick={toggleDrawer("top", false, "/")}>
          <ListItemIcon
            style={{
              color: path && path === "/" ? "#f44336" : "black",
            }}
          >
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary="DOMU"
            primaryTypographyProps={{
              style: {
                fontWeight: path && path === "/" ? 700 : 500,
                color: path && path === "/" ? "#f44336" : "",
              },
            }}
          />
        </ListItem>
        <ListItem button onClick={toggleDrawer("top", false, "/cs/aktuality")}>
          <ListItemIcon
            style={{
              color: path && path === "/cs/aktuality" ? "#f44336" : "black",
            }}
          >
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText
            primary="AKTUALITY"
            primaryTypographyProps={{
              style: {
                fontWeight: path && path === "/cs/aktuality" ? 700 : 500,
                color: path && path === "/cs/aktuality" ? "#f44336" : "",
              },
            }}
          />
        </ListItem>
        <ListItem
          button
          onClick={toggleDrawer("top", false, "/cs/prilezitosti")}
        >
          <ListItemIcon
            style={{
              color: path && path === "/cs/prilezitosti" ? "#f44336" : "black",
            }}
          >
            <FlashOnIcon />
          </ListItemIcon>
          <ListItemText
            primary="PŘÍLEŽITOSTI"
            primaryTypographyProps={{
              style: {
                fontWeight: path && path === "/cs/prilezitosti" ? 700 : 500,
                color: path && path === "/cs/prilezitosti" ? "#f44336" : "",
              },
            }}
          />
        </ListItem>
        <ListItem button onClick={toggleDrawer("top", false, "/cs/o-nas")}>
          <ListItemIcon
            style={{
              color: path && path === "/cs/o-nas" ? "#f44336" : "black",
            }}
          >
            <InfoIcon />
          </ListItemIcon>
          <ListItemText
            primary="O NÁS"
            primaryTypographyProps={{
              style: {
                fontWeight: path && path === "/cs/o-nas" ? 700 : 500,
                color: path && path === "/cs/o-nas" ? "#f44336" : "",
              },
            }}
          />
        </ListItem>
        <ListItem button onClick={toggleDrawer("top", false, "/cs/archiv")}>
          <ListItemIcon
            style={{
              color: path && path === "/cs/archiv" ? "#f44336" : "black",
            }}
          >
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText
            primary="ARCHIV"
            primaryTypographyProps={{
              style: {
                fontWeight: path && path === "/cs/archiv" ? 700 : 500,
                color: path && path === "/cs/archiv" ? "#f44336" : "",
              },
            }}
          />
        </ListItem>
      </List>
    </div>
  );
}
