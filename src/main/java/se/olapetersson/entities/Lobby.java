package se.olapetersson.entities;

import org.springframework.data.annotation.Id;

public class Lobby {
    private int players;
    @Id
    private String name;

    public Lobby(String name) {
        this.players = 1;
        this.name = name;
    }

    public int getPlayers() {
        return players;
    }

    public void setPlayers(int players) {
        this.players = players;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
