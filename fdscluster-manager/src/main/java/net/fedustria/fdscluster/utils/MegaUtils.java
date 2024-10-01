package net.fedustria.fdscluster.utils;

import java.security.SecureRandom;

/**
 * © 2024 Florian O and Fabian W.
 * Created on: 10/1/2024 8:34 PM
 * <p>
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

/**
 * Utility class for various functions.
 */
public class MegaUtils {

	private static final SecureRandom random = new SecureRandom();
	private static final String ALPHANUMERIC =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	public static String generateKey() {
		String prefix = "FDS-";
		StringBuilder key = new StringBuilder(prefix);
		for (int i = 0; i < 64 - prefix.length(); i++) {
			key.append(ALPHANUMERIC.charAt(random.nextInt(ALPHANUMERIC.length())));
		}
		return key.toString();
	}
}
