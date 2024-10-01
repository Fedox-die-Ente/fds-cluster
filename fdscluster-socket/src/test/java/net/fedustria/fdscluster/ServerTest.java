package net.fedustria.fdscluster;

import java.io.IOException;
import net.fedustria.fdscluster.packet.impl.PacketShareSetupKey;
import org.junit.jupiter.api.Test;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 10/1/2024 8:33 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class ServerTest {

	@Test
	public void testServerCreation() throws IOException {
		FSocketServer server = new FSocketServer(7777);
		server.listen();

		FSocketClient client = new FSocketClient("127.0.0.1", 7777);
		client.connect();

		PacketShareSetupKey packet = new PacketShareSetupKey();
		packet.setKey("test");
		client.sendPacket(packet);
	}
}
