import React from "react";
import {
	Box,
	Flex,
	HStack,
	Heading,
	Icon,
	Link,
	Spacer,
} from "@chakra-ui/react";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import { links } from "../utils/utils";


const Example = () => {
  // set a variable 'responsive' to false. Update it using 'setResponsive'
  const [responsive, setResponsive] = useState(false);

  const toggleResponsive = () => {
    //take current value of responsive and flip it
    setResponsive(prev => !prev);
  }

  return (
    <nav>
      <div className={responsive ? 'topnav responsive' : 'topnav'}>
        <a href='/'>Home</a>
	<a href='/'>About</a>
	<a href='/'>Services</a>
	<a href='/'>Contact</a>
        ...
        <a className='icon' onClick={toggleResponsive}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </nav>
  );
}

const Nav = () => {
	return (
		<Flex
			w='full'
			alignItems='center'
			minHeight={"10vh"}
			padding={{ base: "30px", md: "30px 70px" }}
			justifyContent='space-between'
		>
				<Example/>
			<Box>
				<Heading as='h2' size='md' color='#fff'>
					HOUSE
				</Heading>
			</Box>

			<Spacer />

			<HStack spacing='30px' display={{ base: "none", lg: "inline-block" }}>
				{links.map((li) => (
					<Link
						href={li.link}
						color='#fff'
						opacity={0.7}
						fontWeight='semibold'
						key={li.id}
					>
						{li.name}
					</Link>
				))}
			</HStack>
			<Spacer />

			<HStack spacing='30px'>
				<Icon as={GrFacebookOption} color='#fff' boxSize={6} />
				<Icon as={GrInstagram} color='#fff' boxSize={6} />
			</HStack>
		</Flex>
	);
};

export default Nav;
