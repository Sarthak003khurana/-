describe('Shape Addition Functionality', function() {
  var button, numberInput, box, circle, square, rect;

  beforeEach(function() {
    // Reference the existing DOM elements
    button = document.getElementById('button');
    numberInput = document.getElementById('number');
    box = document.getElementById('box');
    circle = document.getElementById('circle');
    square = document.getElementById('square');
    rect = document.getElementById('rectangle');
  });

  afterEach(function() {
    // Clean up the box after each test
    box.innerHTML = '';
    numberInTheShape = 1;
    oldValue = 0;
  });

  it('should add the correct number of shapes', function() {
    numberInput.value = '3';
    square.checked = true;
    button.onclick();
    expect(box.children.length).toBe(3);
  });

  it('should increment the number inside each shape', function() {
    numberInput.value = '3';
    square.checked = true;
    button.onclick();
    expect(box.children[0].innerHTML).toBe('1');
    expect(box.children[1].innerHTML).toBe('2');
    expect(box.children[2].innerHTML).toBe('3');
  });

  it('should assign the correct class to each shape', function() {
    numberInput.value = '2';
    circle.checked = true;
    button.onclick();
    expect(box.children[0].classList.contains('circle')).toBe(true);
    expect(box.children[1].classList.contains('circle')).toBe(true);

    box.innerHTML = '';
    numberInTheShape = 1;
    oldValue = 0;
    square.checked = true;
    button.onclick();
    expect(box.children[0].classList.contains('square')).toBe(true);
    expect(box.children[1].classList.contains('square')).toBe(true);

    box.innerHTML = '';
    numberInTheShape = 1;
    oldValue = 0;
    rect.checked = true;
    button.onclick();
    expect(box.children[0].classList.contains('rectangle')).toBe(true);
    expect(box.children[1].classList.contains('rectangle')).toBe(true);
  });

  it('should update oldValue correctly after adding shapes', function() {
    numberInput.value = '2';
    square.checked = true;
    button.onclick();
    expect(oldValue).toBe(2);
  });

  it('should handle multiple button clicks correctly', function() {
    numberInput.value = '2';
    square.checked = true;
    button.onclick();
    expect(box.children.length).toBe(2);

    numberInput.value = '3';
    button.onclick();
    expect(box.children.length).toBe(5);
  });
});
