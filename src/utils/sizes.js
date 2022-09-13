export const size = val => {
  let xs = 12;
  let sm = 16;
  let md = 24;
  let lg = 32;
  if (val === 'xs') {
    return xs;
  }
  if (val === 'sm') {
    return sm;
  }
  if (val === 'md') {
    return md;
  }
  if (val === 'lg') {
    return lg;
  }
};
