export const parsePrice = price => price / 100

export const calculateSubtotalFromLineItems = items => items.reduce((total, item) => total + item.price, 0)