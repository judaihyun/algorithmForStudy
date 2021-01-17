
describe('프로그래머스 테스트 - level1', function () {


  describe('[연습문제] 가운데 글자 가져오기', function () {

    
  function solution(s) {
    let answer = '';
    let mid = Math.round(s.length / 2) - 1; 
    let splited = s.split('');
    if(s.length % 2 === 0)
    {
      answer = splited[mid] + splited[mid+1];
    }else{
      answer = splited[mid];
    }

    return answer;
  }

  /*
    단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
    abcde -> c
    qwer -> we
  */
  it('solution(abcde)', ()=>{
    expect(solution('abcde')).toEqual('c'); 
  });
  it('solution(qwer)', ()=>{
    expect(solution('qwer')).toEqual('we'); 
  });

  });
  
    describe('[연습문제] 같은 글자는 싫어', function () {
      function solution(arr){
        let result = [];
        for(let i = 0; i < arr.length; ++i)
        {
          if(arr[i] !== arr[i+1]) result.push(arr[i]);
        }

        return result; 
      }

      /*
        [1,1,3,3,0,1,1] = > [1,3,0,1]
        [4,4,4,3,3] = > [4,3]
      */

      it('solution[1,1,3,3,0,1,1]', function(){
        expect(solution([1,1,3,3,0,1,1])).toEqual([1,3,0,1]);
      })

      it('solution[4,4,4,3,3]', function(){
        expect(solution([4,4,4,3,3])).toEqual([4,3]);
      })

    });

    describe('[연습문제] 서울에서 김서방 찾기.', function () {
      function solution(arr)
      {
        let result; 
        arr.forEach((i, idx) =>{
          if(i==='Kim') result = idx;
        })
        return '김서방은 '+result+'에 있다';
      }

      it('solution(["test","Kim"])', function(){
        expect(solution(["test","Kim"])).toEqual('김서방은 1에 있다');
      });

    });

    describe('[연습문제] 이상한 문자 만들기', function () {
      function solution(arr)
      {
        let result = [];
        arr.split(' ').filter(i =>
        {
          var temp = i.split('');
          var arr = '';
          temp.forEach( (n, idx) => {
            if(idx % 2 === 0) arr += n.toUpperCase();
            else arr += n.toLowerCase();
          }) 
          result.push(arr);
        }); 
        return result.join(' ');
      }

      it('solution(["try hello world"])', function(){
        expect(solution('try hello world')).toEqual('TrY HeLlO WoRlD');
      });

    });

    describe('[연습문제] 문자열을 정수로 바꾸기', function () {
      function solution(arr)
      {
        var result = arr - 0;
        return result;
      }
      /*
        '1234' => 1234
        '-1234' => -1234
      */

      it('solution(["1234"])', function(){
        expect(solution('1234')).toEqual(1234);
      });
      it('solution(["-1234"])', function(){
        expect(solution('-1234')).toEqual(-1234);
      });
      it('solution(["+1234"])', function(){
        expect(solution('+1234')).toEqual(1234);
      });

    });

    describe('[연습문제] 수박수박', function(){
      function solution(n) {
        var answer = '';
        let arr = ['수','박'];
        for(var i = 0; i < n; ++i)
        {
            var idx = i % 2;
            answer += arr[idx];
        }
        return answer;
      }
      it('solution(3)', function(){
        expect(solution(3)).toEqual('수박수');
      });
    });

    describe('[연습문제] 시저암호',function(){
      function solution(s, n)
      {
        var result = '';
        for(let i = 0; i < s.length; ++i)
        {
          var charCode = s.charCodeAt(i);
          if(charCode >= 65 && charCode <= 90) // A~Z
          {
            charCode += n % 26;
            if(charCode > 90)
            {
                charCode -= 26;
            } 
            result += String.fromCharCode(charCode);
          }
          else if(charCode >= 97 && charCode <= 122) // a~z
          {
            charCode += n % 26;
            if(charCode > 122)
            {
              charCode -= 26;
            }
            result += String.fromCharCode(charCode);
          }
          else if(charCode == 32){
            result += String.fromCharCode(charCode);

          }
        }
        return result;
      }

      it("solution('AB',1) -> BC",function(){
        expect(solution('AB',1)).toEqual('BC');
      });
      it("solution('z',1) -> a",function(){
        expect(solution('z',1)).toEqual('a');
      });
      it("solution('Z',1) -> A",function(){
        expect(solution('Z',1)).toEqual('A');
      });
      it("solution('a B z',4) -> e F d",function(){
        expect(solution('a B z',4)).toEqual('e F d');
      });
      it("solution('A b Z',4) -> E f D",function(){
        expect(solution('A b Z',4)).toEqual('E f D');
      })
      it("solution(' A  b Z',4) -> ( E  f D)",function(){
        expect(solution(' A  b Z',4)).toEqual(' E  f D');
      })
      it("solution('KOROMOON IS HACKER',3) -> NRURPRRQ LV KDFNHU",function(){
        expect(solution('KOROMOON IS HACKER',3)).toEqual('NRURPRRQ LV KDFNHU');
      })
      it("solution('a B z',4) -> e F d",function(){
        expect(solution('KOROMOON IS HACKER',3)).toEqual('NRURPRRQ LV KDFNHU');
      })
      it("solution('[',1) -> empty",function(){
        expect(solution('[',1)).toEqual('');
      })
      it("solution('{',1) -> empty",function(){
        expect(solution('{',1)).toEqual('');
      })
      it("solution('@',1) -> empty",function(){
        expect(solution('@',1)).toEqual('');
      })

    })

    describe('[정렬] K 번째 수',()=>{
      function solution(array, commands)
      {
        let result = [];
        commands.forEach(i=>{
        let start = i[0];
        let end = i[1];
        let key = i[2];
        let copyArr = array.slice(start - 1, end);
        let sorted = copyArr.sort((a,b)=>a-b);
          result.push(sorted[key-1]);
        })
        return result;
      };
      it("solution([1,5,2,6,3,7,4],[[2,5,3],[4,4,1],[1,7,3]]) -> ", ()=>{
        var arr = [1,5,2,6,3,7,4];
        var com = [[2,5,3],[4,4,1],[1,7,3]];
        expect(solution(arr, com)).toEqual([5,6,3]);
      })
    });

    describe('[연습문제] - 나누어 떨어지는 숫자 배열', ()=>{
      function solution(arr, divisor)
      {
        var result = [];
        arr.forEach(i=>{
          if(i % divisor === 0) result.push(i);
        })
        result.sort((a,b)=>a-b);

        if(result.length === 0) result.push(-1);

        return result;
      }

      it("solution([5,9,7,10],5) => [5,10]", ()=>{
        expect(solution([5,9,7,10],5)).toEqual([5,10]);
      })

      it("solution([2,36,1,3],1) => [1,2,3,36]", ()=>{
        expect(solution([2,36,1,3],1)).toEqual([1,2,3,36]);
      })
      it("solution([3,2,6],10) => [-1]", ()=>{
        expect(solution([3,2,6],10)).toEqual([-1]);
      })
    })

    describe('[연습문제] - 두 정수 사이의 합', ()=>{
      function solution(a, b)
      {
        let end = a < b ? b : a;
        let start = a < b ? a : b;
        let result = 0;

        for(let i = start; i <= end; i++)
        {
          result += i;
        }
        return result;
      }
      it('solution(3,5) => 12',()=>{
        expect(solution(3,5)).toEqual(12);
      })
      it('solution(3,3) => 3',()=>{
        expect(solution(3,3)).toEqual(3);
      })
      it('solution(5,3) => 12',()=>{
        expect(solution(5,3)).toEqual(12);
      })
    });

    describe('[연습문제] 문자열 내 마음대로 정렬하기',()=>{
      function solution(strings, n)
      {
        console.log('원본 : ' + strings);

        let arr = [];
        let result = [];
        var temp = new Map();
        
        strings.forEach((item, idx)=>{
          arr.push(item[n]);
          temp.set(item[n], item);
        })
        arr.sort();
        console.log(arr);
        arr.forEach(i=>{
          result.push(temp.get(i));
          console.log(temp.get(i));
        })
        console.log(result);
        return result;
      }
      it('sol([sun,bed,car],1 => [car,bed,sun]', ()=>{
        expect(solution(['sun','bed','car'],1)).toEqual(['car','bed','sun']);
      })

    });

    describe('[코딩테스트연습] - 스택/큐',()=>{

      function solution(progresses, speeds){
        const answer = [];

        while(progresses.length > 0){
          
          let count = 0;
          for(let idx = 0; idx < progresses.length; ++idx){
            progresses[idx] += speeds[idx];
          }
          console.log(progresses)
          while(progresses[0] > 99){
            progresses.shift();
            speeds.shift();
            count++;
          }
          
          if(count > 0) answer.push(count);
        }

        console.log(answer);
        return answer;
      }

      it('sol([93,30,55],[1,30,5]) => [2,1]', ()=>{
        expect(solution([93,30,55],[1,30,5])).toEqual([2,1]);
        // expect(solution([95,90,99,99,80,99],[1,1,1,1,1,1])).toEqual([1,3,2]);
        // expect(solution([99,1,99,1],[1,1,1,1])).toEqual([1,3]);
        // console.log(solution([99,1,99,1],[1,1,1,1]));
      })


    })
  });



