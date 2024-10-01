package net.fedustria.fdscluster.packet;

import java.util.HashMap;
import java.util.Map;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/30/2024 10:17 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class PacketRegistry {

	private static final Map<String, Class<? extends IPacket>> packets = new HashMap<>();

	static {
		// TODO: Register Packets
	}

	public static Class<? extends IPacket> getPacket(final String name) {
		return packets.get(name);
	}

	public static void registerPacket(final Class<? extends IPacket> packet) {
		packets.put(packet.getSimpleName(), packet);
	}
}
