export function filterByGreatPrice(products) {
  const minor = -1;
  products.sort((a, b) => {
    if (b.price - a.price) {
      return minor;
    }
    return true;
  });
  return products;
}

export function filterByMinorPrice(products) {
  products.sort((a, b) => {
    const minor = -1;
    if (a.price - b.price) {
      return minor;
    }
    return true;
  });
  return products;
}

export function filterByAlfabetic(products) {
  const minor = -1;
  return products.sort((x, y) => {
    if (x < y) {
      return 1;
    } return minor;
  });
}
