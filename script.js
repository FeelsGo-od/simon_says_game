// *** SHOW INFO ***
show_info_btn.addEventListener('click', () => {
    if (info.classList.contains("info-visible")) {
        info.classList.remove('info-visible')
        show_info_btn.style.background = "#fff";
        show_info_btn.style.color = "#000";
        show_info_btn.style.borderColor = "#000";
    } else {
        info.classList.add('info-visible')
        show_info_btn.style.background = "#000";
        show_info_btn.style.color = "#fff";
        show_info_btn.style.borderColor = "transparent";
    }
})

// *** START A GAME ***
play_btn.addEventListener('click', () => {
    play_btn.textContent = 'Play Again';
    playground.style.background = 'none';
    // TRANSLATE AMOUNT OF WORDS IN A SENTENCE INTO COUNTER'S SECONDS + 1 just in case (av.person reads 3 words in 1 second)
    let counter = (sentence.textContent.trim().split(/\s+/).length / 3) + 1;
    // START A GAME
    let interval = setInterval(() => {
        show_sentence.style.display = 'block';
        write_sentence.style.display = 'none';
        // STOP A COUNTER
        if (counter <= 0) {
            show_sentence.style.display = 'none';
            write_sentence.style.display = 'block';

            clearInterval(interval);
        }
        // SHOW CURRENT COUNTER
        countdown.textContent = counter + '...';
        counter--;
    }, 1000)

})

// *** SHOW MISTAKES-CHECKING STAGE ***
function showChecking () {
    show_sentence.style.display = 'block';
    countdown.style.display = 'none';
    write_sentence.style.display = 'none';
    mistakes_counter.style.display = 'block';
    
    submitted_sentence.textContent = `You wrote: ${users_sentence.value}`;
}
// ON CLICKED SUBMIT BUTTON
submit_sentence.addEventListener('click', () => {
    showChecking();
})
// THE SAME ON CLICKED ENTER KEY
users_sentence.addEventListener('keypress', (e) =>  {
    if (e.key === 'Enter' && !e.shiftKey) {
        showChecking();
    }
})

// *** SUBMIT MISTAKES AMOUNT USER DID ***
let amount = 0;
submit_mistakes.addEventListener('click', () => {
    if(mistakes_amount.value == 0) amount+=1000;
    if(mistakes_amount.value < 6) amount += 500;
    if (mistakes_amount.value < 11) amount += 100;
    if (mistakes_amount.value < 16) amount += 10;
    if (mistakes_amount.value < 21) amount += 1;
    users_points.textContent = amount;
})