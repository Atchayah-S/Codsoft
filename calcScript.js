let history=[]
      function Solve(val) {
         var v = document.getElementById('res');
         v.value += val;
      }
      function Result() {
         var num1 = document.getElementById('res').value;
         num=num1.replace('^','**');
         num=num.replace('x','*');
         var num2 = eval(num);
         history.push(num2);
         document.getElementById('res').value = num2;
      }
      function Clear() {
         var inp = document.getElementById('res');
         inp.value = '';
      }
      function Back() {
         var ev = document.getElementById('res');
         ev.value = ev.value.slice(0,-1);
      }
      function addToHistory() {
      document.getElementById('res').value=history.pop();
}