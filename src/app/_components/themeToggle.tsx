"use client";

import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const handleToggleScheme = () => {
    if (computedColorScheme === "dark") return setColorScheme("light");

    return setColorScheme("dark");
  };

  return (
    <ActionIcon variant={"outline"} onClick={handleToggleScheme}>
      <IconSun className="hidden dark:block" size={18} />
      <IconMoon className="block dark:hidden" size={18} />
    </ActionIcon>
  );
}
