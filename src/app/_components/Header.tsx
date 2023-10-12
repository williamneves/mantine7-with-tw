"use client"
import { useState } from "react"
import { Container, Group, Burger, Box, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { MantineLogo } from "@mantine/ds"
import { IconBrandTailwind } from "@tabler/icons-react"
import { cn } from "@/utils/cn"
import { ColorSchemeToggle } from "./themeToggle"

const links = [
	{ link: "#home", label: "Home" },
	{ link: "#examples", label: "Examples" },
	{ link: "#get-started", label: "Config" },
	{ link: "#about", label: "About" },
]

type HeaderProps = {
	children?: React.ReactNode
}
export function Header(props: HeaderProps) {
	const [opened, { toggle }] = useDisclosure(false)
	const [active, setActive] = useState(links[0].link)

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={cn([
				"block px-[12px] py-[6px] rounded-sm no-underline text-sm font-medium",
				"ease-in-out duration-300 transition-all",
				"leading-none",
				"text-mtn-gray-7 dark:text-white",
				"hover:bg-mtn-primary-light",
				"data-active:bg-mtn-primary-filled data-active:text-white",
			])}
			data-active={active === link.link || undefined}
			onClick={(event) => {
				event.preventDefault()
				setActive(link.link)
			}}
		>
			{link.label}
		</a>
	))

	return (
		<Box id="home" className="bg-gray-200 dark:bg-dark-body min-h-screen pb-20">
			<Container
				pt={70}
				size={"md"}
			>
				<header
					className={cn([
						"fixed w-full top-0 left-1/2  h-[56px]",
						"transform -translate-x-1/2",
						"mb-mtn-lg z-40 bg-gray-200 dark:bg-dark-body",
					])}
				>
					<Container
						size="md"
						className={cn([
							"h-full flex items-center justify-between",
							"max-w-full mtn-md:max-w-[930px] mtn-md:mt-mtn-xs",
							"bg-white dark:bg-mtn-dark-5",
							"shadow-sm",
							"border border-solid mtn-md:rounded-md border-gray-200  dark:border-dark-body ",
							"",
						])}
					>
						<Group
							pos={"relative"}
							justify="space-between"
						>
							<MantineLogo
								className="text-black dark:text-white"
								size={28}
							/>
							<Text
								className={cn([
									"text-sm italic text-black dark:text-white",
									"absolute top-[5px] -right-[32px]",
								])}
							>
								with
							</Text>
							<IconBrandTailwind
								size={30}
								stroke={1}
								fill="#38bdf9"
								className={cn([
									"text-[#38bdf9]",
									"absolute top-0 -right-[63px]",
								])}
							/>
						</Group>
						<Group>
							<Group
								gap={5}
								visibleFrom="xs"
							>
								{items}
							</Group>
							<ColorSchemeToggle />
							<Burger
								opened={opened}
								onClick={toggle}
								hiddenFrom="xs"
								size="sm"
							/>
						</Group>
					</Container>
				</header>
				{props.children}
			</Container>
		</Box>
	)
}
