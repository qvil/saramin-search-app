export async function jobSearch() {
  let search = "javascript";
  let url = `http://api.saramin.co.kr/job-search?keywords=${search}`;
  const response = await fetch(url).then(response => response);
  console.log(response);

  return response;
}
