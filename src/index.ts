import "./consumers/notification.consumer"
import "./handlers/user-signup.handler"

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response("running"),
  },
});

console.log("server running on", server.url.href)