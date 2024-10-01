package net.fedustria.fdscluster;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;
import net.fedustria.fdscluster.packet.IPacket;
import net.fedustria.fdscluster.packet.PacketManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

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

	private final PacketManager packetManager = new PacketManager();
	private final List<IPacket> packetQueue = new ArrayList<>();

	private DataOutputStream dataOutputStream;

	private Thread thread;

	public FSocketClient(String host, int port) {
		this.host = host;
		this.port = port;
	}

	public void connect() {
		thread = new Thread(() -> {
			try (final var socket = new Socket(host, port)) {
				LOG.info("Connected to {}.", socket.getInetAddress().getHostAddress());
				dataOutputStream = new DataOutputStream(socket.getOutputStream());

				for (final IPacket packet : packetQueue) {
					try {
						packetManager.writePacket(packet, dataOutputStream);
					} catch (final IOException e) {
						LOG.error("Failed to send packet.", e);
					}
				}

				while (!socket.isClosed()) {
					final DataInputStream dataInputStream = new DataInputStream(
						socket.getInputStream()
					);
					packetManager.processPackets(dataInputStream, null);
				}

				LOG.info("Disconnected from {}.", socket.getInetAddress().getHostAddress());
			} catch (final Exception e) {
				LOG.error("Failed to connect.", e);
			}
		});

		thread.start();
	}

	public void sendPacket(IPacket packet) throws IOException {
		if (dataOutputStream == null) {
			packetQueue.add(packet);
			return;
		}

		packetManager.writePacket(packet, dataOutputStream);
	}
}
