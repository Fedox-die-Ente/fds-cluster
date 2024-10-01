package net.fedustria.fdscluster.packet;

import net.fedustria.fdscluster.server.ConnectedClient;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 10/1/2024 8:06 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public interface PacketListener {
	void onPacketReceived(ConnectedClient client, IPacket packet);
}
