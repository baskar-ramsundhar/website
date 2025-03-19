// Main JavaScript functionality for the AWGE-inspired Ghost theme

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const startButton = document.getElementById('start-button');
    const landingScreen = document.getElementById('landing-screen');
    const mainScreen = document.getElementById('main-screen');
    const blogScreen = document.getElementById('blog-screen');
    const homeButton = document.getElementById('home-button');
    const menuItems = document.querySelectorAll('.menu-item');
    const blogBackButton = document.getElementById('blog-back-button');
    const postBackButton = document.getElementById('post-back-button');
    
    // Add CRT flicker effect
    setInterval(function() {
        const screen = document.querySelector('.screen');
        if (Math.random() > 0.95) {
            screen.classList.add('flicker');
            setTimeout(function() {
                screen.classList.remove('flicker');
            }, 150);
        }
    }, 500);
    
    // Start button click event
    if (startButton) {
        startButton.addEventListener('click', function() {
            // Play click sound (optional)
            playSound('click');
            
            // Transition from landing screen to main screen
            landingScreen.classList.add('hidden');
            mainScreen.classList.remove('hidden');
            
            // Add transition effect
            document.querySelector('.screen').classList.add('transition');
            setTimeout(function() {
                document.querySelector('.screen').classList.remove('transition');
            }, 500);
        });
    }
    
    // Home button click event
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            // Play click sound (optional)
            playSound('click');
            
            // Hide all screens
            hideAllScreens();
            
            // Show landing screen
            landingScreen.classList.remove('hidden');
            
            // Add transition effect
            document.querySelector('.screen').classList.add('transition');
            setTimeout(function() {
                document.querySelector('.screen').classList.remove('transition');
            }, 500);
        });
    }
    
    // Blog back button click event
    if (blogBackButton) {
        blogBackButton.addEventListener('click', function() {
            // Hide blog screen
            blogScreen.classList.add('hidden');
            
            // Show main screen
            mainScreen.classList.remove('hidden');
        });
    }
    
    // Post back button click event
    if (postBackButton) {
        postBackButton.addEventListener('click', function() {
            // Go back to previous page
            window.history.back();
        });
    }
    
    // Menu item click events
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Play click sound (optional)
            playSound('click');
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            
            // Handle different categories
            switch(category) {
                case 'tech':
                    window.location.href = '/tag/tech/';
                    break;
                case 'fashion':
                    window.location.href = '/tag/fashion/';
                    break;
                case 'blog':
                    // Hide main screen
                    mainScreen.classList.add('hidden');
                    
                    // Show blog screen
                    blogScreen.classList.remove('hidden');
                    break;
                case 'authors':
                    window.location.href = '/authors/';
                    break;
                case 'about':
                    window.location.href = '/about/';
                    break;
                case 'contact':
                    window.location.href = '/contact/';
                    break;
                default:
                    console.log('Category not recognized:', category);
            }
        });
        
        // Add hover sound effect (optional)
        item.addEventListener('mouseenter', function() {
            playSound('hover');
        });
    });
    
    // Helper function to hide all screens
    function hideAllScreens() {
        const screens = document.querySelectorAll('.screen-content');
        screens.forEach(function(screen) {
            screen.classList.add('hidden');
        });
    }
    
    // Sound effects function (optional)
    function playSound(type) {
        // This is a placeholder - you can implement actual sound effects
        // by uncommenting and configuring the code below
        
        /*
        const sound = new Audio();
        switch(type) {
            case 'click':
                sound.src = '/assets/sounds/click.mp3';
                break;
            case 'hover':
                sound.src = '/assets/sounds/hover.mp3';
                break;
            default:
                return;
        }
        sound.volume = 0.5;
        sound.play();
        */
    }
    
    // Add custom cursor (optional)
    document.body.style.cursor = 'none';
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add click animation to cursor
    document.addEventListener('mousedown', function() {
        cursor.classList.add('clicking');
    });
    
    document.addEventListener('mouseup', function() {
        cursor.classList.remove('clicking');
    });
});
