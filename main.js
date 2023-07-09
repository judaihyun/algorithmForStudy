function delay(ms, result) {
  return new Promise((resolve) => setTimeout(() => resolve(result), ms));
}

function fetchData() {
  console.log("데이터를 가져오는 중...");
  let result = "";
  return delay(2000, "@데이터@").then((res) => {
    result = res;
    console.log("데이터 가져오기 완료!");
    return result;
  }); // 2초 지연
  return result;
}

async function main() {
  console.log("프로그램 시작");
  const data = await fetchData();
  console.log("받은 데이터:", data);
  console.log("프로그램 종료");
}

main();
