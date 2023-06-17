import React, { useState } from "react";
import Player from "./Player";

const julian = {
    "id": 0,
    "name": "julian",
    "age": 24,
    "handicap": 1
}

export default function ListOfPlayers() {
    const [players, updatePlayers] = useState([julian])
    return <div className="ListOfPlayers">
        {
            players.map(({ id, name, age, handicap }) =>
                <Player
                    key={id}
                    id={id}
                    name={name}
                    age={age}
                    handicap={handicap}
                />
            )
        }
    </div>
}