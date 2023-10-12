"use client"

import {
	Box,
	Container,
	Card,
	Group,
	Stack,
	Text,
	Title,
	TextInput,
	SimpleGrid,
	Flex,
	SegmentedControl,
	Tabs,
	ScrollArea,
	Divider,
	Tooltip,
} from "@mantine/core"
import { CodeHighlightTabs } from "@mantine/code-highlight"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { HeroComponent } from "./_components/Hero"
import { TypeScriptIcon, CssIcon } from "@mantine/ds"
import { Image } from "@mantine/core"
import NextImage from "next/image"
import Link from "next/link"

const highlight1 = `<Paper p={{ base: "md", md: "lg" }} shadow="md">
  <Text>This is a pure Mantine component</Text>
</Paper>`

const highlight2 = `<Paper
  classNames={{
    root: "group bg-mtn-primary-light-color text-light-grape-filled px-mtn-md py-mtn-lg my-mtn-xl rounded-lg text-white italic shadow-sm hover:shadow-mtn-lg cursor-pointer transition duration-150 ease-in-out",
  }}
>
  <Text
    classNames={{
      root: "group-hover:underline",
    }}
  >
    This component is a mixin with tailwind class
  </Text>
</Paper>`

const highlight3 = `<Paper
  p={{ base: "md", md: "lg" }}
  shadow="md"
>
  <p className="text-light-text text-sm font-semibold">
    This a Mantine Input component with floating label by Tailwind
  </p>
  <TextInput
    labelProps={{ "data-floating": floating }}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    value={value}
    onChange={(event) => setValue(event.currentTarget.value)}
    classNames={{
      root: "relative mt-[12px]",
      input: "border-b-1",
      label:
        "absolute z-10 pointer-events-none top-[6px] data-[floating=true]:top-[8px] left-[12px] data-[floating=true]:left-[8px] text-light-placeholder text-sm transition-all duration-75 ease-in-out data-[floating=true]:translate-y-[-20px] text-base data-[floating=true]:text-xs data-[floating=true]:text-mtn-primary-filled-hover bg-transparent data-[floating=true]:bg-white dark:data-[floating=true]:bg-mtn-dark-6 data-[floating=true]:bg-mtn-light-body px-0 data-[floating=true]:px-1",
    }}
    label="Floating label"
  />
</Paper>`

function replaceTabsWithSpaces(code: string): string {
	const lines = code.split("\n")
	const updatedLines = lines.map((line) => {
		let updatedLine = line
		const leadingTabs = line.match(/^\t+/)
		if (leadingTabs) {
			const numSpaces = leadingTabs[0].length * 2
			updatedLine = line.replace(/^\t+/, " ".repeat(numSpaces))
		}
		return updatedLine
	})
	return updatedLines.join("\n")
}

