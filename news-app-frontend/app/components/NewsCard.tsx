"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

// Article tipi
interface Article {
  title: string;
  description: string;
  content: string;
  urlToImage?: string; // urlToImage opsiyonel, yani olmayabilir
}

// Props tipi
interface NewsCardProps {
  article: Article; // article, Article tipinde olmalı
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  console.log(article);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Image
        src={article.urlToImage || "/fallback-image.jpg"}
        alt={article.title}
        width={250}
        height={250}
        className="w-full h-64 object-cover"
        unoptimized={true}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {article.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
