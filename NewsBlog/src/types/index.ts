// types for the nsvigation route
export type RootStackParamList = {
    Home: undefined;
    feed:undefined;
    news:{newsId: string; screen:string};
    search:undefined
}

// types for data gotten from the api
export type NewsArticles = {
    source:{
        id:string;
        name:string
    };
    author:string;
    title:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
    content:string
}