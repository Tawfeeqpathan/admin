import React from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import img1 from "../../../images/Home.png"
import s1img from "../../../images/proteinslide.png"
import s2img from "../../../images/Dietslide.png"
import img2 from "../../../images/gymslide.png"
import img3 from "../../../images/a3.png"
import { HeadCarousel, mystyle } from './OfferProductList';
const Carousel = () => {
    const cData = [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2   
          },
        {
            id: 3,
            image: img3
        }
    ]
  return (
    <Swiper
    style={{height:150}}
      showsPagination={true}
      autoplay={true}
      autoplayTimeout={3}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    >
      {cData.map((item)=>(<View style={styles.slide}  key={item.id}>
        <Image source={item.image}   style={{  height:150,
    width:370,borderRadius:10}} />
      </View>))}
    </Swiper>
  );
};
export const ProductCarousel = ()=>{
  return(
    <Swiper
    style={{height:210}}
      showsPagination={true}
      autoplay={true}
      autoplayTimeout={2}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    > 

<View style={mystyle.box}>
<Image source={s1img} style={{width:350,height:150}}/>
</View>
<View style={mystyle.box}>
<Image source={s1img} style={{width:350,height:150}}/>
</View>
    </Swiper>
  )
}
const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'black',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -31,
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: -31,
    
  },
};

export default Carousel;


