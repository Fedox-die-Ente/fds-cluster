package net.fedustria.fdscluster.packet;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import net.fedustria.fdscluster.server.ConnectedClient;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/30/2024 10:17 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class PacketManager {

	private final List<PacketListener> listeners = new ArrayList<>();

	public void processPackets(DataInputStream inputStream, ConnectedClient client)
		throws IOException, InstantiationException, IllegalAccessException {
		while (true) {
			String packetName = inputStream.readUTF();

			IPacket packet = PacketRegistry.getPacket(packetName).newInstance();
			List<String> data = new ArrayList<>();
			for (int i = 0; i < packet.packetSize(); i++) {
				data.add(inputStream.readUTF());
			}

			packet.readPacket(data);

			System.out.println("Processed packet " + packet.getClass().getSimpleName());
			listeners.forEach(listener -> listener.onPacketReceived(client, packet));
		}
	}

	public void writePacket(IPacket packet, DataOutputStream outputStream) throws IOException {
		outputStream.writeUTF(packet.getClass().getSimpleName());

		for (String line : packet.writePacket()) {
			outputStream.writeUTF(line);
		}

		outputStream.flush();
	}

	public void addListener(PacketListener listener) {
		listeners.add(listener);
	}

	public void removeListener(PacketListener listener) {
		listeners.remove(listener);
	}
}
