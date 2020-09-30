import React from "react";
import { Grid, Typography } from "@material-ui/core";
import BreadCrumbs from "../../../components/common/BreadCrumbs";

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
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const pageTitle = "Archiv | Czech Space";

  const page = "/cs/archiv";
  const bredCrumbPages = {
    subpageName: "Archiv",
    subpagePath: "/cs/archiv",
  };

  return {
    props: { page, pageTitle, bredCrumbPages }, // will be passed to the page component as props
  };
}
