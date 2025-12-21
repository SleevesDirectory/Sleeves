// Submit toggle
const submitTrigger = document.getElementById('submit-trigger');
const submitForm = document.getElementById('submit-form-container');

if (submitTrigger && submitForm) {
  submitTrigger.onclick = () => {
    submitForm.style.display =
      submitForm.style.display === 'block' ? 'none' : 'block';
  };
}

// Letter toggle
document.querySelectorAll('.letter').forEach(letter => {
  letter.onclick = () => {
    const target = document.getElementById('letter-' + letter.innerText);
    if (target) target.classList.toggle('fade-in');
  };
});

// Artist toggle
document.querySelectorAll('.artist').forEach(artist => {
  artist.onclick = () => {
    const links = artist.querySelector('.artist-links');
    if (links) links.classList.toggle('fade-in');
  };
});
