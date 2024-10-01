package net.fedustria.fdscluster.utils.logger;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;
import net.fedustria.fdscluster.utils.Colors;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/29/2024 5:55 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class Logger {

	private static String logTemplate(LogTypes type, String message) {
		String simpleDat = new SimpleDateFormat("HH:mm:ss").format(Date.from(Instant.now()));
		return (
			Colors.ANSI_WHITE +
			"(" +
			simpleDat +
			")" +
			Colors.ANSI_RESET +
			" - [" +
			type.getColor() +
			type.name() +
			Colors.ANSI_RESET +
			"]: " +
			message
		);
	}

	private static void log(LogTypes type, String message) {
		System.out.println(logTemplate(type, message));
	}

	private static String formatException(Exception e) {
		StringWriter sw = new StringWriter();
		PrintWriter pw = new PrintWriter(sw);
		e.printStackTrace(pw);
		return sw.toString();
	}

	public static void info(String message, Object... args) {
		log(LogTypes.INFO, String.format(message, args));
	}

	public static void warning(String message) {
		log(LogTypes.WARNING, message);
	}

	public static void error(String message) {
		log(LogTypes.ERROR, message);
	}

	public static void error(String message, Exception e) {
		log(LogTypes.ERROR, message + "\n" + formatException(e));
	}

	public static void debug(String message) {
		log(LogTypes.DEBUG, message);
	}

	public static void success(String message) {
		log(LogTypes.SUCCESS, message);
	}

	public static void empty() {
		System.out.println();
	}
}
