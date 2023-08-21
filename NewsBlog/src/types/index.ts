export type RootStackParamList = {
    Home: undefined;
    feed:undefined;
    news:{newsId: string};
    search:undefined
}

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