import React, { forwardRef } from "react";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import Link from "next/link";
import { useRouter } from "next/router";

function getAsString(value) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export default function PaginationCSO({ totalPages }) {
  const { query } = useRouter();

  return (
    <Pagination
      showFirstButton
      showLastButton
      color="secondary"
      shape="rounded"
      page={parseInt(getAsString(query.page) || "1")}
      count={totalPages}
      renderItem={(item) => (
        <PaginationItem
          component={MaterialUiLink}
          query={query}
          item={item}
          {...item}
        />
      )}
    />
  );
}

const MaterialUiLink = forwardRef(({ item, query, ...props }, ref) => (
  <Link
    href={{
      // pathname: "/cs/aktuality",
      pathname: props.pathname,
      query: { ...query, page: item.page },
    }}
  >
    <a {...props} ref={ref}></a>
  </Link>
));
