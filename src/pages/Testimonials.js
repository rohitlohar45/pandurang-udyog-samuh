import React, { useState, useEffect } from "react";
import {
	Avatar,
	Box,
	chakra,
	Flex,
	IconButton,
	SimpleGrid,
	useColorModeValue,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { collection, getDocs, query } from "@firebase/firestore";
import { firestore } from "../firebase/initialise";

// // Function to generate random testimonials
// const generateTestimonials = (count) => {
// 	const testimonials = [];
// 	for (let i = 0; i < count; i++) {
// 		const name = faker.person.fullName();
// 		const role = faker.person.jobTitle();
// 		const content = faker.lorem.paragraph();
// 		const avatar = faker.image.avatar();
// 		testimonials.push({
// 			name,
// 			role,
// 			content,
// 			avatar,
// 		});
// 	}
// 	return testimonials;
// };

// Testimonial card component
function TestimonialCard({ title, role, content, image }) {
	return (
		<Flex
			boxShadow="lg"
			border={useColorModeValue("1px solid", "1px solid")}
			maxW="640px"
			width="full"
			rounded="xl"
			p={10}
			justifyContent="space-between"
			position="relative"
			bg={useColorModeValue("white", "gray.800")}
		>
			<Flex direction="column" textAlign="left" justifyContent="space-between">
				<chakra.p fontFamily="Inter" fontWeight="medium" fontSize="15px" pb={4}>
					{content}
				</chakra.p>
				<chakra.p fontFamily="Work Sans" fontWeight="bold" fontSize={14}>
					{title}
					<chakra.span fontFamily="Inter" fontWeight="medium" color="gray.500">
						{" "}
						- {role}
					</chakra.span>
				</chakra.p>
			</Flex>
			<Avatar
				src={image}
				height="80px"
				width="80px"
				alignSelf="center"
				m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
			/>
		</Flex>
	);
}

export default function TestimonialsCarousel() {
	// const testimonials = generateTestimonials(6);
	const [testimonials, setTestimonials] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
	};

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
	};

	const fetchTestimonials = async (page) => {
		try {
			const testimonialsCollectionRef = collection(firestore, "testimonials");
			const q = query(testimonialsCollectionRef);

			const querySnapshot = await getDocs(q);
			const fetchedTestimonials = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			console.log("Fetched testimonials:", fetchedTestimonials);
			setTestimonials(fetchedTestimonials);
		} catch (error) {
			console.error("Error fetching awards:", error);
		}
	};

	useEffect(() => {
		// const intervalId = setInterval(handleNext, 10000);
		fetchTestimonials();
		// return () => clearInterval(intervalId);
	}, []);

	return (
		<Flex
			textAlign="center"
			pt={10}
			justifyContent="center"
			direction="column"
			width="full"
			overflow="hidden"
		>
			{testimonials?.length > 0 && (
				<>
					<Box width={{ base: "full", sm: "lg", lg: "xl" }} margin="auto">
						<chakra.h2
							py={5}
							fontSize={{ base: 32, sm: 48 }}
							fontFamily="Work Sans"
							fontWeight="bold"
						>
							Client's Feedback
						</chakra.h2>
					</Box>
					<Flex justifyContent="space-between" alignItems="center" mx="auto" width="100%" mt={4}>
						<IconButton
							aria-label="Previous"
							icon={<ArrowLeftIcon />}
							onClick={handlePrevious}
							variant="outline"
							size="lg"
							isRound
							mx={2}
							// bg={useColorModeValue("gray.200", "gray.700")}
						/>

						<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mx="auto">
							{testimonials?.slice(currentIndex, currentIndex + 2)?.map((cardInfo, index) => (
								<TestimonialCard {...cardInfo} key={index} />
							))}
						</SimpleGrid>

						<IconButton
							aria-label="Next"
							icon={<ArrowRightIcon />}
							onClick={handleNext}
							variant="outline"
							size="lg"
							isRound
							mx={2}
						/>
					</Flex>
				</>
			)}
		</Flex>
	);
}
