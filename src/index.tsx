import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
    models: {
        transaction: Model,
    },
    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: "Freelancer web",
                    type: "deposit",
                    category: "dev",
                    amount: 600,
                    createdAt: new Date("2022-02-12 09:00:00"),
                },
                {
                    id: 2,
                    title: "Aluguel",
                    type: "withdraw",
                    category: "casa",
                    amount: 600,
                    createdAt: new Date("2022-02-14 11:00:00"),
                },
            ],
        });
    },
    routes() {
        this.namespace = "api";

        this.get("/transactions", () => {
            return this.schema.all("transaction");
        });

        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create("transaction", data);
        });
    },
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
