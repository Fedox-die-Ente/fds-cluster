package net.fedustria.fdscluster;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.Socket;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/30/2024 10:00 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class FSocketClient {
    private static final Logger LOG = LoggerFactory.getLogger(FSocketClient.class);
    private final String host;
    private final int port;

    private Thread thread;

    public FSocketClient(String host, int port) {
        this.host = host;
        this.port = port;
    }

    public void connect() {
        thread = new Thread(() -> {
            try (final var socket = new Socket(host, port)) {
                LOG.info("Connected to {}.", socket.getInetAddress().getHostAddress());


                LOG.info("Disconnected from {}.", socket.getInetAddress().getHostAddress());
            } catch (final Exception e) {
                LOG.error("Failed to connect.", e);
            }
        });

        thread.start();
    }
}
