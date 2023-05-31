var images = [
    "{% static 'hal.jpg' %}",
    "{% static 'tip.jpg' %}",
    "{% static 'ti.jpg' %}"
    // Add more image paths here
  ];

  var currentIndex = 0;

  function switchImage(direction) {
    currentIndex += direction;

    // Wrap around if index goes beyond the array length
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    var image = document.getElementById("image");
    image.src = images[currentIndex];
  }