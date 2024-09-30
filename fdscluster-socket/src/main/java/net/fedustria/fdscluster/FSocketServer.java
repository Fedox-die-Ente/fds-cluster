package net.fedustria.fdscluster;

import net.fedustria.fdscluster.server.ConnectedClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.ServerSocket;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/29/2024 6:19 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class FSocketServer {
    private static final Logger LOG = LoggerFactory.getLogger(FSocketServer.class);
    private final ServerSocket serverSocket;
    private final List<ConnectedClient> connectedClients = new ArrayList<>();
    private final ExecutorService executor = Executors.newFixedThreadPool(16);

    public FSocketServer(int port) throws IOException {
        serverSocket = new ServerSocket(port);
    }

    public void listen() {
        Thread thread = new Thread(() -> {
            while (!serverSocket.isClosed()) {
                try {
                    var socket = serverSocket.accept();
                    ConnectedClient connectedClient = new ConnectedClient(this, socket);
                    connectedClients.add(connectedClient);
                    executor.execute(connectedClient);
                } catch (Exception e) {
                    LOG.error("Failed to accept connection.", e);
                }
            }
        });
    }
}
