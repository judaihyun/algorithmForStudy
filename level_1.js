
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



