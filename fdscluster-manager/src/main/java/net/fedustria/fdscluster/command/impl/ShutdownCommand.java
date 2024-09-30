package net.fedustria.fdscluster.command.impl;

import net.fedustria.fdscluster.Manager;
import net.fedustria.fdscluster.command.Command;
import net.fedustria.fdscluster.utils.logger.Logger;

import java.util.List;
import java.util.Set;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/29/2024 9:19 PM
 * <p>d
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class ShutdownCommand extends Command {

    public ShutdownCommand() {
        super("shutdown", "Shutdown the manager of the cloud", Set.of("stop", "end", "quit", "kill"), List.of());
    }


    @Override
    public boolean execute(String[] args) {
        Logger.info("Shutting down the manager...");

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Logger.error("An error occurred while shutting down the manager: " + e);
            Logger.warning("The manager will now exit.");
            System.exit(1);
        }

        Manager.initShutdown();

        return true;
    }
}
