import React from "react";
import Cover from "../cover";
import { StyledImage } from "../../atoms/image/styled";
import fabian from "../../ions/images/fabian_schmauder.jpg";
import Layout from "../../organisms/layout";
import Layer from "../../organisms/layer";
import Text from "../../atoms/text";
import List from "../../atoms/list";
import ListItemSmall from "../../atoms/list-item-small";
import Box from "@mui/material/Box";
const Laudatio = [

    () => <Cover title="Welcome" subtitle={"Kotlin"} />,
    () => <Layout>
    <Layer>
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                mt: "-10rem",
                ml: "4rem",
                width: "40rem",
                height: "20rem",
            }}
        >
            <Text variant="h4" sx={{ pb: "1rem" }}>
            Fabian Schmauder
            </Text>
            <Text variant="subtitle2" sx={{ pb: "1rem" }}>
            Coach / IT Consultant
                </Text> 
            <List>
                <ListItemSmall component="li">
                    - AWS / Kotlin / Java Coach
                </ListItemSmall>
                <ListItemSmall component="li">
                    - Developer AWS, Java/Kotlin, Spring Boot, React/ NextJs, React Native
                </ListItemSmall>
                <ListItemSmall component="li">
                    - CTO deinHofmarkt.de 
                </ListItemSmall>
                
            </List>
    
        </Box>
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                right: "10rem",
                mt: "-11rem",
                width: "20rem",
                height: "20rem",
                display: "grid",
                gap: 1,
                gridTemplateColumns: `repeat(1, 1fr)`,
            }}
        >
           <StyledImage
						{...fabian}
						sx={{
                        }}
						layout="fill"
					/>
        </Box>
    </Layer>
</Layout>,


];

export default Laudatio;
