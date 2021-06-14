const blocks = document.querySelectorAll('.block');
const btn = document.querySelector('.btn');
let interval;
let i = 0;
btn.addEventListener('click', () => {
   clearInterval(interval);
   interval = setInterval(() => {
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      blocks[i].style.backgroundColor = color;
      i++;
      if (i === blocks.length) {
         clearInterval(interval);
         const newBtn = document.createElement('button');
         newBtn.textContent = 'Interval Reverse';
         document.body.append(newBtn);
         newBtn.addEventListener('click', () => {
            let j = blocks.length - 1;
            const secondInterval = setInterval(() => {
               blocks[j].style.backgroundColor = 'white';
               j--;
               if (j < 0) {
                  clearInterval(secondInterval);
                  document.body.removeChild(newBtn);
               }
            }, 500);
         })
      }
   }, 500);
});

// * const btn = document.querySelector('.btn');
// * let x;
// * let i = 0;
// * btn.addEventListener('click', () => {
// *    clearInterval(x);
// *    x = setInterval(() => {
// *       i++;
// *       console.log(i);
// *    }, 500);
// * });

// for(let item of blocks) {
//    item.addEventListener('click', e => {
//       e.target.style.backgroundColor = 'white';
//    });
// }