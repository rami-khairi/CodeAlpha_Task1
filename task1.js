document.addEventListener('DOMContentLoaded', (event) => {
  const gallery = document.querySelector('.gallery');

  // Add click event to each image to open in the modal
  gallery.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', () => {
      const modal = document.getElementById("myModal");
      const modalImg = document.getElementById("img01");
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  // Function to filter images
  function filterImages(category) {
    gallery.querySelectorAll('img').forEach((img) => {
      if (category === 'all' || img.classList.contains(category)) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });

    // Remove 'active' class from all buttons
    document.querySelectorAll('.f_buttons button').forEach((button) => {
      button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    document.getElementById(category).classList.add('active');
  }

  // Attach filterImages function to the window so it can be accessed globally
  window.filterImages = filterImages;
});
