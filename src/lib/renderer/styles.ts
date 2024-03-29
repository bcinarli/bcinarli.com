export const applyStyles = (styles: { [key: string]: string }) => {
  const _styles = { ...styles };

  const apply = (styles: string | string[]) => {
    const classNames = [];

    if (Array.isArray(styles)) {
      styles.forEach((style) => classNames.push(_styles[style] ?? style));
    } else {
      classNames.push(_styles[styles] ?? styles);
    }

    return classNames.join(" ").trim();
  };

  return (style: string | string[]) => apply(style);
};
