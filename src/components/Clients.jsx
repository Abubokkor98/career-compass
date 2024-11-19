import { useEffect, useState } from "react";
import Client from "./Client";

export default function Clients() {
    const [clients, setClients] = useState([]);
  
    useEffect(() => {
      fetch("client.json")
        .then((res) => res.json())
        .then((clients) => setClients(clients));
    }, []);
  
    return (
      <div className="bg-gradient-to-b from-blue-100 to-purple-100 p-10">
        <h2 className="text-center text-2xl font-bold mb-8">
          What Our Clients Say About Our Digital Services
        </h2>
        <div className="relative">
          {clients.map((client, index) => (
            <Client
              key={client.id}
              client={client}
              position={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    );
  }
  