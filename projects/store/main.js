const userSurname = document.getElementById('surname');
const userName = document.getElementById('name');
const goodsElements = document.querySelectorAll('input[type="checkbox"]');
const countElements = document.querySelectorAll('input[type="number"]');
const btn = document.getElementById('sumBTN');
const resultElem = document.getElementById('totalCost');

const prices = {
    'Choice1': 80,
    'Choice2': 110,
    'Choice3': 120,
    'Choice4': 90,
    'Choice5': 80,
    'Choice6': 90,
    'Choice7': 100
};

function calculateTotal() {
    let total = 0;
    goodsElements.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const quantityStr = countElements[index].value;
            const priceStr = prices[checkbox.id];
            const quantity = parseInt(quantityStr);
            const price = parseFloat(priceStr);

            if (!isNaN(quantity) && !isNaN(price) && quantity >= 0 && quantityStr.trim() !== '0') {
                total += quantity * price;
            } else {
                console.error(`Ошибка при расчете для ${checkbox.id}: quantity = ${quantityStr}, price = ${priceStr}`);
                alert(`Некорректное значение количества "${quantityStr}" для "${checkbox.id}". Пожалуйста, введите число больше или равное 1.`);
            }
        }
    });
    resultElem.textContent = isNaN(total) ? 'Ошибка расчета' : `${total.toFixed(2)} р.`;
}

goodsElements.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        const quantityInput = countElements[index];
        if (checkbox.checked) {
            quantityInput.value = 1;
        } else {
            quantityInput.value = 0;
        }
        calculateTotal();
    });
    countElements[index].addEventListener('change', () => {
        const quantityStr = countElements[index].value;
        if (quantityStr.trim() === '' || parseInt(quantityStr) < 0 || quantityStr.startsWith('0')) {
            alert(`Некорректное значение количества "${quantityStr}". Пожалуйста, введите число больше или равное 1.`);
            countElements[index].value = 1;
        }
        calculateTotal();
    });
});

btn.addEventListener('click', () => {
    const name = userName.value.trim();
    const surname = userSurname.value.trim();
    const total = resultElem.textContent;

    if (name === '' || surname === '') {
        alert('Вы не заполнили поля заказчика!');
    } else {
        alert(`Заказчик: ${name} ${surname}\nИтого: ${total}`);
    }
});