export default function Home() {
	const [value, setValue] = useState("")
	const [focused, setFocused] = useState(false)
	const [sections, setSections] = useState<string>("Mantine")
	const floating = focused || value.length > 0 || undefined

	const tsIcon = <TypeScriptIcon size={18} />
	const cssIcon = <CssIcon size={18} />

	return (
		<Stack>
			<HeroComponent />

			{/* Examples */}

			<div className="relative">
				<div
					id="examples"
					className="absolute -top-8"
				></div>
			</div>

			<Flex
				className={"w-full flex-row gap-mtn-md justify-between items-center"}
			>
				<Text className="text-h1 flex-1 text-center font-greycliff font-black mt-mtn-xl">
					How this is <span className="text-mtn-primary-filled">possible?</span>
				</Text>
				<Text className="hidden mtn-md:block text-h1 flex-1 w-full text-center font-greycliff font-black mt-mtn-xl">
					This page is an{" "}
					<span className="text-mtn-violet-6 dark:text-mtn-violet-5">
						example!
					</span>
				</Text>
			</Flex>
			<Flex
				className={
					"w-full flex-col mtn-md:flex-row gap-mtn-md justify-between items-stretch"
				}
			>
				<Card className="mx-auto flex-1 bg-mtn-primary-filled text-white">
					<Text className="text-center text-sm">
						Mantine UI v7+ no longer rely on the <b>emotion</b> for handling
						CSS. Instead, it now uses plain CSS styles and CSS modules. This
						shift opens up the possibility for users to implement other UI
						libraries, such as <b>Tailwind</b>. This is exactly what we've done
						here. We've integrated Mantine UI with Tailwind to provide a
						seamless user experience. Explore and enjoy!
					</Text>
				</Card>

				<Text className="block mtn-md:hidden text-h1 flex-1 w-full text-center font-greycliff font-black mt-mtn-xl">
					This page is an{" "}
					<span className="text-mtn-violet-6 dark:text-mtn-violet-5">
						example!
					</span>
				</Text>

				<Card className="mx-auto flex-1 bg-mtn-violet-6 dark:bg-mtn-violet-5 text-white flex items-center justify-center">
					<Text className="text-center text-sm">
						This page is built using the Mantine UI components, but I changed
						the *.modules.css and replaced it with Tailwind classes. The code is
						still the same, but the styling is now handled by Tailwind. Look the
						code difference below.
					</Text>
				</Card>
			</Flex>

			<Group
				className="mx-auto"
				justify="center"
				wrap="nowrap"
			>
				{/* <Text>Select to see the code:</Text> */}
			</Group>
			<Card>
				<Tabs defaultValue={"simple-header"}>
					<Tabs.List className="mb-mtn-md">
						<Tabs.Tab value="simple-header">Simple Header</Tabs.Tab>
						<Tabs.Tab value="hero-bullets">Hero with Bullets</Tabs.Tab>
					</Tabs.List>

					<SimpleHeaderTab
						tsIcon={tsIcon}
						cssIcon={cssIcon}
					/>
					<TabHeroWithBullets
						tsIcon={tsIcon}
						cssIcon={cssIcon}
					/>
				</Tabs>
			</Card>
		</Stack>
	)
}

