"use client"

import {
	ActionIcon,
	useMantineColorScheme,
	useComputedColorScheme,
} from "@mantine/core"
import { IconSun, IconMoon } from "@tabler/icons-react"

export function ColorSchemeToggle() {
	const { setColorScheme } = useMantineColorScheme()
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	})

	const handleToggleScheme = () => {
		if (computedColorScheme === "dark") return setColorScheme("light")

		return setColorScheme("dark")
	}

	return (
		<ActionIcon
			variant={"subtle"}
      onClick={handleToggleScheme}
      color={computedColorScheme === "dark" ? "yellow" : "purple"}
		>
			<IconSun
				className="hidden dark:block"
				width={"75%"}
				stroke={1.5}
			/>
			<IconMoon
				className="block dark:hidden"
        width={"75%"}
				stroke={1.5}
			/>
		</ActionIcon>
	)
}
