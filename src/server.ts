import { Server, ServerCredentials } from "@grpc/grpc-js";
import { greet } from "./services/greet";
import { GreetService } from "./models/hello";

const server = new Server();

server.addService(GreetService, greet);
server.bindAsync("0.0.0.0:50051", ServerCredentials.createInsecure(), () => {
    console.log("Started...");
    server.start();
});
