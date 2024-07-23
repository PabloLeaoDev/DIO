let acordeons = document.querySelectorAll('.acordeon');

acordeons.forEach(acordeon => {
    acordeon.addEventListener('click', (e) => {
        const isOpen = acordeon.classList.contains('open');
        
        if (isOpen) {
            acordeon.classList.remove('open');
        } else {
            acordeon.classList.add('open');
        }
    });
});