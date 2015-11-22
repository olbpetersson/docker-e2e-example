package se.olapetersson.websocket;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import se.olapetersson.entities.Lobby;
import se.olapetersson.repositories.LobbyRepository;

import java.util.List;

@Controller
public class LobbyWebSocketController {

    @Autowired
    LobbyRepository repository;

    @MessageMapping("/lobbies/init")
    @SendTo("/topic/lobbies")
    public List<Lobby> getLobbies(String ping){

        return repository.findAll();
    }
}
