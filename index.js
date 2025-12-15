const texts = ["Frontend Developer", "Web Designer", "Creative Coder"];
let count = 0;       
let index = 0;       
let currentText = "";
let deleting = false; 

function type() {
    currentText = texts[count];

    if (!deleting) {
        
        document.querySelector(".typing-text").textContent = currentText.slice(0, index + 1);
        index++;

        if (index === currentText.length) {
            
            deleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        
        document.querySelector(".typing-text").textContent = currentText.slice(0, index - 1);
        index--;

        if (index === 0) {
            
            deleting = false;
            count = (count + 1) % texts.length;
        }
    }

    setTimeout(type, deleting ? 50 : 120); 
}

type();
