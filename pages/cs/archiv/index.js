import React from "react";
import { Grid, Typography } from "@material-ui/core";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import parser from "ua-parser-js";

export default function Aktuality({ page, bredCrumbPages }) {
  return (
    <Grid
      container
      style={{ marginTop: 88 }}
      spacing={3}
      justify="flex-start"
      wrap="wrap"
    >
      <Grid item xs={12}>
        <BreadCrumbs pages={bredCrumbPages} />
      </Grid>
      <Grid item xs={12}>
        <Typography style={{ fontSize: "2rem", fontWeight: 600 }}>
          ARCHIV
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.czechspace.cz/cs/archiv" width="100%" height="800" frameborder="no" allowfullscreen="true"></iframe>',
          }}
        ></div>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const pageTitle = "Archiv | Czech Space";
  const apiUrl = process.env.API_URL;
  const ua = parser(context.req.headers["user-agent"]);
  let device = "desktop";
  if (ua.device) {
    if (ua.device.type) {
      device = ua.device.type;
    }
  }

  const page = "/cs/archiv";
  const bredCrumbPages = {
    subpageName: "Archiv",
    subpagePath: "/cs/archiv",
  };

  return {
    props: { page, pageTitle, bredCrumbPages, device, apiUrl },
  };
}
