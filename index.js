// class TypeWriter {
//             constructor(container, lines, options = {}) {
//                 this.container = container;
//                 this.lines = lines;
//                 this.speed = options.speed || 50;
//                 this.delay = options.delay || 1000;
//                 this.currentLineIndex = 0;
//                 this.currentText = '';
//                 this.isDeleting = false;
//             }

//             type() {
//                 const currentLine = this.lines[this.currentLineIndex];
                
//                 if (!this.isDeleting && this.currentText.length < currentLine.length) {
//                     this.currentText += currentLine[this.currentText.length];
//                     this.render();
//                     setTimeout(() => this.type(), this.speed);
//                 } 
//                 else if (this.isDeleting && this.currentText.length > 0) {
//                     this.currentText = this.currentText.slice(0, -1);
//                     this.render();
//                     setTimeout(() => this.type(), this.speed / 2);
//                 } 
//                 else {
//                     this.isDeleting = !this.isDeleting;
                    
//                     if (!this.isDeleting) {
//                         this.currentLineIndex = 
//                             (this.currentLineIndex + 1) % this.lines.length;
//                     }
                    
//                     setTimeout(() => this.type(), this.delay);
//                 }
//             }

//             render() {
//                 this.container.innerHTML = 
//                     `<span class="typed-text">${this.currentText}</span>`;
//             }

//             start() {
//                 this.type();
//             }
//         }

//         const container = document.getElementById('title');
//         const lines = [
//             'i-Educate',
//             'Transforming India..',
        
//         ];

//         const typeWriter = new TypeWriter(container, lines);
//         typeWriter.start();

// // // Start the typewriter effect when the page loads
// // window.onload = function() {
// //     typeWriter();
// // };

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')

burger.addEventListener('click',()=>{

    rightNav.classlist.toggle('v-nav');
    navList.classlist.toggle('v-nav');
    navbar.classlist.toggle('h-nav');
    

})