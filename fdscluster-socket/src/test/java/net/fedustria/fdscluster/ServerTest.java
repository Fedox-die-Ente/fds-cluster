package net.fedustria.fdscluster;

import net.fedustria.fdscluster.packet.impl.PacketShareSetupKey;
import org.junit.jupiter.api.Test;

import java.io.IOException;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 10/1/2024 8:33 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class ServerTest {

	public static void main(String[] args) throws IOException {
		//		FSocketServer server = new FSocketServer(7777);
		//
		//		server
		//			.getPacketManager()
		//			.addListener((client, packet) -> {
		//				if (packet instanceof PacketShareSetupKey) {
		//					System.out.println(client.getSocket().getInetAddress().getHostAddress());
		//				}
		//			});
		//
		//		server.listen();

		FSocketClient client = new FSocketClient("127.0.0.1", 3001);
		client.connect();

		PacketShareSetupKey packet = new PacketShareSetupKey();
		packet.setKey("test");
		client.sendPacket(packet);
	}

	@Test
	public void testServerCreation() throws IOException {
		FSocketServer server = new FSocketServer(7777);

		server
			.getPacketManager()
			.addListener((client, packet) -> {
				if (packet instanceof PacketShareSetupKey) {
					System.out.println(client.getSocket().getInetAddress().getHostAddress());
				}
			});

		server.listen();

		FSocketClient client = new FSocketClient("127.0.0.1", 7777);
		client.connect();

		PacketShareSetupKey packet = new PacketShareSetupKey();
		packet.setKey("test");
		client.sendPacket(packet);
	}
}
