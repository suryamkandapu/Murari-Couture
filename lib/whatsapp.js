export function generateWhatsAppLink(product = null, selectedSize = null, selectedColor = null, productUrl = null) {
  const phone = '916303134161';
  let message = 'Hi Murari Couture';

  if (product) {
    message += `, I am interested in the ${product.name}.`;
    if (selectedSize) message += ` Size: ${selectedSize},`;
    if (selectedColor) message += ` Color: ${selectedColor}.`;
    if (productUrl) message += ` Here is the product link: ${productUrl}`;
  } else {
    message += ', I\'m interested in custom blouse designs';
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}