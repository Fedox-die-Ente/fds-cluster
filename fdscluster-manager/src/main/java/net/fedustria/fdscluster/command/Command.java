package net.fedustria.fdscluster.command;

import static java.util.Collections.unmodifiableList;

import java.util.List;
import java.util.Set;
import lombok.Getter;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/29/2024 4:01 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public abstract class Command {

	@Getter
	private final String name;

	@Getter
	private final String description;

	@Getter
	private final Set<String> aliases;

	private final List<String> parameters;

	public Command(String name, String description, Set<String> aliases, List<String> parameters) {
		this.name = name;
		this.description = description;
		this.aliases = aliases;
		this.parameters = parameters;
	}

	public List<String> getParameters() {
		return unmodifiableList(parameters);
	}

	public long getParameterCount() {
		return parameters.size();
	}

	public abstract boolean execute(String[] args);
}
