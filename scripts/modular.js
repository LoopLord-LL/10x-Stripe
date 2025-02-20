const cube1 = document.querySelector('.cube1');
        const cube2 = document.querySelector('.cube2');
        const trainLine = document.querySelector('.train-line');

        // Handle hover effect on cube1 when animation starts
        trainLine.addEventListener('animationstart', () => {
            // Add hover effect to cube1
            cube1.classList.add('hovered');
            setTimeout(() => {
                cube2.classList.add('hovered');
            }, 2000);

            setTimeout(() => {
                cube1.classList.remove('hovered');
            }, 3000);
            setTimeout(() => {
                cube2.classList.remove('hovered');
            }, 5000);
        });

        // Handle hover effect on cube2 when animation reaches cube2 (50% of animation)
        trainLine.addEventListener('animationiteration', () => {
            cube1.classList.add('hovered');
            
            setTimeout(() => {
                cube2.classList.add('hovered');
            }, 2000);

            setTimeout(() => {
                cube1.classList.remove('hovered');
            }, 3000);

            setTimeout(() => {
                cube2.classList.remove('hovered');
            }, 5000);
        });