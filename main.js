
document.addEventListener("DOMContentLoaded", function() {
    // Image slider functionality
    let currentIndex = 0;
    const images = document.querySelectorAll('.slider img');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Change image every 3 seconds

    // Form validation functionality
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const fname = document.querySelector('#fname').value;
        const lname = document.querySelector('#lname').value;
        const email = document.querySelector('#email').value;
        const subject = document.querySelector('#subject').value;
        const message = document.querySelector('#mess').value;

        if (!fname || !lname || !email || !subject || !message) {
            event.preventDefault();
            alert('Please fill in all fields.');
        } else {
            
            Swal.fire({
                title: "Thank you!",
                text: "Message sent successfully.",
                icon: "success"
              });
        }
    });

    // Initial image display
    showImage(currentIndex);
});
//

    