import TitleImage from './resources/Title.png';
import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/Gallery_Photo_1.png';
import GalleryPhoto2 from './resources/Gallery_Photo_2.png';
import GalleryPhoto3 from './resources/Gallery_Photo_3.png';
import GalleryPhoto4 from './resources/Gallery_Photo_4.png';
import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
import GalleryPhoto6 from './resources/Gallery_Photo_6.png';

const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: 'kakao token',
  kakaoImage: 'image url',
  weddingDate: '08/01/2023',
  weddingLocation: 'Nikko Hotel Saigon',
  groom: {
    name: 'Nair',
    accountNumber: '1111111',
    fatherName: 'SK',
    fatherAccountNumber: '2222222',
    motherName: 'Ngo Thi Kim Ngan',
    motherAccountNumber: '3333333',
  },
  bride: {
    name: 'PA',
    accountNumber: '4444444',
    fatherName: 'Van Minh',
    fatherAccountNumber: '5555555',
    motherName: 'Xuan Huong',
    motherAccountNumber: '6666666',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: string[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
