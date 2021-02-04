const inputs = document.querySelectorAll('input[type="text"]');

let passbook = {};

const handleInputChange = e => {
    if (e?.target?.name) passbook[e.target.name] = e.target.value;
}

inputs.forEach(input => input.addEventListener('change', handleInputChange));
