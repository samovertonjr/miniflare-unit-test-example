// Assuming you've got a build tool that removes `export`s when you actually
// deploy your worker (e.g. https://esbuild.github.io/api/#format-iife)
export async function handleRequest(request: Request) {
  return new Response(`URL: ${request.url} KEY: ${KEY}`);
}
