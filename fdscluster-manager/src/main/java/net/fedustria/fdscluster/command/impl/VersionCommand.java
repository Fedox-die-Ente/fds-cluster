package net.fedustria.fdscluster.command.impl;

import net.fedustria.fdscluster.command.Command;
import net.fedustria.fdscluster.utils.Constants;
import net.fedustria.fdscluster.utils.logger.Logger;

import java.util.List;
import java.util.Set;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/30/2024 7:15 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class VersionCommand extends Command {


    public VersionCommand() {
        super("version", "Shows information about the current version", Set.of("v"), List.of());
    }

    @Override
    public boolean execute(String[] args) {
        Logger.info("» The manager of the cloud is running on version " + Constants.VERSION);

        return true;
    }
}
