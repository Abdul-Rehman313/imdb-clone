import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
	return (
		<Flex
			p="30px 80px"
			justifyContent="space-between"
			backgroundColor="#26577C"
			color="white"
		>
			<Flex>
				<Text mr="20px">HOME</Text>
				<Text ml="20px">ABOUT</Text>
			</Flex>
			<Flex>
				<Text
					backgroundColor="#FFB000"
					borderRadius="5px"
					fontWeight="700"
					p="3px 12px"
				>
					IMDB
				</Text>
				<Text ml="5px">Clone</Text>
			</Flex>
		</Flex>
	);
}
