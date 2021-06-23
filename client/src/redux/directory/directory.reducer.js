const INITIAL_STATE = {
    sections: [
        {
          title: 'ramen',
          imageUrl: 'https://wallpapercave.com/uwp/uwp478741.jpeg',
          id: 1,
          sub: 'naruto',
          linkUrl:'/collection/ramen'

        },
        {
          title: 'pugBG',
          imageUrl: 'https://wallpapercave.com/uwp/uwp478408.jpeg',
          id: 2,
          sub: 'pugBG',
          linkUrl:'/collection/pugbg'
      
        },
        {
          title: 'cats',
          imageUrl: 'https://wallpapercave.com/uwp/uwp478397.jpeg',
          id: 3,
          sub: 'cats',
          linkUrl:'/collection/cats'

        },
        {
          title: 'Jhon wick',
          imageUrl: 'https://wallpapercave.com/uwp/uwp478402.jpeg',
          size: 'large',
          id: 4,
          sub: 'jhon',
          linkUrl:'/collection/jhon'

        },
        {
          title: 'bjj',
          imageUrl: 'https://wallpapercave.com/wp/wp2631790.jpg',
          size: 'large',
          id: 5,
          sub: 'bjj',
          linkUrl:'/collection/bjj'
        },
        {
          title: 'whole collection',
          imageUrl: 'https://wallpapercave.com/uwp/uwp515350.jpeg',
          size: 'large',
          id: 6,
          sub: 'whole collection',
          linkUrl:'/collection'
        }
    ]
};

const directoryReducer = (state=INITIAL_STATE, action ) => {
    switch(action.type){

        default: 
            return state

    }

}

export default directoryReducer