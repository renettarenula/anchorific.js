import { createElement, useRef, useState, useEffect } from "react";

function useStaticContent() {
  const ref = useRef(null);
  const [render, setRender] = useState(typeof window === "undefined");

  useEffect(() => {
    // check if the innerHTML is empty as client side navigation
    // need to render the component without server-side backup
    const isEmpty = ref.current.innerHTML === "";
    if (isEmpty) {
      setRender(true);
    }
  }, []);

  return [render, ref];
}

export default function StaticContent({ children, element = "div", ...props }) {
  const [render, ref] = useStaticContent();

  // if we're in the server or a spa navigation, just render it
  if (render) {
    return createElement(element, {
      ...props,
      children,
    });
  }

  // avoid re-render on the client
  return createElement(element, {
    ...props,
    ref,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: { __html: "" },
  });
}
