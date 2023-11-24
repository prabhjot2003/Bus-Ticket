document.addEventListener('DOMContentLoaded', function () {
    const seats = document.querySelectorAll('.seat');
    const maxSeats = 5;

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
            validateSelection();
        });
    });

    document.querySelector('button').addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        alert(`You have selected ${selectedSeats.length} seats.`);
    });

    function validateSelection() {
        const selectedSeats = document.querySelectorAll('.seat.selected');

        if (selectedSeats.length > maxSeats) {
            alert('You can only select up to 5 seats.');
            selectedSeats.forEach(seat => {
                seat.classList.remove('selected');
            });
        }

    }
});
