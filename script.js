const buttons = document.querySelectorAll('.btn');
const submitBtn = document.getElementById('submit-btn');
const endingContainer = document.getElementById("end-container");
const rateContainer = document.getElementById('rate-container');
const result = document.getElementById('result');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
})
const checkResult = () => {
    const selectedValue = document.querySelector('.btn.active');
    if (selectedValue) {
        result.textContent = `You selected ${selectedValue.value} out of 5`;
        rateContainer.classList.add('hidden');
        endingContainer.classList.remove('hidden');
    }
    else {
        alert('Please give us rating.')
        return;
    }
}
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    checkResult();
});