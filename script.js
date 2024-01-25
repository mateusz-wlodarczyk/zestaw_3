const ele = document.getElementById('inputTest');

ele.addEventListener('keypress', (event) => addItem(event));

function addItem(event) {
  console.log(event);
  console.log(event.target.value);

  document.getElementById('h1Test').textContent = ele.value;
  console.log(event.keyCode);
  if (ele.value.length > 5) {
    ele.style.backgroundColor = 'red';
  } else {
    ele.style.backgroundColor = 'white';
  }
  if (event.keyCode === 100 && ele.value.length > 1) {
    console.log('ok');
    document.getElementById('h1Test').style.backgroundColor = 'yellow';
  }
}

function addItemTest() {
  let ele = document.getElementById('inputTest');
  ele.addEventListener('keydown', () => {
    console.log(ele.value);
  });

  //   if (event.keyCode === 100 && ele.value.length > 1) {
  //     console.log('ok');
  //     document.getElementById('h1Test').style.backgroundColor = 'yellow';
  //   }
}
addItemTest();
