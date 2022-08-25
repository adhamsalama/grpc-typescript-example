import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { GreetServer, HelloResponse, HelloRequest } from "../models/hello";

export const greet: GreetServer = {
    sayHello: function (
        call: ServerUnaryCall<HelloRequest, HelloResponse>,
        callback: sendUnaryData<HelloResponse>
    ) {
        console.log("Client sent: ", call.request);
        callback(null, { response: "Hello, " + call.request.name });
    },
};
