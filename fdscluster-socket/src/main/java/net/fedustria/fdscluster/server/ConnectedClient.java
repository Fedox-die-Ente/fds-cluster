package net.fedustria.fdscluster.server;

import java.io.Closeable;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.net.Socket;
import net.fedustria.fdscluster.FSocketServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/30/2024 9:30 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class ConnectedClient implements Closeable, Runnable {

	private static final Logger LOG = LoggerFactory.getLogger(ConnectedClient.class);

	private final Socket socket;
	private final FSocketServer server;
	private DataOutputStream dataOutputStream;
	private DataInputStream dataInputStream;

	public ConnectedClient(final FSocketServer server, final Socket socket) {
		this.server = server;
		this.socket = socket;

		try {
			dataOutputStream = new DataOutputStream(socket.getOutputStream());
			dataInputStream = new DataInputStream(socket.getInputStream());
		} catch (final Exception e) {
			LOG.error("Failed to create client.", e);
			close();
		}
	}

	@Override
	public void run() {}

	public Socket getSocket() {
		return socket;
	}

	@Override
	public void close() {
		try {
			dataOutputStream.close();
			dataInputStream.close();
			socket.close();
		} catch (final Exception e) {
			LOG.error("Failed to close client.", e);
		}
	}
}
