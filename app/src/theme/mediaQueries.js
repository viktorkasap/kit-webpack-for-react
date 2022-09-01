const initial = {
  min320: '',
  min480: '',
  min768: '',
  min1024: '',
  min1280: '',
  min1366: '',
  min1440: '',
  min1680: '',
  min1920: '',
  max320: '',
  max480: '',
  max768: '',
  max1024: '',
  max1280: '',
  max1366: '',
  max1440: '',
  max1680: '',
  max1920: '',
};

const breakpoints = [320, 480, 768, 1024, 1280, 1366, 1440, 1680, 1920];

export const mediaQueries = breakpoints.reduce((queries, width) => {
  const min = `@media screen and (min-width: ${width}px)`;
  const max = `@media screen and (max-width: ${width - 1}px)`;

  return {
    ...queries,
    [`min${width}`]: `${min}`,
    [`max${width}`]: `${max}`,
  };
}, initial);
