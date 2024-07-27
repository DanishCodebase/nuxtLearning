export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event);
  // const { age } = await readBody(event);
  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`,
  // };

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_WEO3Qdb3OZzSIENiVKERwO3SB84zSsuHveKmyxcp"
  );

  return data;
});
