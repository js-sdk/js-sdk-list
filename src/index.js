export function chunk(ls, n) {
  let l = ls;
  let res = [];
  while (l.length > 0)
    res.push(l.splice(0, n));
  return res;
}

export const reserve = n =>
  (new Array(n)).fill(null);

export const repeat = (n, value) =>
  (new Array(n)).fill(value);
