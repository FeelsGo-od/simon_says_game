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