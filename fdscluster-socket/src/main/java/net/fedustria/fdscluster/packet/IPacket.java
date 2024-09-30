package net.fedustria.fdscluster.packet;

import java.util.List;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/30/2024 10:12 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public interface IPacket {
    List<String> writePacket();

    void readPacket(List<String> data);

    int packetSize();
}
