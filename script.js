document.addEventListener('DOMContentLoaded', (event) => {
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });

   
    const stats = document.querySelectorAll('.stat-box h3');
    const animateStats = () => {
        stats.forEach(stat => {
            const value = parseInt(stat.innerText);
            let current = 0;
            const increment = value / 100;
            const updateCounter = () => {
                if(current < value) {
                    current += increment;
                    stat.innerText = Math.round(current) + '+';
                    setTimeout(updateCounter, 10);
                } else {
                    stat.innerText = value + '+';
                }
            }
            updateCounter();
        });
    }

  
    const statsSection = document.querySelector('.statistics');
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animateStats();
            observer.unobserve(statsSection);
        }
    });

    observer.observe(statsSection);

   
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if(elementTop < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => { 
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;

    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Subscribe:', subscribe);

    form.reset();
});


    function downloadPDF() {
        const link = document.createElement('a');
        link.href = 'cv saya.pdf'; 
        link.download = 'CV_Annisa_Ashadia';
        link.click();
    }


const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('click', () => {
    const isSubscribed = subscribe.checked;

Swal.fire({
    title: 'Are you sure?',
    text: 'You want to submit the form and subscribe to the newsletter?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, submit it!'
}).then((result) => {
    if (result.isConfirmed) {
   
        subscribe.checked = isSubscribed;

        Swal.fire({
            title: 'Submitted!',
            text: `You ${subscribe.checked ? 'have': 'have not'} subscribed to the newsletter.`,
            icon: 'success'
    });


        console.log('Email:', 'example@example.com'); 
        console.log('Message:', 'This is a test message.'); 
        console.log('Subscribe:', subscribe.checked);
    } else {
    
        subscribe.checked = !isSubscribed;
        }
    });
});


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        if (!email || !message) {
            Swal.fire({
            title: 'Oops!',
            text: 'Please fill in all the required fields.',
            icon: 'error'
            });
        return;

        }
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to submit the form ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Submitted!',
                    text: `You ${subscribe ? 'have': 'have not'} submit form.`,
                    icon: 'success'
                });
                
                console.log('Email:', email);
                console.log('Message:', message);
                
                
                form.reset();
            } else {
           
                document.getElementById('subscribe').checked = subscribe;
            }
        });
    });

