// import "./handlers/user-signup.handler"
import "./consumers/notification.consumer"

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response("running"),
  },
});

console.log("server running on", server.url.href)