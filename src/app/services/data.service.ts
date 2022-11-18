import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() {
    }


    getVideoList() {
        const videoList = [
            {
                userName: 'Pedrinho Miserável',
                likes: '344',
                comments: '40',
                url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/1.mp4?alt=media&token=36032747-7815-473d-beef-061098f08c18',
                userPic: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_2.jpg',
            },
            {
                userName: 'Peex rs',
                likes: '18.5k',
                comments: '4323',
                url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/3.mp4?alt=media&token=a7ccda22-7264-4c64-9328-86a4c2ec31cd',
                userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile3.jpg?alt=media&token=d65b2ed7-4164-4149-a5c7-8620201e8411',
            },
            {
                userName: 'Ratazana Imunda',
                likes: '7.3k',
                comments: '120',
                url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/2.mp4?alt=media&token=b6218221-6699-402b-8b89-7e3354ac32dc',
                userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile4.jpg?alt=media&token=399ca1f4-2017-4f48-af21-0aa6a7b17550',
            },
            {
                userName: 'Queixada',
                likes: '12k',
                comments: '89',
                url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/5.mp4?alt=media&token=965a0494-7aaf-4248-85c5-fefac581ee7f',
                userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile5.jpeg?alt=media&token=7fbe5118-c2e9-4550-a468-3eb8a4d34d6a',
            },
            {
                userName: 'Monstro Inchifrável',
                likes: '10.8k',
                comments: '4390',
                url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/8.mp4?alt=media&token=87e20ffd-2b5c-422a-ad85-33b90b4e2169',
                userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile6.jpeg?alt=media&token=e747af9e-4775-484e-9a27-94b2426f319c',
            },
            {
                userName: 'Beiçola',
                likes: '1.2k',
                comments: '289',
                url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/8.mp4?alt=media&token=87e20ffd-2b5c-422a-ad85-33b90b4e2169',
                userPic: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/profile_pics%2Fprofile6.jpeg?alt=media&token=e747af9e-4775-484e-9a27-94b2426f319c',
            },
            {
                userName: 'Fuly "camper de banheiro" da Silva',
                likes: '7.9k',
                comments: '567',
                url: 'https://firebasestorage.googleapis.com/v0/b/testvideo-91d3a.appspot.com/o/9.mp4?alt=media&token=83911bd2-6083-43d1-824e-2049f1fb11e7',
                userPic: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2022/10/27/ghost_6bqz-1hrj6sgtouhr5.jpg',
            }
        ];

        return videoList;
    }

    getTrends() {
        const trends = [{
            trendName: 'shitpost',
            viewCounts: '117.0M',
            trendProfiles: [{
                id: 0,
                photo: 'data:image/jpeg;base64,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'
            }, {
                id: 1,
                photo: 'https://i.pinimg.com/564x/de/11/2b/de112b9b0de6cad19068f91f27e25541.jpg'
            }, {
                id: 2,
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcMN_KWuduZLNiSOMUyHsZ12BIZfU55_Khw&usqp=CAU'
            }, {
                id: 3,
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuOiu7Zl8WyZwn75ZOA38YXmy2baS9l3OZoZ9Kj5uPeUtcUou4b89GrRzVdtNVq0KxWo&usqp=CAU'
            }, {
                id: 4,
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYp1a6o8ROhMtAkoZsjUNSdjAROrTSSNgXKQ&usqp=CAU'
            }, {
                id: 5,
                photo: 'http://pm1.narvii.com/6329/677f6ed440d0cf76552a52cc6638dcb55c186b05_00.jpg'
            }]
        },
            {
                trendName: 'the monster, the machine, the modern macgyver, Ryan de Souza',
                viewCounts: '340.0B',
                trendProfiles: [{
                    id: 0,
                    photo: 'https://m.media-amazon.com/images/M/MV5BMjA0NTI1OTY3NF5BMl5BanBnXkFtZTcwMjk2NTc2Ng@@._V1_.jpg'
                }, {
                    id: 1,
                    photo: 'https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2022/10/patrick-bateman-in-american-psycho.jpeg'
                }, {
                    id: 2,
                    photo: 'https://media.timeout.com/images/105526173/image.jpg'
                }, {
                    id: 3,
                    photo: 'https://a.ltrbxd.com/resized/sm/upload/mb/nq/gx/cq/nightcrawler-1200-1200-675-675-crop-000000.jpg?v=376281b641'
                }, {
                    id: 4,
                    photo: 'https://geraldomayrink.com.br/wp-content/uploads/2020/11/0000_taxi-driver.jpg'
                }, {
                    id: 5,
                    photo: 'https://pbs.twimg.com/media/FZ7dbefWQAEglcl.jpg'
                }]
            }];
        return trends;
    }

    getSlides() {
        const slides = [
            {
                id: 0,
                photo: './assets/png/1.jpg'
            },
            {
                id: 1,
                photo: './assets/png/2.jpg'
            },

        ];
        return slides;
    }
}
