package net.fedustria.fdscluster.utils.logger;

import lombok.Getter;
import net.fedustria.fdscluster.utils.Colors;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 9/29/2024 5:56 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

public enum LogTypes {

    INFO,
    WARNING,
    ERROR,
    DEBUG,
    SUCCESS;

    @Getter
    private String color;

    LogTypes() {
        switch (this) {
            case INFO:
                color = Colors.ANSI_BLUE;
                break;
            case WARNING:
                color = Colors.ANSI_YELLOW;
                break;
            case ERROR:
                color = Colors.ANSI_RED;
                break;
            case DEBUG:
                color = Colors.ANSI_PURPLE;
                break;
            case SUCCESS:
                color = Colors.ANSI_GREEN;
                break;
        }
    }


}
