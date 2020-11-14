import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";

const categoryMap = {
  News: "/cs/aktuality",
  Opportunities: "/cs/prilezitosti",
};

const CssTextField = withStyles({
  root: {
    maxWidth: "100%",
    "& label.Mui-focused": {
      // color: "white",
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "transparent",
      // color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
        // borderWidth: "2px",
        color: "black",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
        color: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
        color: "black",
      },
    },
  },
})(TextField);

export default function Asynchronous({ apiUrl, fullWidth }) {
  const router = useRouter();
  const handleTextFieldSet = (event, value) => {
    console.log(value);
    value ? router.push(`${categoryMap[value.category]}/${value.slug}`) : "";
  };

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      let response = await fetch(`${apiUrl}/articles`);
      response = await response.json();

      if (active) {
        setOptions(
          response.map((e) => {
            return {
              articleTitle: e.articleTitle,
              // articleDescription: e.articleDescription,
              slug: e.slug,
              category: e.category.categoryName,
            };
          })
        );
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="Async-search-cso"
      style={{ width: fullWidth ? "100vw" : "100%" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={handleTextFieldSet}
      getOptionSelected={(option, value) =>
        option.articleTitle === value.articleTitle
      }
      getOptionLabel={(option) => option.articleTitle}
      freeSolo
      options={options}
      loading={loading}
      renderInput={(params) => (
        <CssTextField
          {...params}
          label="Hledat..."
          variant="outlined"
          InputLabelProps={{
            style: { color: "#fff", fontSize: "1.2rem" },
          }}
          InputProps={{
            style: {
              color: "white",
            },
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
