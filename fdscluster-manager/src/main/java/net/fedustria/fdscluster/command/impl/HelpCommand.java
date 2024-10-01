package net.fedustria.fdscluster.command.impl;

import net.fedustria.fdscluster.Manager;
import net.fedustria.fdscluster.command.Command;
import net.fedustria.fdscluster.utils.logger.Logger;

import java.util.List;
import java.util.Set;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/29/2024 9:28 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class HelpCommand extends Command {

	private final String commandTemplate = "> %name% (%aliases%) - %description%";

	public HelpCommand() {
		super("help", "Opens this menu", Set.of("?", "commands"), List.of());
	}

	@Override
	public boolean execute(String[] args) {
		Manager.getCommandHandler()
			.getCommands()
			.forEach(command -> {
				Set<String> aliases = command.getAliases();
				String aliasesString = aliases.isEmpty() ? "/" : aliases.toString();

				if (aliasesString.length() > 2) {
					aliasesString = aliasesString.substring(1, aliasesString.length() - 1);
				}

				Logger.info(
					commandTemplate
						.replace("%name%", command.getName())
						.replace("%aliases%", aliasesString)
						.replace("%description%", command.getDescription())
				);
			});

		return false;
	}
}
