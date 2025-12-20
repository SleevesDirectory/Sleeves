<script>
  // Get all letters
  const letters = document.querySelectorAll('.letter');

  letters.forEach(letter => {
    letter.addEventListener('click', () => {
      // Identify corresponding artist list by ID
      const id = 'letter-' + letter.textContent.trim();
      const artistList = document.getElementById(id);

      if (artistList) {
        // Toggle display
        artistList.style.display = (artistList.style.display === 'none' || artistList.style.display === '') ? 'block' : 'none';
      }
    });
  });

  // Optional: toggle artist links
  const artists = document.querySelectorAll('.artist');

  artists.forEach(artist => {
    artist.addEventListener('click', () => {
      const links = artist.querySelector('.artist-links');
      if (links) {
        links.style.display = (links.style.display === 'none' || links.style.display === '') ? 'block' : 'none';
      }
    });
  });
</script>


