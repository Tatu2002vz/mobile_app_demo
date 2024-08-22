import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as React from 'react';
import Banner from '../assets/images/app.png';
import NewsItem from '../components/NewsItem';
const {width, height} = Dimensions.get('screen');
const Home = () => {
  // const [news, setNews] = React.useState(null);
  const [news, setNews] = React.useState(() => [
    {
      title: 'Thời tới cản không kịp!',
      image_url:
        'https://img.docnhanh.vn/images/uploads/2024/08/20/sau-ngay-208-cham-dut-van-den-ba-tuoi-tai-loc-tang-chong-mat.jpg',
      keywords: 'tin tức',
      pubDate: '2020',
    },
    {
      title: 'Thời tới cản không kịp!',
      image_url:
        'https://img.docnhanh.vn/images/uploads/2024/08/20/sau-ngay-208-cham-dut-van-den-ba-tuoi-tai-loc-tang-chong-mat.jpg',
      keywords: 'tin tức',
      pubDate: '2020',
    },
    {
      title: 'Thời tới cản không kịp!',
      image_url:
        'https://img.docnhanh.vn/images/uploads/2024/08/20/sau-ngay-208-cham-dut-van-den-ba-tuoi-tai-loc-tang-chong-mat.jpg',
      keywords: 'tin tức',
      pubDate: '2020',
    },
    {
      title: 'Thời tới cản không kịp!',
      image_url:
        'https://img.docnhanh.vn/images/uploads/2024/08/20/sau-ngay-208-cham-dut-van-den-ba-tuoi-tai-loc-tang-chong-mat.jpg',
      keywords: 'tin tức',
      pubDate: '2020',
    },
  ]);
  // React.useEffect(() => {
  //   const url =
  //     'https://newsdata.io/api/1/latest?country=vi&apikey=pub_51373f963f50877cf05c29361b95b198978cb&size=10';
  //   // const req = new Request(url);
  //   fetch(url)
  //     .then(rs => {
  //       return rs.json();
  //     })
  //     .then(data => {
  //       // console.log('data: ' + JSON.stringify(data));
  //       if (data.status === 'success') setNews(data.results);
  //     });
  // }, []);
  return (
    <ScrollView>
      <Text className="bg-[#067CFF] text-white uppercase font-bold p-4 text-center">
        Home Screen
      </Text>
      <Image source={Banner} style={styles.banner} />
      <ScrollView className="p-2 w-full flex-col">
        {news?.map((item, index) => {
          return <NewsItem data={item} key={index} />;
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  banner: {
    objectFit: 'cover',
    width: width,
    height: height / 4,
    marginTop: '10px',
  },
});
