import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { spacing } from '@mui/system';
import {Box} from '@mui/material';
import { CardComponent } from './MovieCard';

export const Carrousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
},
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
},
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
},
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
};
    return (
      <Box sx={{my: 10, width:1}}>
        <Carousel responsive={responsive}>
            <CardComponent/>
               
            
        </Carousel>
        </Box>  
)
}
