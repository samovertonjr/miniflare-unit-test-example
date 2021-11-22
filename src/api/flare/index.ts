export async function handleRequest(request: Request) {
  return new Response(`URL: ${request.url} KEY: ${KEY}`);
}
