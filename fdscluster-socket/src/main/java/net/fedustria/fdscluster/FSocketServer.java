package net.fedustria.fdscluster;

import java.io.IOException;
import java.net.ServerSocket;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/29/2024 6:19 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class FSocketServer {
    private final ServerSocket serverSocket;

    public FSocketServer(int port) throws IOException {
        serverSocket = new ServerSocket(port);
    }

}
