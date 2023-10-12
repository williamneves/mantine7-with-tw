import {
	Image,
	Container,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
	rem,
} from "@mantine/core"
import { IconCheck, IconHeartFilled } from "@tabler/icons-react"
import { cn } from "@/utils/cn"
import Link from "next/link"

export function HeroComponent() {
	return (
		<div className={"flex justify-between py-mtn-lg px-2 align-middle items-center"}>
			<div
				className={cn([
					"mtn-md:max-w-[480px] max-w-full",
					"mtn-md:mr-[calc(var(--mantine-spacing-xl)_*_3)] mr-0",
				])}
			>
				<Title
					className={cn([
						"text-dark dark:text-white ",
						"text-[44px] leading-tight font-black font-greycliff",
					])}
				>
					Now, use{" "}
					<span
						className={cn([
							"text-mtn-primary-filled dark:text-mtn-blue-5",
						])}
					>
						Mantine UI
					</span>
					<br /> with <span className="text-mtn-violet-5">Tailwind</span>
				</Title>
				<Text
					c="dimmed"
					mt="md"
				>
					Combine the power of Mantine UI components, hooks, and awesome
					community, with the awesome utility-first world-class Tailwind CSS
					framework.
				</Text>

				<List
					mt={30}
					spacing="sm"
					size="sm"
					icon={
						<ThemeIcon
							size={20}
							radius="xl"
						>
							<IconCheck
								style={{ width: rem(12), height: rem(12) }}
								stroke={1.5}
							/>
						</ThemeIcon>
					}
				>
					<List.Item>
						<b>Tailwind Integration</b> – Say goodbye to extra *.module.css files. Enjoy the Tailwind way of styling directly in your Mantine components.
					</List.Item>
					<List.Item>
						<b>Cross Compatibility</b> – Utilize the same style from Mantine UI with
						Tailwind CSS, maintaining a consistent look and feel.
					</List.Item>
					<List.Item
						icon={
							<ThemeIcon
								size={20}
                radius="xl"
                className="bg-red-600"
							>
								<IconHeartFilled
									style={{ width: rem(12), height: rem(12) }}
									stroke={1.5}
								/>
							</ThemeIcon>
						}
					>
            <b>Love Both!</b> – For those who adore both <b>Mantine</b> and <b>Tailwind</b>, this is the
            perfect blend to construct stunning UIs.
					</List.Item>
				</List>

				<Group mt={30}>
					<Button
						radius="xl"
						size="md"
            className={"flex-1 mtn-xs:flex-none"}
            component={Link}
            href="#examples"
					>
						Examples
					</Button>
					<Button
						variant="default"
						radius="xl"
						size="md"
						className={"flex-1 mtn-xs:flex-none"}
					>
						Get Started
					</Button>
				</Group>
			</div>
			<Image
				alt="Mantine hero image"
				src={"https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg"}
				className={"hidden mtn-md:block w-[376px] h-[356px]"}
			/>
		</div>
	)
}
