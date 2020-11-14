import React, { memo, useMemo } from "react";
import md from "../../utils/mdRenderer";

const PreviewWysiwyg = ({ data }) => {
  const html = useMemo(() => md.render(data || ""), [data]);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} style={{ width: "100%" }} />
  );
};

export default PreviewWysiwyg;
