import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryStore implements InMemoryDbService{
    createDb(){
        const blogovi=[
            {
                id:0,
                title:'Trekking in Nepal',
                description:'Nepal is known globally for its picturesque...',
                url:'./assets/slike/trekking1.jpg',
                date:'20.08.2019'
            },
            {
                id:1,
                title:'TIGER LEAPING GORGE TREKKING GUIDE',
                description:'Our ultimate Tiger Leaping Gorge trekking guide...',
                url:'./assets/slike/trekking2.jpg',
                date:'23.06.2019'
            },
            {
                id:2,
                title:'6 MEMORABLE DAY HIKES IN THE BALKANS',
                description:'From exploring the sand pyramids of Bulgaria...',
                url:'./assets/slike/trekking4.jpg',
                date:'03.06.2019'
            },
            {
                id:2,
                title:'USHUAIA – CHILLING AT THE END OF THE WORLD',
                description:'I’ve always been inspired by the far corners...',
                url:'./assets/slike/trekking7.jpg',
                date:'03.06.2019'
            }
            
        ];
        return {blogovi};
    }

    }
