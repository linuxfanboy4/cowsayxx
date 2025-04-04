document.getElementById('search').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const resultDiv = document.getElementById('result');

  const animals = {
    elephant: {
      description: 'An elephant is the largest land mammal with a long trunk and large ears.',
      url: 'https://raw.githubusercontent.com/linuxfanboy4/cowsayxx/refs/heads/main/arts/elephant.txt'
    },
    fish: {
      description: 'A fish is an aquatic animal with gills and fins, living in water.',
      url: 'https://raw.githubusercontent.com/linuxfanboy4/cowsayxx/refs/heads/main/arts/fish.txt'
    },
    horse: {
      description: 'A horse is a large, domesticated mammal used for riding and racing.',
      url: 'https://raw.githubusercontent.com/linuxfanboy4/cowsayxx/refs/heads/main/arts/horse.txt'
    },
    owl: {
      description: 'An owl is a nocturnal bird known for its wisdom and ability to turn its head 270 degrees.',
      url: 'https://raw.githubusercontent.com/linuxfanboy4/cowsayxx/refs/heads/main/arts/owl.txt'
    },
    tux: {
      description: 'Tux is the official mascot of the Linux kernel, often depicted as a penguin.',
      url: 'https://raw.githubusercontent.com/linuxfanboy4/cowsayxx/refs/heads/main/arts/tux.txt'
    }
  };

  if (animals[searchTerm]) {
    const wgetCommand = `wget ${animals[searchTerm].url}`;
    resultDiv.innerHTML = `<strong>${animals[searchTerm].description}</strong><pre>${wgetCommand}</pre>`;
  } else {
    resultDiv.innerHTML = 'No matching animal found.';
  }
});
