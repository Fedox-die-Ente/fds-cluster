package net.fedustria.fdscluster.packet;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import net.fedustria.fdscluster.server.ConnectedClient;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/30/2024 10:17 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class PacketManager {

	public void processPacket(DataInputStream inputStream, ConnectedClient client)
		throws IOException, InstantiationException, IllegalAccessException {
		String packetName = inputStream.readUTF();

		IPacket packet = PacketRegistry.getPacket(packetName).newInstance();
		for (int i = 0; i < packet.packetSize(); i++) {}
	}

	public void writePacket(IPacket packet, DataOutputStream outputStream) throws IOException {
		outputStream.writeUTF(packet.getClass().getSimpleName());

		for (String line : packet.writePacket()) {
			outputStream.writeUTF(line);
		}

		outputStream.flush();
	}
}
