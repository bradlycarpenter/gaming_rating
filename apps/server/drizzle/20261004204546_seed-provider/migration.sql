-- Custom SQL migration file, put your code below! --
INSERT INTO "external_game_provider" ('name', 'slug', 'base_url')
VALUES('IGDB', 'IGDB', 'https://api.igdb.com/v4');
