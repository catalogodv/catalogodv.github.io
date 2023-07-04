function sendToWhatsApp(item) {
    // Replace 'YOUR_API_URL' with the actual URL of your WhatsApp API
    const apiUrl = 'https://wa.me/5532999767716';
  
    // Replace 'YOUR_PHONE_NUMBER' with the phone number to which you want to send the message
    const phoneNumber = '32999767716';
  
    // Create the message with the item information
    const message = `Olá! Gostaria de comprar o item: ${item}`;
  
    // Construct the URL for the WhatsApp API with the appropriate parameters
    const url = `${apiUrl}?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
    // Open the URL in a new tab or window to initiate the conversation in WhatsApp
    window.open(url, '_blank');
  }
  