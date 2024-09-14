import React, { memo, useEffect, useId, useRef } from "react";

import { IFRAME_SRCDOC } from "@utils/constants";

interface IProps {
  code: string;
  err: string;
}

const Preview: React.FC<IProps> = ({ code, err }) => {
  const id = useId();
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (err) return;

    ref.current!.srcdoc = IFRAME_SRCDOC;

    //* Because it takes time to sets iframe's srcDoc,
    //* we must wait a litle and then post a message!!
    setTimeout(() => {
      ref.current!.contentWindow!.postMessage(code, "*");
    }, 50);
  }, [code, err]);

  if (err) {
    return (
      <div className="previewError">
        <b>Compile Error:</b> <br /> {err}
      </div>
    );
  }

  return (
    <iframe
      ref={ref}
      title={`preview-${id}`}
      sandbox="allow-scripts"
      srcDoc={IFRAME_SRCDOC}
      className="previewIframe"
    />
  );
};

export default memo(Preview);
