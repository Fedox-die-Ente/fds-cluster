'use client';
import React, {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';
import {MoonIcon, SunIcon} from 'lucide-react';

export default function ThemeSwitcher() {
	const {theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	if (!mounted) {
		return null;
	}

	return (
		<div
			onClick={toggleTheme}
			className={
				'bg-gray-300 bg-opacity-20 backdrop-blur-lg dark:bg-gray-700 dark:bg-opacity-20 rounded-full p-4 cursor-pointer'
			}
		>
			{theme === 'light' ? (
				<MoonIcon className={'h-6 w-6 text-light-400'}/>
			) : (
				<SunIcon className={'h-6 w-6 text-light-400'}/>
			)}
		</div>
	);
}
