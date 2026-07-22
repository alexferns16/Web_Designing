document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("numberForm");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        
        const sum = num1 + num2;
        const difference = num1 - num2;
        const product = num1 * num2;
        const quotient = num1 / num2;
        
        // Save the calculated values in URL parameters
        const queryParams = new URLSearchParams({
            sum: sum,
            difference: difference,
            product: product,
            quotient: quotient
        });
        
        // Redirect to the result page with the calculated values
        window.location.href = "result.html?" + queryParams.toString();
    });
});
