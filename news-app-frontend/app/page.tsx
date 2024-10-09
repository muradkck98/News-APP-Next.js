"use client"; // This line marks the component as a Client Component
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Grid, Typography, CircularProgress } from "@mui/material";
import NavBar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import PublicationTimeChart from "./components/PublicationTimeChart";

// Article tipi
interface Article {
  title: string;
  description: string;
  content: string;
  url: string; // URL alanı
  urlToImage?: string; // Opsiyonel
}

const Page = () => {
  const [news, setNews] = useState<Article[]>([]); // State'in tipi burada belirtildi
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const query = category === "All" ? "" : `?category=${category}`;

    // API Gateway URL
    const newsApiUrl = `http://localhost:5000/api/news${query}`; // API Gateway URL

    fetch(newsApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9", paddingTop: "80px" }}>
      <Head>
        <title>News App</title>
        <meta name="description" content="A news app built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar category={category} setCategory={setCategory} />
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Latest News
        </Typography>
        <Grid container spacing={4}>
          {loading ? (
            <Grid item xs={12}>
              <CircularProgress />
            </Grid>
          ) : news && news.length > 0 ? (
            news.map((article) => (
              article.urlToImage && ( // Check if urlToImage exists
                <Grid item xs={12} sm={6} md={4} key={article.url}>
                  <Link href={article.url} target="_blank" passHref>
                    <NewsCard article={article} />
                  </Link>
                </Grid>
              )
            ))
          ) : (
            <Typography variant="h6" color="textSecondary">
              No news available for the selected category.
            </Typography>
          )}
        </Grid>
        <PublicationTimeChart news={news}/>
      </Container>
    </div>
  );
};

export default Page;
