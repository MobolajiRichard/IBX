import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
  Modal,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {RootStackParamList, NewsArticles} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState, useEffect} from 'react';
import {ICONS, COLORS} from '../constant';
import {HeroCard, FilteredNewsCard} from '../components';
import { useAppDispatch } from '../../hooks/reduxHook';
import { storeCategoryNews, storeLatestNews } from '../../redux/NewsSlice';

const HomeScreen: FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({
  navigation,
}) => {
  const [category, setCategory] = useState('Health');
  const [tab, setTab] = useState('home');
  const [latestNews, setLatestNews] = useState<NewsArticles[]>([]);
  const [categoryArticles, setCategoryArticles] = useState<NewsArticles[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch()
  const categories = [
    'Health',
    'Technology',
    'Finance',
    'Art',
    'General',
    'Science',
    'Sports',
  ];

  const mockdata = {
    "status": "ok",
    "totalResults": 46,
    "articles": [
    {
    "source": {
    "id": "google-news-in",
    "name": "Google News (India)"
    },
    "author": "Mint",
    "title": "2024 US Presidential Elections: Donald Trump's big warning to India ‘Reciprocal tax if...' | Mint - Mint",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiiwFodHRwczovL3d3dy5saXZlbWludC5jb20vbmV3cy93b3JsZC8yMDI0LXVzLXByZXNpZGVudGlhbC1lbGVjdGlvbnMtZG9uYWxkLXRydW1wcy1iaWctd2FybmluZy10by1pbmRpYS1yZWNpcHJvY2FsLXRheC1pZi0xMTY5MjU4NTYxNDY1OS5odG1s0gGPAWh0dHBzOi8vd3d3LmxpdmVtaW50LmNvbS9uZXdzL3dvcmxkLzIwMjQtdXMtcHJlc2lkZW50aWFsLWVsZWN0aW9ucy1kb25hbGQtdHJ1bXBzLWJpZy13YXJuaW5nLXRvLWluZGlhLXJlY2lwcm9jYWwtdGF4LWlmL2FtcC0xMTY5MjU4NTYxNDY1OS5odG1s?oc=5",
    "urlToImage": null,
    "publishedAt": "2023-08-21T04:41:45+00:00",
    "content": null
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "CBS News",
    "title": "The Takeout: Corndogs and campaigns at the Iowa State Fair",
    "description": "Major Garrett takes \"The Takeout\" to the 2023 Iowa State Fair, where he talks with Iowa Republicans and Democrats alike about the state of 2024 Presidential race, the latest indictment of Former President Trump and the history and traditions of the campaign s…",
    "url": "https://www.cbsnews.com/video/the-takeout-corndogs-and-campaigns-at-the-iowa-state-fair/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/08/20/6194f7fa-7bae-4a4b-99ef-14637a053d49/thumbnail/1200x630/e2b47161289adf034fd9e5357ac488a1/0820-thetakeout-iowastatefair1-2219036-640x360.jpg?v=0b4ae642db52799a178d90d83603a9dc",
    "publishedAt": "2023-08-21T04:22:01+00:00",
    "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "NICHOLAS RICCARDI and DAVID KLEPPER",
    "title": "Trump and his allies double down on election lies after indictments for trying to undo 2020 results",
    "description": "WASHINGTON (AP) — A federal indictment and one in Georgia charging Donald Trump with lying about the 2020 election to overturn President Joe Biden’s win have done nothing to slow the geyser of election falsehoods flowing from the former president and his supp…",
    "url": "https://apnews.com/4b2269d68dad3024bd5afa711478505a",
    "urlToImage": "https://storage.googleapis.com/afs-prod/media/26763b2b1eba44a3bde9cbc41cf95524/3000.jpeg",
    "publishedAt": "2023-08-21T04:08:09Z",
    "content": "WASHINGTON (AP) — A federal indictment and one in Georgia charging Donald Trump with lying about the 2020 election to overturn President Joe Biden’s win have done nothing to slow the geyser of electi… [+8469 chars]"
    },
    {
    "source": {
    "id": "breitbart-news",
    "name": "Breitbart News"
    },
    "author": "Paul Bois",
    "title": "Trump Says He Will 'Not Be Doing the Debates,' Citing Poll Numbers",
    "description": "Former President Donald Trump declared on Sunday that he will \"not be doing the debates\" amid such strong poll numbers.",
    "url": "http://www.breitbart.com/2024-election/2023/08/20/trump-says-not-doing-debates-citing-poll-numbers/",
    "urlToImage": "https://media.breitbart.com/media/2023/05/Donald-Trump-640x335.jpg",
    "publishedAt": "2023-08-21T03:02:51Z",
    "content": "Former President Donald Trump declared on Sunday that he will “not be doing the debates” amid such strong poll numbers putting him high above his opponents.\r\nThe former president made his declaration… [+2246 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "CBS News",
    "title": "Trump still heavy GOP favorite despite indictments",
    "description": "Former President Trump still has a massive lead in Republican primary polling, despite being indicted four times. Trump, who has until Friday to turn himself in to a Georgia jail following his latest indictment, will not attend the first GOP debate set for th…",
    "url": "https://www.cbsnews.com/video/trump-still-heavy-gop-favorite-despite-indictments/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/08/20/89da806b-45a6-49fd-994c-2e5563668cc8/thumbnail/1200x630/feb7e234b3c30b8a58fb74b05d234782/henry-2223104-640x360.jpg?v=0b4ae642db52799a178d90d83603a9dc",
    "publishedAt": "2023-08-21T02:59:51+00:00",
    "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "The Guardian US",
    "title": "Jaws without the shark: absent Trump looms over Republicans’ first debate - The Guardian US",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS91cy1uZXdzLzIwMjMvYXVnLzIwL2RvbmFsZC10cnVtcC1yZXB1YmxpY2FuLXByZXNpZGVudGlhbC1kZWJhdGUtbWlsd2F1a2VlLWRlc2FudGlzLWNocmlzdGll0gF3aHR0cHM6Ly9hbXAudGhlZ3VhcmRpYW4uY29tL3VzLW5ld3MvMjAyMy9hdWcvMjAvZG9uYWxkLXRydW1wLXJlcHVibGljYW4tcHJlc2lkZW50aWFsLWRlYmF0ZS1taWx3YXVrZWUtZGVzYW50aXMtY2hyaXN0aWU?oc=5",
    "urlToImage": null,
    "publishedAt": "2023-08-21T01:30:00+00:00",
    "content": null
    },
    {
    "source": {
    "id": "bloomberg",
    "name": "Bloomberg"
    },
    "author": "Bloomberg",
    "title": "Trump Says He Will 'Not Be Doing the Debates' With GOP Rivals",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDIzLTA4LTIwL3RydW1wLXNheXMtaGUtd2lsbC1ub3QtYmUtZG9pbmctdGhlLWRlYmF0ZXMtd2l0aC1nb3Atcml2YWxz0gEA?oc=5",
    "urlToImage": null,
    "publishedAt": "2023-08-21T01:07:30+00:00",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": "Reuters",
    "title": "Trump says he won't take part in Republican debates - Reuters",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VzL3RydW1wLXNheXMtaGUtd29udC10YWtlLXBhcnQtcmVwdWJsaWNhbi1kZWJhdGVzLTIwMjMtMDgtMjEv0gEA?oc=5",
    "urlToImage": null,
    "publishedAt": "2023-08-21T01:05:55+00:00",
    "content": null
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Reuters",
    "title": "Trump says he won't take part in Republican debates",
    "description": "Former U.S. President Donald Trump on Sunday said he would skip the upcoming Republican primary debates, citing his large lead in opinion polls as evidence that he was already well-known and liked by voters ahead of the 2024 election.",
    "url": "https://www.reuters.com/world/us/trump-says-he-wont-take-part-republican-debates-2023-08-21/",
    "urlToImage": "https://www.reuters.com/resizer/B4O5TPyaq7hJl67lZ2_tCtcz42g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WNMRCP23KFPRLDXS7DAZAKFEFA.jpg",
    "publishedAt": "2023-08-21T00:37:01Z",
    "content": "WASHINGTON, Aug 20 (Reuters) - Former U.S. President Donald Trump on Sunday said he would skip the upcoming Republican primary debates, citing his large lead in opinion polls as evidence that he was … [+2370 chars]"
    },
    {
    "source": {
    "id": "nbc-news",
    "name": "NBC News"
    },
    "author": "Katherine Doyle",
    "title": "Trump confirms he'll skip first GOP debate — and maybe future ones, as well",
    "description": "Donald Trump confirmed Sunday that he will skip the first Republican presidential primary debate Wednesday — and indicated he may not attend future ones, either.",
    "url": "https://www.nbcnews.com/politics/trump-confirms-skip-first-gop-presidential-debate-maybe-future-ones-rcna100888",
    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230809-donald-trump-jm-1109-cf0ccf.jpg",
    "publishedAt": "2023-08-21T00:20:38Z",
    "content": "Donald Trump confirmed Sunday that he will skip the first Republican presidential primary debate Wednesday and indicated he may not attend future ones, either.\r\nThe former president wrote on his Trut… [+1248 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Donald Trump confirms he will skip Republican presidential debates",
    "description": "The US ex-president says he is far ahead of his rivals in the 2024 White House race and the public knows him.",
    "url": "http://www.bbc.co.uk/news/world-us-canada-66566598",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/159E1/production/_130854588_trump_getty.jpg",
    "publishedAt": "2023-08-20T23:52:14.4372535Z",
    "content": "Donald Trump has confirmed that he will not take part in Republican presidential debates with his rivals in the race for the White House.\r\nThe ex-president said one latest poll showed he had \"legenda… [+2099 chars]"
    },
    {
    "source": {
    "id": "google-news-fr",
    "name": "Google News (France)"
    },
    "author": "FRANCE 24",
    "title": "Donald Trump confirme son refus de participer aux débats de la primaire républicaine - FRANCE 24",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMilgFodHRwczovL3d3dy5mcmFuY2UyNC5jb20vZnIvYW0lQzMlQTlyaXF1ZXMvMjAyMzA4MjAtJUMzJUE5dGF0cy11bmlzLWRvbmFsZC10cnVtcC1yZWZ1c2UtZGUtcGFydGljaXBlci1hdXgtZCVDMyVBOWJhdHMtZGUtbGEtcHJpbWFpcmUtciVDMyVBOXB1YmxpY2FpbmXSAZYBaHR0cHM6Ly9hbXAuZnJhbmNlMjQuY29tL2ZyL2FtJUMzJUE5cmlxdWVzLzIwMjMwODIwLSVDMyVBOXRhdHMtdW5pcy1kb25hbGQtdHJ1bXAtcmVmdXNlLWRlLXBhcnRpY2lwZXItYXV4LWQlQzMlQTliYXRzLWRlLWxhLXByaW1haXJlLXIlQzMlQTlwdWJsaWNhaW5l?oc=5",
    "urlToImage": null,
    "publishedAt": "2023-08-20T23:51:00+00:00",
    "content": null
    },
    {
    "source": {
    "id": "google-news-ca",
    "name": "Google News (Canada)"
    },
    "author": "The Globe and Mail",
    "title": "Trump confirms he will skip GOP presidential primary debates - The Globe and Mail",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LnRoZWdsb2JlYW5kbWFpbC5jb20vd29ybGQvdXMtcG9saXRpY3MvYXJ0aWNsZS10cnVtcC1jb25maXJtcy1oZS13aWxsLXNraXAtZ29wLXByZXNpZGVudGlhbC1wcmltYXJ5LWRlYmF0ZXMv0gEA?oc=5",
    "urlToImage": null,
    "publishedAt": "2023-08-20T23:50:32+00:00",
    "content": null
    },
    {
    "source": {
    "id": "google-news-uk",
    "name": "Google News (UK)"
    },
    "author": "BBC",
    "title": "Donald Trump confirms he will skip Republican presidential debates - BBC",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMiM2h0dHBzOi8vd3d3LmJiYy5jby51ay9uZXdzL3dvcmxkLXVzLWNhbmFkYS02NjU2NjU5ONIBN2h0dHBzOi8vd3d3LmJiYy5jby51ay9uZXdzL3dvcmxkLXVzLWNhbmFkYS02NjU2NjU5OC5hbXA?oc=5",
    "urlToImage": null,
    "publishedAt": "2023-08-20T23:38:23+00:00",
    "content": null
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": null,
    "title": "Pence the candidate vs. Pence the witness: Can he do both in 2024 election, Trump trials?",
    "description": "While Mike Pence has struggled to gain traction in the presidential race, he could have a bigger impact on Trump’s future than other GOP candidates.",
    "url": "https://www.usatoday.com/story/news/politics/elections/2023/08/20/pence-witness-trump-trials-campaign/70605799007/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2019/06/19/USAT/f3c75299-7b0a-41d5-95da-b3c9e2091294-Oath_1.JPG?auto=webp&crop=2999,1679,x0,y0&format=pjpg&width=1200",
    "publishedAt": "2023-08-20T21:32:26+00:00",
    "content": "WASHINGTON Mike Pence has said his highest goal for his 2024 presidential campaign is for Americans to understand why he chose loyalty to the Constitution over demands from his boss, Donald Trump, on… [+8470 chars]"
    },
    {
    "source": {
    "id": "breitbart-news",
    "name": "Breitbart News"
    },
    "author": "Kristina Wong",
    "title": "Poll: Trump Posts Biggest Lead Yet over DeSantis, Other 2024 Rivals",
    "description": "Former President Donald Trump posted his biggest lead yet over his rivals at 62 percent of likely Republican primary voters, according to a CBS News/YouGov poll published Sunday.",
    "url": "http://www.breitbart.com/2024-election/2023/08/20/poll-trump-posts-biggest-lead-yet-over-desantis-other-2024-rivals/",
    "urlToImage": "https://media.breitbart.com/media/2023/08/TRUMP-DESANTIS-640x335.jpg",
    "publishedAt": "2023-08-20T16:05:14Z",
    "content": "Former President Donald Trump posted his biggest lead yet over his rivals at 62 percent of likely Republican primary voters, according to a CBS News/YouGov poll published Sunday.\r\nHis top rival, Flor… [+2581 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "",
    "title": "Video: Trump campaign demands apology from DeSantis over 'listless vessels' comment | CNN Politics",
    "description": "Former President Donald Trump’s campaign criticized Trump’s 2024 Republican opponent Gov. Ron DeSantis for calling Trump-supporting members of Congress “listless vessels.”",
    "url": "https://www.cnn.com/videos/politics/2023/08/20/listless-vessels-ron-desantis-comment-trump-sot-cnntmw-vpx.cnn",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230701193027-desantis-trump-split-070123.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-08-20T12:24:07Z",
    "content": null
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Jennifer Rubin",
    "title": "Why Trump’s Georgia case likely can’t be removed to federal court",
    "description": "The former president and his allies need to face the consequences of their actions in Georgia.",
    "url": "https://www.washingtonpost.com/opinions/2023/08/20/georgia-trump-trial-move-federal-court/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4NJG6WILZZFZVHT3DTJ5Q2H3JE.JPG&w=1440",
    "publishedAt": "2023-08-20T11:45:00Z",
    "content": "Comment on this story\r\nComment\r\nFormer White House chief of staff Mark Meadows last week filed a petition to move Georgias racketeering case against him from state court in Fulton County to the feder… [+8139 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Paul Steinhauser",
    "title": "First GOP presidential debate is 'enormously important' as candidates seek ‘breakout moments’",
    "description": "In a Republican presidential nomination race dominated by former President Donald Trump, the Fox News-hosted first debate offers other candidates a breakout moment opportunity.",
    "url": "https://www.foxnews.com/politics/first-gop-presidential-debates-enormously-important-candidates-seek-breakout-moments",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/08/Donald-Trump-Iowa-State-Fair-pork-chops-August-12-2023.jpg",
    "publishedAt": "2023-08-20T10:00:21Z",
    "content": "In a Republican presidential primary race dominated by former President Donald Trump, you cant underestimate the importance of Wednesdays kickoff GOP nomination debate, a Fox News-hosted primetime sh… [+4987 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": null,
    "title": "Trump's indictments: Stormy Daniels, classified documents, Jan. 6 riot, Georgia election",
    "description": "Graphics give you a concise look at the four indictments (two of them federal) and a summary of the charges against Donald Trump.",
    "url": "https://www.usatoday.com/story/graphics/2023/08/01/all-three-trump-indictments-explained/70486445007/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2023/08/15/USAT/100d6c3e-433c-435f-89ba-f1670f21e928-usat-graphcis-trump-4_investigations-promo-art.jpg?auto=webp&crop=1095,616,x277,y576&format=pjpg&width=1200",
    "publishedAt": "2023-08-20T09:37:59+00:00",
    "content": "Former President Donald Trump, the leading Republican contender in the 2024 presidential election, now faces four criminal indictments and a number of civil lawsuits as he continues his campaign.\r\nTr… [+4848 chars]"
    }
    ]
    }

  const fetchLatestNews = async () => {
    setIsLoading(true);
    try {
      // const latestNews = await fetch(
      //   'https://newsapi.org/v2/top-headlines?country=us&apiKey=df5965de7b3e4ec3a93468fd791777fd',
      // );
      const latestNewsData = mockdata;
      setLatestNews(latestNewsData.articles);
      dispatch(storeLatestNews(latestNewsData.articles))
    } catch (error) {
      setIsError(true);
      Alert.alert('error')
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategoryNews = async () =>{
    try {
      // const categoryNews = await fetch(
      //   `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=df5965de7b3e4ec3a93468fd791777fd`,
      // );
      const categoryNewsData = await mockdata;
      setCategoryArticles(categoryNewsData.articles)
      dispatch(storeCategoryNews(categoryNewsData.articles))
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchLatestNews();
  }, []);

  useEffect(() => {
    fetchCategoryNews()
  }, [category])

  console.log({latestNews})


  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
 <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Pressable
            onPress={() => navigation.navigate('search')}
            style={styles.searchBox}>
            <Text style={{flex:1, color:'#818181'}}>Dogecoin to the moon...</Text>
          <ICONS.Search/>
          </Pressable>
          <View style={styles.notification}>
            <ICONS.Notification />
          </View>
          <View></View>
        </View>
        <View style={styles.latest}>
          <Text style={styles.latestNews}>Latest News</Text>
          <Pressable
            onPress={() => navigation.navigate('feed')}
            style={styles.seeAllContainer}>
            <Text style={styles.seeAll}>See All</Text>
            <ICONS.ForwardArrow />
          </Pressable>
        </View>

        {/* Hero */}
        <View>
          <FlatList
            data={latestNews}
            renderItem={({item}) => <HeroCard data={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.title}
          />
        </View>

        {/* filter buttons */}
        <View>
          <FlatList
            data={categories}
            renderItem={({item}) => (
              <Pressable
                onPress={() => setCategory(item)}
                style={[
                  styles.filterButtons,
                  {
                    backgroundColor: category === item ? COLORS.primary : 'white',
                    borderWidth: category === item ? 0 : 1,
                  },
                ]}>
                <Text
                  style={[
                    styles.filterButtonTexts,
                    {color: category === item ? 'white' : 'black'},
                  ]}>
                  {item}
                </Text>
              </Pressable>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginVertical: 20}}
            keyExtractor={(item) => item}
          />
        </View>

        {/* filtered news card */}
        <FlatList
          data={categoryArticles}
          renderItem={({item}) => <FilteredNewsCard data={item}/>}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.title}
        />

        <View style={styles.buttonTab}>
          <Pressable
            onPress={() => setTab('home')}
            style={styles.buttonTabIcon}>
            <ICONS.Home active={tab === 'home'} />
            <Text
              style={[
                styles.buttonTabIconText,
                {color: tab === 'home' ? 'black' : '#A6A6A6'},
              ]}>
              Home
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setTab('favorite')}
            style={styles.buttonTabIcon}>
            <ICONS.Favorite active={tab === 'favorite'} />
            <Text
              style={[
                styles.buttonTabIconText,
                {color: tab === 'favorite' ? 'black' : '#A6A6A6'},
              ]}>
              Favorite
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setTab('profile')}
            style={styles.buttonTabIcon}>
            <ICONS.Profile active={tab === 'profile'} />
            <Text
              style={[
                styles.buttonTabIconText,
                {color: tab === 'profile' ? 'black' : '#A6A6A6'},
              ]}>
              Profile
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    paddingHorizontal: '4%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    borderWidth: 1,
    borderColor: COLORS.grey,
    // paddingVertical: 8,
    paddingLeft: 16,
    borderRadius: 20,
    marginRight: 20,
    height:40
  },
  notification: {
    width: 30,
    height: 30,
  },

  latest: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  latestNews: {
    fontFamily: 'NewYorkMedium-Bold',
    fontSize: 18,
    color:'black'
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    color: COLORS.secondary,
    marginRight: 10,
  },
  filterButtons: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.grey,
    height: 32,
    marginRight: 8,
  },
  filterButtonTexts: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color:'black'
  },
  buttonTab: {
    flexDirection: 'row',
    width: '77%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 32,
    height: 66,
    paddingHorizontal: 40,
    paddingTop: 16,
    paddingBottom: 8,
    position: 'absolute',
    bottom: '5%',
    left: '15%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 100},
    shadowRadius: 20,
  },
  buttonTabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTabIconText: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    color:'black'
  },
  modalContainer: {
    backgroundColor: 'red',
    padding: 60,
    marginTop: 'auto',
    height: '38.8%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});

export default HomeScreen;
