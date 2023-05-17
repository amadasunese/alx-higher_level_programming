-- Import the database dump from hbtn_0d_tvshows to your MySQL server: download (same as 100-not_my_genres.sql)
-- Lists all shows without the genre Comedy in the database hbtn_0d_tvshows.
-- The tv_genres table contains only one record where name = Comedy (but the id can be different)
-- Each record should display: tv_shows.title
-- Results must be sorted in ascending order by the show title
-- You can use a maximum of two SELECT statement

SELECT id
FROM tv_genres
WHERE genre = 'Comedy'
LIMIT 1 INTO @comedy_genre_id;

SELECT tv_shows.title
FROM tv_shows
WHERE tv_shows.id NOT IN (
  SELECT tv_show_genres.show_id
  FROM tv_show_genres
  WHERE genre_id = @comedy_genre_id
)
ORDER BY tv_shows.title ASC;
