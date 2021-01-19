
describe('프로그래머스 연습문제 - level1', function () {


  function solution(a, b){
    const MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];
    const DAY = ['SUN','MON',"TUE",'WED','THU','FRI','SAT']; 
    const DAYS = [];

    for(let i = 0; i < 365; ++i){
      DAYS.push(DAY[(i + 5) % 7]);
    }

    let cur_day = 0;
    for(let i = 0; i < a - 1; ++i){
      cur_day += MONTH[i];
    }

    return DAYS[cur_day += b - 1];

  }

  it('sol(5,24) => "TUE"',()=>{
    solution(5,24);
  })

});

describe('제일 작은 수 제거하기', function(){
  function solution(arr) {
    var answer = [];
    if(arr.length < 2) return [-1];
    
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(min > arr[i]){
        min = arr[i];
      }
    }

    arr.forEach(i=>{
      if(i !== min)  answer.push(i);
    })
    console.log(answer);
    return answer;
  }

  it('sol([4,3,2,1] => [4,3,2]', ()=>{
    expect(solution([4,3,2,1])).toEqual([4,3,2]);
  }),
  it('sol([10] => [-1]', ()=>{
    expect(solution([10])).toEqual([-1]);
  }),
  it('sol([7,10,2,3] => [7,10,3]', ()=>{
    expect(solution([7,10,2,3])).toEqual([7,10,3]);
  })
  
});

describe('위장',()=>{
  function solution(clothes){
    let answer = 1;
    const obj = {};

    clothes.forEach(i=>{
      const category = i[1];
      if(obj[category]){
        obj[category] += 1;
      }else{
        obj[category] = 1;
      }
    })


    for(const item in obj){
      /*
        경우의 수
        - 1번의 경우, headgear : 2, eyewear : 1 이므로
        2 * 1 : 2개라고 생각할 수 있으나, headgear/eyewear만 입는 경우도 
        생각해야하므로 각 + 1을 해주고, 모든 의상을 안입는경우는 없으므로 -1;

        *** headgear or eyewear 중 하나만 입는다는게 왜 +1 ?? ***

        - 최종적으로 모든 의상을 안입는경우는 없으므로 -1
      */
      answer *= obj[item] + 1; 
    }


    console.log(obj);
    console.log(`answer : ${answer}`);

    return answer - 1;
  }

  it('sol([[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]])',()=>{
    solution([
      ['yellow_hat', 'headgear'], 
      ['blue_sunglasses', 'eyewear'], 
      ['green_turban', 'headgear']]);
    solution([
      ['crow_mask','face'],
      ['blue_sunglasses','face'],
      ['smoky_makeup','face']
    ])
  })
});

describe('정렬', ()=>{

  function solution(numbers){
    const answer = 0;
    const arr = [];
    const size = numbers.length;

    var a = numbers.sort(function(a,b){
      return a - b;
    })
    var b = a.sort(function(a,b){
      return b - a;
    });


    console.log(a);
    console.log(b);

    for(let i = 0; i < size; i++){
      for(let j = 0; j < size; j++){

      }
    }

    console.log(arr);
    return answer;
  }

  it('가장 큰 수',()=>{
    solution([6,10,2]);
  })
})



