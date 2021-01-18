
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



