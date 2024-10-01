package net.fedustria.fdscluster.command;

import static java.util.Collections.unmodifiableSet;

import java.util.HashSet;
import java.util.Set;
import net.fedustria.fdscluster.command.impl.HelpCommand;
import net.fedustria.fdscluster.command.impl.ShutdownCommand;
import net.fedustria.fdscluster.command.impl.VersionCommand;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/29/2024 9:35 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class CommandHandler {

	private final Set<Command> commands = new HashSet<>();

	public CommandHandler() {
		addCommand(new HelpCommand());
		addCommand(new ShutdownCommand());
		addCommand(new VersionCommand());
	}

	public void addCommand(Command command) {
		commands.add(command);
	}

	public Set<Command> getCommands() {
		return unmodifiableSet(commands);
	}
}