const SimpleHeaderTab = ({
	tsIcon,
	cssIcon,
}: {
	tsIcon: React.ReactNode
	cssIcon: React.ReactNode
}) => {
	const router = useRouter()

	// CODES
	const simpleHeaderCode = `import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}`

	const simpleHeaderCss = `.header {
  height: rem(56px);
  margin-bottom: rem(120px);
  background-color: var(--mantine-color-body);
  border-bottom: rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
}

.inner {
  height: rem(56px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  display: block;
  line-height: 1;
  padding: rem(8px) rem(12px);
  border-radius: var(--mantine-radius-sm);
  text-decoration: none;
  color: light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0));
  font-size: var(--mantine-font-size-sm);
  font-weight: 500;

  @mixin hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  }

  [data-mantine-color-scheme] &[data-active] {
    background-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);
  }
}`

	const simpleHeaderTailwindCode = `"use client"
import { useState } from "react"
import { Container, Group, Burger, Box, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { MantineLogo } from "@mantine/ds"
import { IconBrandTailwind } from "@tabler/icons-react"
import { cn } from "@/utils/cn"
import { ColorSchemeToggle } from "./themeToggle"

const links = [
	{ link: "/", label: "Home" },
	{ link: "/examples", label: "Examples" },
	{ link: "/config", label: "Config" },
	{ link: "/about", label: "About" },
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
		<Box className="bg-gray-200 dark:bg-dark-body min-h-screen pb-20">
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
							"max-w-full mtn-md:max-w-[928px] mtn-md:mt-mtn-xs",
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
`
	return (
		<Tabs.Panel value="simple-header">
			<Text className="text-h3 font-greycliff font-black">Simple Header </Text>
			<Text>
				Simple Header is one of the Headers components from Mantine UI. It is
				the one we are using in this page.
			</Text>
			<Link
				href={"https://ui.mantine.dev/component/header-simple/"}
				target="_blank"
			>
				<Tooltip
					label="Click to see the orginal Mantine UI Header"
					withArrow
					withinPortal
					position="top-end"
					offset={-10}
				>
					<Image
						src="/images/header-white.png"
						alt="Mantine UI Header"
						className={"py-mtn-md block dark:hidden cursor-pointer"}
					/>
				</Tooltip>
				<Tooltip
					label="Click to see the orginal Mantine UI Header"
					withArrow
					withinPortal
					position="top-end"
					offset={-10}
				>
					<Image
						src="/images/header-dark.png"
						alt="Mantine UI Header"
						className={"py-mtn-md hidden dark:block cursor-pointer"}
					/>
				</Tooltip>
			</Link>
			<Text className="mb-mtn-xs">Look the code bellow:</Text>
			<CodeHighlightTabs
				withHeader
				code={[
					{
						language: "tsx",
						code: replaceTabsWithSpaces(simpleHeaderCode),
						fileName: "Header.tsx",
						icon: tsIcon,
					},
					{
						language: "css",
						code: replaceTabsWithSpaces(simpleHeaderCss),
						fileName: "Header.module.css",
						icon: cssIcon,
					},
					{
						language: "tsx",
						code: replaceTabsWithSpaces(simpleHeaderTailwindCode),
						fileName: "Header-with-tailwind.tsx",
						icon: tsIcon,
					},
				]}
			/>
		</Tabs.Panel>
	)
}
const TabHeroWithBullets = ({
	tsIcon,
	cssIcon,
}: {
	tsIcon: React.ReactNode
	cssIcon: React.ReactNode
}) => {
	// CODES
	const heroWithBulletsCode = `import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './image.svg';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> React <br /> components library
          </Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all components and hooks
              export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
              any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
              keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}`

	const heroWithBulletsCss = `.inner {
  display: flex;
  justify-content: space-between;
  padding-top: calc(var(--mantine-spacing-xl) * 4);
  padding-bottom: calc(var(--mantine-spacing-xl) * 4);
}

.content {
  max-width: rem(480px);
  margin-right: calc(var(--mantine-spacing-xl) * 3);

  @media (max-width: $mantine-breakpoint-md) {
    max-width: 100%;
    margin-right: 0;
  }
}

.title {
  color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
  font-family: Greycliff CF, var(--mantine-font-family);
  font-size: rem(44px);
  line-height: 1.2;
  font-weight: 900;

  @media (max-width: $mantine-breakpoint-xs) {
    font-size: rem(28px);
  }
}

.control {
  @media (max-width: $mantine-breakpoint-xs) {
    flex: 1;
  }
}

.image {
  width: rem(376px);
  height: rem(356px);

  @media (max-width: $mantine-breakpoint-md) {
    display: none;
  }
}

.highlight {
  position: relative;
  background-color: var(--mantine-color-blue-light);
  border-radius: var(--mantine-radius-sm);
  padding: rem(4px) rem(12px);
}`

	const heroWithBulletsTailwind = `import {
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
`
	return (
		<Tabs.Panel value="hero-bullets">
			<Text className="text-h3 font-greycliff font-black">
				Hero with Bullets
			</Text>
			<Text>
				Hero With Bullets is one the Hero components on Mantine UI library, and
				I used here on this page.
			</Text>
			<Link
				href={"https://ui.mantine.dev/component/hero-bullets/"}
				target="_blank"
			>
				<Tooltip
					label="Click to see the orginal Hero With Bullets Mantine UI"
					withArrow
					withinPortal
					position="top-end"
					offset={-10}
				>
					<Image
						src="/images/hero-1.png"
						alt="Hero With Bullets Mantine UI"
						className={"py-mtn-md block dark:hidden cursor-pointer"}
						onClick={() => console.log("clicked")}
					/>
				</Tooltip>
				<Tooltip
					label="Click to see the orginal Hero With Bullets Mantine UI"
					withArrow
					withinPortal
					position="top-end"
					offset={-10}
				>
					<Image
						src="/images/hero-1-dark.png"
						alt="Hero With Bullets Mantine UI"
						className={"py-mtn-md hidden dark:block cursor-pointer"}
					/>
				</Tooltip>
			</Link>
			<Text className="mb-mtn-xs">Look the code bellow:</Text>
			<CodeHighlightTabs
				withHeader
				code={[
					{
						language: "tsx",
						code: replaceTabsWithSpaces(heroWithBulletsCode),
						fileName: "Hero.tsx",
						icon: tsIcon,
					},
					{
						language: "css",
						code: replaceTabsWithSpaces(heroWithBulletsCss),
						fileName: "Hero.module.css",
						icon: cssIcon,
					},
					{
						language: "tsx",
						code: replaceTabsWithSpaces(heroWithBulletsTailwind),
						fileName: "Hero-with-tailwind.tsx",
						icon: tsIcon,
					},
				]}
			/>
		</Tabs.Panel>
	)
}

