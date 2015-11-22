package se.olapetersson.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import se.olapetersson.entities.Lobby;

import java.util.List;

public interface LobbyRepository extends MongoRepository<Lobby, String> {

    Lobby findByName(String name);
    List<Lobby> findAll();

}
