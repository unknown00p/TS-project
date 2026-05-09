import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response("Bun!"),
    "/figlet": () => {
      const body = figlet.textSync("Server running");
      return new Response(body);
    },
  },
});

console.log(`Listening on ${server.url}`);