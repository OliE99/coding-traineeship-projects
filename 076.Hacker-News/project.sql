-- What are the top five stories with the highest scores?
SELECT title, score
FROM hacker_news
ORDER BY score DESC
LIMIT 5;

-- Find the total score of all the stories.
SELECT SUM(score)
FROM hacker_news;

-- Find the individual users who have gotten combined scores of more than 200, and their combined scores.
SELECT SUM(score), user
FROM hacker_news
GROUP BY user
HAVING SUM(score) > 200;

--Add their scores together and divide it by the total sum
SELECT (309 + 304 + 282 + 517) / 6366.0;

--How many times has each offending user posted this link? -> https://www.youtube.com/watch?v=dQw4w9WgXcQ
SELECT user, url, COUNT(url)
FROM hacker_news
WHERE url LIKE "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
GROUP BY user
ORDER BY 3 DESC;

--Which of these sites feed Hacker News the most: GitHub, Medium, or New York Times?
SELECT CASE
   WHEN url LIKE '%github.com%' THEN 'GitHub'
   WHEN url LIKE '%medium.com%' THEN 'Medium'
   WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
   ELSE 'Other'
  END AS 'Source',
  Count(url)
FROM hacker_news
GROUP BY 1;

--What’s the best time of the day to post a story on Hacker News?
SELECT
   strftime('%H', timestamp) AS hour,
   ROUND(AVG(score)) AS avg_score,
   COUNT(*) num_stories
FROM hacker_news
WHERE timestamp IS NOT NULL
GROUP BY 1
ORDER BY 2 DESC;