import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const Awards = () => {
	const awards = [
		{
			title: "Best banana bunch award",
			imageUrl: "assets/img/awards/best-banana-bunch-award.jpg",
		},
		{
			title: "BEST ENTREPRENEL AWARD (EXPORTER)",
			imageUrl: "assets/img/awards/best-entreprenel-award.jpg",
		},
		{
			title: "Best performance award yara",
			imageUrl: "assets/img/awards/best-performer-award.JPG",
		},
		{
			title: "CHAI Confederation of Horticulture Associations of India",
			imageUrl: "assets/img/awards/chai-confederation-awards.JPG",
		},
		{
			title: "Excellence award 2019",
			imageUrl: "assets/img/awards/excellence-award.JPG",
		},
		{
			title: "HP PETROLEUM CORPORATION",
			imageUrl: "assets/img/awards/hp-petroleum-award.JPG",
		},
		{
			title: "Best farmer award",
			imageUrl: "assets/img/awards/krushi-bhushan.jpg",
		},
		{
			title: "M.M.SHAIKH FOUNDATION, KOLHAPUR",
			imageUrl: "assets/img/awards/mm-sheikh-foundation.jpg",
		},
		{
			title: "Sakal idols of Maharashtra 2022",
			imageUrl: "assets/img/awards/sakal-idols-award.jpg",
		},
	];

	return (
		<div style={{ padding: "50px", textAlign: "center" }}>
			<div style={{ marginBottom: "20px" }}>
				<h1>Awards</h1>
				<p>Check out our latest awards!</p>
			</div>
			<Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={10} p={20}>
				{awards.map((award, index) => (
					<Box
						key={index}
						borderWidth="1px"
						borderRadius="lg"
						overflow="hidden"
						boxShadow="xl"
						p={4}
					>
						<Image
							src={award.imageUrl}
							alt={award.title}
							width="100%"
							height="250px"
							objectFit="cover"
						/>{" "}
						<Box p={4}>
							<Text fontSize="xl" fontWeight="bold" mb={2}>
								{award.title}
							</Text>
						</Box>
					</Box>
				))}
			</Grid>
		</div>
	);
};

export default Awards;
