# Color Flipper Function 연습하기

'Color Change'라는 버튼을 누르면 무작위로 배경 색이 바꾸는 기능이다.




## 코드

        document.addEventListener("DOMContentLoaded",function(){
        const btn = document.getElementById("btn1");
        const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

        btn.addEventListener('click',function(){
        let color = '#';
        for(i=0;i<6;i++){
            color += hex[Math.floor(Math.random() * hex.length)];
        }
            document.body.style.backgroundColor = color;
            document.getElementById("txt").textContent = 'Backgound Color :'+color+'';
        })
    });

btn에 addEventListener를 적용해 click하면 배경 색이 변하도록 했다. 

for문을 사용하여 6개의 hex배열 요소가 무작위로 나오도록 했다. 

그리고 램덤한 숫자가 나오도록 Math.random함수를 이용하였는데 0~1사이에 숫자만 랜덤하게 나오니 

hex 배열의 길이 만큼 곱하여 더 다양한 숫자가 나오도록 했다.

color 변수에는 #를 저장해두고 += 연산자를 사용하여 for문이 6번 반복하는 동안 나오는 hex[?]들을 전부 저장하도록 했다.

이렇게 저장된 변수 color는 배경색이 변할 수 있도록 style를 지정하고 

버튼 위의 글자도 같이 바뀌도록 textContent를 사용하였다.

[color flipper](https://siyoonagain.github.io/colorFillperFunction.github.io/)에 들어가 볼 수 있다.
