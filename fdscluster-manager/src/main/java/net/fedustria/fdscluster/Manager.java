package net.fedustria.fdscluster;

import lombok.Getter;
import net.fedustria.fdscluster.command.CommandHandler;
import net.fedustria.fdscluster.utils.ConsoleUtils;
import net.fedustria.fdscluster.utils.logger.Logger;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Calendar;

import static java.util.Arrays.copyOfRange;
import static net.fedustria.fdscluster.utils.Colors.ANSI_LIGHT_BLUE;
import static net.fedustria.fdscluster.utils.Colors.ANSI_RESET;
import static net.fedustria.fdscluster.utils.Constants.ASCII_ART;
import static net.fedustria.fdscluster.utils.Constants.PREFIX;

/**
 * © 2024 Florian O. and Fabian W.
 * Created on: 9/29/2024 3:55 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public class Manager {

    @Getter
    private static CommandHandler commandHandler;

    public static void main(String[] args) {
        sendHeaders();
        createDirectories();
        launch();
    }

    private static void sendHeaders() {
        ConsoleUtils.printColoredLn(ANSI_LIGHT_BLUE, ASCII_ART, ANSI_RESET);

        ConsoleUtils.printColoredLn(ANSI_LIGHT_BLUE, "» Copyright © 2024-" + Calendar.getInstance().get(Calendar.YEAR), ANSI_RESET);
        ConsoleUtils.printColoredLn(ANSI_LIGHT_BLUE, "» Created by Florian O. and Fabian W.", ANSI_RESET);
        ConsoleUtils.printColoredLn(ANSI_LIGHT_BLUE, "» https://cloud.fedustria.net/\n", ANSI_RESET);

        ConsoleUtils.printColoredLn("");
    }

    private static void createDirectories() {
    }

    private static void launch() {
        commandHandler = new CommandHandler();

        showPrefix();
        handleInput();
    }

    private static void handleInput() {
        try (var br = new BufferedReader(new InputStreamReader(System.in))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] args = line.split(" ");
                String command = args[0];

                commandHandler.getCommands().stream()
                        .filter(cmd -> cmd.getName().equalsIgnoreCase(command) || cmd.getAliases().contains(command))
                        .findFirst()
                        .ifPresentOrElse(
                                cmd -> cmd.execute(copyOfRange(args, 1, args.length)),
                                () -> Logger.info("Unknown command '%s' type 'help' for help.", command)
                        );

                showPrefix();
            }
        } catch (Exception e) {
            Logger.error("Failed to get input", e);
        }
    }

    private static void showPrefix() {
        System.out.print(PREFIX);
    }

    public static void initShutdown() {
        System.exit(0);
    }

}
