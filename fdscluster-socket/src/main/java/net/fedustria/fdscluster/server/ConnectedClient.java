package net.fedustria.fdscluster.server;

import net.fedustria.fdscluster.FSocketServer;
import net.fedustria.fdscluster.packet.PacketManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Closeable;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.net.Socket;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/30/2024 9:30 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class ConnectedClient implements Closeable, Runnable {

	private static final Logger LOG = LoggerFactory.getLogger(ConnectedClient.class);
	private final FSocketServer server;
	private final Socket socket;
	private final PacketManager packetManager;
	private DataOutputStream dataOutputStream;
	private DataInputStream dataInputStream;

	public ConnectedClient(
		PacketManager packetManager,
		final FSocketServer server,
		final Socket socket
	) {
		this.packetManager = packetManager;
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
	public void run() {
		try {
			while (socket.isConnected()) {
				packetManager.processPacket(dataInputStream, this);
			}
		} catch (Exception e) {
			LOG.error("Failed to process packets", e);
			close();
		}
	}

	public Socket getSocket() {
		return socket;
	}

	@Override
	public void close() {
		try {
			server.getConnectedClients().remove(this);
			dataOutputStream.close();
			dataInputStream.close();
			socket.close();
		} catch (final Exception e) {
			LOG.error("Failed to close client.", e);
		}
	}
}
