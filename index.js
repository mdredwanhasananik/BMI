document.querySelector('button').addEventListener('click',function () {
  let name= document.querySelector('.a').value;
  let weight= document.querySelector('.b').value;
  let feet= document.querySelector('.c').value;
  let inch= document.querySelector('.d').value;
  let solve= (feet*30.48)+(inch*2.54);
  let metre= solve/100;
  let final= metre*metre;
  let end= weight/final;
  let gf= '';
  
  
  
  if (end < 18.5) {
    gf = ' ।আপনার ওজন কম।';
  }
  else if (18.5 < end && end < 25) {
    gf = ' ।আপনার সঠিক ওজন।';
  }
  else if (25 < end && end < 30) {
    gf = ' । আপনার ওজন বেশি।'
  }
  else if (100 > end && end > 30) {
    gf = ' ।কিছু মনে কইরেন না, আপনি খুব মোটা।🤪 বেশি বেশি ব্যায়াম করবেন।';
  }
  else {
    gf = ' ।কিছু মনে কইরেন না, আপনি খুব মোটা।🤪 বেশি বেশি ব্যায়াম করবেন।';
  }
  
  if (weight && feet && inch) {
    document.querySelector('.ha').innerHTML = 'মিস্টার/মিসেস ' + name + ', আপনার বিএমআই(BMI)  ' + end+ gf;
  } else {
    document.querySelector('h4').innerHTML = '<span style="color: red">Please, fill up all gaps!</span>';
  }
})
