package net.fedustria.fdscluster.packet.impl;

import net.fedustria.fdscluster.packet.IPacket;

import java.util.List;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 10/1/2024 11:16 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class PacketShareSetupKey implements IPacket {

	private String key;

	@Override
	public List<String> writePacket() {
		return List.of(key);
	}

	@Override
	public void readPacket(List<String> data) {
		key = data.getFirst();
	}

	@Override
	public int packetSize() {
		return 1;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}
}
