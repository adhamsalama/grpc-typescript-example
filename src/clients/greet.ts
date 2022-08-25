import { credentials, Metadata } from "@grpc/grpc-js";
import { promisify } from "util";

import { GreetClient, HelloRequest, HelloResponse } from "../models/hello";

class ClientService {
    client: GreetClient = new GreetClient(
        "localhost:50051",
        credentials.createInsecure()
    );

    public async sayHello(
        param: HelloRequest,
        metadata: Metadata = new Metadata()
    ): Promise<HelloResponse> {
        return promisify<HelloRequest, Metadata, HelloResponse>(
            this.client.sayHello.bind(this.client) // ????
        )(param, metadata);
    }
}

export const clientService: ClientService = new ClientService();

async function start() {
    const argv = process.argv[2] || "hello";
    const res = await clientService.sayHello({ name: argv });
    console.log("Server said: ", res.response);
}

start();