// const returneds = (
// 	<Stack mt={"lg"}>
// 		<Card
// 			withBorder
// 			p={{ base: "md", md: "lg" }}
// 			shadow="md"
// 		>
// 			<Text>This is a pure Mantine component</Text>
// 		</Card>

// 		<Card
// 			withBorder
// 			classNames={{
// 				root: "group bg-mtn-primary-light-color text-light-grape-filled px-mtn-md py-mtn-lg my-mtn-xl rounded-lg text-white italic shadow-sm hover:shadow-mtn-lg cursor-pointer transition duration-150 ease-in-out",
// 			}}
// 		>
// 			<Text
// 				classNames={{
// 					root: "group-hover:underline",
// 				}}
// 			>
// 				This component is a mixin with tailwind class
// 			</Text>
// 		</Card>

// 		<Card
// 			withBorder
// 			p={{ base: "md", md: "lg" }}
// 			shadow="md"
// 		>
// 			<p className="text-light-text text-sm font-semibold">
// 				This a Mantine Input component with floating label by Tailwind
// 			</p>
// 			<TextInput
// 				labelProps={{ "data-floating": floating }}
// 				onFocus={() => setFocused(true)}
// 				onBlur={() => setFocused(false)}
// 				value={value}
// 				onChange={(event) => setValue(event.currentTarget.value)}
// 				classNames={{
// 					root: "relative mt-[12px]",
// 					input: "border-b-1",
// 					label:
// 						"absolute z-10 pointer-events-none top-[6px] data-[floating=true]:top-[8px] left-[12px] data-[floating=true]:left-[8px] text-light-placeholder text-sm transition-all duration-75 ease-in-out data-[floating=true]:translate-y-[-20px] text-base data-[floating=true]:text-xs data-[floating=true]:text-mtn-primary-filled-hover bg-transparent data-[floating=true]:bg-white dark:data-[floating=true]:bg-mtn-dark-6 data-[floating=true]:bg-mtn-light-body px-0 data-[floating=true]:px-1",
// 				}}
// 				label="Floating label"
// 			/>
// 		</Card>

// 		{/* Code CodeHighlight */}
// 		<Card
// 			withBorder
// 			p={{ base: "md", md: "lg" }}
// 			shadow="md"
// 		>
// 			<CodeHighlightTabs
// 				withExpandButton
// 				defaultExpanded={false}
// 				expandCodeLabel="Show full code"
// 				collapseCodeLabel="Show less"
// 				code={[
// 					{
// 						language: "tsx",
// 						code: replaceTabsWithSpaces(highlight1),
// 						fileName: "pure-mantine",
// 					},
// 					{
// 						language: "tsx",
// 						code: replaceTabsWithSpaces(highlight2),
// 						fileName: "mixin-tailwind",
// 					},
// 					{
// 						language: "tsx",
// 						code: replaceTabsWithSpaces(highlight3),
// 						fileName: "input-floating",
// 					},
// 				]}
// 			/>
// 		</Card>
// 	</Stack>
// )
